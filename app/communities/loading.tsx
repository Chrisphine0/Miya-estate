import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          {/* Page Header Skeleton */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Skeleton className="h-4 w-8 mr-6" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-64 mb-4" />
          </div>

          {/* Filters Skeleton */}
          <div className="flex justify-end mb-10 gap-4">
            <Skeleton className="h-10 w-[200px]" />
            <Skeleton className="h-10 w-[200px]" />
          </div>

          {/* Property Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex flex-col">
                <Skeleton className="h-[240px] w-full mb-4" />
                <div className="flex justify-between mb-1">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
