"use client"

import { Flower2, Phone } from "lucide-react"
import Link from "next/link"
import SpaIcon from "@mui/icons-material/Spa"

const services = [
  {
    title: "Balinese Massage",
    image: "/images/balinese.jpg",
    desc: "Traditional Indonesian massage combining stretches, acupressure & aromatherapy oils.",
    duration: "60-90 minutes",
    benefits: ["Deep relaxation", "Improved circulation", "Stress relief", "Spiritual balance"],
  },
  {
    title: "Bamboo Massage",
    image: "/images/bamboo.jpg",
    desc: "Massage using heated bamboo canes to knead and release muscle tension.",
    duration: "60-90 minutes",
    benefits: ["Muscle tension relief", "Flexibility", "Circulation", "Lymphatic drainage"],
  },
  {
    title: "Potli Massage",
    image: "/images/potli.jpg",
    desc: "Ayurvedic massage with heated herbal pouches filled with medicinal herbs.",
    duration: "60-90 minutes",
    benefits: ["Pain relief", "Detoxification", "Skin texture", "Muscle strength"],
  },
  {
    title: "Foot Reflexology",
    image: "/images/reflexology.jpg",
    desc: "Pressure points massage on feet, hands & ears for total wellness.",
    duration: "60-90 minutes",
    benefits: ["Circulation", "Stress reduction", "Better sleep", "Overall wellness"],
  },
  {
    title: "Swedish Massage",
    image: "/images/swedish.jpg",
    desc: "Gentle relaxing massage with long strokes & kneading.",
    duration: "60-90 minutes",
    benefits: ["Stress relief", "Circulation", "Muscle relaxation", "Better sleep"],
  },
  {
    title: "Deep Tissue Massage",
    image: "/images/deep.jpg",
    desc: "Targets deeper layers of muscle for chronic pain & tension relief.",
    duration: "60-90 minutes",
    benefits: ["Pain relief", "Mobility", "Reduced inflammation", "Faster healing"],
  },
]

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

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800 flex flex-col min-h-screen">
      
      {/* ========== NAVBAR ========== */}
     <nav className="flex justify-between items-center py-4 px-6 shadow-sm bg-white sticky top-0 z-50">
      {/* Brand Logo (Icon + Text) */}
       <Link href="/" className="flex items-center space-x-2">
              <SpaIcon className="text-pink-600 text-3xl" />
              <span className="text-xl font-bold text-gray-800">Urban Escape Wellness</span>
            </Link>

      {/* Call Button */}
      <a
        href="tel:+919910979774"
        className="inline-flex items-center bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600"
      >
        <Phone className="w-5 h-5 mr-2" /> Call Us
      </a>
    </nav>

      <main className="flex-1">
        {/* ========== HERO SECTION ========== */}
        <section className="text-center py-16 px-4 bg-gradient-to-b from-pink-100 to-white">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to <span className="text-pink-500">Yombly Spa</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience luxury massages and wellness therapies designed to rejuvenate your mind, body & soul.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://wa.me/919910979774?text=Hi!%20I%20want%20to%20book%20a%20service."
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Book on WhatsApp
            </a>
            <a
              href="/contact-us"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Our Massage Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-pink-300 shadow-sm hover:shadow-md transition bg-white"
              >
                <img src={s.image} alt={s.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                <h3 className="text-base font-semibold mb-1 text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{s.desc}</p>
                <p className="text-xs font-semibold text-pink-500 mb-2">Duration: {s.duration}</p>
                <ul className="text-xs text-gray-700 list-disc ml-4 space-y-1">
                  {s.benefits.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`https://wa.me/919910979774?text=Hi!%20I%20want%20to%20book%20${encodeURIComponent(s.title)}.`}
                    target="_blank"
                    className="flex-1 bg-green-500 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-green-600 text-center"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="/contact-us"
                    className="flex-1 bg-pink-500 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-pink-600 text-center"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== PACKAGES SECTION ========== */}
        <section className="py-12 px-4 bg-pink-50">
          <h2 className="text-2xl font-bold text-center mb-8">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {packages.map((p, i) => (
              <div
                key={i}
                className={`p-5 rounded-xl border shadow-sm relative ${
                  p.popular ? "border-pink-500" : "border-pink-300"
                }`}
              >
                {p.popular && (
                  <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                    Most Popular
                  </span>
                )}
                <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
                <p className="text-xl font-bold text-pink-500">{p.price}</p>
                <p className="text-xs text-gray-600 mb-2">{p.duration}</p>
                <ul className="text-xs text-gray-700 list-disc ml-4 space-y-1">
                  {p.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`https://wa.me/919910979774?text=Hi!%20I%20want%20to%20book%20${encodeURIComponent(p.title)}.`}
                    target="_blank"
                    className="flex-1 bg-green-500 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-green-600 text-center"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="/contact-us"
                    className="flex-1 bg-pink-500 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-pink-600 text-center"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== CONTACT SECTION ========== */}
        <section className="text-center py-12 px-4">
          <h2 className="text-lg font-bold text-gray-900">Need a Custom Package?</h2>
          <p className="text-gray-600">Contact us to create a personalized wellness package.</p>
          <a
            href="tel:+919910979774"
            className="mt-4 inline-flex items-center bg-pink-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-pink-600"
          >
            <Phone className="w-5 h-5 mr-2" /> Call +91 99109 79774
          </a>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-100 text-gray-600 text-center py-6 mt-auto">
        &copy; {new Date().getFullYear()} Urban Escape Wellness
. All rights reserved.
      </footer>
    </div>
  )
}
