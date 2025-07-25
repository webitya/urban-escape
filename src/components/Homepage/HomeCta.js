import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"

export default function HomeCta() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Experience Ultimate Relaxation?</h2>
          <p className="text-xl text-pink-100">
            Book your appointment today and let our expert therapists help you unwind and rejuvenate. Available 24/7 for
            your convenience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919910979774"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <PhoneIcon />
              <span>Call +91 99109 79774</span>
            </a>
            <Link
              href="/contact"
              className="bg-pink-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-900 transition-colors flex items-center justify-center space-x-2"
            >
              <CalendarTodayIcon />
              <span>Book Online</span>
            </Link>
          </div>

          <div className="text-pink-100 text-sm">
            <p>Open 24 Hours • Walk-ins Welcome • Professional Service Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
