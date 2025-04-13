"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Array of property images for the slideshow
const propertyImages = [
  {
    src: "/Photo 02.png",
    alt: "Community representative",
  },
  {
    src: "/Photo 31.png",
    alt: "Modern property exterior",
  },
  {
    src: "/Photo 10.png",
    alt: "Luxury apartment interior",
  },
  {
    src: "/Photo 13.png",
    alt: "Community amenities",
  },
]

export default function PropertySlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-advance the slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Manual navigation
  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg">
      {/* Images */}
      {propertyImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-4 flex space-x-2">
        {propertyImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index === currentImageIndex ? "bg-white text-black" : "bg-white/50 text-white"
            }`}
          >
            <span className="text-xs font-medium">{index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}