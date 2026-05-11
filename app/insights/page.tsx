import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { InsightsGrid } from "@/components/sections/InsightsGrid"
import { SectionHeader } from "@/components/common/SectionHeader"
import { NewsletterForm } from "@/components/forms/NewsletterForm"
import { INSIGHTS } from "@/lib/constants/insights"

export const metadata: Metadata = {
  title: "Intelligence & Insights",
  description:
    "Security intelligence, threat assessments, and industry analysis from the Sokari Securities team.",
}

export default function InsightsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Intelligence & Insights"
          title="Informed. Prepared. Protected."
          subtitle="Threat assessments, security briefings, and industry analysis from our specialist team."
          backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-20 lg:py-28" aria-labelledby="insights-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeader
              eyebrow="Latest Intelligence"
              heading="Security Insights"
              id="insights-heading"
            />
            <InsightsGrid insights={INSIGHTS} showFeatured />
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-iron-900 border-t border-border-subtle" aria-labelledby="newsletter-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5 text-center">
            <h2 id="newsletter-heading" className="text-white font-bold text-xl">
              Receive Our Intelligence Briefings
            </h2>
            <p className="text-iron-500 text-sm">
              Subscribe to receive our threat assessments and security insights directly to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
