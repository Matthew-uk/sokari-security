import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { SolutionsMatrix } from "@/components/sections/SolutionsMatrix"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { TESTIMONIALS } from "@/lib/constants/testimonials"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "End-to-end security packages from Sokari Securities — executive protection, corporate facility, maritime, and intelligence retainer solutions.",
}

export default function SolutionsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Packaged Solutions"
          title="Purpose-Built Security Packages"
          subtitle="Pre-configured solution bundles that combine our core capabilities to address specific operational requirements — deployed faster, managed seamlessly."
          backgroundImage="https://images.unsplash.com/photo-1551836022-4c4f04f2dcd1?auto=format&fit=crop&w=1920&q=80"
        />

        <SolutionsMatrix />

        <TestimonialsSection testimonials={TESTIMONIALS} />

        <CtaBanner
          headline="Commission a security solution"
          subline="Our specialists will design a programme precisely calibrated to your threat environment."
          cta={{ label: "Get in Touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
