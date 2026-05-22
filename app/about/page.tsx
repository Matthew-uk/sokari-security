import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { StatsBanner } from "@/components/sections/StatsBanner"
import { AboutMission } from "@/components/sections/AboutMission"
import { Timeline } from "@/components/sections/Timeline"
import { AccreditationsSection } from "@/components/sections/AccreditationsSection"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { SectionHeader } from "@/components/common/SectionHeader"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sokari Securities — our founding, mission, leadership, and operational history across West Africa and beyond.",
}

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Our Story"
          title="Elite Security. African Excellence."
          subtitle="Built on military discipline, driven by operational excellence — Sokari Securities has protected the interests of the world's leading organisations across Africa and beyond since 2007."
          backgroundImage="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&w=1920&q=80"
        />

        <AboutMission
          eyebrow="Mission"
          heading="To be Africa's most trusted and capable security partner"
          body="We exist to deliver world-class security solutions that protect people, assets, and reputations. Our mission is grounded in the belief that elite security should not require importing expertise — it should be built, trained, and led from African soil, to the highest international standards."
          image="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Sokari Securities leadership team"
        />

        <StatsBanner />

        <section className="py-20 lg:py-28" aria-labelledby="history-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our History"
              heading="Two Decades of Operational Excellence"
              subheading="From a founding team of 12 officers in Port Harcourt to a pan-African security group with over 2,500 professionals — one company, one standard of excellence."
              id="history-heading"
            />
          </div>
          <Timeline />
        </section>

        <section className="py-20 lg:py-28 bg-iron-900" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeader
              eyebrow="Our People"
              heading="A Team Built on Discipline and Expertise"
              subheading="Sokari Securities draws on veterans of the Nigerian military, intelligence services, and the international security sector — operating as one cohesive organisation."
              id="team-heading"
            />
          </div>
        </section>

        <AccreditationsSection />

        <CtaBanner
          headline="Partner with a team you can trust"
          subline="Commission a security assessment or discuss your requirements with our team."
          cta={{ label: "Contact Us", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
