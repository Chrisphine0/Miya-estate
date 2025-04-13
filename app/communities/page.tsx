"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Enhanced property data with unique communities
const communities = [
  {
    id: 1,
    name: "theBEVERLY",
    location: "Salt Lake City",
    status: "Now Leasing",
    type: "Luxury Apartments",
    price: "$1,675+",
    period: "Monthly",
    image: "/Photo 04.png",
    forSale: true,
    slug: "the-beverly",
    description: "Modern luxury apartments in the heart of Salt Lake City with premium amenities and stunning views.",
    bedrooms: "1-2",
    bathrooms: "1-2",
    sqft: "700-1,100",
    amenities: ["Fitness Center", "Rooftop Lounge", "Pet Friendly", "In-unit Laundry"],
    yearBuilt: 2022,
  },
  {
    id: 2,
    name: "theBee",
    location: "Provo",
    status: "Now Selling",
    type: "Townhomes",
    price: "$625,000+",
    period: "",
    image: "/Photo 10.png",
    forSale: true,
    slug: "the-bee",
    description: "Contemporary townhomes designed for modern living with spacious floor plans and premium finishes.",
    bedrooms: "3",
    bathrooms: "2.5",
    sqft: "1,850",
    amenities: ["2-Car Garage", "Private Patio", "Smart Home Features", "Community Park"],
    yearBuilt: 2023,
  },
  {
    id: 3,
    name: "theClio",
    location: "Park City",
    status: "Coming Soon",
    type: "Mountain Condos",
    price: "$850,000+",
    period: "",
    image: "/Photo 06.png",
    forSale: false,
    slug: "the-clio",
    description: "Luxury mountain condominiums with ski-in/ski-out access and breathtaking mountain views.",
    bedrooms: "2-3",
    bathrooms: "2-3",
    sqft: "1,200-2,000",
    amenities: ["Ski Storage", "Hot Tub", "Fireplace", "Concierge Service"],
    yearBuilt: 2024,
  },
  {
    id: 4,
    name: "theAspen",
    location: "Lehi",
    status: "Now Selling",
    type: "Single Family Homes",
    price: "$750,000+",
    period: "",
    image: "/Photo 13.png",
    forSale: true,
    slug: "the-aspen",
    description: "Spacious family homes in a growing community with modern designs and family-friendly features.",
    bedrooms: "4-5",
    bathrooms: "3-4",
    sqft: "2,500-3,500",
    amenities: ["Large Yards", "Bonus Room", "3-Car Garage", "Community Pool"],
    yearBuilt: 2023,
  },
  {
    id: 5,
    name: "theLane",
    location: "Salt Lake City",
    status: "Now Leasing",
    type: "Urban Lofts",
    price: "$1,450+",
    period: "Monthly",
    image: "/Photo 15.png",
    forSale: false,
    slug: "the-lane",
    description: "Industrial-inspired urban lofts with high ceilings, exposed ductwork, and modern amenities.",
    bedrooms: "1-2",
    bathrooms: "1-2",
    sqft: "800-1,200",
    amenities: ["Co-working Space", "Bike Storage", "Rooftop Deck", "Dog Wash Station"],
    yearBuilt: 2022,
  },
  {
    id: 6,
    name: "theVista",
    location: "Draper",
    status: "Now Selling",
    type: "Luxury Townhomes",
    price: "$575,000+",
    period: "",
    image: "/Photo 09.png",
    forSale: true,
    slug: "the-vista",
    description: "Hillside townhomes with panoramic valley views and thoughtfully designed living spaces.",
    bedrooms: "3",
    bathrooms: "2.5",
    sqft: "1,750",
    amenities: ["Valley Views", "Hiking Trails", "Community Garden", "2-Car Garage"],
    yearBuilt: 2023,
  },
  {
    id: 7,
    name: "thePark",
    location: "Ogden",
    status: "Now Leasing",
    type: "Garden Apartments",
    price: "$1,250+",
    period: "Monthly",
    image: "/Photo 11.png",
    forSale: false,
    slug: "the-park",
    description: "Serene garden apartments surrounded by green spaces and walking paths.",
    bedrooms: "1-3",
    bathrooms: "1-2",
    sqft: "700-1,400",
    amenities: ["Garden Plots", "Playground", "Fitness Trail", "Pet Park"],
    yearBuilt: 2021,
  },
  {
    id: 8,
    name: "theHaven",
    location: "Bountiful",
    status: "Coming Soon",
    type: "Retirement Community",
    price: "$1,800+",
    period: "Monthly",
    image: "/Photo 12.png",
    forSale: false,
    slug: "the-haven",
    description: "Active adult community with luxury amenities and maintenance-free living.",
    bedrooms: "1-2",
    bathrooms: "1-2",
    sqft: "900-1,500",
    amenities: ["Clubhouse", "Pool", "Fitness Center", "Social Activities"],
    yearBuilt: 2024,
  },
  {
    id: 9,
    name: "theSummit",
    location: "Park City",
    status: "Now Selling",
    type: "Mountain Estates",
    price: "$1.2M+",
    period: "",
    image: "/Photo 05.png",
    forSale: true,
    slug: "the-summit",
    description: "Exclusive mountain estates with custom designs and breathtaking views.",
    bedrooms: "4-6",
    bathrooms: "4-6",
    sqft: "3,500-5,000",
    amenities: ["Private Ski Access", "Wine Cellar", "Home Theater", "Heated Driveway"],
    yearBuilt: 2023,
  },
]

