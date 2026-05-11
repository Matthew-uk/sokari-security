"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "./ProjectCard"
import type { Project } from "@/lib/types"

const SECTOR_LABELS: Record<Project["sector"] | "all", string> = {
  all: "All",
  "oil-gas": "Oil & Gas",
  diplomatic: "Diplomatic",
  banking: "Banking",
  government: "Government",
  construction: "Construction",
  maritime: "Maritime",
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 24 },
  },
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const sectors = Array.from(new Set(projects.map((p) => p.sector)))

  return (
    <Tabs defaultValue="all">
      <TabsList className="bg-iron-900 border border-border-subtle flex-wrap h-auto gap-1 p-1 mb-8">
        <TabsTrigger value="all" className="text-sm data-[state=active]:bg-crimson data-[state=active]:text-iron-950">
          All
        </TabsTrigger>
        {sectors.map((sector) => (
          <TabsTrigger
            key={sector}
            value={sector}
            className="text-sm data-[state=active]:bg-crimson data-[state=active]:text-iron-950"
          >
            {SECTOR_LABELS[sector]}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="all">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </TabsContent>

      {sectors.map((sector) => (
        <TabsContent key={sector} value={sector}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.filter((p) => p.sector === sector).map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
