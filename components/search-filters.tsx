"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchIcon } from "lucide-react"

type SearchParams = {
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

export default function SearchFilters({ initialParams }: { initialParams: SearchParams }) {
  const router = useRouter()

  // Initialize state with values from URL or defaults
  const [searchQuery, setSearchQuery] = useState(initialParams.query || "")
  const [searchType, setSearchType] = useState(initialParams.type || "community")
  const [community, setCommunity] = useState(initialParams.community || "all")
  const [city, setCity] = useState(initialParams.city || "all")
  const [propertyType, setPropertyType] = useState(initialParams.propertyType || "all")
  const [buyRent, setBuyRent] = useState(initialParams.buyRent || "all")
  const [beds, setBeds] = useState(initialParams.beds || "any")
  const [baths, setBaths] = useState(initialParams.baths || "any")
  const [sqft, setSqft] = useState(initialParams.sqft || "any")

  // Handle search form submission
  const handleSearch = () => {
    const params = new URLSearchParams()

    // Only add parameters that have values
    if (searchQuery) {
      params.set("query", searchQuery)
      params.set("type", searchType)
    }

    if (community !== "all") params.set("community", community)
    if (city !== "all") params.set("city", city)
    if (propertyType !== "all") params.set("propertyType", propertyType)
    if (buyRent !== "all") params.set("buyRent", buyRent)
    if (beds !== "any") params.set("beds", beds)
    if (baths !== "any") params.set("baths", baths)
    if (sqft !== "any") params.set("sqft", sqft)

    // Navigate to search page with parameters
    router.push(`/search?${params.toString()}`)
  }

  // Handle clearing all filters
  const handleClearAll = () => {
    setSearchQuery("")
    setSearchType("community")
    setCommunity("all")
    setCity("all")
    setPropertyType("all")
    setBuyRent("all")
    setBeds("any")
    setBaths("any")
    setSqft("any")

    // Navigate to search page without parameters
    router.push("/search")
  }

  return (
    <div>
      {/* Search query input */}
      <div className="mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
            />
          </div>
          <Select value={searchType} onValueChange={setSearchType}>
            <SelectTrigger className="w-[150px] bg-transparent border-white/30 text-white">
              <SelectValue placeholder="Search by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="community">Community</SelectItem>
              <SelectItem value="city">City</SelectItem>
              <SelectItem value="type">Property Type</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Filter options */}
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
        <div className="relative">
          <Select value={community} onValueChange={setCommunity}>
            <SelectTrigger className="bg-transparent border-b border-white/30 rounded-none text-white">
              <SelectValue placeholder="Community" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Communities</SelectItem>
              <SelectItem value="thebee">The Bee</SelectItem>
              <SelectItem value="theclio">The Clio</SelectItem>
              <SelectItem value="theaspen">The Aspen</SelectItem>
              <SelectItem value="thepark">The Park</SelectItem>
              <SelectItem value="thevista">The Vista</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-white/50 mt-1">Community</div>
        </div>

        <div className="relative">
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="bg-transparent border-b border-white/30 rounded-none text-white">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="salt lake city">Salt Lake City</SelectItem>
              <SelectItem value="provo">Provo</SelectItem>
              <SelectItem value="park city">Park City</SelectItem>
              <SelectItem value="lehi">Lehi</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-white/50 mt-1">City</div>
        </div>

        <div className="relative">
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="bg-transparent border-b border-white/30 rounded-none text-white">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="townhomes">Townhome</SelectItem>
              <SelectItem value="apartments">Apartment</SelectItem>
              <SelectItem value="luxury homes">Single Family</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-white/50 mt-1">Type</div>
        </div>

        <div className="relative">
          <Select value={buyRent} onValueChange={setBuyRent}>
            <SelectTrigger className="bg-transparent border-b border-white/30 rounded-none text-white">
              <SelectValue placeholder="Buy/Rent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-white/50 mt-1">Buy/Rent</div>
        </div>

        <div className="relative">
          <Select value={beds} onValueChange={setBeds}>
            <SelectTrigger className="bg-transparent border-b border-white/30 rounded-none text-white">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-white/50 mt-1">Beds</div>
        </div>

        <div className="relative">
          <Select value={baths} onValueChange={setBaths}>
            <SelectTrigger className="bg-transparent border-b border-white/30 rounded-none text-white">
              <SelectValue placeholder="Baths" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-white/50 mt-1">Baths</div>
        </div>

        <div className="relative">
          <Select value={sqft} onValueChange={setSqft}>
            <SelectTrigger className="bg-transparent border-b border-white/30 rounded-none text-white">
              <SelectValue placeholder="Sq.Ft." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1000">1000+</SelectItem>
              <SelectItem value="1500">1500+</SelectItem>
              <SelectItem value="2000">2000+</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-white/50 mt-1">Sq.Ft.</div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button variant="outline" className="text-white border-white mr-2" onClick={handleClearAll}>
          Clear All
        </Button>
        <Button variant="outline" className="text-white border-white" onClick={handleSearch}>
          <SearchIcon className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  )
}