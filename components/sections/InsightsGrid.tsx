"use client"

import { motion } from "framer-motion"
import { InsightCard } from "./InsightCard"
import type { Insight } from "@/lib/types"

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

interface InsightsGridProps {
  insights: Insight[]
  showFeatured?: boolean
}

export function InsightsGrid({ insights, showFeatured }: InsightsGridProps) {
  if (showFeatured && insights.length > 0) {
    const [featured, ...rest] = insights
    return (
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <InsightCard insight={featured} featured />
        </motion.div>
        {rest.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((insight) => (
              <motion.div key={insight.slug} variants={itemVariants}>
                <InsightCard insight={insight} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {insights.map((insight) => (
        <motion.div key={insight.slug} variants={itemVariants}>
          <InsightCard insight={insight} />
        </motion.div>
      ))}
    </motion.div>
  )
}
