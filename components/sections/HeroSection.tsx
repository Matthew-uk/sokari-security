"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { AnimatedDivider } from "@/components/common/AnimatedDivider"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  eyebrow?: string
  title: string
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  backgroundImage?: string
  variant?: "full" | "page"
  align?: "left" | "center"
  overlay?: boolean
}

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
  variant = "page",
  align = "center",
  overlay = true,
}: HeroSectionProps) {
  const prefersReduced = useReducedMotion()

  const fadeUp = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      }

  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden bg-iron-950",
        variant === "full" ? "min-h-screen" : "min-h-[60vh] pt-32 pb-20"
      )}
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-iron-950/80 via-iron-950/60 to-iron-950" />
      )}

      {/* Gold bottom edge accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-20 bg-gradient-to-r from-transparent via-crimson to-transparent opacity-40" />

      {/* Content */}
      <div
        className={cn(
          "relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
          variant === "full" && "pt-24"
        )}
      >
        <div className={cn("flex flex-col gap-6", align === "center" ? "items-center text-center" : "items-start text-left", "max-w-4xl", align === "center" && "mx-auto")}>
          {eyebrow && (
            <motion.p
              {...fadeUp}
              className="text-crimson text-xs font-semibold uppercase tracking-[0.2em]"
            >
              {eyebrow}
            </motion.p>
          )}

          <AnimatedDivider width="short" className={align === "center" ? "self-center" : "self-start"} />

          <motion.h1
            {...(prefersReduced ? {} : {
              initial: { opacity: 0, y: 32 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 },
            })}
            id="hero-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              {...(prefersReduced ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.25 },
              })}
              className="text-iron-50/80 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              {...(prefersReduced ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.4 },
              })}
              className="flex flex-col sm:flex-row gap-4"
            >
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className={cn(buttonVariants({ size: "lg" }), "bg-crimson text-iron-950 hover:bg-crimson-hover font-semibold text-base px-8 py-3 h-auto")}
                >
                  {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-crimson/50 text-iron-50 hover:border-crimson hover:text-crimson bg-transparent text-base px-8 py-3 h-auto")}
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
