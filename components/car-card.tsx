import Link from "next/link"
import Image from "next/image"
import { Fuel, Gauge, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarCardProps {
  car: {
    slug: string
    name: string
    year: number
    fuel: string
    km: string
    price: string
    image: string
  }
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={car.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{car.name}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span>{car.km} km</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{car.fuel}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-red-600">{car.price}</p>
          <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
            <Link href={`/cars/${car.slug}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
