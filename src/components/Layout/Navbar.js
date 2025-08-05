'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SpaIcon from "@mui/icons-material/Spa"
import PhoneIcon from "@mui/icons-material/Phone"
import InstagramIcon from "@mui/icons-material/Instagram"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import DirectionsIcon from "@mui/icons-material/Directions"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/wellness", label: "Wellness" },
    { href: "/beauty-care", label: "Beauty Care" },
    { href: "/skin-and-body-treatment", label: "Skin & Body treatment" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      {/* Main Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-30">
        <div className="mx-auto px-3">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <SpaIcon className="text-pink-600 text-3xl" />
              <span className="text-xl font-bold text-gray-800">Urban Escape Wellness</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-pink-600 bg-pink-50"
                      : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Call Button */}
              <a
                href="tel:+919910979774"
                className="bg-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-700 transition-colors flex items-center space-x-2"
                aria-label="Call us now"
              >
                <PhoneIcon className="text-sm" />
                <span>+91 99109 79774</span>
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/urban_escape_wellness/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-100 text-pink-600 px-3 py-2 rounded-lg font-medium hover:bg-pink-200 transition-colors flex items-center space-x-1"
                aria-label="Visit our Instagram"
              >
                <InstagramIcon className="text-base" />
                <span className="text-sm">Instagram</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-pink-600 p-2 rounded-md"
                aria-expanded={menuOpen}
                aria-label="Main menu"
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{
          backdropFilter: menuOpen ? "blur(10px)" : "blur(0px)",
          background: menuOpen ? "rgba(255, 255, 255, 0.1)" : "transparent",
        }}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-40 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <SpaIcon className="text-pink-600 text-2xl" />
            <span className="font-bold text-lg">Urban Escape Wellness</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-500 hover:text-pink-600"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-4 rounded-md text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "text-pink-600 bg-pink-50"
                    : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Call Button (Mobile) */}
            <a
              href="tel:+919910979774"
              className="w-full text-left px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors flex items-center space-x-2"
              onClick={() => setMenuOpen(false)}
            >
              <PhoneIcon className="text-sm" />
              <span>+91 99109 79774</span>
            </a>
          </nav>

          {/* Mobile Location Info */}
          <div className="px-4 pb-4 mt-auto">
            <div className="bg-gray-50 rounded-lg p-3 border">
              {/* Map */}
              <div className="relative w-full h-32 mb-3 rounded-md overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.573939562447!2d77.04240315508!3d28.535500082456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aa4c8f4c5c5%3A0x1234567890abcdef!2sRangpuri%20Pahari%2C%20New%20Delhi%2C%20Delhi%20110037%2C%20India!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Urban Escape Wellness Location"
                  style={{ border: 0 }}
                ></iframe>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <LocationOnIcon className="text-pink-600 text-sm mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-900 leading-tight">
                      S-171/10, K-Block, Rangpuri Pahari
                    </p>
                    <p className="text-xs text-gray-600 leading-tight">Inder camp, New Delhi, Delhi-110037</p>
                  </div>
                </div>

                {/* Directions */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=S-171/10,+K-Block,+Rangpuri+Pahari,+Inder+camp,+New+Delhi,+Delhi-110037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-pink-600 text-white py-2 px-3 rounded-md text-xs font-medium hover:bg-pink-700 transition-colors flex items-center justify-center space-x-1"
                  onClick={() => setMenuOpen(false)}
                >
                  <DirectionsIcon className="text-sm" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-3 bg-green-50 rounded-lg p-3 border border-green-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-bold text-green-700">Open 24 Hours</p>
                  <p className="text-xs text-green-600">7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevent Overlap */}
      <div className="h-16"></div>
    </>
  )
}
