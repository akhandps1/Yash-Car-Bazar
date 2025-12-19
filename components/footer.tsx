import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-gray-900">Yash</span>{" "}
              <span className="text-red-600 border-b-2 border-red-600">Car Bazar</span>
            </div>
            <p className="text-gray-600 mb-2">Trusted Used Cars in Gorakhpur</p>
            <p className="text-sm text-gray-500">
              Your reliable partner for quality second-hand cars with transparent pricing and excellent service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-gray-600 hover:text-red-600 transition-colors">
                  Used Cars
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Gorakhpur, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-red-600 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a href="mailto:info@yashcarbazar.com" className="hover:text-red-600 transition-colors">
                  info@yashcarbazar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Yash Car Bazar. All rights reserved. | Trusted Used Car Dealer in Gorakhpur</p>
        </div>
      </div>
    </footer>
  )
}
