"use client"

import { useState } from "react"
import { use } from "react" // Add this import
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MapPin, Star, Check } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PropertyMap from "@/components/property-map"
import GallerySlideshow from "@/components/gallery-slideshow"
import ScheduleTourModal from "@/components/schedule-tour-modal"

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
    longDescription:
      "Experience the height of urban luxury living at theBEVERLY. Our modern apartments feature premium finishes, spacious floor plans, and breathtaking city views. Located in the heart of Salt Lake City, residents enjoy easy access to dining, shopping, entertainment, and public transportation. Our community amenities include a state-of-the-art fitness center, rooftop lounge, and pet-friendly accommodations.",
    bedrooms: "1-2",
    bathrooms: "1-2",
    sqft: "700-1,100",
    amenities: [
      "Fitness Center",
      "Rooftop Lounge",
      "Pet Friendly",
      "In-unit Laundry",
      "Controlled Access",
      "Package Lockers",
      "Bike Storage",
      "EV Charging",
    ],
    yearBuilt: 2022,
    coordinates: { lat: 40.7608, lng: -111.891 },
    gallery: ["/Photo 04.png", "/Photo 05.png", "/Photo 06.png", "/Photo 13.png"],
    floorPlans: [
      { name: "Studio", sqft: "700", beds: 0, baths: 1, price: "$1,675", image: "/Photo 05.png" },
      { name: "One Bedroom", sqft: "850", beds: 1, baths: 1, price: "$1,875", image: "/Photo 06.png" },
      { name: "Two Bedroom", sqft: "1,100", beds: 2, baths: 2, price: "$2,275", image: "/Photo 13.png" },
    ],
    testimonials: [
      {
        quote:
          "Living at theBEVERLY has been an amazing experience. The location is perfect, the amenities are top-notch, and the staff is incredibly responsive and friendly.",
        author: "Emma Rodriguez",
        title: "Resident",
        image: "/Team/Profile Photo 01.png",
      },
    ],
    team: [
      {
        name: "Michael Chen",
        title: "Leasing Manager",
        email: "michael@miyaolio.com",
        phone: "801-555-1234",
        image: "/Team/Profile Photo 06.png",
      },
    ],
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
    longDescription:
      "theBee offers modern townhomes designed for today's lifestyle. With thoughtful layouts, premium finishes, and energy-efficient features, these homes provide the perfect balance of style and functionality. Located in a vibrant Provo neighborhood, residents enjoy proximity to universities, shopping centers, and outdoor recreation areas. Each townhome includes a private 2-car garage, spacious primary suite, and open-concept living areas.",
    bedrooms: "3",
    bathrooms: "2.5",
    sqft: "1,850",
    amenities: [
      "2-Car Garage",
      "Private Patio",
      "Smart Home Features",
      "Community Park",
      "Energy Star Appliances",
      "Quartz Countertops",
      "Hardwood Floors",
      "9-Foot Ceilings",
    ],
    yearBuilt: 2023,
    coordinates: { lat: 40.2338, lng: -111.6585 },
    gallery: ["/Photo 10.png", "/Photo 11.png", "/Photo 12.png", "/Photo 15.png"],
    floorPlans: [
      { name: "Plan A", sqft: "1,750", beds: 3, baths: 2.5, price: "$625,000", image: "/Photo 11.png" },
      { name: "Plan B", sqft: "1,850", beds: 3, baths: 2.5, price: "$645,000", image: "/Photo 12.png" },
      { name: "Plan C", sqft: "2,000", beds: 3, baths: 3, price: "$675,000", image: "/Photo 15.png" },
    ],
    testimonials: [
      {
        quote:
          "We love our new home at theBee! The quality of construction is excellent, and the neighborhood has such a great community feel.",
        author: "James & Sarah Thompson",
        title: "Homeowners",
        image: "/Team/Profile Photo 01.png",
      },
    ],
    team: [
      {
        name: "Jennifer Park",
        title: "Sales Representative",
        email: "jennifer@miyaolio.com",
        phone: "801-555-5678",
        image: "/Team/Profile Photo 06.png",
      },
    ],
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
    longDescription:
      "theClio represents the pinnacle of mountain living in Park City. These luxury condominiums offer direct ski access, panoramic mountain views, and sophisticated alpine-inspired design. Each residence features premium finishes, spacious living areas, and private balconies. Community amenities include a heated outdoor pool, fitness center, ski valet, and owners' lounge. Experience the perfect balance of adventure and luxury in one of Utah's most coveted locations.",
    bedrooms: "2-3",
    bathrooms: "2-3",
    sqft: "1,200-2,000",
    amenities: [
      "Ski Storage",
      "Hot Tub",
      "Fireplace",
      "Concierge Service",
      "Heated Outdoor Pool",
      "Fitness Center",
      "Ski Valet",
      "Owners' Lounge",
    ],
    yearBuilt: 2024,
    coordinates: { lat: 40.6461, lng: -111.498 },
    gallery: ["/Photo 06.png", "/Photo 09.png", "/Photo 13.png", "/Photo 15.png"],
    floorPlans: [
      { name: "Alpine", sqft: "1,200", beds: 2, baths: 2, price: "$850,000", image: "/Photo 09.png" },
      { name: "Summit", sqft: "1,600", beds: 2, baths: 2.5, price: "$950,000", image: "/Photo 13.png" },
      { name: "Pinnacle", sqft: "2,000", beds: 3, baths: 3, price: "$1,150,000", image: "/Photo 15.png" },
    ],
    testimonials: [
      {
        quote:
          "We've been looking for the perfect mountain retreat for years, and theClio exceeds all our expectations. The location and amenities are unmatched.",
        author: "Robert & Lisa Chen",
        title: "Future Residents",
        image: "/Team/Profile Photo 01.png",
      },
    ],
    team: [
      {
        name: "Daniel Morgan",
        title: "Sales Director",
        email: "daniel@miyaolio.com",
        phone: "435-555-9876",
        image: "/Team/Profile Photo 06.png",
      },
    ],
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
    longDescription:
      "theAspen offers thoughtfully designed single-family homes in the thriving city of Lehi. These spacious residences feature open floor plans, designer finishes, and family-friendly amenities. The community includes walking trails, parks, and a community pool. Located near Silicon Slopes, residents enjoy proximity to employment centers, shopping, dining, and outdoor recreation. Each home includes smart home technology, energy-efficient features, and flexible living spaces to accommodate various lifestyles.",
    bedrooms: "4-5",
    bathrooms: "3-4",
    sqft: "2,500-3,500",
    amenities: [
      "Large Yards",
      "Bonus Room",
      "3-Car Garage",
      "Community Pool",
      "Walking Trails",
      "Smart Home Technology",
      "Energy Efficient",
      "Parks",
    ],
    yearBuilt: 2023,
    coordinates: { lat: 40.3916, lng: -111.8507 },
    gallery: ["/Photo 13.png", "/Photo 04.png", "/Photo 05.png", "/Photo 06.png"],
    floorPlans: [
      { name: "Cottonwood", sqft: "2,500", beds: 4, baths: 3, price: "$750,000", image: "/Photo 04.png" },
      { name: "Maple", sqft: "3,000", beds: 4, baths: 3.5, price: "$825,000", image: "/Photo 05.png" },
      { name: "Sequoia", sqft: "3,500", beds: 5, baths: 4, price: "$895,000", image: "/Photo 06.png" },
    ],
    testimonials: [
      {
        quote:
          "Our family couldn't be happier with our new home at theAspen. The quality of construction, attention to detail, and community amenities are exceptional.",
        author: "The Johnson Family",
        title: "Homeowners",
        image: "/Team/Profile Photo 01.png",
      },
    ],
    team: [
      {
        name: "Sophia Williams",
        title: "Sales Manager",
        email: "sophia@miyaolio.com",
        phone: "801-555-4321",
        image: "/Team/Profile Photo 06.png",
      },
    ],
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
    longDescription:
      "theLane offers industrial-chic lofts in a converted warehouse in downtown Salt Lake City. These unique residences feature high ceilings, exposed brick walls, and large windows that flood the space with natural light. Modern amenities include a co-working space, rooftop deck with city views, and secure bike storage. Located in the heart of the city's arts district, residents enjoy walkable access to galleries, restaurants, shops, and public transportation  residents enjoy walkable access to galleries, restaurants, shops, and public transportation. Experience authentic urban living with a perfect blend of historic character and modern convenience.",
    bedrooms: "1-2",
    bathrooms: "1-2",
    sqft: "800-1,200",
    amenities: [
      "Co-working Space",
      "Bike Storage",
      "Rooftop Deck",
      "Dog Wash Station",
      "Exposed Brick",
      "High Ceilings",
      "Large Windows",
      "Stainless Appliances",
    ],
    yearBuilt: 2022,
    coordinates: { lat: 40.7528, lng: -111.8765 },
    gallery: ["/Photo 15.png", "/Photo 09.png", "/Photo 10.png", "/Photo 11.png"],
    floorPlans: [
      { name: "Studio Loft", sqft: "800", beds: 1, baths: 1, price: "$1,450", image: "/Photo 09.png" },
      { name: "One Bedroom Loft", sqft: "950", beds: 1, baths: 1, price: "$1,675", image: "/Photo 10.png" },
      { name: "Two Bedroom Loft", sqft: "1,200", beds: 2, baths: 2, price: "$2,100", image: "/Photo 11.png" },
    ],
    testimonials: [
      {
        quote:
          "theLane perfectly captures the urban lifestyle I was looking for. The industrial aesthetic, downtown location, and community amenities make it the perfect place to call home.",
        author: "Alex Rivera",
        title: "Resident",
        image: "/Team/Profile Photo 01.png",
      },
    ],
    team: [
      {
        name: "Olivia Kim",
        title: "Leasing Manager",
        email: "olivia@miyaolio.com",
        phone: "801-555-7890",
        image: "/Team/Profile Photo 06.png",
      },
    ],
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
    longDescription:
      "theVista offers luxury townhomes perched on the Draper hillside with breathtaking views of the Salt Lake Valley. These thoughtfully designed residences feature open floor plans, premium finishes, and large windows to maximize the spectacular views. Community amenities include access to hiking trails, a community garden, and outdoor gathering spaces. Each home includes a private 2-car garage, spacious primary suite, and outdoor living area. Experience elevated living with the perfect balance of natural beauty and modern luxury.",
    bedrooms: "3",
    bathrooms: "2.5",
    sqft: "1,750",
    amenities: [
      "Valley Views",
      "Hiking Trails",
      "Community Garden",
      "2-Car Garage",
      "Outdoor Living Space",
      "Premium Finishes",
      "Smart Home Features",
      "Energy Efficient",
    ],
    yearBuilt: 2023,
    coordinates: { lat: 40.5246, lng: -111.8638 },
    gallery: ["/Photo 09.png", "/Photo 12.png", "/Photo 13.png", "/Photo 15.png"],
    floorPlans: [
      { name: "Horizon", sqft: "1,650", beds: 3, baths: 2.5, price: "$575,000", image: "/Photo 12.png" },
      { name: "Panorama", sqft: "1,750", beds: 3, baths: 2.5, price: "$625,000", image: "/Photo 13.png" },
      { name: "Summit", sqft: "1,950", beds: 3, baths: 3, price: "$675,000", image: "/Photo 15.png" },
    ],
    testimonials: [
      {
        quote:
          "The views from our townhome at theVista are absolutely stunning. We love watching the sunset over the valley from our balcony every evening.",
        author: "Michael & Emily Wilson",
        title: "Homeowners",
        image: "/Team/Profile Photo 01.png",
      },
    ],
    team: [
      {
        name: "David Thompson",
        title: "Sales Representative",
        email: "david@miyaolio.com",
        phone: "801-555-2468",
        image: "/Team/Profile Photo 06.png",
      },
    ],
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
    longDescription:
      "thePark offers a tranquil living experience with garden-style apartments nestled among lush landscaping and walking paths. These thoughtfully designed residences feature modern finishes, spacious floor plans, and private patios or balconies. Community amenities include garden plots for residents, a playground, fitness trail, and pet park. Located in a peaceful Ogden neighborhood, residents enjoy proximity to parks, shopping, dining, and outdoor recreation. Experience the perfect balance of natural beauty and modern convenience in these serene apartment homes.",
    bedrooms: "1-3",
    bathrooms: "1-2",
    sqft: "700-1,400",
    amenities: [
      "Garden Plots",
      "Playground",
      "Fitness Trail",
      "Pet Park",
      "Private Patios/Balconies",
      "In-unit Laundry",
      "Controlled Access",
      "Package Lockers",
    ],
    yearBuilt: 2021,
    coordinates: { lat: 41.223, lng: -111.9738 },
    gallery: ["/Photo 11.png", "/Photo 04.png", "/Photo 05.png", "/Photo 06.png"],
    floorPlans: [
      { name: "Lily", sqft: "700", beds: 1, baths: 1, price: "$1,250", image: "/Photo 04.png" },
      { name: "Iris", sqft: "950", beds: 2, baths: 1, price: "$1,450", image: "/Photo 05.png" },
      { name: "Magnolia", sqft: "1,400", beds: 3, baths: 2, price: "$1,850", image: "/Photo 06.png" },
    ],
    testimonials: [
      {
        quote:
          "Living at thePark has been such a refreshing experience. I love having my own garden plot and the peaceful atmosphere of the community.",
        author: "Samantha Lee",
        title: "Resident",
        image: "/Team/Profile Photo 01.png",
      },
    ],
    team: [
      {
        name: "Marcus Johnson",
        title: "Property Manager",
        email: "marcus@miyaolio.com",
        phone: "801-555-1357",
        image: "/Team/Profile Photo 06.png",
      },
    ],
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
    longDescription:
      "theHaven offers a premier active adult community designed for those 55 and better who seek a maintenance-free lifestyle without sacrificing luxury or comfort. These thoughtfully designed residences feature single-level living, accessible design, and premium finishes. Community amenities include a clubhouse with social activities, fitness center, pool, and beautifully landscaped grounds. Located in charming Bountiful, residents enjoy proximity to shopping, dining, healthcare, and cultural attractions. Experience the perfect balance of independence, community, and convenience in this exceptional retirement community.",
    bedrooms: "1-2",
    bathrooms: "1-2",
    sqft: "900-1,500",
    amenities: [
      "Clubhouse",
      "Pool",
      "Fitness Center",
      "Social Activities",
      "Single-Level Living",
      "Accessible Design",
      "Maintenance-Free",
      "Landscaped Grounds",
    ],
    yearBuilt: 2024,
    coordinates: { lat: 40.8894, lng: -111.88 },
    gallery: ["/Photo 12.png", "/Photo 13.png", "/Photo 15.png", "/Photo 09.png"],
    floorPlans: [
      { name: "Serenity", sqft: "900", beds: 1, baths: 1, price: "$1,800", image: "/Photo 13.png" },
      { name: "Harmony", sqft: "1,200", beds: 2, baths: 1.5, price: "$2,100", image: "/Photo 15.png" },
      { name: "Tranquility", sqft: "1,500", beds: 2, baths: 2, price: "$2,400", image: "/Photo 09.png" },
    ],
    testimonials: [
      {
        quote:
          "We're looking forward to moving into theHaven. The amenities and social activities are exactly what we've been looking for in our retirement years.",
        author: "Richard & Barbara Adams",
        title: "Future Residents",
        image: "/Team/Profile Photo 01.png",
      },
    ],
    team: [
      {
        name: "Patricia Nelson",
        title: "Community Director",
        email: "patricia@miyaolio.com",
        phone: "801-555-9753",
        image: "/Team/Profile Photo 06.png",
      },
    ],
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
    longDescription:
      "theSummit represents the pinnacle of luxury mountain living with exclusive custom estates in Park City. These exceptional residences feature architectural designs that blend seamlessly with the natural surroundings, premium finishes, and expansive windows to showcase the breathtaking mountain views. Each home includes luxury amenities such as private ski access, wine cellars, home theaters, and heated driveways. Located in one of Utah's most prestigious areas, residents enjoy proximity to world-class skiing, dining, shopping, and cultural attractions. Experience unparalleled mountain luxury in these extraordinary custom homes.",
    bedrooms: "4-6",
    bathrooms: "4-6",
    sqft: "3,500-5,000",
    amenities: [
      "Private Ski Access",
      "Wine Cellar",
      "Home Theater",
      "Heated Driveway",
      "Custom Design",
      "Premium Finishes",
      "Smart Home Technology",
      "Mountain Views",
    ],
    yearBuilt: 2023,
    coordinates: { lat: 40.6647, lng: -111.4955 },
    gallery: ["/Photo 05.png", "/Photo 10.png", "/Photo 11.png", "/Photo 12.png"],
    floorPlans: [
      { name: "Alpine", sqft: "3,500", beds: 4, baths: 4, price: "$1.2M", image: "/Photo 10.png" },
      { name: "Everest", sqft: "4,200", beds: 5, baths: 5, price: "$1.5M", image: "/Photo 11.png" },
      { name: "Olympus", sqft: "5,000", beds: 6, baths: 6, price: "$1.8M", image: "/Photo 12.png" },
    ],
    testimonials: [
      {
        quote:
          "Our custom home at theSummit exceeds all expectations. The attention to detail, quality of construction, and breathtaking views make it truly special.",
        author: "Thomas & Elizabeth Grant",
        title: "Homeowners",
        image: "/Team/Profile Photo 01.png",
      },
    ],
    team: [
      {
        name: "Jonathan Blake",
        title: "Luxury Sales Director",
        email: "jonathan@miyaolio.com",
        phone: "435-555-8642",
        image: "/Team/Profile Photo 06.png",
      },
    ],
  },
]

