import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MapPin, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TheBeverlyOnePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="container py-12">
            <Link href="/communities" className="flex items-center text-sm mb-6 hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Communities
            </Link>

            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="text-muted-foreground">_</span>theBEVERLY
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6">Luxury Apartments</h2>
                <div className="flex items-center text-sm mb-8">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Salt Lake City, Utah</span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="bg-[#f9f5ed] rounded-full px-4 py-2 flex items-center mb-4">
                  <div className="bg-white rounded-full p-2 mr-2">
                    <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                  </div>
                  <span className="text-sm font-medium">MODEL FOR SALE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Property Image */}
          <div className="w-full h-[400px] relative">
            <Image src="/Photo 04.png" alt="The Beverly apartments exterior" fill className="object-cover" />
          </div>
        </section>

        {/* Property Details */}
        <section className="py-12 bg-[#f9f5ed]">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-medium mb-4">theBEVERLY More</h3>
                <h4 className="text-xl">Apartment Photos</h4>
              </div>

              <div className="grid grid-cols-3 gap-4 md:w-1/2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="relative aspect-square overflow-hidden rounded-md">
                    <Image src="/Photo 05.png" alt={`Property image ${item}`} fill className="object-cover" />
                    {item === 1 && (
                      <div className="absolute bottom-2 right-2 bg-white rounded-full p-2">
                        <span className="text-xs font-medium">01/06</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="text-lg max-w-2xl">
                Experience luxury living in the heart of Salt Lake City. theBEVERLY offers modern apartments with
                premium finishes and amenities designed for contemporary urban lifestyles.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-medium mb-4">From $1,675+ Monthly</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-[#f1f1f1]">
          <div className="container">
            <h3 className="text-2xl font-medium mb-8">Location</h3>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Map location" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Available Units */}
        <section className="py-12">
          <div className="container">
            <h3 className="text-2xl font-medium mb-8">Available Floor Plans</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((unit) => (
                <div key={unit} className="flex flex-col">
                  <div className="relative h-[200px] overflow-hidden rounded-lg mb-4">
                    <Image src="/Photo 06.png" alt={`Unit ${unit}`} fill className="object-cover" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Plan {String.fromCharCode(64 + unit)}</span>
                      <span className="text-muted-foreground">$1,675+</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Beds</p>
                        <p>{unit < 3 ? 1 : 2}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Baths</p>
                        <p>{unit < 3 ? 1 : 2}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Sq Ft</p>
                        <p>{700 + unit * 100}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floor Plans */}
        <section className="py-12 bg-[#1e1e2d] text-white">
          <div className="container">
            <h3 className="text-2xl font-medium mb-8">Below is the floor plan</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[300px] border border-white/20 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg">Site plan and feature illustration</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Floors</h4>
                    <p>5</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Units</h4>
                    <p>120 apartments</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Bedrooms</h4>
                    <p>1-2</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Bathrooms</h4>
                    <p>1-2</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Parking</h4>
                    <p>Covered</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Outdoor Space</h4>
                    <p>Balcony</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interior Finishes */}
        <section className="py-12">
          <div className="container">
            <h3 className="text-2xl font-medium mb-8">Interior Finishes</h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="aspect-square bg-[#1e1e2d]"></div>
              <div className="aspect-square bg-[#a89385]"></div>
              <div className="aspect-square bg-[#d1d1d1]"></div>
              <div className="aspect-square bg-[#e5e2dc]"></div>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Interior finish pattern"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 bg-[#f9f5ed]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-xl leading-relaxed mb-6">
                  "Living at theBEVERLY has been an amazing experience. The location is perfect, the amenities are
                  top-notch, and the staff is incredibly responsive and friendly."
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src="/Team/Profile Photo 01.png"
                      alt="Resident"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Emma Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Resident</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-medium mb-4">Community</h3>
                <p className="text-lg mb-6">
                  Located in the vibrant heart of Salt Lake City, theBEVERLY offers residents easy access to shopping,
                  dining, entertainment, and public transportation. Enjoy the convenience of urban living with the
                  comfort of a luxury community.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold">06</h4>
                    <p className="text-sm text-muted-foreground">Parks</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold">12</h4>
                    <p className="text-sm text-muted-foreground">Restaurants</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold">05</h4>
                    <p className="text-sm text-muted-foreground">Minutes to Downtown</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image src="/Photo 13.png" alt="Community amenities" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-[#f9f5ed]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-medium mb-6">Interested in theBEVERLY?</h3>
                <p className="text-lg mb-8">
                  Schedule a tour or request more information about available units and pricing.
                </p>
                <Button size="lg" className="px-8">
                  Schedule a Tour
                </Button>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src="/Team/Profile Photo 06.png"
                      alt="Leasing Agent"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Leasing Manager</p>
                    <p className="text-sm">michael@miyaolio.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}