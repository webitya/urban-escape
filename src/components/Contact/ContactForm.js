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
      <motion.div
        className="max-w-md mx-auto bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-lg border border-white/40 rounded-3xl p-6 sm:p-8 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-center text-2xl font-semibold text-gray-800 mb-1">
          Get in Touch
        </h3>
        <p className="text-center text-sm text-gray-500 mb-6">
          We’d love to hear from you — we’ll respond soon 🌿
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name *"
            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-500 text-sm transition"
            required
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email *"
            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-500 text-sm transition"
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone *"
            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-500 text-sm transition"
            required
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none text-sm text-gray-700 transition"
          >
            <option value="">Service of Interest</option>
            <option value="swedish-massage">Swedish Massage</option>
            <option value="deep-tissue">Deep Tissue</option>
            <option value="aroma">Aromatherapy</option>
            <option value="hot-stone">Hot Stone Therapy</option>
            <option value="reflexology">Reflexology</option>
          </select>

          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message *"
            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-500 text-sm transition"
            required
          />

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-medium text-sm tracking-wide shadow-md transition
              ${
                loading
                  ? "bg-pink-400"
                  : "bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600"
              }`}
          >
            <SendIcon fontSize="small" />
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </motion.button>
        </form>
      </motion.div>

      {/* ✅ Thank You Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[92%] max-w-md p-7 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h4 className="text-2xl font-semibold text-pink-600 mb-2">
                Thank you! 💖
              </h4>
              <p className="text-sm text-white/90 mb-5">
                We’ve received your message and will reach out to you soon.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 py-2.5 rounded-xl font-medium hover:from-pink-700 hover:to-pink-600 transition"
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
