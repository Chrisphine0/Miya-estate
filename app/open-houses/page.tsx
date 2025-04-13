import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sample open house data
const openHouses = [
  {
    id: 1,
    month: "September",
    day: 10,
    dayOfWeek: "Mon",
    time: "5pm",
    title: "Sales Launch",
    tag: "/theLANE",
    location: "123 W Parkway Lane",
    city: "Centerville, Utah 84014",
    description:
      "Join us for the sales launch at theLANE. All the new townhomes will be available for sale. The event will be held on site. No RSVP required.",
    note: "Refreshments will be provided, come by anytime.",
    image: "/Photo 26.png?height=400&width=600",
  },
  {
    id: 2,
    month: "September",
    day: 10,
    dayOfWeek: "Mon",
    time: "5pm",
    title: "Sales Launch",
    tag: "/theLANE",
    location: "123 W Parkway Lane",
    city: "Centerville, Utah 84014",
    description:
      "Join us for the sales launch at theLANE. All the new townhomes will be available for sale. The event will be held on site. No RSVP required.",
    note: "Refreshments will be provided, come by anytime.",
    image: "/Photo 27.png?height=400&width=600",
  },
  {
    id: 3,
    month: "September",
    day: 10,
    dayOfWeek: "Mon",
    time: "5pm",
    title: "Sales Launch",
    tag: "/theLANE",
    location: "123 W Parkway Lane",
    city: "Centerville, Utah 84014",
    description:
      "Join us for the sales launch at theLANE. All the new townhomes will be available for sale. The event will be held on site. No RSVP required.",
    note: "Refreshments will be provided, come by anytime.",
    image: "/Photo 28.png?height=400&width=600",
  },
  {
    id: 4,
    month: "September",
    day: 10,
    dayOfWeek: "Mon",
    time: "5pm",
    title: "Sales Launch",
    tag: "/theLANE",
    location: "123 W Parkway Lane",
    city: "Centerville, Utah 84014",
    description:
      "Join us for the sales launch at theLANE. All the new townhomes will be available for sale. The event will be held on site. No RSVP required.",
    note: "Refreshments will be provided, come by anytime.",
    image: "/Photo 30.png?height=400&width=600",
  },
  {
    id: 5,
    month: "September",
    day: 10,
    dayOfWeek: "Mon",
    time: "5pm",
    title: "Sales Launch",
    tag: "/theLANE",
    location: "123 W Parkway Lane",
    city: "Centerville, Utah 84014",
    description:
      "Join us for the sales launch at theLANE. All the new townhomes will be available for sale. The event will be held on site. No RSVP required.",
    note: "Refreshments will be provided, come by anytime.",
    image: "/Photo 29.png?height=400&width=600",
  },
]

export default function OpenHousesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="/Photo 16.png?height=600&width=1200"
              alt="Modern home interior"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative h-full flex flex-col justify-center">
            <div className="container">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Discovering Open Houses: A Step-by-Step Guide</h1>
                <p className="text-lg">
                  Open houses provide numerous advantages for first-time home buyers to gain a foothold in the market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Houses Listings */}
        <section className="py-8">
          <div className="container">
            {openHouses.map((openHouse, index) => (
              <div key={openHouse.id} className="py-8 border-b last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Date Column */}
                  <div className="md:col-span-2">
                    <div className="text-sm text-muted-foreground">{openHouse.month}</div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-medium mr-2">{openHouse.day}</span>
                      <span className="text-sm text-muted-foreground">
                        {openHouse.dayOfWeek} · {openHouse.time}
                      </span>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="md:col-span-7">
                    <h2 className="text-2xl font-medium flex items-center">
                      {openHouse.title}
                      <span className="text-sm text-muted-foreground ml-2">{openHouse.tag}</span>
                    </h2>

                    <div className="mt-2 mb-4">
                      <p className="text-sm">{openHouse.location}</p>
                      <p className="text-sm text-muted-foreground">{openHouse.city}</p>
                    </div>

                    <p className="text-sm mb-2">{openHouse.description}</p>
                    <p className="text-sm text-muted-foreground">{openHouse.note}</p>
                  </div>

                  {/* Image Column */}
                  <div className="md:col-span-3">
                    <div className="relative h-[120px] rounded-md overflow-hidden">
                      <Image
                        src={openHouse.image || "/placeholder.svg"}
                        alt={`${openHouse.title} at ${openHouse.location}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(01)</h2>
              <h3 className="text-sm font-medium">Did we catch your eye?</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-2xl leading-relaxed mb-8">
                  We enjoy connecting with new people. Reach out to us by filling out the form, sending an email, or
                  simply giving us a call.
                </p>

                <div className="mt-8">
                  <p className="text-lg font-medium">0 00 000 000 CITY</p>
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
                        placeholder="First name"
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm">
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      Email address
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
                        Phone number
                      </label>
                      <Input
                        id="phone"
                        placeholder="0 00 000 000"
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="preferredContact" className="text-sm">
                        Preferred method of contact
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
                      <label htmlFor="openHouseInterest" className="text-sm">
                        Open house interest
                      </label>
                      <Select>
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent">
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="theLANE">theLANE Sales Launch</SelectItem>
                          <SelectItem value="theBee">theBee Open House</SelectItem>
                          <SelectItem value="multiple">Multiple Open Houses</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <Button type="submit" className="px-8">
                      Submit
                    </Button>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
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

