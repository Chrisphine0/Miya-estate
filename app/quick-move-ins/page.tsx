import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Mail, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sample property data for quick move-ins
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
  },
]

export default function QuickMoveInsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl md:text-5xl font-medium mb-4">AI is eager and ready to move in.</h1>
              <p className="text-lg text-muted-foreground">
                Enjoy the benefits of new construction without the delay by exploring our available quick move-in homes
                below.
              </p>
            </div>

            <div className="flex justify-end mb-6 gap-4">
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="price-high">Price (High-Low)</SelectItem>
                  <SelectItem value="price-low">Price (Low-High)</SelectItem>
                  <SelectItem value="bedrooms">Bedrooms</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="3-bed">3+ Bedrooms</SelectItem>
                  <SelectItem value="4-bed">4+ Bedrooms</SelectItem>
                  <SelectItem value="2-bath">2+ Bathrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Property Grid */}
        <section className="py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quickMoveInProperties.map((property) => (
                <div key={property.id} className="border-b pb-8 mb-8">
                  <Link href={`/quick-move-ins/${property.id}`}>
                    <div className="relative h-[240px] mb-4 overflow-hidden group">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.unit}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <button className="absolute top-4 left-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="sr-only">Favorite</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </Link>

                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">{property.unit}</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-muted-foreground mr-2">From</span>
                      <span className="font-medium">{property.price}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Construction Status</span>
                      <span>{property.constructionStatus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Move in Ready</span>
                      <span>{property.moveInReady}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bedrooms</span>
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Baths</span>
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sq Ft</span>
                      <span>{property.sqft}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Car Garage</span>
                      <span>{property.carGarage}</span>
                    </div>
                    <div className="flex justify-between col-span-2">
                      <span className="text-muted-foreground">Square Footage</span>
                      <span>{property.squareFootage}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <p className="text-muted-foreground mb-1">Contact for Details</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-8 px-3">
                        <Mail className="h-3 w-3 mr-1" />
                        <span className="text-xs">Email</span>
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 px-3">
                        <Phone className="h-3 w-3 mr-1" />
                        <span className="text-xs">Call</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(01)</h2>
              <h3 className="text-lg font-medium mb-4">Get what's next?</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-2xl leading-relaxed mb-8">
                  We enjoy connecting with new people. Reach out to us by filling out the form, sending an email, or
                  simply giving us a call.
                </p>

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
                      <Input
                        id="firstName"
                        placeholder="Hello, my first name is"
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm">
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Hello, my last name is"
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      Contact me at
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm">
                        Phone (Optional)
                      </label>
                      <Input
                        id="phone"
                        placeholder="0 00 000 000"
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contactMethod" className="text-sm">
                        How to reach you?
                      </label>
                      <Select>
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent">
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="propertyType" className="text-sm">
                        Property Type
                      </label>
                      <Select>
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent">
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="townhome">Townhome</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="single-family">Single Family</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm">
                        Budget
                      </label>
                      <Select>
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent">
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500k">$500k - $600k</SelectItem>
                          <SelectItem value="600k">$600k - $700k</SelectItem>
                          <SelectItem value="700k">$700k - $800k</SelectItem>
                          <SelectItem value="800k">$800k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <Button type="submit" className="px-8">
                      Submit
                    </Button>
                    <Button variant="ghost" type="button">
                      Reset
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}