"use client"

import { useEffect, useState } from "react"

export function useCountUp(target: number, duration = 2000, active = false): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const startTime = Date.now()
    let frame: number
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setCount(target)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, active])

  return count
}
