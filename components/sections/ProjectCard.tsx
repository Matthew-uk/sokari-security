"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar, ZoomIn } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { GoldBadge } from "@/components/common/GoldBadge"
import { TagList } from "@/components/common/TagList"
import type { Project } from "@/lib/types"

const SECTOR_LABELS: Record<Project["sector"], string> = {
  "oil-gas": "Oil & Gas",
  diplomatic: "Diplomatic",
  banking: "Banking",
  government: "Government",
  construction: "Construction",
  maritime: "Maritime",
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
        className="group block w-full text-left relative overflow-hidden rounded-2xl border-l-2 border-l-crimson/40 border border-iron-800 hover:border-crimson/50 hover:border-l-crimson transition-colors duration-300 cursor-pointer bg-iron-900"
        aria-label={`${project.title} — View project details`}
      >
        {/* Image */}
        <div className="relative aspect-3/2 overflow-hidden">
          <Image
            src={project.coverImage}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-iron-950/90 via-iron-950/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3">
            <GoldBadge>{SECTOR_LABELS[project.sector]}</GoldBadge>
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-iron-200/80 text-xs font-medium bg-iron-950/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
              {project.year}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-crimson/85 backdrop-blur-sm rounded-full p-3">
              <ZoomIn className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-2">
          <h3 className="font-serif text-white font-bold text-base leading-snug group-hover:text-crimson transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 text-iron-500 text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3 shrink-0" aria-hidden="true" />
              {project.year}
            </span>
          </div>
          <p className="text-iron-500 text-xs leading-relaxed line-clamp-2">{project.description}</p>
        </div>
      </motion.button>

      {/* Detail modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-iron-900 border-iron-700 max-w-2xl">
          <DialogTitle className="font-serif text-white font-bold text-xl">{project.title}</DialogTitle>
          <div className="flex flex-col gap-5">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <GoldBadge>{SECTOR_LABELS[project.sector]}</GoldBadge>
              <span className="text-iron-500 text-sm flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {project.location}
              </span>
              <span className="text-iron-500 text-sm">{project.year}</span>
            </div>
            <p className="text-iron-200/80 text-sm leading-relaxed">{project.fullDescription}</p>
            <TagList tags={project.tags} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
