"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState("community")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?type=${searchType}&query=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
        >
          <source src="/Hero Video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/Photo 04.png"
            alt="Modern real estate"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
          />
        </video>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-center max-w-3xl px-4">
          <p className="mb-2 text-sm md:text-base">Building what's next in the heart of Utah</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Find your
            <br />
            favorite place
          </h1>

          <div className="bg-white/90 p-4 rounded-lg max-w-xl mx-auto">
            <form onSubmit={handleSearch}>
              <Tabs defaultValue="community" onValueChange={(value) => setSearchType(value)}>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="community">Community</TabsTrigger>
                  <TabsTrigger value="city">City</TabsTrigger>
                  <TabsTrigger value="type">Type</TabsTrigger>
                </TabsList>
                <TabsContent value="community" className="relative">
                  <Input
                    placeholder="Search communities..."
                    className="pr-10 text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-10 w-10">
                    <Search className="h-4 w-4" />
                  </Button>
                </TabsContent>
                <TabsContent value="city" className="relative">
                  <Input
                    placeholder="Search by city..."
                    className="pr-10 text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-10 w-10">
                    <Search className="h-4 w-4" />
                  </Button>
                </TabsContent>
                <TabsContent value="type" className="relative">
                  <Input
                    placeholder="Search by property type..."
                    className="pr-10 text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-10 w-10">
                    <Search className="h-4 w-4" />
                  </Button>
                </TabsContent>
              </Tabs>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}