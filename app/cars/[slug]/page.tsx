import Link from "next/link"
import { notFound } from "next/navigation"
import { Phone, ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CarGallery } from "@/components/car-gallery"
import { SpecsTable } from "@/components/specs-table"
import carsData from "@/data/cars.json"

export async function generateStaticParams() {
  return carsData.map((car) => ({
    slug: car.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const car = carsData.find((c) => c.slug === slug)

  if (!car) {
    return {
      title: "Car Not Found",
    }
  }

  return {
    title: `${car.name} ${car.year} - ${car.price} | Yash Car Bazar`,
    description: `Buy ${car.name} ${car.year} in Gorakhpur. ${car.fuel}, ${car.transmission}, ${car.km} km. Available at Yash Car Bazar.`,
  }
}

export default async function CarDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const car = carsData.find((c) => c.slug === slug)

  if (!car) {
    notFound()
  }

  // Use the same image 3 times if additional images don't exist
  const carImages = car.images || [car.image, car.image, car.image]

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Cars</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Gallery */}
          <div>
            <CarGallery images={carImages} carName={car.name} />
          </div>

          {/* Right Column - Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{car.name}</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <MapPin className="h-5 w-5 text-red-600" />
              <span>Available at Yash Car Bazar, Gorakhpur</span>
            </div>
            <div className="mb-6">
              <p className="text-4xl font-bold text-red-600">{car.price}</p>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Year</p>
                  <p className="text-gray-900 font-semibold">{car.year}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Fuel Type</p>
                  <p className="text-gray-900 font-semibold">{car.fuel}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Transmission</p>
                  <p className="text-gray-900 font-semibold">{car.transmission}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Kilometers</p>
                  <p className="text-gray-900 font-semibold">{car.km} km</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 mb-8">
              <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now for Enquiry
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                size="lg"
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  WhatsApp Enquiry
                </a>
              </Button>
            </div>

            {/* Description */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-8">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Verified Car:</span> This vehicle has been inspected and verified by
                Yash Car Bazar. Complete documentation available.
              </p>
            </div>

            {car.description && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-12">
          <SpecsTable
            specs={{
              brand: car.brand,
              model: car.model,
              year: car.year,
              fuel: car.fuel,
              transmission: car.transmission,
              km: car.km,
              ownership: car.ownership,
            }}
          />
        </div>

        {/* Trust Message */}
        <div className="mt-12 bg-red-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Interested in this car?</h3>
          <p className="text-gray-600 mb-6">
            Visit our showroom in Gorakhpur to see this car in person, take a test drive, and get all the details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white" size="lg">
              <a href="tel:+919876543210">Call Now</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-white bg-transparent"
              size="lg"
            >
              <Link href="/contact">Visit Showroom</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden shadow-lg z-40">
        <div className="flex gap-3">
          <Button asChild className="flex-1 bg-red-600 hover:bg-red-700 text-white">
            <a href="tel:+919876543210">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
