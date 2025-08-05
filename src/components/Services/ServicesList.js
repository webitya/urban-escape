import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"
import HotTubIcon from "@mui/icons-material/HotTub"
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import LocalFloristIcon from "@mui/icons-material/LocalFlorist"
import HealingIcon from "@mui/icons-material/Healing"
import SpaIcon from "@mui/icons-material/Spa"
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew"
import FavoriteIcon from "@mui/icons-material/Favorite"
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined"
import WhatsAppIcon from "@mui/icons-material/WhatsApp" // Import WhatsApp icon
import Link from "next/link"
import { SportsBarOutlined, SportsBarRounded } from "@mui/icons-material"

export default function ServicesList() {
const services = [
  {
    icon: <SelfImprovementIcon className="text-4xl" />,
    title: "Balinese Massage",
    description:
      "Traditional Indonesian massage combining gentle stretches, acupressure, and aromatherapy oils for deep relaxation and spiritual healing.",
    duration: "60-90 minutes",
    benefits: ["Deep relaxation", "Improved circulation", "Stress relief", "Spiritual balance"],
  },
  {
    icon: <LocalFloristIcon className="text-4xl" />,
    title: "Bamboo Massage",
    description:
      "Innovative massage technique using heated bamboo canes to knead and roll away tension from muscles and joints.",
    duration: "60-90 minutes",
    benefits: ["Muscle tension relief", "Improved flexibility", "Better circulation", "Lymphatic drainage"],
  },
  {
    icon: <HealingIcon className="text-4xl" />,
    title: "Potli Massage",
    description:
      "Ayurvedic massage using heated herbal pouches filled with medicinal herbs, rice, and essential oils to rejuvenate the body.",
    duration: "60-90 minutes",
    benefits: ["Pain relief", "Detoxification", "Improved skin texture", "Muscle strengthening"],
  },
  {
    icon: <AccessibilityNewIcon className="text-4xl" />,
    title: "Foot Reflexology",
    description:
      "Therapeutic foot massage applying pressure to specific points on feet, hands, and ears that correspond to different organs and systems in the body.",
    duration: "60-90 minutes",
    benefits: ["Improved circulation", "Stress reduction", "Better sleep", "Overall wellness"],
  },
  {
    icon: <SpaIcon className="text-4xl" />,
    title: "Swedish Massage",
    description:
      "A gentle, relaxing massage using long strokes, kneading, and circular movements to help you relax and energize.",
    duration: "60-90 minutes",
    benefits: ["Stress relief", "Improved circulation", "Muscle relaxation", "Better sleep"],
  },
  {
    icon: <HotTubIcon className="text-4xl" />,
    title: "Deep Tissue Massage",
    description: "Targets deeper layers of muscle and connective tissue to address chronic pain and muscle tension.",
    duration: "60-90 minutes",
    benefits: ["Pain relief", "Improved mobility", "Reduced inflammation", "Faster healing"],
  },
  {
    icon: <FaceRetouchingNaturalIcon className="text-4xl" />,
    title: "Aromatherapy Massage",
    description:
      "Combines gentle massage with essential oils to enhance relaxation and promote emotional well-being.",
    duration: "60-90 minutes",
    benefits: ["Stress reduction", "Mood enhancement", "Better sleep", "Emotional balance"],
  },
  {
    icon: <FitnessCenterIcon className="text-4xl" />,
    title: "Thai Massage",
    description:
      "Traditional massage combining acupressure, stretching, and yoga-like positions for flexibility and energy.",
    duration: "60-90 minutes",
    benefits: ["Increased flexibility", "Energy boost", "Stress relief", "Improved posture"],
  },
  {
    icon: <SportsBarRounded className="text-4xl" />,
    title: "Sports Massage",
    description:
      "Focused massage designed for athletes and active individuals to prevent injuries, improve performance, and speed up recovery.",
    duration: "60-90 minutes",
    benefits: ["Improved flexibility", "Injury prevention", "Faster recovery", "Muscle performance"],
  },
  {
    icon: <SelfImprovementOutlinedIcon className="text-4xl" />,
    title: "Shiatsu Massage",
    description:
      "A Japanese bodywork based on traditional Chinese medicine, using pressure with thumbs, fingers, and palms to unblock energy pathways and promote self-healing.",
    duration: "60-90 minutes",
    benefits: ["Energy balance", "Stress reduction", "Pain relief", "Improved posture"],
  },
  {
    icon: <FavoriteIcon className="text-4xl" />,
    title: "Nirvana Therapy",
    description:
      "A unique holistic therapy designed to achieve deep meditative states, combining gentle touch, sound healing, and guided relaxation to promote profound peace and well-being.",
    duration: "90-60 minutes",
    benefits: ["Deep relaxation", "Mental clarity", "Emotional release", "Spiritual connection"],
  },
];


  const phoneNumber = "919910979774" // Your phone number without '+'

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Massage Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the healing power of touch with our comprehensive range of therapeutic massage treatments
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow relative pb-20 border border-pink-200"
            >
              {" "}
              {/* Added border border-pink-200 */}
              <div className="flex items-start space-x-4">
                <div className="text-pink-600 flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-pink-600">Duration: {service.duration}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* WhatsApp Book Now Button */}
              <Link
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello, I'd like to book a ${service.title} massage.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 hover:bg-green-600 transition-colors shadow-md"
              >
                <WhatsAppIcon className="text-lg" />
                <span>Book Now</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
