import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { SectionHeader } from "@/components/common/SectionHeader"
import { SERVICES } from "@/lib/constants/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full catalogue of Sokari Securities services — executive protection, intelligence, physical security, risk management, maritime security, and cyber security advisory.",
}

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="What We Offer"
          title="Comprehensive Security Solutions"
          subtitle="Every service line is designed and delivered by specialists with real-world operational experience across Nigeria, West Africa, and internationally."
          backgroundImage="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-20 lg:py-28" aria-labelledby="services-list-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeader
              eyebrow="Our Services"
              heading="What We Do"
              id="services-list-heading"
            />
            <ServicesGrid services={SERVICES} />
          </div>
        </section>

        <CtaBanner
          headline="Need a tailored solution?"
          subline="Tell us about your requirements and we will design a bespoke security programme."
          cta={{ label: "Start a Conversation", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
