"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: "left" | "center"
  className?: string
  headingClassName?: string
  id?: string
}

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
  headingClassName,
  id,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 bg-crimson/10 border border-crimson/25 text-crimson px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em]">
          <span className="w-1 h-1 rounded-full bg-crimson" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <div className={cn("flex flex-col gap-1", align === "center" ? "items-center" : "items-start")}>
        <h2
          id={id}
          className={cn(
            "font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-wide",
            headingClassName
          )}
        >
          {heading}
        </h2>
        <div className="h-[3px] w-12 bg-crimson rounded-full mt-2" aria-hidden="true" />
      </div>
      {subheading && (
        <p
          className={cn(
            "text-iron-200/65 text-base md:text-lg leading-relaxed font-light mt-1",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subheading}
        </p>
      )}
    </motion.div>
  )
}
