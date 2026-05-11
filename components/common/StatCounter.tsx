"use client"

import { useCountUp } from "@/lib/hooks/useCountUp"
import { useInView } from "@/lib/hooks/useInView"
import { cn } from "@/lib/utils"

interface StatCounterProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  className?: string
}

export function StatCounter({ value, label, prefix = "", suffix = "", className }: StatCounterProps) {
  const [ref, inView] = useInView(0.3)
  const count = useCountUp(value, 2000, inView)

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center gap-1", className)}
      aria-label={`${prefix}${value}${suffix} ${label}`}
    >
      <span
        className="text-4xl lg:text-5xl font-extrabold text-crimson font-mono tabular-nums"
        aria-hidden="true"
      >
        {prefix}{count}{suffix}
      </span>
      <span className="text-iron-500 text-sm font-medium uppercase tracking-wider">{label}</span>
    </div>
  )
}