export default function CommunitiesPage() {
  // State for filters
  const [communityFilter, setCommunityFilter] = useState("any")
  const [statusFilter, setStatusFilter] = useState("any")
  const [locationFilter, setLocationFilter] = useState("any")
  const [typeFilter, setTypeFilter] = useState("any")
  const [priceSort, setPriceSort] = useState("any")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCommunities, setFilteredCommunities] = useState(communities)

  // Apply filters when any filter changes
  useEffect(() => {
    let results = [...communities]

    // Apply community name filter
    if (communityFilter !== "any") {
      results = results.filter((community) => community.slug === communityFilter)
    }

    // Apply status filter
    if (statusFilter === "for-sale") {
      results = results.filter((community) => community.forSale)
    } else if (statusFilter === "for-rent") {
      results = results.filter((community) => !community.forSale)
    }

    // Apply location filter
    if (locationFilter !== "any") {
      results = results.filter((community) => community.location === locationFilter)
    }

    // Apply type filter
    if (typeFilter !== "any") {
      results = results.filter((community) => community.type === typeFilter)
    }

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (community) =>
          community.name.toLowerCase().includes(query) ||
          community.location.toLowerCase().includes(query) ||
          community.type.toLowerCase().includes(query) ||
          community.description.toLowerCase().includes(query),
      )
    }

    // Apply price sorting
    if (priceSort === "price-high") {
      results.sort((a, b) => {
        const priceA = parsePrice(a.price)
        const priceB = parsePrice(b.price)
        return priceB - priceA
      })
    } else if (priceSort === "price-low") {
      results.sort((a, b) => {
        const priceA = parsePrice(a.price)
        const priceB = parsePrice(b.price)
        return priceA - priceB
      })
    }

    setFilteredCommunities(results)
  }, [communityFilter, statusFilter, locationFilter, typeFilter, priceSort, searchQuery])

  // Helper function to parse price strings for sorting
  const parsePrice = (priceString) => {
    // Extract numeric value from price string (e.g., "$1,675+" -> 1675)
    const numericValue = priceString.replace(/[^0-9.]/g, "")
    return Number.parseFloat(numericValue) || 0
  }

  // Get unique locations for filter dropdown
  const locations = ["any", ...new Set(communities.map((community) => community.location))]

  // Get unique property types for filter dropdown
  const propertyTypes = ["any", ...new Set(communities.map((community) => community.type))]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          {/* Page Header */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <span className="text-sm font-medium text-muted-foreground mr-6">(01)</span>
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
            <h1 className="text-4xl font-medium">Our community details</h1>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Input
                placeholder="Search communities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-between mb-10 gap-4">
            <div className="flex flex-wrap gap-4">
              <Select value={communityFilter} onValueChange={setCommunityFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Community name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Community</SelectItem>
                  {communities.map((community) => (
                    <SelectItem key={community.id} value={community.slug}>
                      {community.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Location</SelectItem>
                  {locations
                    .filter((location) => location !== "any")
                    .map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Type</SelectItem>
                  {propertyTypes
                    .filter((type) => type !== "any")
                    .map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Status</SelectItem>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="for-rent">For Rent</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceSort} onValueChange={setPriceSort}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Default</SelectItem>
                  <SelectItem value="price-high">Price (High-Low)</SelectItem>
                  <SelectItem value="price-low">Price (Low-High)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredCommunities.length} of {communities.length} communities
            </p>
          </div>

          {/* Property Grid */}
          {filteredCommunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCommunities.map((community) => (
                <div key={community.id} className="group">
                  <Link href={`/communities/${community.slug}`}>
                    <div className="relative h-[240px] mb-4 overflow-hidden">
                      <Image
                        src={community.image || "/placeholder.svg"}
                        alt={community.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      {community.forSale && (
                        <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1">
                          <span className="text-xs font-medium">FOR SALE</span>
                        </div>
                      )}
                      {!community.forSale && community.status === "Coming Soon" && (
                        <div className="absolute top-4 left-4 bg-[#1e1e2d] text-white rounded-full px-3 py-1">
                          <span className="text-xs font-medium">COMING SOON</span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">{community.name}</h3>
                      <span className="text-sm">{community.status}</span>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-sm text-muted-foreground">{community.location}</p>
                      <p className="text-sm text-muted-foreground">
                        {community.type} / Starting From — {community.price} {community.period}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">No communities found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}