"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "./TestimonialCard"
import { SectionHeader } from "@/components/common/SectionHeader"
import type { Testimonial } from "@/lib/types"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 24 },
  },
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-iron-950" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <SectionHeader
          eyebrow="Client Testimonials"
          heading="Trusted by those who demand the best"
          subheading="Our clients operate at the highest levels of business, government, and diplomacy. Their trust is our greatest credential."
          id="testimonials-heading"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((t) => (
            <motion.div key={t.id} variants={itemVariants}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
