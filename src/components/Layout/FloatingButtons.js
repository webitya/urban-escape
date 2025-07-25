"use client"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919910979774?text=Hi! I would like to book a massage appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon className="text-2xl" />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919910979774"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Call us now"
      >
        <PhoneIcon className="text-2xl" />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  )
}
