import type { Testimonial } from "@/lib/types"

interface TestimonialCardProps {
  testimonial: Testimonial
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative h-full rounded-2xl bg-iron-900 border border-iron-800 overflow-hidden p-6 flex flex-col gap-5">
      {/* Top crimson accent strip */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-crimson/50 to-transparent" aria-hidden="true" />

      {/* Large decorative quote mark */}
      <span
        className="absolute top-3 right-5 font-serif text-8xl text-crimson/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote body */}
      <blockquote className="font-serif text-iron-50/85 text-base leading-relaxed flex-1 relative z-10">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div className="h-px bg-iron-800" aria-hidden="true" />

      {/* Reviewer */}
      <div className="flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-full bg-crimson/15 border border-crimson/25 flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span className="text-crimson font-bold text-sm">{initials(testimonial.reviewer)}</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-white font-semibold text-sm leading-tight">{testimonial.reviewer}</span>
          <span className="text-iron-500 text-xs leading-tight truncate">
            {testimonial.title},&nbsp;
            <span className="text-crimson/80">{testimonial.company}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
