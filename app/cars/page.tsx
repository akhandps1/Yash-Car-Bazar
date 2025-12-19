import { CarCard } from "@/components/car-card"
import { Filter } from "lucide-react"
import carsData from "@/data/cars.json"

export const metadata = {
  title: "Available Used Cars in Gorakhpur - Yash Car Bazar",
  description:
    "Browse our collection of quality used cars in Gorakhpur. Verified vehicles with transparent pricing and complete documentation.",
}

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Available Used Cars in Gorakhpur</h1>
          <p className="text-lg text-gray-600">
            Explore our verified collection of quality second-hand cars at the best prices
          </p>
        </div>
      </section>

      {/* Filter Section (UI Only) */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filter By</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-white">
                <option>All</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>CNG</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-white">
                <option>All</option>
                <option>Under ₹5 Lakhs</option>
                <option>₹5-10 Lakhs</option>
                <option>Above ₹10 Lakhs</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent bg-white">
                <option>All</option>
                <option>Manual</option>
                <option>Automatic</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{carsData.length}</span> cars
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carsData.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
