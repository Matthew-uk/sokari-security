"use client"

import { motion } from "framer-motion"

const MILESTONES = [
  { year: 2007, title: "Company Founded", description: "Sokari Securities established in Port Harcourt by Brigadier (Rtd.) Emeka Sokari with a founding team of 12 officers." },
  { year: 2010, title: "First International Contract", description: "Awarded first international contract providing security services for a multinational oil company in the Niger Delta." },
  { year: 2013, title: "Expansion to Lagos & Abuja", description: "Opened regional offices in Lagos and Abuja, establishing our national coverage across Nigeria's major commercial centres." },
  { year: 2016, title: "Maritime Division Launched", description: "Established dedicated maritime security division with licensed armed vessel escort capabilities for Gulf of Guinea operations." },
  { year: 2019, title: "Intelligence Division Established", description: "Launched dedicated intelligence and surveillance division, expanding capabilities beyond physical security." },
  { year: 2022, title: "ISO 9001:2015 Certification", description: "Achieved ISO 9001:2015 certification, confirming world-class quality management across all service lines." },
  { year: 2025, title: "Pan-African Operations", description: "Expanded operations to 12 countries across West and Central Africa, with over 2,500 trained security professionals." },
]

export function Timeline() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="timeline-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="timeline-heading" className="sr-only">Company History</h2>
        <div className="relative">
          {/* Centre line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border-subtle" aria-hidden="true" />

          <div className="flex flex-col gap-10">
            {MILESTONES.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.05 }}
                className={`relative flex flex-col lg:flex-row ${i % 2 === 0 ? "lg:flex-row-reverse" : ""} items-start lg:items-center gap-6`}
              >
                {/* Content */}
                <div className={`pl-12 lg:pl-0 lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? "lg:pl-12" : "lg:pr-12 lg:text-right"}`}>
                  <div className={`inline-block bg-bg-surface border border-border-subtle rounded-lg p-5 ${i % 2 === 0 ? "" : "lg:ml-auto"}`}>
                    <span className="text-crimson text-xs font-bold uppercase tracking-widest">{item.year}</span>
                    <h3 className="text-white font-bold text-base mt-1 mb-2">{item.title}</h3>
                    <p className="text-iron-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-5 lg:top-auto h-3 w-3 rounded-full bg-crimson border-2 border-iron-950 z-10 -translate-x-1.5" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
