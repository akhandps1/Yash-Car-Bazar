import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
          Looking for a Reliable Used Car in Gorakhpur?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Visit Yash Car Bazar today and drive home your dream car. Our team is ready to help you find the perfect
          vehicle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <a href="tel:+919876543210">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-white bg-transparent"
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              WhatsApp Enquiry
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
