"use client"

import { Phone } from "lucide-react"
import Link from "next/link"
import SpaIcon from "@mui/icons-material/Spa"

export default function HotStoneLanding() {
  return (
    <div className="bg-white text-gray-800 flex flex-col min-h-screen">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center py-4 px-4 md:px-8 shadow-sm bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-2">
          <SpaIcon className="text-pink-600 text-3xl" />
          <span className="text-xl font-bold text-gray-900">Urban Escape Wellness</span>
        </Link>

        <a
          href="tel:+919910979774"
          className="inline-flex items-center bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600"
        >
          <Phone className="w-5 h-5 mr-2" /> Call Now
        </a>
      </nav>

      <main className="flex-1">
        
        {/* HERO */}
        <section className="text-center py-20 px-6 bg-gradient-to-b from-pink-100 to-white">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Premium <span className="text-pink-500">Hot Stone Massage</span> in Ranchi
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Melt away stress, release deep muscle tension, and experience ultimate relaxation with our luxurious Hot Stone Massage.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919910979774?text=Hi!%20I%20want%20to%20book%20a%20Hot%20Stone%20Massage."
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Book on WhatsApp
            </a>
            <a
              href="tel:+919910979774"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600"
            >
              Call to Book
            </a>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose Hot Stone Massage?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Deep relaxation & stress relief",
              "Improves blood circulation",
              "Relieves chronic pain & stiffness",
              "Detoxifies body & balances energy",
              "Promotes better sleep & mood",
              "Premium spa-like experience",
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-pink-50 rounded-2xl shadow hover:shadow-md transition">
                <p className="text-gray-800 font-medium text-center">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OFFER / PACKAGE */}
        <section className="py-16 px-6 bg-pink-50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Exclusive Introductory Offer</h2>
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-md border border-pink-200">
            <h3 className="text-xl font-semibold text-gray-900">Hot Stone Massage Session</h3>
            <p className="text-pink-500 text-3xl font-bold mt-2">₹2,499 <span className="line-through text-gray-400 text-base">₹3,500</span></p>
            <p className="text-gray-600 text-sm mb-4">Duration: 60 Minutes</p>
            <ul className="text-sm text-gray-700 list-disc text-left ml-5 space-y-2">
              <li>Premium essential oils</li>
              <li>Complimentary welcome drink</li>
              <li>Relaxing spa ambiance</li>
              <li>Certified wellness experts</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919910979774?text=Hi!%20I%20want%20to%20book%20the%20Hot%20Stone%20Massage%20offer."
                target="_blank"
                className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
              >
                Book on WhatsApp
              </a>
              <a
                href="tel:+919910979774"
                className="flex-1 bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Ritu Sharma", text: "Best spa experience ever! The Hot Stone Massage was heavenly, I felt totally recharged." },
              { name: "Ankit Verma", text: "Amazing staff, professional service, and such a relaxing ambiance. Highly recommended!" },
            ].map((t, i) => (
              <div key={i} className="p-6 border rounded-xl shadow-sm bg-gray-50">
                <p className="text-gray-700 italic">“{t.text}”</p>
                <p className="mt-3 text-sm font-semibold text-pink-600">— {t.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 px-6 text-center bg-gradient-to-b from-pink-100 to-white">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ready to Experience Pure Relaxation?
          </h2>
          <p className="text-gray-600 mt-2">Limited slots available — book your Hot Stone Massage today.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919910979774?text=Hi!%20I%20want%20to%20book%20a%20Hot%20Stone%20Massage."
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Book on WhatsApp
            </a>
            <a
              href="tel:+919910979774"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600"
            >
              Call Now
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-gray-600 text-center py-6 mt-auto">
        &copy; {new Date().getFullYear()} Urban Escape Wellness. All rights reserved.
      </footer>
    </div>
  )
}
