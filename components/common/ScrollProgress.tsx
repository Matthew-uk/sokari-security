"use client"

import { useScrollProgress } from "@/lib/hooks/useScrollProgress"

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-0.5 z-50 pointer-events-none"
    >
      <div
        className="h-full bg-crimson transition-all duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
