import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import MobileMenu from "@/app/mobile-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <MobileMenu />
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold">Miya Estate</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/search" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Search
            </Link>
            <Link href="/communities" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Communities
            </Link>
            <Link href="/quick-move-ins" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Quick Move-ins
            </Link>
            <Link href="/open-houses" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Open Houses
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">0 00 000 000 CITY</span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

