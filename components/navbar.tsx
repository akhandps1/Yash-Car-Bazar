"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">Yash</span>{" "}
              <span className="text-red-600 border-b-2 border-red-600">Car Bazar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/cars" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Used Cars
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Enquiry
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/cars"
              className="block py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Used Cars
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
