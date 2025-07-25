import HomeHero from "../components/Homepage/HomeHero"
import HomeAbout from "../components/Homepage/HomeAbout"
import HomeServices from "../components/Homepage/HomeServices"
import HomeCta from "../components/Homepage/HomeCta"
import Navbar from "../components/Layout/Navbar"
import Footer from "../components/Layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeCta />
      <Footer />
    </div>
  )
}
