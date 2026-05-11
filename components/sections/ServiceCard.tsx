"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Eye, Building2, AlertTriangle, Anchor, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/types"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Eye,
  Building2,
  AlertTriangle,
  Anchor,
  Cpu,
}

interface ServiceCardProps {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Shield
  const num = String(index + 1).padStart(2, "0")

  return (
    <motion.div
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      className="group relative h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className="block h-full"
        aria-label={`${service.title} — Learn more`}
      >
        {/* Top accent line — always visible at low opacity, full on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-crimson/30 to-transparent group-hover:via-crimson/80 transition-all duration-300 rounded-t-xl z-10" />

        <div
          className="relative h-full rounded-xl bg-linear-to-b from-iron-900 to-iron-950 border border-iron-800 group-hover:border-crimson/40 transition-all duration-300 overflow-hidden p-6 flex flex-col gap-5"
          style={{
            boxShadow: "0 1px 0 0 rgba(255,255,255,0.04) inset",
          }}
        >
          {/* Hover glow overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(200,16,46,0.07),transparent)]" aria-hidden="true" />

          {/* Decorative number */}
          <span
            className="absolute top-4 right-5 font-serif text-6xl text-iron-800/60 leading-none select-none pointer-events-none transition-colors duration-300 group-hover:text-crimson/10"
            aria-hidden="true"
          >
            {num}
          </span>

          {/* Icon */}
          <div className="relative h-12 w-12 rounded-xl bg-linear-to-br from-crimson/20 to-crimson/5 border border-crimson/25 flex items-center justify-center shrink-0 group-hover:border-crimson/50 group-hover:shadow-[0_0_16px_rgba(200,16,46,0.25)] transition-all duration-300">
            <Icon className="h-5 w-5 text-crimson group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="font-serif text-xl text-white group-hover:text-crimson transition-colors duration-200 leading-snug pr-8 tracking-wide">
              {service.title}
            </h3>
            <p className="text-iron-500 text-sm leading-relaxed flex-1 font-light">
              {service.shortDescription}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-iron-800/80 group-hover:border-crimson/20 transition-colors duration-300">
            <span className="text-crimson text-sm font-semibold tracking-wide">Explore Service</span>
            <div className="w-7 h-7 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center group-hover:bg-crimson group-hover:border-crimson transition-all duration-200">
              <ArrowRight className="h-3.5 w-3.5 text-crimson group-hover:text-white transition-colors duration-200 group-hover:translate-x-0.5 translate-x-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
