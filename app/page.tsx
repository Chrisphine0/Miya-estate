import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import PropertySlideshow from "@/components/property-slideshow"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Video Background */}
        <HeroSection />

        {/* About Section */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">01/05</h2>
              <div className="flex items-center">
                <h3 className="text-sm font-medium">About us</h3>
                <Link
                  href="/about"
                  className="ml-8 flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <span>Get to know us</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium mb-8">
                Miya Estate is leading the way in creating unique real estate for Utah residents.
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-16">
              <div className="mb-8 md:mb-0">
                <h4 className="text-sm font-medium mb-2">Miya Estate</h4>
                <p className="text-sm text-muted-foreground">Utah</p>
              </div>
              <div className="max-w-sm">
                <h4 className="text-sm font-medium mb-2">Personal Communities</h4>
                <p className="text-sm text-muted-foreground">Miya Apartments</p>
                <Link
                  href="/communities"
                  className="mt-4 flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <span>View All Communities</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Property */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">02/05</h2>
              <div className="flex items-center">
                <h3 className="text-sm font-medium">the Bee</h3>
                <Link
                  href="/properties/the-bee"
                  className="ml-8 flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <span>View</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image src="/Photo 10.png" alt="The Bee property interior" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-end">
                <h2 className="text-5xl font-medium mb-8">the Bee</h2>
                <div className="mt-auto">
                  <p className="text-xl font-medium mb-2">From $186,000</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Salt Lake City, Utah</p>
                      <p className="text-sm">2 Bed, 2 Bath, 1,200 sq ft</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">10 Minutes Transportation</p>
                      <p className="text-sm">from Airport</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apartments Section */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">03/05</h2>
              <h3 className="text-sm font-medium">Find homes for you</h3>
            </div>

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-medium">Apartments</h2>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative h-[200px] overflow-hidden rounded-lg mb-3">
                    <Image
                      src="/Photo 01.png"
                      alt={`Apartment ${item}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-medium">APARTMENT</h4>
                  <p className="text-sm text-muted-foreground">Salt Lake City, Utah</p>
                  <p className="text-sm">2 Bed, 2 Bath</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section with Slideshow */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">04/05</h2>
              <h3 className="text-sm font-medium">Our local community</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PropertySlideshow />
              <div className="flex flex-col justify-center">
                <p className="text-xl leading-relaxed">
                  Our aim is to build micro-communities that enrich and fortify local areas, turning every space into an
                  opportunity through well-planned land use and design, fostering exploration and growth with a positive
                  impact on existing communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">05/05</h2>
              <h3 className="text-sm font-medium">Get in touch with us?</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl leading-relaxed mb-8">
                  We enjoy connecting with new people. Reach out to us by filling out the form, sending an email, or
                  simply giving us a call.
                </p>
                <div className="mt-8">
                  <p className="text-sm font-medium mb-2">0.00.000.000.CITY</p>
                  <p className="text-sm text-muted-foreground">miya@Miya.com</p>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        placeholder="First name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        placeholder="Last name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                  <Button className="w-full">Submit</Button>
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