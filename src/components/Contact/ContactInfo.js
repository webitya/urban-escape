'use client'

import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import DirectionsIcon from "@mui/icons-material/Directions"

import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function ContactInfo() {
  const socialLinks = [
    {
      icon: <InstagramIcon className="text-pink-600 text-2xl" />,
      label: "Instagram",
      href: "https://www.instagram.com/urban_escape_wellness/",
    },
    {
      icon: <FacebookIcon className="text-pink-600 text-2xl" />,
      label: "Facebook",
      href: "https://www.instagram.com/urban_escape_wellness/",
    },
    {
      icon: <YouTubeIcon className="text-pink-600 text-2xl" />,
      label: "YouTube",
      href: "https://www.instagram.com/urban_escape_wellness/",
    },
    {
      icon: <WhatsAppIcon className="text-pink-600 text-2xl" />,
      label: "WhatsApp",
      href: "https://wa.me/919910979774",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-pink-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <PhoneIcon className="text-pink-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">+91 99109 79774</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <EmailIcon className="text-pink-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">info@urbanescapewellness.com</p>
              <p className="text-sm text-gray-500">We will respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <LocationOnIcon className="text-pink-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600">S-171/10, K-Block, Rangpuri Pahari, Inder camp, New Delhi, Delhi-110037</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 text-sm flex items-center space-x-1 mt-1"
              >
                <DirectionsIcon className="text-sm" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <AccessTimeIcon className="text-pink-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Hours</h3>
              <p className="text-gray-600">Open 24 Hours</p>
              <p className="text-sm text-gray-500">7 days a week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white p-4 rounded-xl shadow flex items-center justify-center space-x-4">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="hover:text-pink-700 transition-colors"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Map */}
      <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
        <div className="text-center text-gray-600">
          <LocationOnIcon className="text-4xl mb-2" />
          <p>Interactive Map</p>
          <p className="text-sm">S-171/10, K-Block, Rangpuri Pahari</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <a
            href="tel:+919910979774"
            className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2"
          >
            <PhoneIcon />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/919910979774"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-pink-600 transition-colors text-center block"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}
