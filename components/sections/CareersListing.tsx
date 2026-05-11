"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobCard } from "./JobCard"
import type { Job } from "@/lib/types"

interface CareersListingProps {
  jobs: Job[]
}

export function CareersListing({ jobs }: CareersListingProps) {
  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="All">
          <TabsList className="bg-iron-900 border border-border-subtle mb-8 flex-wrap h-auto gap-1 p-1">
            {departments.map((dept) => (
              <TabsTrigger
                key={dept}
                value={dept}
                className="text-sm data-[state=active]:bg-crimson data-[state=active]:text-iron-950"
              >
                {dept}
              </TabsTrigger>
            ))}
          </TabsList>

          {departments.map((dept) => {
            const filtered = dept === "All" ? jobs : jobs.filter((j) => j.department === dept)
            return (
              <TabsContent key={dept} value={dept}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-4"
                >
                  {filtered.length === 0 ? (
                    <p className="text-iron-500 text-sm py-8 text-center">No open positions in this department at the moment.</p>
                  ) : (
                    filtered.map((job) => <JobCard key={job.slug} job={job} />)
                  )}
                </motion.div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
