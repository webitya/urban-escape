"use client"
import { useState } from "react"
import SendIcon from "@mui/icons-material/Send"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will contact you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="swedish-massage">Swedish Massage</option>
            <option value="deep-tissue">Deep Tissue Massage</option>
            <option value="aromatherapy">Aromatherapy</option>
            <option value="sports-massage">Sports Massage</option>
            <option value="hot-stone">Hot Stone Therapy</option>
            <option value="reflexology">Reflexology</option>
            <option value="thai-massage">Thai Massage</option>
            <option value="prenatal">Prenatal Massage</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            placeholder="Tell us about your requirements or any questions you have"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2"
        >
          <SendIcon />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  )
}
