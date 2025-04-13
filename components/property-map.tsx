"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Property type definition
type Property = {
  id: number
  name: string
  address: string
  city: string
  coordinates: { lat: number; lng: number }
  price: string
  image: string
  slug: string
}

export default function PropertyMap({ properties }: { properties: Property[] }) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [map, setMap] = useState<any>(null)
  const [markers, setMarkers] = useState<any[]>([])
  const [isMapInitialized, setIsMapInitialized] = useState(false)

  // Load Leaflet scripts and CSS
  useEffect(() => {
    // Check if Leaflet is already loaded
    if (window.L) {
      if (!isMapInitialized && mapRef.current) {
        initializeMap()
      }
      return
    }

    // Load CSS if not already loaded
    let linkElement = document.querySelector('link[href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"]')
    if (!linkElement) {
      linkElement = document.createElement("link")
      linkElement.rel = "stylesheet"
      linkElement.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(linkElement)
    }

    // Load Leaflet script if not already loaded
    let script = document.querySelector('script[src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"]')
    if (!script) {
      script = document.createElement("script")
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      script.crossOrigin = ""
      script.async = true

      script.onload = () => {
        // Initialize map after script is loaded
        if (!isMapInitialized && mapRef.current) {
          initializeMap()
        }
      }

      document.head.appendChild(script)
    }

    return () => {
      // Don't remove the script and CSS as they might be used by other components
    }
  }, [isMapInitialized])

  // Initialize map
  const initializeMap = () => {
    if (!mapRef.current || !window.L || isMapInitialized) return

    // Check if the container already has a map
    if (mapRef.current._leaflet_id) {
      console.warn("Map container is already initialized. Skipping initialization.")
      return
    }

    // Default center (Utah)
    const defaultCenter = [40.7608, -111.891]

    // Create map
    const leafletMap = window.L.map(mapRef.current).setView(defaultCenter, 9)

    // Add tile layer (OpenStreetMap)
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(leafletMap)

    setMap(leafletMap)
    setIsMapInitialized(true)
  }

  // Update markers when properties or map changes
  useEffect(() => {
    if (!map || !window.L || !properties.length || !isMapInitialized) return

    // Clear existing markers
    markers.forEach((marker) => map.removeLayer(marker))

    // Create new markers
    const newMarkers = properties.map((property) => {
      // Create custom icon
      const customIcon = window.L.divIcon({
        className: "custom-marker",
        html: `<div style="background-color: #1e1e2d; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center;"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      })

      // Create marker
      const marker = window.L.marker([property.coordinates.lat, property.coordinates.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div style="width: 200px; padding: 5px;">
            <h3 style="font-weight: bold; margin-bottom: 5px;">${property.name}</h3>
            <p style="font-size: 12px; margin-bottom: 5px;">${property.address}</p>
            <p style="font-size: 12px; margin-bottom: 5px;">${property.city}</p>
            <p style="font-weight: bold; margin-top: 5px;">${property.price}</p>
          </div>
        `)

      // Add click listener
      marker.on("click", () => {
        setSelectedProperty(property)
      })

      return marker
    })

    // Fit map to bounds if there are multiple properties
    if (properties.length > 1) {
      const bounds = window.L.latLngBounds(properties.map((p) => [p.coordinates.lat, p.coordinates.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })
    } else if (properties.length === 1) {
      // Center on single property
      map.setView([properties[0].coordinates.lat, properties[0].coordinates.lng], 14)
    }

    // Store markers
    setMarkers(newMarkers)

    // Cleanup
    return () => {
      newMarkers.forEach((marker) => map.removeLayer(marker))
    }
  }, [map, properties, isMapInitialized])

  // Clean up map on component unmount
  useEffect(() => {
    return () => {
      if (map) {
        // Remove all event listeners
        map.off()
        // Remove all layers
        map.eachLayer((layer) => {
          map.removeLayer(layer)
        })
        // Remove the map
        map.remove()
        setMap(null)
        setIsMapInitialized(false)
        // Clear the _leaflet_id from the container
        if (mapRef.current) {
          delete mapRef.current._leaflet_id
        }
      }
    }
  }, [map])

  return (
    <>
      <div ref={mapRef} className="w-full h-full" />

      {/* Property Info Overlay */}
      {selectedProperty && (
        <div className="absolute top-4 left-4 z-[1000] bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <h3 className="text-sm font-medium">{selectedProperty.name}</h3>
          </div>
          <div className="relative h-[100px] w-[150px] mb-2">
            <Image
              src={selectedProperty.image || "/placeholder.svg"}
              alt={selectedProperty.name}
              fill
              className="object-cover rounded"
            />
          </div>
          <p className="text-xs mb-1">{selectedProperty.address}</p>
          <p className="text-xs mb-1">{selectedProperty.city}</p>
          <p className="text-xs font-medium">{selectedProperty.price}</p>
          <Link
            href={`/properties/${selectedProperty.slug}`}
            className="text-xs text-primary hover:underline mt-2 inline-block"
          >
            View Details
          </Link>
        </div>
      )}

      {/* Location Markers for Mobile */}
      <div className="md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 z-[1000] flex space-x-2 overflow-x-auto pb-2 max-w-full">
        {properties.map((property) => (
          <button
            key={property.id}
            onClick={() => {
              if (map) {
                map.setView([property.coordinates.lat, property.coordinates.lng], 14)
                setSelectedProperty(property)
              }
            }}
            className="bg-white text-black rounded-full px-3 py-1 flex items-center whitespace-nowrap shadow-md"
          >
            <MapPin className="h-3 w-3 mr-1" />
            <span className="text-xs">{property.name}</span>
          </button>
        ))}
      </div>
    </>
  )
}

// Add global type definition for Leaflet
declare global {
  interface Window {
    L: any
  }
}