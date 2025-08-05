import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import AboutHero from "../../components/About/AboutHero"
import AboutContent from "../../components/About/AboutContent"
import AboutTeam from "../../components/About/AboutTeam"

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutContent />
      {/* <AboutTeam /> */}
      <Footer />
    </div>
  )
}
