import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="relative">
          <div className="container py-12">
            <Skeleton className="h-6 w-32 mb-6" />

            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="max-w-2xl">
                <Skeleton className="h-12 w-64 mb-2" />
                <Skeleton className="h-8 w-48 mb-6" />
                <Skeleton className="h-4 w-32 mb-8" />
              </div>

              <div className="flex flex-col items-end">
                <Skeleton className="h-10 w-32 rounded-full mb-4" />
              </div>
            </div>
          </div>

          {/* Property Image Skeleton */}
          <Skeleton className="w-full h-[400px]" />
        </section>

        {/* Property Details Skeleton */}
        <section className="py-12 bg-[#f9f5ed]">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-6 w-32" />
              </div>

              <div className="grid grid-cols-3 gap-4 md:w-1/2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Skeleton key={item} className="aspect-square rounded-md" />
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Skeleton className="h-6 w-full max-w-2xl mb-2" />
              <Skeleton className="h-6 w-full max-w-2xl mb-2" />
              <Skeleton className="h-6 w-3/4 max-w-2xl mb-6" />

              <div className="mt-8">
                <Skeleton className="h-8 w-48 mb-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Skeleton */}
        <section className="py-12 bg-[#f1f1f1]">
          <div className="container">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-[400px] w-full rounded-lg" />
          </div>
        </section>

        {/* Additional sections skeletons */}
        <section className="py-12">
          <div className="container">
            <Skeleton className="h-8 w-48 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col">
                  <Skeleton className="h-[200px] w-full mb-4" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}