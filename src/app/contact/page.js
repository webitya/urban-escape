import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import ContactHero from "../../components/Contact/ContactHero"
import ContactForm from "../../components/Contact/ContactForm"
import ContactInfo from "../../components/Contact/ContactInfo"

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-16">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  )
}
