import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import GalleryHero from "../../components/Gallery/GalleryHero"
import GalleryGrid from "../../components/Gallery/GalleryGrid"

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </div>
  )
}
