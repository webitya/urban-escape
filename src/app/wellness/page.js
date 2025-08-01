import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import ServicesHero from "../../components/Services/ServicesHero"
import ServicesList from "../../components/Services/ServicesList"
import ServicesPricing from "../../components/Services/ServicesPricing"

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServicesPricing />
      <Footer />
    </div>
  )
}
