import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Team data
const executiveTeam = [
  {
    id: 1,
    name: "Caleb Mawson",
    title: "Founder & CEO",
    image: "/Team/Profile Photo 01.png?height=400&width=400",
    featured: true,
  },
  {
    id: 2,
    name: "Kyra McHugh",
    title: "Chief Design Officer",
    image: "/Team/Profile Photo 02.png?height=400&width=400",
  },
  {
    id: 3,
    name: "Factor Rahman",
    title: "Chief Financial Officer",
    image: "/Team/Profile Photo 03.png?height=400&width=400",
  },
  {
    id: 4,
    name: "Aria Jafri",
    title: "Chief Marketing Officer",
    image: "/Team/Profile Photo 04.png?height=400&width=400",
  },
  {
    id: 5,
    name: "Jasmine Ahmadi",
    title: "Head of Architecture",
    image: "/Team/Profile Photo 05.png?height=400&width=400",
  },
  {
    id: 6,
    name: "Majid Ahmed",
    title: "Head of Construction",
    image: "/Team/Profile Photo 06.png?height=400&width=400",
  },
  {
    id: 7,
    name: "Qadir Khan",
    title: "Head of Development",
    image: "/Team/Profile Photo 07.png?height=400&width=400",
  },
]

const supportTeam = [
  {
    id: 1,
    name: "Faisal Khan",
    title: "Senior Project Manager",
    image: "/Team/Profile Photo 01.png?height=400&width=400",
  },
  {
    id: 2,
    name: "Jawad Ahmad",
    title: "Design Specialist",
    image: "/Team/Profile Photo 02.png?height=400&width=400",
  },
  {
    id: 3,
    name: "Amani Ahmed",
    title: "Client Relations",
    image: "/Team/Profile Photo 03.png?height=400&width=400",
  },
  {
    id: 4,
    name: "Asad Ahmed",
    title: "Marketing Specialist",
    image: "/Team/Profile Photo 04.png?height=400&width=400",
  },
  {
    id: 5,
    name: "Farhan Khan",
    title: "Sales Manager",
    image: "/Team/Profile Photo 05.png?height=400&width=400",
  },
  {
    id: 6,
    name: "Saad Ahmed",
    title: "Customer Support",
    image: "/Team/Profile Photo 06.png?height=400&width=400",
  },
]

// Process steps
const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Vision & Planning",
    description: "We start with a clear vision and detailed planning to ensure every project meets our high standards.",
  },
  {
    id: 2,
    number: "02",
    title: "Design & Development",
    description: "Our expert team creates innovative designs that blend aesthetics with functionality.",
  },
  {
    id: 3,
    number: "03",
    title: "Construction",
    description: "We use premium materials and advanced techniques to build homes that last generations.",
  },
  {
    id: 4,
    number: "04",
    title: "Community Integration",
    description: "Every project is designed to enhance and integrate with the existing community fabric.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Mission Statement */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(01)</h2>
              <h3 className="text-sm font-medium">Our Mission</h3>
            </div>

            <div className="max-w-3xl">
              <p className="text-2xl leading-relaxed">
                At Miya Estate, we're paving the path for exceptional real estate in Utah. As a design, build, and
                development company, we're committed to craft communities that enrich, fortify, and add to the overall
                fabric of neighboring areas.
              </p>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(02)</h2>
              <h3 className="text-sm font-medium">Process Makes perfect</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {processSteps.map((step) => (
                <div key={step.id} className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#1e1e2d] text-white flex items-center justify-center text-sm mr-3">
                      {step.number}
                    </div>
                    <h4 className="font-medium">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/Phot 14.png?height=800&width=1200"
                alt="Team working on project plans"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="py-16 bg-[#1e1e2d] text-white">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-white/70">(03)</h2>
              <h3 className="text-sm font-medium">Process Makes perfect</h3>
            </div>

            <div className="max-w-3xl mb-12">
              <p className="text-xl leading-relaxed">
                Get to know the executive team, the head honchos of the Miya Estate pack—dedicated to helping you find
                your perfect home. (We'd love to give it even more, but unfortunately, that's beyond mathematical
                possibility.)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Featured Team Member */}
              {executiveTeam
                .filter((member) => member.featured)
                .map((member) => (
                  <div
                    key={member.id}
                    className="col-span-1 md:col-span-3 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12"
                  >
                    <div className="relative w-[200px] h-[200px] bg-[#ff6b35] rounded-lg overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium">{member.name}</h4>
                      <p className="text-sm text-white/70">{member.title}</p>
                    </div>
                  </div>
                ))}

              {/* Other Executive Team Members */}
              {executiveTeam
                .filter((member) => !member.featured)
                .map((member) => (
                  <div key={member.id} className="space-y-3">
                    <div className="relative h-[240px] bg-[#1a1a27] rounded-lg overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-white/70">{member.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Support Team */}
        <section className="py-16 bg-[#1e1e2d] text-white">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-white/70">(04)</h2>
              <h3 className="text-sm font-medium">Team Member</h3>
            </div>

            <div className="max-w-3xl mb-12">
              <p className="text-xl leading-relaxed">
                Our executive team couldn't do their magic without the dedicated, hard-working support of our
                specialists, sales, and client support crews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportTeam.map((member) => (
                <div key={member.id} className="space-y-3">
                  <div className="relative h-[240px] bg-[#1a1a27] rounded-lg overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-white/70">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Building */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(05)</h2>
              <h3 className="text-sm font-medium">We Build Community</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/Photo 31.png?height=600&width=800"
                  alt="Architectural plans"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Miya is a real estate developer and strategic partner focused on creating exceptional master-planned
                  communities, residential and commercial projects, and mixed-use developments.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  At Miya, Our foundation is built on the basics of exceptional architecture, thoughtful planning,
                  innovative solutions, and unwavering attention to the smallest details in our projects.
                </p>

                <p className="text-sm text-muted-foreground">Learn More About Our Projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-[#f9f5ed]">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-sm font-medium text-muted-foreground">(06)</h2>
              <h3 className="text-sm font-medium">Get in touch with us</h3>
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
                      <label htmlFor="interest" className="text-sm">
                        I'm interested in
                      </label>
                      <Select>
                        <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent">
                          <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buying">Buying a Home</SelectItem>
                          <SelectItem value="selling">Selling a Home</SelectItem>
                          <SelectItem value="investing">Investment Opportunities</SelectItem>
                          <SelectItem value="careers">Career Opportunities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
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

