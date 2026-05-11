"use client"

import { motion } from "framer-motion"
import { TeamMemberCard } from "./TeamMemberCard"
import type { TeamMember } from "@/lib/types"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
    >
      {members.map((member) => (
        <motion.div key={member.name} variants={itemVariants}>
          <TeamMemberCard member={member} />
        </motion.div>
      ))}
    </motion.div>
  )
}
