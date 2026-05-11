"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReviewCard } from "./ReviewCard"
import type { Review } from "@/lib/types"

const CATEGORY_LABELS: Record<Review["category"] | "all", string> = {
  all: "All",
  "executive-protection": "Executive Protection",
  intelligence: "Intelligence",
  "physical-security": "Physical Security",
  "risk-consulting": "Risk Consulting",
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

interface ReviewsGridProps {
  reviews: Review[]
}

export function ReviewsGrid({ reviews }: ReviewsGridProps) {
  const categories = Array.from(new Set(reviews.map((r) => r.category))) as Review["category"][]

  const renderGrid = (items: Review[]) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {items.map((review) => (
        <motion.div key={review.id} variants={itemVariants}>
          <ReviewCard review={review} />
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <Tabs defaultValue="all">
      <TabsList className="bg-iron-900 border border-border-subtle flex-wrap h-auto gap-1 p-1 mb-8">
        <TabsTrigger value="all" className="text-sm data-[state=active]:bg-crimson data-[state=active]:text-iron-950">
          All
        </TabsTrigger>
        {categories.map((cat) => (
          <TabsTrigger
            key={cat}
            value={cat}
            className="text-sm data-[state=active]:bg-crimson data-[state=active]:text-iron-950"
          >
            {CATEGORY_LABELS[cat]}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="all">{renderGrid(reviews)}</TabsContent>
      {categories.map((cat) => (
        <TabsContent key={cat} value={cat}>
          {renderGrid(reviews.filter((r) => r.category === cat))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
