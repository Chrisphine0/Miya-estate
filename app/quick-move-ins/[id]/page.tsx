"use client"

import { useState } from "react"
import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MapPin, Star, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScheduleTourModal from "@/components/schedule-tour-modal"

// Sample property data for quick move-ins - this would typically come from a database or API
const quickMoveInProperties = [
  {
    id: "1602",
    unit: "Plot 1602",
    price: "$650,000",
    image: "/Photo 16.png",
    constructionStatus: "Production Phase",
    moveInReady: "Move in Ready",
    bedrooms: 3,
    baths: 2.5,
    sqft: 1850,
    carGarage: 2,
    squareFootage: 1850,
    location: "Centerville, Utah",
    description:
      "the miya features a Office Bridge design, offering a blend of contemporary style and traditional neighborhood aesthetics.",
    yearBuilt: 2023,
    stories: 2,
    gallery: ["/Photo 16.png", "/Photo 17.png", "/Photo 18.png", "/Photo 19.png", "/Photo 20.png", "/Photo 21.png"],
  },
  {
    id: "1603",
    unit: "Unit #126",
    price: "$675,000",
    image: "/Photo 26.png",
    constructionStatus: "Construction Phase",
    moveInReady: "Move in Ready",
    bedrooms: 3,
    baths: 2.5,
    sqft: 1850,
    carGarage: 2,
    squareFootage: 1850,
    location: "Salt Lake City, Utah",
    description: "Modern townhome with premium finishes and an open floor plan, perfect for contemporary living.",
    yearBuilt: 2023,
    stories: 2,
    gallery: ["/Photo 26.png", "/Photo 25.png", "/Photo 24.png", "/Photo 23.png", "/Photo 22.png", "/Photo 21.png"],
  },
  {
    id: "1604",
    unit: "Unit #126",
    price: "$675,000",
    image: "/Photo 25.png",
    constructionStatus: "Construction Phase",
    moveInReady: "Move in Ready",
    bedrooms: 4,
    baths: 3.5,
    sqft: 2200,
    carGarage: 2,
    squareFootage: 2200,
    location: "Provo, Utah",
    description:
      "Spacious family home with premium amenities and a thoughtfully designed layout for comfortable living.",
    yearBuilt: 2023,
    stories: 2,
    gallery: ["/Photo 25.png", "/Photo 24.png", "/Photo 23.png", "/Photo 22.png", "/Photo 21.png", "/Photo 20.png"],
  },
  {
    id: "1605",
    unit: "Unit #126",
    price: "$675,000",
    image: "/Photo 24.png",
    constructionStatus: "Production Phase",
    moveInReady: "Move in Ready",
    bedrooms: 3,
    baths: 2.5,
    sqft: 1850,
    carGarage: 2,
    squareFootage: 1850,
    location: "Lehi, Utah",
    description: "Contemporary townhome with designer finishes and an efficient floor plan in a prime location.",
    yearBuilt: 2023,
    stories: 2,
    gallery: ["/Photo 24.png", "/Photo 23.png", "/Photo 22.png", "/Photo 21.png", "/Photo 20.png", "/Photo 19.png"],
  },
  {
    id: "1606",
    unit: "Unit #126",
    price: "$675,000",
    image: "/Photo 23.png",
    constructionStatus: "Construction Phase",
    moveInReady: "Move in Ready",
    bedrooms: 3,
    baths: 2.5,
    sqft: 1850,
    carGarage: 2,
    squareFootage: 1850,
    location: "Draper, Utah",
    description: "Elegant townhome with mountain views and premium finishes throughout.",
    yearBuilt: 2023,
    stories: 2,
    gallery: ["/Photo 23.png", "/Photo 22.png", "/Photo 21.png", "/Photo 20.png", "/Photo 19.png", "/Photo 18.png"],
  },
  {
    id: "1607",
    unit: "Unit #126",
    price: "$675,000",
    image: "/Photo 22.png",
    constructionStatus: "Construction Phase",
    moveInReady: "Move in Ready",
    bedrooms: 4,
    baths: 3.5,
    sqft: 2200,
    carGarage: 2,
    squareFootage: 2200,
    location: "Orem, Utah",
    description: "Luxurious family home with spacious rooms and high-end finishes in a desirable neighborhood.",
    yearBuilt: 2023,
    stories: 2,
    gallery: ["/Photo 22.png", "/Photo 21.png", "/Photo 20.png", "/Photo 19.png", "/Photo 18.png", "/Photo 17.png"],
  },
]

