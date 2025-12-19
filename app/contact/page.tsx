import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Us - Yash Car Bazar | Visit Our Showroom in Gorakhpur",
  description:
    "Get in touch with Yash Car Bazar. Visit our showroom in Gorakhpur, call us, or send us a message for any enquiries about used cars.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with us for any enquiries or to schedule a visit</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Showroom</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Yash Car Bazar
                      <br />
                      Main Road, Near City Mall
                      <br />
                      Gorakhpur, Uttar Pradesh 273001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-red-600 transition-colors">
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-gray-500 mt-1">(Available for calls & WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@yashcarbazar.com"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      info@yashcarbazar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 8:00 PM
                      <br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <h3 className="font-semibold text-gray-900 mb-2">Quick Enquiry</h3>
                <p className="text-gray-600 mb-4">For immediate assistance, contact us via:</p>
                <div className="flex flex-col gap-3">
                  <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <a href="tel:+919876543210">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-white bg-transparent"
                  >
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      WhatsApp Enquiry
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Enquiry Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow bg-white"
                    >
                      <option>General Enquiry</option>
                      <option>Specific Car Enquiry</option>
                      <option>Selling My Car</option>
                      <option>Exchange Options</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow resize-none"
                      placeholder="Tell us about your requirements..."
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
                    Submit Enquiry
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Note: This is a UI-only form. For immediate response, please call or WhatsApp us.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us on Map</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Google Maps Integration</p>
                <p className="text-sm text-gray-500 mt-2">
                  Yash Car Bazar, Gorakhpur
                  <br />
                  (Map placeholder for static site)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
