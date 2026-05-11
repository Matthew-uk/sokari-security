import { Star } from "lucide-react"
import type { Review } from "@/lib/types"

interface ReviewsStatsProps {
  reviews: Review[]
}

export function ReviewsStats({ reviews }: ReviewsStatsProps) {
  const total = reviews.length
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / total

  const breakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    pct: Math.round((reviews.filter((r) => r.rating === star).length / total) * 100),
  }))

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 bg-iron-900 border border-border-subtle rounded-2xl p-8">
      {/* Average */}
      <div className="flex flex-col items-center text-center shrink-0">
        <span className="text-crimson font-extrabold text-6xl font-mono tabular-nums leading-none">
          {avg.toFixed(1)}
        </span>
        <div className="flex items-center gap-0.5 mt-2" aria-label={`Average rating ${avg.toFixed(1)} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 text-crimson fill-crimson"
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="text-iron-500 text-sm mt-1">{total} verified reviews</span>
      </div>

      {/* Separator */}
      <div className="hidden md:block w-px h-24 bg-border-subtle" aria-hidden="true" />

      {/* Breakdown */}
      <div className="flex-1 w-full flex flex-col gap-2">
        {breakdown.map(({ star, count, pct }) => (
          <div key={star} className="flex items-center gap-3">
            <span className="text-iron-500 text-xs w-4 text-right shrink-0">{star}</span>
            <Star className="h-3.5 w-3.5 text-crimson fill-crimson shrink-0" aria-hidden="true" />
            <div className="flex-1 h-2 bg-border-subtle rounded-full overflow-hidden">
              <div
                className="h-full bg-crimson rounded-full transition-all duration-700"
                style={{ width: `${pct}%` }}
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${star} stars: ${pct}%`}
              />
            </div>
            <span className="text-iron-500 text-xs w-8 text-right shrink-0">{count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
