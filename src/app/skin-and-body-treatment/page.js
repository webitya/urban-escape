import HealingIcon from "@mui/icons-material/Healing"
import SpaIcon from "@mui/icons-material/Spa"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"
import ComingSoonIcon from "@mui/icons-material/Schedule"
import Link from "next/link"
import Footer from "@/components/Layout/Footer"
import Navbar from "@/components/Layout/Navbar"

export default function SkinBodyTreatment() {
  const cuppingTherapies = [
    {
      icon: <SpaIcon className="text-3xl" />,
      title: "Dry Cupping Therapy",
      description:
        "Non-invasive cupping method using vacuum suction without skin puncturing. Ideal for muscle tension, circulation improvement, and general wellness.",
      duration: "30-45 minutes",
      startingPrice: "₹2,000",
      benefits: ["Muscle tension relief", "Better circulation", "Toxin removal", "Relaxation"],
      includes: ["Assessment", "Dry cupping session", "Relaxation time", "Post-treatment care"],
    },
    {
      icon: <LocalHospitalIcon className="text-3xl" />,
      title: "Wet Cupping Therapy",
      description:
        "Traditional hijama therapy combining cupping with controlled micro-incisions for deeper detoxification and therapeutic benefits under professional supervision.",
      duration: "60-75 minutes",
      startingPrice: "₹3,500",
      benefits: ["Deep detoxification", "Blood purification", "Pain management", "Immune boost"],
      includes: ["Medical consultation", "Sterilization", "Wet cupping procedure", "Wound care"],
    },
  ]

  return (
  <>
  <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-5 pb-2 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6"><span className="text-pink-600">Skin & Body</span> Treatment</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the ancient art of cupping therapy and modern skin treatments designed to heal, rejuvenate, and
            restore your body s natural balance
          </p>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <HealingIcon className="text-pink-600 mr-2" />
            <span className="text-gray-700 font-medium">Traditional & Modern Healing</span>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cupping Therapy Main Card */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                  <div className="text-pink-600 flex-shrink-0 bg-pink-50 p-4 rounded-full">
                    <HealingIcon className="text-5xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Cupping Therapy</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      Traditional therapeutic technique using suction cups to improve blood circulation, reduce muscle
                      tension, and promote healing through enhanced lymphatic drainage. Choose from our specialized
                      cupping treatments below.
                    </p>
                  </div>
                </div>

                {/* Sub-therapies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {cuppingTherapies.map((therapy, index) => (
                    <div
                      key={index}
                      className="bg-pink-50 p-6 rounded-xl border border-pink-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="text-pink-600 flex-shrink-0 bg-white p-2 rounded-full shadow-sm mb-4">
                          {therapy.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-gray-900">{therapy.title}</h3>
                            <div className="text-right">
                              <p className="text-xs text-gray-500">Starting at</p>
                              <p className="text-lg font-bold text-pink-600">{therapy.startingPrice}</p>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-3 text-sm leading-relaxed">{therapy.description}</p>

                          <div className="mb-3">
                            <span className="inline-flex items-center bg-white text-pink-700 px-2 py-1 rounded-full text-xs font-medium">
                              Duration: {therapy.duration}
                            </span>
                          </div>

                          <div className="mb-3">
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">Benefits:</h4>
                            <div className="grid grid-cols-1 gap-1">
                              {therapy.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-xs text-gray-600">
                                  <span className="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">Includes:</h4>
                            <div className="flex flex-wrap gap-1">
                              {therapy.includes.map((item, idx) => (
                                <span key={idx} className="bg-white text-gray-700 px-2 py-1 rounded-md text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          <Link href="/contact">
                            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer text-sm">
                              Book {therapy.title}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 border border-gray-200 opacity-75">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-gray-500 flex-shrink-0 bg-gray-100 p-3 rounded-full mb-4">
                    <ComingSoonIcon className="text-4xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 text-center">Other Therapy Categories</h3>
                        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mt-1">
                          Coming Soon
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Starting at</p>
                        <p className="text-2xl font-bold text-gray-500">TBA</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      We are expanding our treatment offerings! Soon we will introduce additional specialized therapies
                      including lymphatic drainage, reflexology, and advanced skin treatments.
                    </p>

                    <div className="mb-4">
                      <span className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        Duration: Coming Soon
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {["Advanced treatments", "Specialized care", "Latest techniques", "Comprehensive wellness"].map(
                          (benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full mr-2 bg-gray-400"></span>
                              {benefit}
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "New treatment options",
                          "Advanced equipment",
                          "Certified therapists",
                          "Personalized care",
                        ].map((item, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 py-3 px-6 rounded-lg font-semibold cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Cupping Therapy</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Cupping therapy is an ancient healing practice that has been used for thousands of years across various
                cultures. This therapeutic technique involves placing special cups on the skin to create suction, which
                helps improve blood flow, reduce inflammation, and promote healing.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our certified therapists use modern, sterile equipment and follow strict safety protocols to ensure you
                receive the highest quality treatment in a safe and comfortable environment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Certified and experienced therapists</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Sterile, medical-grade equipment</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Personalized treatment plans</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Safe and hygienic environment</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Treatment Guidelines</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Before Treatment:</h4>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>• Avoid heavy meals 2 hours before</li>
                    <li>• Stay hydrated</li>
                    <li>• Inform about medical conditions</li>
                    <li>• Wear comfortable clothing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">After Treatment:</h4>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>• Drink plenty of water</li>
                    <li>• Avoid strenuous activities for 24 hours</li>
                    <li>• Keep treated areas clean and dry</li>
                    <li>• Follow therapist s aftercare instructions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Healing Therapy?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your cupping therapy session today and discover the benefits of this ancient healing art
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors cursor-pointer">
                Book Now
              </button>
            </Link>
            <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
  </>
  )
}
