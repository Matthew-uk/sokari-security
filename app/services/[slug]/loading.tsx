import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-iron-950 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <Skeleton className="h-80 w-full rounded-none bg-iron-900" />
        <div className="flex flex-col gap-4 py-8">
          <Skeleton className="h-6 w-32 bg-iron-900" />
          <Skeleton className="h-12 w-2/3 bg-iron-900" />
          <Skeleton className="h-4 w-full max-w-xl bg-iron-900" />
        </div>
      </div>
    </div>
  )
}
