import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { SectionHeader } from "@/components/common/SectionHeader"
import { PROJECTS } from "@/lib/constants/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected security deployments and operations delivered by Sokari Securities across Nigeria and West Africa.",
}

export default function ProjectsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Our Work"
          title="Proven Operations. Trusted Results."
          subtitle="A selection of security operations and deployments that demonstrate our capability across sectors, environments, and geographies."
          backgroundImage="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-20 lg:py-28" aria-labelledby="projects-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeader
              eyebrow="Selected Projects"
              heading="Operations We&apos;ve Delivered"
              subheading="Click any project to view the full operational brief."
              id="projects-heading"
            />
            <ProjectsGrid projects={PROJECTS} />
          </div>
        </section>

        <CtaBanner
          headline="Commission a Security Operation"
          subline="Let us design and deliver a security programme tailored to your specific needs."
          cta={{ label: "Contact Us", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
