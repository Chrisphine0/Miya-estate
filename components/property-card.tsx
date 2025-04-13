import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps {
  name: string
  type: string
  beds: number
  baths: number
  sqft: number
  address1: string
  address2: string
  status: string
  slug: string
  imageSrc: string
}

export default function PropertyCard({
  name,
  type,
  beds,
  baths,
  sqft,
  address1,
  address2,
  status,
  slug,
  imageSrc,
}: PropertyCardProps) {
  return (
    <div className="p-6 border-b">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative h-[150px] w-full md:w-[150px]">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover rounded-lg" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{type}</p>

          <div className="flex gap-4 mb-2">
            <div className="flex items-center text-xs">
              <span className="font-medium mr-1">{beds}</span>
              <span className="text-muted-foreground">Beds</span>
            </div>
            <div className="flex items-center text-xs">
              <span className="font-medium mr-1">{baths}</span>
              <span className="text-muted-foreground">Baths</span>
            </div>
            <div className="flex items-center text-xs">
              <span className="font-medium mr-1">{sqft}</span>
              <span className="text-muted-foreground">Sq.Ft.</span>
            </div>
          </div>

          <div className="mb-2">
            <p className="text-xs text-muted-foreground">{address1}</p>
            <p className="text-xs text-muted-foreground">{address2}</p>
          </div>

          <p className="text-xs mb-4">{status}</p>

          <Link href={`/properties/${slug}`} className="text-xs text-primary hover:underline">
            See More
          </Link>
        </div>
      </div>
    </div>
  )
}