export default function CommunityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params)
  const { slug } = resolvedParams

  // State for tour scheduling modal
  const [isTourModalOpen, setIsTourModalOpen] = useState(false)

  // Find the community data based on the slug parameter
  const community = communities.find((c) => c.slug === slug)

  // If community not found, use a fallback
  if (!community) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="container">
            <h1 className="text-2xl font-medium mb-4">Community Not Found</h1>
            <p className="mb-6">The community you're looking for doesn't exist or has been removed.</p>
            <Link href="/communities">
              <Button>Back to Communities</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

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
                  <span className="text-muted-foreground">_</span>
                  {community.name}
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6">{community.type}</h2>
                <div className="flex items-center text-sm mb-8">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{community.location}</span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="bg-[#f9f5ed] rounded-full px-4 py-2 flex items-center mb-4">
                  <div className="bg-white rounded-full p-2 mr-2">
                    <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                  </div>
                  <span className="text-sm font-medium">{community.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Property Image */}
          <div className="w-full h-[400px] relative">
            <Image
              src={community.image || "/placeholder.svg"}
              alt={`${community.name} exterior`}
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Property Details with Slideshow */}
        <section className="py-12 bg-[#f9f5ed]">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-medium mb-4">{community.name} Gallery</h3>
                <h4 className="text-xl">{community.type} Photos</h4>
              </div>
            </div>

            {/* Gallery Slideshow Component */}
            <div className="mb-12">
              <GallerySlideshow images={community.gallery} communityName={community.name} />
            </div>

            <div className="mt-12">
              <p className="text-lg max-w-2xl mb-6">{community.longDescription}</p>

              <div className="mt-8">
                <h3 className="text-2xl font-medium mb-4">
                  From {community.price} {community.period}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-[#f1f1f1]">
          <div className="container">
            <h3 className="text-2xl font-medium mb-8">Location</h3>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <PropertyMap
                properties={[
                  {
                    id: community.id,
                    name: community.name,
                    address: "",
                    city: community.location,
                    coordinates: community.coordinates,
                    price: community.price,
                    image: community.image,
                    slug: community.slug,
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Floor Plans */}
        <section className="py-12">
          <div className="container">
            <h3 className="text-2xl font-medium mb-8">Available Floor Plans</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {community.floorPlans.map((plan, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative h-[200px] overflow-hidden rounded-lg mb-4">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={`${plan.name} floor plan`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{plan.name}</span>
                      <span className="text-muted-foreground">{plan.price}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Beds</p>
                        <p>{plan.beds}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Baths</p>
                        <p>{plan.baths}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Sq Ft</p>
                        <p>{plan.sqft}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Amenities */}
        <section className="py-12 bg-[#1e1e2d] text-white">
          <div className="container">
            <h3 className="text-2xl font-medium mb-8">Features & Amenities</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Bedrooms</h4>
                    <p>{community.bedrooms}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Bathrooms</h4>
                    <p>{community.bathrooms}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Square Footage</h4>
                    <p>{community.sqft} sq ft</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-2">Year Built</h4>
                    <p>{community.yearBuilt}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-white/70 mb-2">Community Amenities</h4>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {community.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-white/70" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] border border-white/20 rounded-lg overflow-hidden">
                <Image
                  src={community.gallery[1] || community.image}
                  alt="Community amenities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {community.testimonials && community.testimonials.length > 0 && (
          <section className="py-12 bg-[#f9f5ed]">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-xl leading-relaxed mb-6">"{community.testimonials[0].quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={community.testimonials[0].image || "/placeholder.svg"}
                        alt={community.testimonials[0].author}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{community.testimonials[0].author}</p>
                      <p className="text-sm text-muted-foreground">{community.testimonials[0].title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section className="py-12 bg-[#f9f5ed]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-medium mb-6">Interested in {community.name}?</h3>
                <p className="text-lg mb-8">
                  Schedule a tour or request more information about available units and pricing.
                </p>
                <Button size="lg" className="px-8" onClick={() => setIsTourModalOpen(true)}>
                  Schedule a Tour
                </Button>
              </div>
              {community.team && community.team.length > 0 && (
                <div className="flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src={community.team[0].image || "/placeholder.svg"}
                        alt={community.team[0].name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{community.team[0].name}</p>
                      <p className="text-sm text-muted-foreground">{community.team[0].title}</p>
                      <p className="text-sm">{community.team[0].email}</p>
                      <p className="text-sm">{community.team[0].phone}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Schedule Tour Modal */}
      <ScheduleTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        communityName={community.name}
      />

      <Footer />
    </div>
  )
}