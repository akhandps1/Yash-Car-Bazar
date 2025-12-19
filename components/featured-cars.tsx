import { CarCard } from "@/components/car-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import carsData from "@/data/cars.json"

export function FeaturedCars() {
  // Show first 6 cars
  const featuredCars = carsData.slice(0, 6)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Used Cars</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked collection of quality used cars available at Yash Car Bazar, Gorakhpur.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredCars.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/cars">View All Cars</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
