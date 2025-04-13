import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#262A34] text-white py-16 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8">Contact us</h1>
              <p className="text-xl md:text-2xl leading-relaxed">
                Get in touch with us, we're eager to assist you in experiencing the unique and cutting-edge.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-[#F4F1E7]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Contact Info */}
              <div className="space-y-12">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-muted-foreground mr-6">(01)</span>
                    <h2 className="text-sm font-medium">Type</h2>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-8">
                    We enjoy connecting with new people. Reach out to us by filling out the form, sending an email, or
                    simply giving us a call.
                  </h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm text-muted-foreground">Phone / Email</h3>
                  <div className="space-y-2">
                    <p className="text-2xl md:text-3xl">0 00 000 000 .CITY</p>
                    <p className="text-2xl md:text-3xl text-muted-foreground">miya@Miya.com</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="contactMethod" className="text-sm">
                        I'd like to
                      </label>
                      <Select>
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent">
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tour">Schedule a Tour</SelectItem>
                          <SelectItem value="info">Get More Information</SelectItem>
                          <SelectItem value="purchase">Purchase a Property</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        placeholder="0 00 000 000"
                        className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="community" className="text-sm">
                        Community of interest
                      </label>
                      <Select>
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent">
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="the-bee">The Bee</SelectItem>
                          <SelectItem value="the-miya">The miya</SelectItem>
                          <SelectItem value="the-aspen">The Aspen</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="workingWithAgent" className="text-sm">
                        Are you working with an agent?
                      </label>
                      <Select>
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent">
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="areYouAgent" className="text-sm">
                        Are you an agent?
                      </label>
                      <Select>
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent">
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-8">
                    <Button
                      type="submit"
                      className="bg-transparent hover:bg-transparent text-black hover:text-black p-0"
                    >
                      Submit
                    </Button>
                    <ChevronRight className="h-5 w-5 text-[#FE7B1E]" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(02)</h2>
              <h3 className="text-sm font-medium">Our Offices</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="relative h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/Photo 10.png?height=480&width=640"
                    alt="Salt Lake City Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Salt Lake City</h3>
                <p className="text-muted-foreground">123 Main Street, Suite 400</p>
                <p className="text-muted-foreground">Salt Lake City, UT 84101</p>
                <p className="text-sm">Mon-Fri: 9am-5pm</p>
              </div>

              <div className="space-y-4">
                <div className="relative h-[240px] rounded-lg overflow-hidden">
                  <Image src="/Photo 11.png?height=480&width=640" alt="Provo Office" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-medium">Provo</h3>
                <p className="text-muted-foreground">456 Center Street, Suite 200</p>
                <p className="text-muted-foreground">Provo, UT 84606</p>
                <p className="text-sm">Mon-Fri: 9am-5pm</p>
              </div>

              <div className="space-y-4">
                <div className="relative h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/Photo 12.png?height=480&width=640"
                    alt="Park City Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Park City</h3>
                <p className="text-muted-foreground">789 Mountain View Drive</p>
                <p className="text-muted-foreground">Park City, UT 84060</p>
                <p className="text-sm">By Appointment Only</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(03)</h2>
              <h3 className="text-sm font-medium">Find Us</h3>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1600"
                alt="Office locations map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

