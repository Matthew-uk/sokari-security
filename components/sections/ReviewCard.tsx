"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { GoldBadge } from "@/components/common/GoldBadge"
import { formatDate } from "@/lib/utils/formatters"
import { cn } from "@/lib/utils"
import type { Review } from "@/lib/types"

const CATEGORY_LABELS: Record<Review["category"], string> = {
  "executive-protection": "Executive Protection",
  intelligence: "Intelligence",
  "physical-security": "Physical Security",
  "risk-consulting": "Risk Consulting",
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.body.length > 200

  return (
    <div className="relative h-full rounded-2xl bg-iron-900 border border-iron-800 overflow-hidden flex flex-col">
      {/* Top crimson accent strip */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-crimson/60 via-crimson/30 to-transparent" aria-hidden="true" />

      <div className="p-5 flex flex-col gap-4 h-full pt-6">
        {/* Stars */}
        <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < review.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-iron-700 fill-iron-700"
              )}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Body */}
        <blockquote className="text-iron-200/80 text-sm leading-relaxed flex-1">
          <span className={cn(!expanded && isLong && "line-clamp-4")}>
            &ldquo;{review.body}&rdquo;
          </span>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="block text-crimson text-xs font-semibold mt-1.5 hover:underline"
            >
              {expanded ? "Show less ↑" : "Read more ↓"}
            </button>
          )}
        </blockquote>

        {/* Footer */}
        <div className="pt-3 border-t border-iron-800 flex items-start gap-3">
          <div
            className="h-9 w-9 rounded-full bg-crimson/15 border border-crimson/25 flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            <span className="text-crimson font-bold text-xs">{initials(review.reviewer)}</span>
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-white font-semibold text-sm truncate">{review.reviewer}</span>
            <span className="text-iron-500 text-xs truncate">
              {review.title}, {review.company}
            </span>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <GoldBadge className="text-[10px]">{CATEGORY_LABELS[review.category]}</GoldBadge>
              <time className="text-iron-600 text-[10px]" dateTime={review.date}>
                {formatDate(review.date)}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
