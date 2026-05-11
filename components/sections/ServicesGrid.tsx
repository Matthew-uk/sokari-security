"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "./ServiceCard"
import type { Service } from "@/lib/types"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 24 },
  },
}

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((service, i) => (
        <motion.div key={service.slug} variants={itemVariants}>
          <ServiceCard service={service} index={i} />
        </motion.div>
      ))}
    </motion.div>
  )
}
