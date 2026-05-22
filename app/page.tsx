import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroCinematic } from "@/components/sections/HeroCinematic"
import { StatsBanner } from "@/components/sections/StatsBanner"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { AboutMission } from "@/components/sections/AboutMission"
import { IndustriesGrid } from "@/components/sections/IndustriesGrid"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { PartnersLogos } from "@/components/sections/PartnersLogos"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { SectionHeader } from "@/components/common/SectionHeader"
import { SERVICES } from "@/lib/constants/services"
import { INDUSTRIES } from "@/lib/constants/industries"
import { TESTIMONIALS } from "@/lib/constants/testimonials"

export const metadata: Metadata = {
  title: "Sokari Securities | Elite International Security Solutions",
  description:
    "Premium international security company headquartered in Port Harcourt, Nigeria. Executive protection, intelligence, physical security, and risk management.",
  openGraph: {
    images: [{ url: "/assets/images/og/og-default.jpg", width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <HeroCinematic
          eyebrow="Elite International Security"
          title="Securing What Matters Most"
          subtitle="From Port Harcourt to the world stage — Sokari Securities delivers world-class protection, intelligence, and risk management for those who demand nothing less."
          ctaPrimary={{ label: "Our Services", href: "/services" }}
          ctaSecondary={{ label: "Get in Touch", href: "/contact" }}
          backgroundImage="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80"
        />

        {/* Stats */}
        <StatsBanner />

        {/* Services */}
        <section className="py-20 lg:py-28" aria-labelledby="services-home-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeader
              eyebrow="Our Services"
              heading="Comprehensive Security Solutions"
              subheading="From executive protection to maritime security, our capabilities span the full spectrum of security requirements."
              id="services-home-heading"
            />
            <ServicesGrid services={SERVICES} />
          </div>
        </section>

        {/* About / Mission */}
        <AboutMission
          eyebrow="Who We Are"
          heading="Africa's Premier International Security Company"
          body="Founded in 2007, Sokari Securities has grown from a Port Harcourt-based guarding company into a full-spectrum international security group. We serve multinational corporations, government agencies, diplomatic missions, and high-net-worth individuals across 12 countries — delivering intelligence-led, operationally excellent security solutions that reflect the best of global standards from an African base of excellence."
          cta={{ label: "Our Story", href: "/about" }}
          image="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Sokari Securities operational team in the field"
        />

        {/* Industries */}
        <section className="py-20 lg:py-28 bg-iron-900" aria-labelledby="industries-home-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeader
              eyebrow="Industries We Serve"
              heading="Sector-Specific Expertise"
              subheading="Every industry has unique security challenges. We bring deep sector knowledge to every engagement."
              id="industries-home-heading"
            />
            <IndustriesGrid industries={INDUSTRIES} />
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection testimonials={TESTIMONIALS} />

        {/* Partners */}
        <PartnersLogos />

        {/* CTA */}
        <CtaBanner
          headline="Ready to secure your operations?"
          subline="Speak with one of our security specialists today."
          cta={{ label: "Contact Us", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
