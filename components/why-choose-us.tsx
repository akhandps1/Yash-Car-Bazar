import { BadgeCheck, IndianRupee, Repeat, Heart } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: BadgeCheck,
      title: "Verified Used Cars",
      description:
        "Every car is thoroughly inspected and verified before listing. Complete documentation and history provided.",
    },
    {
      icon: IndianRupee,
      title: "Best Price in Gorakhpur",
      description:
        "Competitive pricing with no hidden charges. Get the best value for your money with transparent deals.",
    },
    {
      icon: Repeat,
      title: "Easy Exchange",
      description: "Looking to exchange your old car? We offer hassle-free exchange options with fair valuations.",
    },
    {
      icon: Heart,
      title: "Customer-First Approach",
      description: "Your satisfaction is our priority. Honest dealing, personalized service, and lifetime support.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-red-600 border-b-4 border-red-600">Yash Car Bazar</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for quality used cars in Gorakhpur with years of experience and thousands of satisfied
            customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="bg-red-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
