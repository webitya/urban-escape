import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural"
import CleaningServicesIcon from "@mui/icons-material/CleaningServices"
import SpaIcon from "@mui/icons-material/Spa"
import ContentCutIcon from "@mui/icons-material/ContentCut"
import LocalFloristIcon from "@mui/icons-material/LocalFlorist"
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh"
import Link from "next/link"
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"

export default function BeautyCareServices() {
  const services = [
    {
      icon: <FaceRetouchingNaturalIcon className="text-4xl" />,
      title: "Facial Treatment",
      description:
        "Rejuvenating facial treatments including deep cleansing, exfoliation, extraction, and moisturizing for glowing, healthy skin.",
      duration: "60-90 minutes",
      startingPrice: "₹3,000",
      benefits: ["Deep cleansing", "Anti-aging", "Hydration", "Glowing skin"],
      includes: ["Cleansing", "Steaming", "Extraction", "Face mask", "Moisturizing"],
    },
    {
      icon: <CleaningServicesIcon className="text-4xl" />,
      title: "Full Body Scrub",
      description:
        "Luxurious full body exfoliation treatment that removes dead skin cells and leaves your skin smooth, soft, and radiant.",
      duration: "75-90 minutes",
      startingPrice: "₹4,000",
      benefits: ["Smooth skin", "Improved circulation", "Detoxification", "Skin renewal"],
      includes: ["Body exfoliation", "Steam", "Moisturizing", "Relaxation time"],
    },
    {
      icon: <SpaIcon className="text-4xl" />,
      title: "Body Detox",
      description:
        "Comprehensive detoxification treatment using natural ingredients to cleanse and purify your body from within.",
      duration: "60-90 minutes",
      startingPrice: "₹3,000",
      benefits: ["Toxin removal", "Improved metabolism", "Better skin", "Energy boost"],
      includes: ["Body wrap", "Herbal treatment", "Lymphatic drainage", "Hydration therapy"],
    },
    {
      icon: <ContentCutIcon className="text-4xl" />,
      title: "Manicure",
      description:
        "Professional nail care treatment including shaping, cuticle care, polish application, and hand massage for beautiful nails.",
      duration: "60 Minutes",
      startingPrice: "₹2,000",
      benefits: ["Healthy nails", "Soft hands", "Professional finish", "Long-lasting"],
      includes: ["Nail shaping", "Cuticle care", "Hand massage", "Polish application"],
    },
    {
      icon: <LocalFloristIcon className="text-4xl" />,
      title: "Pedicure",
      description:
        "Complete foot care treatment with nail grooming, callus removal, foot massage, and polish for healthy, beautiful feet.",
      duration: "60 minutes",
      startingPrice: "₹2,000",
      benefits: ["Healthy feet", "Smooth skin", "Relaxation", "Beautiful nails"],
      includes: ["Foot soak", "Nail care", "Callus removal", "Foot massage", "Polish"],
    },
    {
      icon: <AutoFixHighIcon className="text-4xl" />,
      title: "Full Body Wax",
      description:
        "Professional hair removal service for smooth, hair-free skin using high-quality wax and gentle techniques.",
      duration: "90-120 minutes",
      startingPrice: "₹3,000",
      benefits: ["Smooth skin", "Long-lasting results", "Professional technique", "Gentle process"],
      includes: ["Pre-wax preparation", "Hair removal", "Soothing treatment", "Aftercare"],
    },
  ]

  return (
 <>
 <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-5 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6"><span className="text-pink-600">Beauty Care </span>Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Indulge in our premium beauty treatments designed to enhance your natural radiance and leave you feeling
            refreshed and confident
          </p>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <SpaIcon className="text-pink-600 mr-2" />
            <span className="text-gray-700 font-medium">Professional Beauty Treatments</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-pink-600 flex-shrink-0 bg-pink-50 p-3 rounded-full">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Starting at</p>
                        <p className="text-2xl font-bold text-pink-600">{service.startingPrice}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                    <div className="mb-4">
                      <span className="inline-flex items-center bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                        Duration: {service.duration}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.includes.map((item, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact">
                      <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
                        Book Appointment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Beauty Routine?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your appointment today and experience our premium beauty care services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors cursor-pointer">
                Book Now
              </button>
            </Link>
            <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
              View Packages
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
 </>
  )
}
