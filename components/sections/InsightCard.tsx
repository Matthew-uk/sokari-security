import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { GoldBadge } from "@/components/common/GoldBadge"
import { formatDate } from "@/lib/utils/formatters"
import type { Insight } from "@/lib/types"

const CATEGORY_LABELS: Record<Insight["category"], string> = {
  news: "News",
  "threat-brief": "Threat Brief",
  "company-update": "Company Update",
  "industry-analysis": "Industry Analysis",
}

function readingTime(body: string) {
  const words = body.split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

interface InsightCardProps {
  insight: Insight
  featured?: boolean
}

export function InsightCard({ insight, featured }: InsightCardProps) {
  const mins = readingTime(insight.body)

  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group block h-full"
      aria-label={`${insight.title} — Read more`}
    >
      <div className="h-full rounded-2xl bg-iron-900 border border-iron-800 group-hover:border-crimson/40 transition-all duration-300 overflow-hidden flex flex-col">
        {/* Cover image */}
        <div className={`relative overflow-hidden shrink-0 ${featured ? "aspect-video" : "aspect-video"}`}>
          <Image
            src={insight.coverImage}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-linear-to-t from-iron-900/80 to-transparent" />
          <div className="absolute top-3 left-3">
            <GoldBadge>{CATEGORY_LABELS[insight.category]}</GoldBadge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          {/* Meta row */}
          <div className="flex items-center gap-2 text-iron-500 text-xs flex-wrap">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              <time dateTime={insight.date}>{formatDate(insight.date)}</time>
            </span>
            <span className="text-iron-700" aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {mins} min read
            </span>
          </div>

          <h3 className={`font-serif text-white font-bold leading-snug group-hover:text-crimson transition-colors ${featured ? "text-xl md:text-2xl" : "text-base"}`}>
            {insight.title}
          </h3>

          <p className="text-iron-500 text-sm leading-relaxed line-clamp-3 flex-1">{insight.excerpt}</p>

          {/* Author + CTA row */}
          <div className="flex items-center justify-between pt-3 border-t border-iron-800 mt-auto">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-crimson/15 border border-crimson/20 flex items-center justify-center shrink-0" aria-hidden="true">
                <span className="text-crimson text-[10px] font-bold">{initials(insight.author)}</span>
              </div>
              <span className="text-iron-500 text-xs">{insight.author}</span>
            </div>
            <div className="flex items-center gap-1 text-crimson text-xs font-semibold">
              <span>Read</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
