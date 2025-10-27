// /src/components/Contact/ContactForm.js
"use client"

import { useState } from "react"
import SendIcon from "@mui/icons-material/Send"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // local validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Please fill all required fields.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (!res.ok) {
        // server gave an error message
        console.error("Server error:", data)
        alert(data?.error || "Something went wrong. Please try again.")
      } else {
        setShowModal(true)
        setForm({ name: "", email: "", phone: "", service: "", message: "" })
      }
    } catch (err) {
      console.error("Network error:", err)
      alert("Failed to send message. Check console for details.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="max-w-lg mx-auto bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-5 sm:p-6 shadow-md">
        <h3 className="text-center text-2xl font-semibold text-gray-900 mb-1">Get in Touch</h3>
        <p className="text-center text-sm text-gray-600 mb-4">We’ll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name *"
              className="w-full px-3 py-2 rounded-xl bg-white/30 backdrop-blur-sm border border-white/25 placeholder-gray-500 text-sm"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email *"
              className="w-full px-3 py-2 rounded-xl bg-white/30 backdrop-blur-sm border border-white/25 placeholder-gray-500 text-sm"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone *"
              className="w-full px-3 py-2 rounded-xl bg-white/30 backdrop-blur-sm border border-white/25 placeholder-gray-500 text-sm"
              required
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-white/30 backdrop-blur-sm border border-white/25 text-sm"
            >
              <option value="">Service of interest</option>
              <option value="swedish-massage">Swedish Massage</option>
              <option value="deep-tissue">Deep Tissue</option>
              <option value="aroma">Aromatherapy</option>
              <option value="hot-stone">Hot Stone</option>
              <option value="reflexology">Reflexology</option>
            </select>
          </div>

          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Your message *"
            className="w-full px-3 py-2 rounded-xl bg-white/30 backdrop-blur-sm border border-white/25 placeholder-gray-500 text-sm"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-white font-semibold text-sm shadow-md transition
              ${loading ? "bg-pink-400" : "bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600"}`}
          >
            <SendIcon fontSize="small" />
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </div>

      {/* Thank you modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[92%] max-w-md p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl text-center"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              <h4 className="text-2xl font-semibold text-pink-600 mb-2">Thank you! 💖</h4>
              <p className="text-sm text-gray-200 mb-4">
                We’ve received your message and will reach out shortly. A confirmation email was sent.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-1 inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-5 py-2 rounded-lg font-medium"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
