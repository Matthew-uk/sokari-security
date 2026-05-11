"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { AnimatedDivider } from "@/components/common/AnimatedDivider"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroCinematicProps {
  eyebrow?: string
  title: string
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  backgroundImage?: string
  videoSrc?: string
}

export function HeroCinematic({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundImage = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80",
  videoSrc,
}: HeroCinematicProps) {
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : 60])

  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-iron-950"
      aria-labelledby="cinematic-hero-heading"
    >
      {/* Parallax background */}
      {videoSrc && !prefersReduced ? (
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>
      ) : backgroundImage ? (
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: bgY }}>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      ) : null}

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 z-10 bg-iron-950/55" />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-iron-950/40 via-transparent to-iron-950" />
      {/* Radial vignette */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,transparent_0%,rgba(13,15,18,0.55)_100%)]" />

      {/* Bottom crimson accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] z-20 bg-linear-to-r from-transparent via-crimson/80 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-32">
        <div className="flex flex-col items-center text-center gap-6 max-w-5xl mx-auto">
          {eyebrow && (
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-crimson/10 border border-crimson/30 text-crimson px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em]">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-crimson-pulse" aria-hidden="true" />
                {eyebrow}
              </span>
            </motion.div>
          )}

          <AnimatedDivider width="short" className="self-center" />

          <motion.h1
            initial={prefersReduced ? undefined : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24, delay: 0.2 }}
            id="cinematic-hero-heading"
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.95] tracking-wide"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 26, delay: 0.35 }}
              className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-light"
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 26, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white/25 text-white/90 hover:border-crimson hover:text-crimson"
                  )}
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          aria-hidden="true"
        >
          <span className="text-white/30 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-6 bg-linear-to-b from-crimson/60 to-transparent" />
          <ChevronDown className="h-3.5 w-3.5 text-crimson/70 animate-bounce" />
        </motion.div>
      )}
    </section>
  )
}
