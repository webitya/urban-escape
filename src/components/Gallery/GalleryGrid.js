"use client"
import { useState } from "react"
import CloseIcon from "@mui/icons-material/Close"

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Spa Reception Area",
      category: "Interior",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Massage Therapy Room",
      category: "Treatment Rooms",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Relaxation Lounge",
      category: "Interior",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional Therapist",
      category: "Services",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Hot Stone Therapy",
      category: "Services",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Aromatherapy Setup",
      category: "Services",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Couples Massage Room",
      category: "Treatment Rooms",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Changing Room",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Meditation Room",
      category: "Facilities",
    },
  ]

  const categories = ["All", "Interior", "Treatment Rooms", "Services", "Facilities"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-pink-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <CloseIcon className="text-3xl" />
              </button>
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold">{selectedImage.alt}</h3>
                <p className="text-sm">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
