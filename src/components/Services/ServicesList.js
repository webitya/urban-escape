import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"
import HotTubIcon from "@mui/icons-material/HotTub"
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import LocalFloristIcon from "@mui/icons-material/LocalFlorist"
import HealingIcon from "@mui/icons-material/Healing"
import SpaIcon from "@mui/icons-material/Spa"
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew"

export default function ServicesList() {
  const services = [
    {
      icon: <SelfImprovementIcon className="text-4xl" />,
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
      duration: "60-75 minutes",
      benefits: ["Stress reduction", "Mood enhancement", "Better sleep", "Emotional balance"],
    },
    {
      icon: <FitnessCenterIcon className="text-4xl" />,
      title: "Sports Massage",
      description:
        "Specialized massage designed for athletes and active individuals to prevent injuries and enhance performance.",
      duration: "45-60 minutes",
      benefits: ["Injury prevention", "Enhanced performance", "Faster recovery", "Flexibility improvement"],
    },
    {
      icon: <LocalFloristIcon className="text-4xl" />,
      title: "Hot Stone Therapy",
      description: "Uses heated stones placed on specific points of the body to warm and loosen tight muscles.",
      duration: "75-90 minutes",
      benefits: ["Deep muscle relaxation", "Improved circulation", "Stress relief", "Pain reduction"],
    },
    {
      icon: <HealingIcon className="text-4xl" />,
      title: "Reflexology",
      description:
        "Applies pressure to specific points on feet, hands, and ears that correspond to different body organs.",
      duration: "45-60 minutes",
      benefits: ["Improved circulation", "Stress reduction", "Better sleep", "Pain relief"],
    },
    {
      icon: <SpaIcon className="text-4xl" />,
      title: "Thai Massage",
      description:
        "Traditional massage combining acupressure, stretching, and yoga-like positions for flexibility and energy.",
      duration: "60-90 minutes",
      benefits: ["Increased flexibility", "Energy boost", "Stress relief", "Improved posture"],
    },
    {
      icon: <AccessibilityNewIcon className="text-4xl" />,
      title: "Prenatal Massage",
      description:
        "Gentle massage specifically designed for pregnant women to reduce discomfort and promote relaxation.",
      duration: "60 minutes",
      benefits: ["Reduced swelling", "Pain relief", "Better sleep", "Stress reduction"],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-green-600 flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-green-600">Duration: {service.duration}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
