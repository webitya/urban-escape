import Link from "next/link"
import SpaIcon from "@mui/icons-material/Spa"
import PhoneIcon from "@mui/icons-material/Phone"

export default function HomeHero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium <span className="text-pink-600">Massage</span> & Wellness Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience ultimate relaxation and rejuvenation with our professional massage therapists in the heart of
                New Delhi.
              </p>
              {/* Added professional availability statement */}
              <p className="text-lg text-gray-700 font-medium flex items-center space-x-2">
                <SpaIcon className="text-pink-600 text-2xl" />
                <span>Conveniently available for Home, Resort, and 5-Star Hotel visits.</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/wellness"
                className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors text-center"
              >
                View Services
              </Link>
              <a
                href="tel:+919910979774"
                className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors text-center flex items-center justify-center space-x-2"
              >
                <PhoneIcon />
                <span>Call Now</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★★★★★</span>
                <span>5.0 (14 reviews)</span>
              </div>
              <span>•</span>
              <span>Open 24 Hours</span>
            </div>
          </div>
          {/* Video */}
          <div className="relative">
            <div className="bg-pink-100 rounded-2xl p-8 relative overflow-hidden">
              <video
                src="/vid.mp4"
                loop
                autoPlay
                muted
                playsInline // Added for better mobile compatibility
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                <SpaIcon className="text-pink-600 text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
