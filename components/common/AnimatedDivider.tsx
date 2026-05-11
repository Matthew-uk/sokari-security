"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedDividerProps {
  width?: "short" | "medium" | "full"
  className?: string
}

const widthMap = {
  short: "w-16",
  medium: "w-32",
  full: "w-full",
}

export function AnimatedDivider({ width = "medium", className }: AnimatedDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      style={{ originX: 0 }}
      className={cn(
        "h-px",
        widthMap[width],
        "bg-linear-to-r from-crimson to-transparent",
        className
      )}
      role="presentation"
      aria-hidden="true"
    />
  )
}
