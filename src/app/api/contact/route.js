// /src/app/api/contact/route.js
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message } = body || {}

    // Basic validation
    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
    }

    // Create transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Optional: verify transporter (useful for debugging)
    try {
      await transporter.verify()
      console.log("Nodemailer transporter verified")
    } catch (verifyErr) {
      console.error("Transporter verify failed:", verifyErr)
      // continue — sendMail will show error if there is one
    }

    // Admin/lead email
    const adminMail = {
      from: `"SR Holistic Wellness" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Contact from ${name} — ${service || "no service selected"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p>Received: ${new Date().toLocaleString()}</p>
      `,
    }

    // Confirmation email to user
    const userMail = {
      from: `"SR Holistic Wellness" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting SR Holistic Wellness",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.5;">
          <h3>Thank you, ${name}!</h3>
          <p>We received your message and will reach out to you soon.</p>
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <br/>
          <p>Warm regards,<br/>SR Holistic Wellness</p>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ])

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    // Good to log the error for local debugging
    console.error("API /api/contact error:", err)
    // In development we return the error message to help debugging
    const message = process.env.NODE_ENV === "development" ? String(err.message || err) : "Internal server error"
    return new Response(JSON.stringify({ error: message }), { status: 500 })
  }
}
