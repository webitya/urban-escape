"use client"

import { Phone, Leaf, Heart, Flower2, Dumbbell, Footprints, Sparkles } from "lucide-react"

// ====================== Services Data ======================
const services = [
  {
    title: "Balinese Massage",
    icon: <Leaf className="w-10 h-10 text-pink-500" />,
    desc: "Traditional Indonesian massage combining stretches, acupressure & aromatherapy oils.",
    duration: "60-90 minutes",
    benefits: ["Deep relaxation", "Improved circulation", "Stress relief", "Spiritual balance"],
    message: "Hi! I’d like to book a Balinese Massage. Can you share available slots?",
  },
  {
    title: "Bamboo Massage",
    icon: <Heart className="w-10 h-10 text-pink-500" />,
    desc: "Massage using heated bamboo canes to knead and release muscle tension.",
    duration: "60-90 minutes",
    benefits: ["Muscle tension relief", "Flexibility", "Circulation", "Lymphatic drainage"],
    message: "Hi! I’d like to book a Bamboo Massage. Can you assist me?",
  },
  {
    title: "Potli Massage",
    icon: <Flower2 className="w-10 h-10 text-pink-500" />,
    desc: "Ayurvedic massage with heated herbal pouches filled with medicinal herbs.",
    duration: "60-90 minutes",
    benefits: ["Pain relief", "Detoxification", "Skin texture", "Muscle strength"],
    message: "Hi! I’m interested in a Potli Massage. Please confirm availability.",
  },
  {
    title: "Foot Reflexology",
    icon: <Footprints className="w-10 h-10 text-pink-500" />,
    desc: "Pressure points massage on feet, hands & ears for total wellness.",
    duration: "60-90 minutes",
    benefits: ["Circulation", "Stress reduction", "Better sleep", "Overall wellness"],
    message: "Hi! I’d like to book a Foot Reflexology session.",
  },
  {
    title: "Swedish Massage",
    icon: <Sparkles className="w-10 h-10 text-pink-500" />,
    desc: "Gentle relaxing massage with long strokes & kneading.",
    duration: "60-90 minutes",
    benefits: ["Stress relief", "Circulation", "Muscle relaxation", "Better sleep"],
    message: "Hi! I want to book a Swedish Massage. Can you help me?",
  },
  {
    title: "Deep Tissue Massage",
    icon: <Dumbbell className="w-10 h-10 text-pink-500" />,
    desc: "Targets deeper layers of muscle for chronic pain & tension relief.",
    duration: "60-90 minutes",
    benefits: ["Pain relief", "Mobility", "Reduced inflammation", "Faster healing"],
    message: "Hi! I’d like to book a Deep Tissue Massage for pain relief.",
  },
]

// ====================== Packages Data ======================
const packages = [
  {
    title: "Basic Package",
    price: "₹30,000",
    duration: "60 Minutes",
    details: ["15 massages", "Swedish Massage", "Basic Aromatherapy", "Relaxation Music", "Refreshments", "Gift T-shirt"],
  },
  {
    title: "Premium Package",
    price: "₹40,000",
    duration: "60 Minutes",
    details: ["20 therapies", "Deep Tissue Massage", "Hot Stone", "Aromatherapy", "Face Massage", "Gift Perfumes"],
    popular: true,
  },
  {
    title: "Luxury Package",
    price: "₹50,000",
    duration: "90 Minutes",
    details: ["25 therapies", "Full Body Massage", "Hot Stone", "Face & Scalp Massage", "Reflexology", "Gift upto ₹8000"],
  },
]

const phoneNumber = "919910979774" // WhatsApp number

// ====================== Landing Page Component ======================
export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-b from-pink-100 to-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Rejuvenate Your Body & Soul
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Premium massage & wellness therapies designed to relax your body, refresh your mind, 
            and restore your inner balance.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hi! I’d like to book a massage session. Please assist me."
              )}`}
              target="_blank"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 shadow"
            >
              <Phone className="inline w-5 h-5 mr-2" />
              Book on WhatsApp
            </a>
            {/* Explore CTA */}
            <a
              href="#services"
              className="bg-white text-pink-500 px-6 py-3 rounded-lg font-semibold border border-pink-500 hover:bg-pink-50"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Our Massage Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl border shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-3">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{s.desc}</p>
              <p className="text-sm font-semibold text-pink-500 mb-2">Duration: {s.duration}</p>
              <ul className="text-sm text-gray-700 list-disc ml-4">
                {s.benefits.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(s.message)}`}
                  target="_blank"
                  className="flex-1 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 text-center"
                >
                  WhatsApp
                </a>
                {/* Contact Us Button */}
                <a
                  href="/contact-us"
                  className="flex-1 bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PACKAGES SECTION ===== */}
      <section className="py-12 px-4 bg-pink-50">
        <h2 className="text-2xl font-bold text-center mb-8">Service Packages</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((p, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border shadow relative ${
                p.popular ? "border-pink-500" : "border-gray-200"
              }`}
            >
              {p.popular && (
                <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="text-2xl font-bold text-pink-500">{p.price}</p>
              <p className="text-sm text-gray-600 mb-3">{p.duration}</p>
              <ul className="text-sm text-gray-700 list-disc ml-4">
                {p.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3">
                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    `Hi! I’d like to book the ${p.title}.`
                  )}`}
                  target="_blank"
                  className="flex-1 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 text-center"
                >
                  WhatsApp
                </a>
                {/* Contact Us CTA */}
                <a
                  href="/contact-us"
                  className="flex-1 bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="text-center py-12 px-4">
        <h2 className="text-lg font-bold text-gray-900">Need a Custom Package?</h2>
        <p className="text-gray-600">Contact us to create a personalized wellness package.</p>
        <a
          href={`tel:+${phoneNumber}`}
          className="mt-4 inline-flex items-center bg-pink-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-pink-600"
        >
          <Phone className="w-5 h-5 mr-2" /> Call +91 99109 79774
        </a>
      </section>
    </div>
  )
}
