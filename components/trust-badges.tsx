import { CheckCircle, Shield, IndianRupee, MessageCircle } from "lucide-react"

export function TrustBadges() {
  const badges = [
    { icon: CheckCircle, text: "Verified Cars" },
    { icon: Shield, text: "Trusted Local Dealer" },
    { icon: IndianRupee, text: "Transparent Pricing" },
    { icon: MessageCircle, text: "Instant Enquiry" },
  ]

  return (
    <section className="bg-red-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <badge.icon className="h-8 w-8 md:h-10 md:w-10 text-red-600 mb-2" />
              <p className="text-sm md:text-base font-semibold text-gray-900">{badge.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
