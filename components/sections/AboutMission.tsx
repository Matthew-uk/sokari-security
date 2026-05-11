"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { AnimatedDivider } from "@/components/common/AnimatedDivider"
import { ArrowRight } from "lucide-react"

interface AboutMissionProps {
  eyebrow?: string
  heading: string
  body: string
  cta?: { label: string; href: string }
  image: string
  imageAlt: string
  reverse?: boolean
}

export function AboutMission({ eyebrow, heading, body, cta, image, imageAlt, reverse }: AboutMissionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 48 : -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="w-full lg:w-1/2 shrink-0"
          >
            <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden border border-border-subtle">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-crimson rounded-tl-xl" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-crimson rounded-br-xl" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -48 : 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
            className="flex flex-col gap-5 lg:w-1/2"
          >
            {eyebrow && (
              <p className="text-crimson text-xs font-semibold uppercase tracking-[0.2em]">
                {eyebrow}
              </p>
            )}
            <AnimatedDivider width="short" />
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {heading}
            </h2>
            <p className="text-iron-500 text-base leading-relaxed">{body}</p>
            {cta && (
              <Link
                href={cta.href}
                className={`${buttonVariants({ variant: "outline" })} self-start border-crimson/50 text-crimson hover:border-crimson hover:bg-crimson/5 group`}
              >
                {cta.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
