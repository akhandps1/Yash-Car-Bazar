import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Best Used Cars in <span className="text-red-600">Gorakhpur</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-4">
            Trusted Local Used Car Dealer – Yash Car Bazar
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Buy quality second-hand cars at the best local prices with complete transparency, honest dealing, and
            excellent customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/cars">View Used Cars</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
