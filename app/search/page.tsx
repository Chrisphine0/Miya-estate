import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SearchFilters from "@/components/search-filters"
import PropertyMap from "@/components/property-map"

// Enhanced search results data with coordinates for map display
const searchResults = [
  {
    id: 1,
    name: "theBee",
    type: "Townhomes",
    beds: 3,
    baths: 2.5,
    sqft: 1850,
    address: "7755 Rosewood Drive",
    city: "Provo, Utah 84601",
    status: "Now Selling! 27 Units Available",
    image: "/Photo 10.png",
    slug: "the-bee",
    coordinates: { lat: 40.2338, lng: -111.6585 }, // Provo coordinates
    price: "$625,000",
  },
  {
    id: 2,
    name: "theClio",
    type: "Modern Apartments",
    beds: 2,
    baths: 2,
    sqft: 1200,
    address: "95 NW North Salt Lake",
    city: "Salt Lake City, Utah",
    status: "Now Renting! 12 Units Available",
    image: "/Photo 05.png",
    slug: "the-clio",
    coordinates: { lat: 40.7608, lng: -111.891 }, // Salt Lake City coordinates
    price: "$1,675+",
  },
  {
    id: 3,
    name: "theAspen",
    type: "Luxury Homes",
    beds: 4,
    baths: 3.5,
    sqft: 2500,
    address: "123 Highland Drive",
    city: "Salt Lake City, Utah",
    status: "Coming Soon! Join the Waitlist",
    image: "/Photo 06.png",
    slug: "the-aspen",
    coordinates: { lat: 40.7528, lng: -111.8765 }, // Salt Lake City (Highland) coordinates
    price: "$850,000",
  },
  {
    id: 4,
    name: "thePark",
    type: "Townhomes",
    beds: 3,
    baths: 2,
    sqft: 1650,
    address: "456 Park Avenue",
    city: "Park City, Utah",
    status: "Now Selling! 5 Units Available",
    image: "/Photo 13.png",
    slug: "the-park",
    coordinates: { lat: 40.6461, lng: -111.498 }, // Park City coordinates
    price: "$725,000",
  },
  {
    id: 5,
    name: "theVista",
    type: "Apartments",
    beds: 2,
    baths: 2,
    sqft: 1100,
    address: "789 Vista Drive",
    city: "Lehi, Utah",
    status: "Now Renting! 8 Units Available",
    image: "/Photo 15.png",
    slug: "the-vista",
    coordinates: { lat: 40.3916, lng: -111.8507 }, // Lehi coordinates
    price: "$1,450+",
  },
]

// Convert the component to an async function and await searchParams
export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    type?: string
    query?: string
    community?: string
    city?: string
    propertyType?: string
    buyRent?: string
    beds?: string
    baths?: string
    sqft?: string
  }
}) {
  // Ensure searchParams is awaited before accessing its properties
  const params = await Promise.resolve(searchParams)
  const { type, query, community, city, propertyType, buyRent, beds, baths, sqft } = params

  // Filter results based on search parameters
  let filteredResults = [...searchResults]

  // Filter by search query if provided
  if (query) {
    const searchTerm = query.toLowerCase()

    if (type === "community") {
      filteredResults = filteredResults.filter((result) => result.name.toLowerCase().includes(searchTerm))
    } else if (type === "city") {
      filteredResults = filteredResults.filter((result) => result.city.toLowerCase().includes(searchTerm))
    } else if (type === "type") {
      filteredResults = filteredResults.filter((result) => result.type.toLowerCase().includes(searchTerm))
    } else {
      // Default: search all fields
      filteredResults = filteredResults.filter(
        (result) =>
          result.name.toLowerCase().includes(searchTerm) ||
          result.city.toLowerCase().includes(searchTerm) ||
          result.type.toLowerCase().includes(searchTerm),
      )
    }
  }

  // Apply additional filters
  if (community && community !== "all") {
    filteredResults = filteredResults.filter((result) => result.name.toLowerCase() === community.toLowerCase())
  }

  if (city && city !== "all") {
    filteredResults = filteredResults.filter((result) => result.city.toLowerCase().includes(city.toLowerCase()))
  }

  if (propertyType && propertyType !== "all") {
    filteredResults = filteredResults.filter((result) => result.type.toLowerCase().includes(propertyType.toLowerCase()))
  }

  if (buyRent && buyRent !== "all") {
    if (buyRent === "buy") {
      filteredResults = filteredResults.filter((result) => !result.status.toLowerCase().includes("renting"))
    } else if (buyRent === "rent") {
      filteredResults = filteredResults.filter((result) => result.status.toLowerCase().includes("renting"))
    }
  }

  if (beds && beds !== "any") {
    const minBeds = Number.parseInt(beds)
    filteredResults = filteredResults.filter((result) => result.beds >= minBeds)
  }

  if (baths && baths !== "any") {
    const minBaths = Number.parseInt(baths)
    filteredResults = filteredResults.filter((result) => result.baths >= minBaths)
  }

  if (sqft && sqft !== "any") {
    const minSqft = Number.parseInt(sqft)
    filteredResults = filteredResults.filter((result) => result.sqft >= minSqft)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Search Filters */}
        <section className="bg-[#1e1e2d] text-white py-6">
          <div className="container">
            <div className="mb-4">
              {query && (
                <h2 className="text-xl font-medium mb-4">
                  Search results for: {query} {type && `(${type})`}
                </h2>
              )}
            </div>

            <SearchFilters initialParams={params} />
          </div>
        </section>

        {/* Map and Listings */}
        <section className="flex flex-col md:flex-row">
          {/* Map View */}
          <div className="w-full md:w-3/5 h-[600px] relative">
            <PropertyMap properties={filteredResults} />
          </div>

          {/* Listings */}
          <div className="w-full md:w-2/5 bg-white">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-medium">
                  {filteredResults.length} {filteredResults.length === 1 ? "Property" : "Properties"}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">Listings</p>
            </div>

            <div className="overflow-y-auto max-h-[500px]">
              {filteredResults.length > 0 ? (
                filteredResults.map((property) => (
                  <div key={property.id} className="p-6 border-b">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative h-[150px] w-full md:w-[150px]">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium mb-1">{property.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{property.type}</p>

                        <div className="flex gap-4 mb-2">
                          <div className="flex items-center text-xs">
                            <span className="font-medium mr-1">{property.beds}</span>
                            <span className="text-muted-foreground">Beds</span>
                          </div>
                          <div className="flex items-center text-xs">
                            <span className="font-medium mr-1">{property.baths}</span>
                            <span className="text-muted-foreground">Baths</span>
                          </div>
                          <div className="flex items-center text-xs">
                            <span className="font-medium mr-1">{property.sqft}</span>
                            <span className="text-muted-foreground">Sq.Ft.</span>
                          </div>
                        </div>

                        <div className="mb-2">
                          <p className="text-xs text-muted-foreground">{property.address},</p>
                          <p className="text-xs text-muted-foreground">{property.city}</p>
                        </div>

                        <p className="text-xs mb-2">{property.status}</p>
                        <p className="text-sm font-medium mb-4">{property.price}</p>

                        <Link href={`/properties/${property.slug}`} className="text-xs text-primary hover:underline">
                          See More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No properties found matching your search criteria.</p>
                  <Link href="/search">
                    <Button variant="outline" className="mt-4">
                      Clear Search
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}