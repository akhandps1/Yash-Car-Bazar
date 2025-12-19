"use client"

import { useState } from "react"
import Image from "next/image"

interface CarGalleryProps {
  images: string[]
  carName: string
}

export function CarGallery({ images, carName }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`${carName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative h-24 bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index ? "border-red-600" : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${carName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="200px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
