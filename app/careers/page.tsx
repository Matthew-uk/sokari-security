import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { CareersListing } from "@/components/sections/CareersListing"
import { StatsBanner } from "@/components/sections/StatsBanner"
import { SectionHeader } from "@/components/common/SectionHeader"
import { IconBox } from "@/components/common/IconBox"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { CAREERS } from "@/lib/constants/careers"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Sokari Securities team — open positions in executive protection, intelligence, maritime security, and risk management.",
}

const VALUES = [
  { title: "Mission-Driven", body: "Every role at Sokari is part of a mission that genuinely matters — protecting people and enabling operations in challenging environments." },
  { title: "Professional Growth", body: "We invest in continuous training, certification support, and international deployment opportunities for our team." },
  { title: "Elite Standards", body: "We recruit carefully and develop relentlessly. The Sokari standard is the highest in the industry." },
]

export default function CareersPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Join the Team"
          title="Build Your Career in Elite Security"
          subtitle="Sokari Securities is where the best security professionals come to do the most meaningful work of their careers."
          backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
          ctaPrimary={{ label: "View Open Roles", href: "#open-roles" }}
        />

        {/* Culture */}
        <section className="py-20 lg:py-28" aria-labelledby="culture-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
            <SectionHeader
              eyebrow="Why Sokari"
              heading="What Makes Us Different"
              subheading="We are not just a security company. We are a team of professionals who take immense pride in operational excellence."
              id="culture-heading"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((v) => (
                <div key={v.title} className="flex flex-col gap-3 bg-bg-surface border border-border-subtle rounded-xl p-6">
                  <h3 className="text-crimson font-bold text-base">{v.title}</h3>
                  <p className="text-iron-500 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StatsBanner />

        {/* Jobs */}
        <section id="open-roles" className="py-20 lg:py-28" aria-labelledby="jobs-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <SectionHeader
              eyebrow="Open Positions"
              heading="Current Opportunities"
              id="jobs-heading"
            />
          </div>
          <CareersListing jobs={CAREERS} />
        </section>

        <CtaBanner
          headline="Don't see the right role?"
          subline="Send us your CV and we'll keep you in mind for future opportunities."
          cta={{ label: "Send Your CV", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
