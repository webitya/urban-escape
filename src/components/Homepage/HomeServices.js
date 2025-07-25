import Link from "next/link"
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"
import HotTubIcon from "@mui/icons-material/HotTub"
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import LocalFloristIcon from "@mui/icons-material/LocalFlorist"
import HealingIcon from "@mui/icons-material/Healing"

export default function HomeServices() {
  const services = [
    {
      icon: <SelfImprovementIcon className="text-4xl" />,
      title: "Swedish Massage",
      description: "Relaxing full-body massage using long strokes and kneading techniques.",
      price: "Starting from ₹2,000",
    },
    {
      icon: <HotTubIcon className="text-4xl" />,
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deep muscle layers and chronic tension.",
      price: "Starting from ₹2,500",
    },
    {
      icon: <FaceRetouchingNaturalIcon className="text-4xl" />,
      title: "Aromatherapy",
      description: "Relaxing massage with essential oils for mind and body wellness.",
      price: "Starting from ₹2,200",
    },
    {
      icon: <FitnessCenterIcon className="text-4xl" />,
      title: "Sports Massage",
      description: "Specialized massage for athletes and active individuals.",
      price: "Starting from ₹2,800",
    },
    {
      icon: <LocalFloristIcon className="text-4xl" />,
      title: "Hot Stone Therapy",
      description: "Therapeutic massage using heated stones for deep relaxation.",
      price: "Starting from ₹3,000",
    },
    {
      icon: <HealingIcon className="text-4xl" />,
      title: "Reflexology",
      description: "Pressure point massage focusing on feet, hands, and ears.",
      price: "Starting from ₹1,800",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-pink-600">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of professional massage and wellness services designed to rejuvenate your body
            and mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-pink-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-pink-600 font-semibold">{service.price}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
