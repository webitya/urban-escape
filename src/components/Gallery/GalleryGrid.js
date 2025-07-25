"use client"
import { useState } from "react"
import CloseIcon from "@mui/icons-material/Close"

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      src: "/placeholder.svg?height=400&width=500&text=Spa Reception Area",
      alt: "Spa Reception Area",
      category: "Interior",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Massage Therapy Room",
      alt: "Massage Therapy Room",
      category: "Treatment Rooms",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Relaxation Lounge",
      alt: "Relaxation Lounge",
      category: "Interior",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Professional Therapist",
      alt: "Professional Therapist",
      category: "Services",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Hot Stone Therapy",
      alt: "Hot Stone Therapy",
      category: "Services",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Aromatherapy Setup",
      alt: "Aromatherapy Setup",
      category: "Services",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Couples Massage Room",
      alt: "Couples Massage Room",
      category: "Treatment Rooms",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Changing Room",
      alt: "Changing Room",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Meditation Room",
      alt: "Meditation Room",
      category: "Facilities",
    },
  ]

  const categories = ["All", "Interior", "Treatment Rooms", "Services", "Facilities"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory)

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-pink-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Compact Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg shadow-sm"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-32 sm:h-36 object-cover" />
            </div>
          ))}
        </div>

        {/* Small Glassmorphism Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300"
            style={{
              backdropFilter: "blur(20px)",
              background: "rgba(255, 255, 255, 0.2)",
            }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Small Modal Content */}
            <div
              className="relative max-w-sm w-full bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-2xl p-4 transform transition-all duration-300 scale-100"
              style={{
                backdropFilter: "blur(15px)",
                background: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-pink-600 w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              >
                <CloseIcon className="text-base" />
              </button>

              {/* Small Image */}
              <div className="mb-3">
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Compact Image Info */}
              <div className="text-center space-y-2">
                <h3 className="text-base font-bold text-gray-800">{selectedImage.alt}</h3>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-300/30">
                  <span className="text-sm font-medium text-pink-700">{selectedImage.category}</span>
                </div>
              </div>

              {/* Small Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-pulse"></div>
                <div className="absolute top-5 right-5 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