// Common features for all properties
const commonFeatures = [
  "Open concept kitchen and living area",
  "Primary suite with walk-in closet",
  "Energy efficient appliances",
  "Smart home technology",
  "Covered patio",
]

// Common floor plan for all properties
const commonFloorPlan = {
  level1: {
    rooms: [
      { name: "Living Room", size: "18' x 14'" },
      { name: "Kitchen", size: "14' x 12'" },
      { name: "Dining", size: "12' x 10'" },
      { name: "Half Bath", size: "6' x 5'" },
    ],
  },
  level2: {
    rooms: [
      { name: "Primary Bedroom", size: "16' x 14'" },
      { name: "Bedroom 2", size: "12' x 11'" },
      { name: "Bedroom 3", size: "12' x 11'" },
      { name: "Full Bath", size: "8' x 6'" },
      { name: "Primary Bath", size: "10' x 8'" },
    ],
  },
}

// Common interior finishes for all properties
const commonInteriorFinishes = [
  { name: "Midnight", color: "#1e1e2d" },
  { name: "Warm Taupe", color: "#a89385" },
  { name: "Light Gray", color: "#d1d1d1" },
  { name: "Soft White", color: "#e5e2dc" },
]

// Common location highlights for all properties
const commonLocationHighlights = {
  parks: 4,
  restaurants: 8,
  minutesToDowntown: 10,
}

