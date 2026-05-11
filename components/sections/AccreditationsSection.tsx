"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { SectionHeader } from "@/components/common/SectionHeader"

const ACCREDITATIONS = [
  { name: "ISO 9001:2015", body: "Bureau Veritas", year: 2022, description: "Quality Management System certification confirming consistent service delivery standards." },
  { name: "NSCDC Licensed", body: "Nigeria Security & Civil Defence Corps", year: 2007, description: "Fully licensed and regulated by the NSCDC for private security operations in Nigeria." },
  { name: "NIMASA Certified", body: "Nigerian Maritime Admin. & Safety Agency", year: 2016, description: "Certified for maritime security operations in Nigerian waters." },
  { name: "ASIS Member", body: "ASIS International", year: 2015, description: "Active membership in the world's largest security professional association." },
]

export function AccreditationsSection() {
  return (
    <section className="py-20 bg-iron-900" aria-labelledby="accreditations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <SectionHeader
          eyebrow="Credentials"
          heading="Certified and Licensed"
          subheading="Our accreditations and regulatory licences demonstrate our commitment to the highest professional standards."
          id="accreditations-heading"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ACCREDITATIONS.map((item) => (
            <motion.div
              key={item.name}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col gap-3 hover:border-crimson/40 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-crimson/10 border border-crimson/20 flex items-center justify-center">
                <Award className="h-5 w-5 text-crimson" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-bold text-sm">{item.name}</h3>
                <p className="text-crimson text-xs font-medium">{item.body}</p>
                <p className="text-iron-500 text-xs leading-relaxed mt-1">{item.description}</p>
              </div>
              <span className="text-iron-500/50 text-xs">Since {item.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
