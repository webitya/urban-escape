export default function AboutTeam() {
  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Head Therapist",
      experience: "10+ Years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Therapist",
      experience: "8+ Years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Anita Verma",
      role: "Aromatherapy Specialist",
      experience: "6+ Years",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-600">
            Our certified therapists are dedicated to providing you with the best wellness experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              {/* <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3> */}
              <p className="text-green-600 font-medium mb-1">{member.role}</p>
              <p className="text-gray-600">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
