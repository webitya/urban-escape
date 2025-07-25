import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import SpaIcon from "@mui/icons-material/Spa"
import PeopleIcon from "@mui/icons-material/People"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

export default function HomeAbout() {
  const features = [
    "Professional certified therapists",
    "Hygienic and sanitized environment",
    "Premium quality oils and products",
    "Customized treatment plans",
    "Relaxing ambiance",
    "24/7 availability",
  ]

  const stats = [
    { icon: <SpaIcon className="text-3xl" />, number: "500+", label: "Happy Clients" },
    { icon: <PeopleIcon className="text-3xl" />, number: "10+", label: "Expert Therapists" },
    { icon: <AccessTimeIcon className="text-3xl" />, number: "24/7", label: "Service Hours" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Professional massage therapy"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">5.0</div>
                <div className="text-sm">★★★★★</div>
                <div className="text-xs">Google Reviews</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose <span className="text-green-600">Urban Escape Wellness?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Located in the heart of New Delhi, we provide premium massage and wellness services with a focus on your
                comfort and well-being. Our experienced therapists use traditional and modern techniques to help you
                relax and rejuvenate.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="text-green-600 text-xl" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-green-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
