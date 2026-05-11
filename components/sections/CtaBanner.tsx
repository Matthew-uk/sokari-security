"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CtaBannerProps {
  headline: string
  subline?: string
  cta: { label: string; href: string }
}

export function CtaBanner({ headline, subline, cta }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-crimson" aria-label="Call to action">
      {/* Radial vignette — darker edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.25) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.8) 10px,
            rgba(0,0,0,0.8) 11px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Watermark text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[10rem] lg:text-[16rem] leading-none text-iron-950/[0.07] select-none pointer-events-none whitespace-nowrap pr-4 lg:pr-12 tracking-widest"
        aria-hidden="true"
      >
        SECURE
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-iron-950 leading-tight tracking-wide">
              {headline}
            </h2>
            {subline && (
              <p className="text-iron-950/65 text-base md:text-lg font-light">{subline}</p>
            )}
          </div>

          <Link
            href={cta.href}
            className={`${buttonVariants({ variant: "secondary", size: "lg" })} shrink-0 group`}
          >
            {cta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
