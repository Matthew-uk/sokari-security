import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { IndustriesGrid } from "@/components/sections/IndustriesGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { SectionHeader } from "@/components/common/SectionHeader"
import { INDUSTRIES } from "@/lib/constants/industries"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sokari Securities serves clients across oil & gas, banking, diplomatic, government, construction, and maritime sectors in Nigeria and West Africa.",
}

export default function IndustriesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Sectors We Serve"
          title="Industry-Specific Security Expertise"
          subtitle="We understand that each sector carries distinct risks, regulatory requirements, and operational constraints. Our solutions are designed with that specificity in mind."
          backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-20 lg:py-28" aria-labelledby="industries-list-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeader
              eyebrow="Industries"
              heading="Who We Protect"
              id="industries-list-heading"
            />
            <IndustriesGrid industries={INDUSTRIES} />
          </div>
        </section>

        <CtaBanner
          headline="Your sector. Our expertise."
          subline="Contact us to discuss sector-specific security requirements."
          cta={{ label: "Speak to a Specialist", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
