"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Industry } from "@/lib/types"

interface IndustryCardProps {
  industry: Industry
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group block relative overflow-hidden rounded-2xl aspect-4/3 border border-iron-800 group-hover:border-crimson/40 transition-colors duration-300"
      aria-label={`${industry.title} — View security solutions`}
    >
      {/* Background image */}
      <Image
        src={industry.image}
        alt=""
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-iron-950/95 via-iron-950/40 to-transparent" />

      {/* Hover overlay deepens */}
      <div className="absolute inset-0 bg-iron-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Bottom content panel */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        {/* Crimson accent line above content */}
        <div className="w-8 h-0.5 bg-crimson mb-3 transition-all duration-300 group-hover:w-14" />

        <h3 className="font-serif text-white font-bold text-lg leading-tight mb-1">
          {industry.title}
        </h3>

        <p className="text-iron-200/70 text-sm leading-relaxed line-clamp-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out">
          {industry.shortDescription}
        </p>

        <div className="flex items-center gap-1.5 text-crimson text-sm font-medium mt-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
          <span>Explore</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}
