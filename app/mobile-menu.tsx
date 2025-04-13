"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <span className="text-xl font-semibold">Miya Estate</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="flex flex-col gap-6">
            <Link href="/search" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Search
            </Link>
            <Link href="/communities" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Communities
            </Link>
            <Link
              href="/quick-move-ins"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Quick Move-ins
            </Link>
            <Link href="#" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Open Houses
            </Link>
            <Link href="/about" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
              About
            </Link>
          </nav>

          <div className="mt-auto pt-8 border-t">
            <p className="text-sm font-medium mb-2">Contact</p>
            <p className="text-sm mb-1">0 00 000 000 CITY</p>
            <p className="text-sm text-muted-foreground">miya@Miya.com</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

