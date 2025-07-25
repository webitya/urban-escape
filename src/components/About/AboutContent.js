import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function AboutContent() {
  const values = [
    "Professional Excellence",
    "Client Satisfaction",
    "Hygiene & Safety",
    "Continuous Innovation",
    "Affordable Pricing",
    "Personalized Care",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Urban Escape Wellness was founded with a simple mission: to provide exceptional massage and wellness
              services that help people escape the stress of urban life. Located in the heart of New Delhi, we have been
              serving our community with dedication and professionalism.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of certified therapists brings years of experience and expertise to ensure every client receives
              personalized care. We believe in creating a sanctuary where you can truly relax and rejuvenate.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="text-pink-600 text-xl" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Our spa interior"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