// Gallery Slideshow Component
function GallerySlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image src={image || "/placeholder.svg"} alt={`Property image ${index + 1}`} fill className="object-cover" />
        </div>
      ))}

      {/* Navigation controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full p-3 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 text-black" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full p-3 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 text-black" />
      </button>

      {/* Image counter */}
      <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full z-10">
        <span className="text-sm font-medium">
          {currentIndex + 1}/{images.length}
        </span>
      </div>
    </div>
  )
}

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Use React.use to unwrap the params Promise
  const resolvedParams = use(params)
  const { id } = resolvedParams

  // State for tour scheduling modal
  const [isTourModalOpen, setIsTourModalOpen] = useState(false)

  // Find the property data based on the ID parameter
  const propertyData = quickMoveInProperties.find((property) => property.id === id)

  // If property not found, use the first one as a fallback
  const property = propertyData || quickMoveInProperties[0]

  // Create a complete property object with common data
  const completeProperty = {
    ...property,
    features: commonFeatures,
    floorPlan: commonFloorPlan,
    interiorFinishes: commonInteriorFinishes,
    locationHighlights: commonLocationHighlights,
    specs: {
      beds: property.bedrooms,
      baths: property.baths,
      sqft: property.sqft,
      garage: property.carGarage,
      stories: property.stories,
      yearBuilt: property.yearBuilt,
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#1e1e2d] text-white py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={completeProperty.image || "/placeholder.svg"}
                    alt={completeProperty.unit}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white text-black rounded-full p-3">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                      <span className="text-sm font-medium">Save</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="mb-6">
                  <Link href="/quick-move-ins" className="text-sm text-white/70 hover:text-white flex items-center">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Quick Move-ins
                  </Link>
                </div>

                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-2">{completeProperty.unit}</h1>
                  <div className="flex items-center text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{completeProperty.location}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-bold mb-6">{completeProperty.price}</div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{completeProperty.specs.beds}</div>
                      <div className="text-sm text-white/70">Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{completeProperty.specs.baths}</div>
                      <div className="text-sm text-white/70">Baths</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{completeProperty.specs.sqft}</div>
                      <div className="text-sm text-white/70">Sq Ft</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{completeProperty.specs.garage}</div>
                      <div className="text-sm text-white/70">Garage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{completeProperty.specs.stories}</div>
                      <div className="text-sm text-white/70">Stories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{completeProperty.specs.yearBuilt}</div>
                      <div className="text-sm text-white/70">Year Built</div>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full" onClick={() => setIsTourModalOpen(true)}>
                  Schedule a Tour
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Property Description */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(01)</h2>
              <Tabs defaultValue="details">
                <TabsList className="bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="details"
                    className="px-0 py-2 mr-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none h-auto"
                  >
                    Details
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl leading-relaxed mb-8">{completeProperty.description}</p>

                <h3 className="text-2xl font-medium mb-4">Low $600k's</h3>

                <ul className="space-y-2 mb-8">
                  {completeProperty.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-[#f9f5ed] flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-black"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={completeProperty.image || "/placeholder.svg"}
                  alt="Property exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section with Slideshow */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(02)</h2>
              <h3 className="text-sm font-medium">Gallery</h3>
            </div>

            {/* Gallery Slideshow Component */}
            <GallerySlideshow images={property.gallery || [property.image]} />
          </div>
        </section>

        {/* Floor Plan Section */}
        <section className="py-16 bg-[#1e1e2d] text-white">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-white/70">(03)</h2>
              <h3 className="text-sm font-medium">Below is the floor plan</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-medium mb-6">Site plan and feature description</h2>

                <div className="relative h-[300px] border border-white/20 rounded-lg mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-lg">Floor plan illustration</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">Level 1</h3>
                <div className="space-y-4 mb-8">
                  {completeProperty.floorPlan.level1.rooms.map((room, index) => (
                    <div key={index} className="flex justify-between border-b border-white/10 pb-2">
                      <span>{room.name}</span>
                      <span>{room.size}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-medium mb-4">Level 2</h3>
                <div className="space-y-4">
                  {completeProperty.floorPlan.level2.rooms.map((room, index) => (
                    <div key={index} className="flex justify-between border-b border-white/10 pb-2">
                      <span>{room.name}</span>
                      <span>{room.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interior Finishes */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(04)</h2>
              <h3 className="text-sm font-medium">Interior Finishes</h3>
            </div>

            <div className="mb-8">
              <Tabs defaultValue="finishes1">
                <TabsList className="bg-transparent p-0 h-auto mb-8">
                  <TabsTrigger
                    value="finishes1"
                    className="px-0 py-2 mr-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none h-auto"
                  >
                    Finishes 1
                  </TabsTrigger>
                  <TabsTrigger
                    value="finishes2"
                    className="px-0 py-2 mr-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none h-auto"
                  >
                    Finishes 2
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {completeProperty.interiorFinishes.map((finish, index) => (
                <div key={index} className="aspect-square" style={{ backgroundColor: finish.color }}>
                  {index === completeProperty.interiorFinishes.length - 1 && (
                    <div className="relative h-full w-full">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Interior finish pattern"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(05)</h2>
              <h3 className="text-lg font-medium mb-4">Get in touch with us</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-2xl leading-relaxed mb-8">
                  We enjoy connecting with new people. Reach out to us by filling out the form, sending an email, or
                  simply giving us a call.
                </p>

                <div className="flex items-center mb-8">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Agent"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Smith</p>
                    <p className="text-sm text-muted-foreground">Sales Representative</p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-lg mb-1">0 00 000 000 CITY</p>
                  <p className="text-lg text-muted-foreground">miya@Miya.com</p>
                </div>
              </div>

              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm">
                        First name
                      </label>
                      <input
                        id="firstName"
                        placeholder="Hello, my first name is"
                        className="w-full border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 py-2 bg-transparent focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        placeholder="Hello, my last name is"
                        className="w-full border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 py-2 bg-transparent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      Contact me at
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 py-2 bg-transparent focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder={`I'm interested in ${completeProperty.unit}...`}
                      className="w-full border border-input bg-transparent rounded-md px-3 py-2 focus:outline-none"
                    ></textarea>
                  </div>

                  <Button type="submit" className="px-8">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Location Highlights */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(06)</h2>
              <h3 className="text-sm font-medium">About the community</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-2xl leading-relaxed mb-8">
                  {completeProperty.location.split(",")[0]}, fittingly named, sits at the heart of all the action, with
                  Farmington Park mere minutes to the north and Salt Lake City just ten minutes to the south.
                </p>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold">{completeProperty.locationHighlights.parks}</h4>
                    <p className="text-sm text-muted-foreground">Parks</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold">{completeProperty.locationHighlights.restaurants}</h4>
                    <p className="text-sm text-muted-foreground">Restaurants</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold">{completeProperty.locationHighlights.minutesToDowntown}</h4>
                    <p className="text-sm text-muted-foreground">Minutes to Downtown</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={completeProperty.image || "/placeholder.svg"}
                  alt="Neighborhood"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Schedule Tour Modal */}
      <ScheduleTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        communityName={completeProperty.unit}
      />

      <Footer />
    </div>
  )
}