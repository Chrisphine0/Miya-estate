import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1e1e2d] text-white py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold">Miya Estate</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-medium mb-4">Search</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/search" className="text-sm text-muted-foreground hover:text-white">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/communities" className="text-sm text-muted-foreground hover:text-white">
                  Communities
                </Link>
              </li>
              <li>
                <Link href="/quick-move-ins" className="text-sm text-muted-foreground hover:text-white">
                  Quick Move-ins
                </Link>
              </li>
              <li>
                <Link href="/open-houses" className="text-sm text-muted-foreground hover:text-white">
                  Open Houses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Follow us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white">
                  Youtube
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Let's Talk</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">1.866.744.CITY</li>
              <li className="text-sm text-muted-foreground">hello@miya.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">All for sale product is listed by miya</p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">©2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

