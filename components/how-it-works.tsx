import { Search, Phone, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Choose Your Car",
      description: "Browse our collection of verified used cars and find your perfect match.",
    },
    {
      icon: Phone,
      title: "Contact Us",
      description: "Call or WhatsApp us for more details, schedule a visit, or arrange a test drive.",
    },
    {
      icon: CheckCircle,
      title: "Visit Showroom & Buy",
      description: "Visit our showroom in Gorakhpur, inspect the car, and complete the purchase hassle-free.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Simple and transparent process to buy your dream car</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-10 w-10 text-red-600" />
              </div>
              <div className="mb-2 text-red-600 font-bold text-lg">Step {index + 1}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
