import PhoneIcon from "@mui/icons-material/Phone"

export default function ServicesPricing() {
  const packages = [
    {
      name: "Basic Package",
      price: "₹2,000",
      duration: "60 minutes",
      services: ["Swedish Massage", "Basic Aromatherapy", "Relaxation Music", "Herbal Tea"],
    },
    {
      name: "Premium Package",
      price: "₹3,500",
      duration: "90 minutes",
      services: ["Deep Tissue Massage", "Hot Stone Therapy", "Aromatherapy", "Face Massage", "Refreshments"],
      popular: true,
    },
    {
      name: "Luxury Package",
      price: "₹5,000",
      duration: "120 minutes",
      services: [
        "Full Body Massage",
        "Hot Stone Therapy",
        "Aromatherapy",
        "Face & Scalp Massage",
        "Reflexology",
        "Premium Refreshments",
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
          <p className="text-lg text-gray-600">
            Choose from our carefully curated packages designed to provide the best value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg relative ${pkg.popular ? "ring-2 ring-green-600" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-green-600 mb-1">{pkg.price}</div>
                <div className="text-gray-600">{pkg.duration}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.services.map((service, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+919910979774"
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                  pkg.popular
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center bg-green-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Need a Custom Package?</h3>
          <p className="mb-6">Contact us to create a personalized wellness package that meets your specific needs.</p>
          <a
            href="tel:+919910979774"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <PhoneIcon />
            <span>Call +91 99109 79774</span>
          </a>
        </div>
      </div>
    </section>
  )
}
