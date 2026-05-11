"use client"

import { motion } from "framer-motion"
import { IndustryCard } from "./IndustryCard"
import type { Industry } from "@/lib/types"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 24 },
  },
}

interface IndustriesGridProps {
  industries: Industry[]
}

export function IndustriesGrid({ industries }: IndustriesGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {industries.map((industry) => (
        <motion.div key={industry.slug} variants={itemVariants}>
          <IndustryCard industry={industry} />
        </motion.div>
      ))}
    </motion.div>
  )
}
