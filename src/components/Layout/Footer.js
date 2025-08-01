import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import SpaIcon from "@mui/icons-material/Spa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <SpaIcon className="text-pink-400 text-3xl" />
              <span className="text-xl font-bold">Urban Escape Wellness</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium massage and wellness services in New Delhi. Experience relaxation and rejuvenation with our
              professional therapists.
            </p>
            <div className="flex space-x-4">
              <FacebookIcon className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <InstagramIcon className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <TwitterIcon className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-pink-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/wellness" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="text-pink-400" />
                <span className="text-gray-300">+91 99109 79774</span>
              </div>
              <div className="flex items-center space-x-2">
                <EmailIcon className="text-pink-400" />
                <span className="text-gray-300">info@urbanescapewellness.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <LocationOnIcon className="text-pink-400 mt-1" />
                <span className="text-gray-300">
                  S-171/10, K-Block, Rangpuri Pahari, Inder camp, New Delhi, Delhi-110037
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Urban Escape Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
