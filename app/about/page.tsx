import { CheckCircle, Users, Award, Heart } from "lucide-react"

export const metadata = {
  title: "About Us - Yash Car Bazar | Trusted Used Car Dealer in Gorakhpur",
  description:
    "Learn about Yash Car Bazar, Gorakhpur's trusted used car dealer. Years of experience in providing quality second-hand cars with honest service.",
}

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Every vehicle undergoes thorough inspection and verification before being listed for sale.",
    },
    {
      icon: Users,
      title: "Local Experience",
      description:
        "Years of experience serving the Gorakhpur community with personalized service and local market knowledge.",
    },
    {
      icon: Award,
      title: "Honest Pricing",
      description: "Transparent pricing with no hidden charges. We believe in fair deals that benefit our customers.",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description:
        "Your satisfaction is our success. We build long-term relationships based on trust and quality service.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600 border-b-4 border-red-600">Yash Car Bazar</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your trusted partner for quality used cars in Gorakhpur
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Yash Car Bazar has been serving the Gorakhpur community for years, helping thousands of customers find
              their perfect used car. What started as a small showroom has grown into one of the most trusted names in
              the local used car market.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand that buying a car is a significant decision, and that's why we've built our business on the
              principles of transparency, honesty, and customer satisfaction. Every car in our inventory is carefully
              selected, thoroughly inspected, and verified to ensure you get the best quality vehicle at the most
              competitive price.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experienced professionals is dedicated to making your car buying experience smooth and
              hassle-free. From helping you choose the right car to completing all the documentation, we're with you
              every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Trust Yash Car Bazar</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="bg-red-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Showroom</h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the difference of working with Gorakhpur's most trusted used car dealer. Our team is ready to
            help you find your perfect car.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/cars"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold rounded-lg transition-colors"
            >
              View Our Cars
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
