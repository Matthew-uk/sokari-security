"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconBox } from "@/components/common/IconBox"
import { SectionHeader } from "@/components/common/SectionHeader"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const SOLUTIONS = [
  {
    id: "executive",
    label: "Executive Protection",
    heading: "Comprehensive Executive Protection Package",
    description:
      "A fully integrated protection solution for C-suite executives and high-profile individuals operating in complex environments.",
    features: [
      "Dedicated close protection team (2–4 officers)",
      "Daily threat intelligence briefing",
      "Secure vehicle and driver",
      "Advance team for all significant movements",
      "24/7 operations centre support",
      "Medical first-responder integration",
      "International deployment capability",
    ],
  },
  {
    id: "corporate",
    label: "Corporate Facility",
    heading: "Corporate Facility Security Bundle",
    description:
      "A complete physical security solution for corporate offices, industrial facilities, and multi-site operations.",
    features: [
      "Uniformed access control officers",
      "CCTV monitoring and control room",
      "Perimeter patrol and response teams",
      "Visitor management system",
      "Security risk assessment",
      "Monthly security reporting",
      "Emergency response protocol",
    ],
  },
  {
    id: "maritime",
    label: "Maritime Operations",
    heading: "Maritime Security Operations Package",
    description:
      "Specialist security for vessel owners, port operators, and energy companies operating in Gulf of Guinea waters.",
    features: [
      "Armed vessel protection officers",
      "Vessel escort coordination",
      "Port facility security assessment",
      "ISPS Code compliance review",
      "Maritime threat intelligence",
      "Crew security training",
      "Incident response planning",
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence Retainer",
    heading: "Ongoing Intelligence Retainer",
    description:
      "A managed intelligence service delivering continuous situational awareness for organisations operating in Nigeria and West Africa.",
    features: [
      "Daily situation reports",
      "Weekly threat assessments",
      "Monthly strategic intelligence summary",
      "Ad-hoc target intelligence on request",
      "Dedicated intelligence analyst",
      "Encrypted delivery channels",
      "Board-level briefing support",
    ],
  },
]

export function SolutionsMatrix() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="solutions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <SectionHeader
          eyebrow="Packaged Solutions"
          heading="End-to-End Security Packages"
          subheading="Purpose-built solution bundles that combine our core capabilities for specific operational requirements."
          id="solutions-heading"
        />

        <Tabs defaultValue="executive">
          <TabsList className="bg-iron-900 border border-border-subtle flex-wrap h-auto gap-1 p-1 mb-8">
            {SOLUTIONS.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="text-sm data-[state=active]:bg-crimson data-[state=active]:text-iron-950"
              >
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {SOLUTIONS.map((s) => (
            <TabsContent key={s.id} value={s.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="flex flex-col gap-4">
                  <h3 className="text-white font-bold text-xl md:text-2xl">{s.heading}</h3>
                  <p className="text-iron-500 leading-relaxed">{s.description}</p>
                  <Link
                    href="/contact"
                    className={`${buttonVariants()} self-start bg-crimson text-iron-950 hover:bg-crimson-hover font-semibold mt-2`}
                  >
                    Commission This Solution
                  </Link>
                </div>
                <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col gap-3">
                  <p className="text-crimson text-xs uppercase tracking-widest font-semibold mb-1">
                    Package Includes
                  </p>
                  {s.features.map((f) => (
                    <IconBox key={f} text={f} />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
