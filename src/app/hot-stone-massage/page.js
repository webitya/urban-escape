"use client"

import Link from "next/link"
import SpaIcon from "@mui/icons-material/Spa"
import { Phone } from "lucide-react"

const hotStoneService = {
  title: "Hot Stone Massage",
  heroImage: "/back-hot-stone-massage1.jpg",
  serviceImage: "/collage.jpg",
  desc: "Heated basalt stones placed on energy points to melt away tension and stress.",
  duration: "60-90 minutes",
  benefits: [
    "Deep relaxation",
    "Improved circulation",
    "Stress relief",
    "Better sleep",
    "Muscle tension release",
    "Enhanced mental clarity",
  ],
  faqs: [
    {
      question: "What is Hot Stone Massage?",
      answer:
        "Hot Stone Massage involves placing heated stones on key points of the body to relax muscles, improve circulation, and release stress.",
    },
    {
      question: "How long does a session last?",
      answer: "Sessions typically last between 60 to 90 minutes depending on your preference.",
    },
    {
      question: "Is it safe for everyone?",
      answer:
        "Hot Stone Massage is safe for most people. However, if you have certain medical conditions or are pregnant, consult your therapist before booking.",
    },
    {
      question: "Do I need to prepare for the massage?",
      answer: "Just wear comfortable clothing and arrive a few minutes early to relax before the session.",
    },
  ],
  testimonials: [
    {
      name: "Anjali Sharma",
      text: "Absolutely amazing! The Hot Stone Massage melted away all my stress and tension.",
    },
    {
      name: "Rohit Verma",
      text: "Highly recommend! The ambiance and therapy were top-notch.",
    },
    {
      name: "Priya Singh",
      text: "I felt completely rejuvenated after the session. Will definitely return!",
    },
  ],
}

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800 flex flex-col min-h-screen relative">
      {/* Floating Contact Button */}
      

      {/* NAVBAR */}
      <nav className="flex justify-between items-center py-3 px-2 md:px-8 shadow-sm bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-2">
          <SpaIcon className="text-pink-600 text-2xl" />
          <span className="text-lg font-bold text-gray-800">Urban Escape Wellness</span>
        </Link>
        <a
          href="tel:+919910979774"
          className="inline-flex items-center bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 text-sm"
        >
          <Phone className="w-4 h-4 mr-2" /> Call Us
        </a>
      </nav>

      <main className="flex-1">
        {/* HERO SECTION */}
    {/* HERO SECTION */}
<section className="relative h-[220px] md:h-[80vh] flex items-center justify-center text-center text-white px-6">
  <img
    src={hotStoneService.heroImage}
    alt={hotStoneService.title}
    className="absolute inset-0 w-full h-full object-cover object-center z-0 brightness-75"
  />
  <div className="absolute inset-0 bg-black/30 z-10"></div>
  <div className="relative z-20 max-w-2xl mx-auto">
    <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-2 md:mb-4 drop-shadow-lg">
      Relax with <span className="text-pink-400">Hot Stone Massage</span>
    </h1>
    <p className="text-sm md:text-base text-gray-100 mb-4 md:mb-6 drop-shadow-md">
      Melt away stress and experience total relaxation with our luxury Hot Stone Therapy.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
      <a
        href="https://wa.me/919910979774?text=Hi!%20I%20want%20to%20book%20a%20Hot%20Stone%20Massage."
        target="_blank"
        className="bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-green-600 transition text-xs md:text-sm shadow-lg"
      >
        Book on WhatsApp
      </a>
      <a
        href="tel:+919910979774"
        className="bg-pink-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-pink-600 transition text-xs md:text-sm shadow-lg"
      >
        Call Now
      </a>
    </div>
  </div>
</section>


        {/* SERVICE DETAILS */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={hotStoneService.serviceImage}
              alt={hotStoneService.title}
              className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{hotStoneService.title}</h2>
              <p className="text-gray-700 mb-4">{hotStoneService.desc}</p>
              <p className="text-pink-500 font-semibold mb-4">Duration: {hotStoneService.duration}</p>
              <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {hotStoneService.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="tel:+919910979774"
                  className="inline-flex items-center bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition text-sm md:text-base shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" /> Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 px-4 md:px-8 bg-pink-50">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {hotStoneService.testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-700 mb-4">{t.text}</p>
                <h3 className="text-pink-500 font-semibold">{t.name}</h3>
                <div className="mt-4">
                  <a
                    href="tel:+919910979774"
                    className="inline-flex items-center bg-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-600 text-sm shadow"
                  >
                    <Phone className="w-4 h-4 mr-2" /> Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQS */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {hotStoneService.faqs.map((f, i) => (
              <div key={i} className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">{f.question}</h3>
                <p className="text-gray-700">{f.answer}</p>
                <div className="mt-2">
                  <a
                    href="tel:+919910979774"
                    className="inline-flex items-center bg-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-600 text-sm shadow"
                  >
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CONTACT CTA */}
        <section className="text-center py-16 px-4 bg-pink-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Book Your Session?</h2>
          <p className="text-gray-700 mb-6">
            Contact us today to experience the ultimate relaxation with our Hot Stone Massage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919910979774?text=Hi!%20I%20want%20to%20book%20a%20Hot%20Stone%20Massage."
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition text-sm md:text-base shadow-lg"
            >
              Book on WhatsApp
            </a>
            <a
              href="tel:+919910979774"
              className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition text-sm md:text-base shadow-lg"
            >
              Call Now
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-gray-600 text-center py-6 text-sm">
        © {new Date().getFullYear()} Urban Escape Wellness. All rights reserved.
      </footer>
    </div>
  )
}
