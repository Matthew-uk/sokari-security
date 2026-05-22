import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav"
import { IconBox } from "@/components/common/IconBox"
import { SectionHeader } from "@/components/common/SectionHeader"
import { INDUSTRIES } from "@/lib/constants/industries"
import { SERVICES } from "@/lib/constants/services"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = INDUSTRIES.find((i) => i.slug === slug)
  if (!industry) return { title: "Industry Not Found" }
  return { title: industry.title, description: industry.metaDescription }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = INDUSTRIES.find((i) => i.slug === slug)
  if (!industry) notFound()

  const relatedServices = SERVICES.filter((s) => industry.relatedServices.includes(s.slug))

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sokarisecurities.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://sokarisecurities.com/industries" },
      { "@type": "ListItem", position: 3, name: industry.title, item: `https://sokarisecurities.com/industries/${industry.slug}` },
    ],
  }

  const faqJsonLd = industry.faqs && industry.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: industry.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Industries We Serve"
          title={industry.title}
          subtitle={industry.shortDescription}
          backgroundImage={industry.image}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <BreadcrumbNav items={[{ label: "Industries", href: "/industries" }, { label: industry.title }]} />
        </div>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 flex flex-col gap-8">
                <div>
                  <h2 className="text-white font-bold text-2xl mb-4">Security Challenges</h2>
                  <p className="text-iron-500 leading-relaxed mb-6">{industry.description}</p>
                  <div className="flex flex-col gap-3">
                    {industry.challenges.map((c) => <IconBox key={c} text={c} />)}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-bg-surface border border-border-subtle rounded-xl p-6">
                  <h3 className="text-white font-bold text-base mb-4">Related Services</h3>
                  <div className="flex flex-col gap-2">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between text-iron-500 text-sm hover:text-crimson transition-colors py-2 border-b border-border-subtle last:border-0 group"
                      >
                        {s.title}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {industry.approach && (
          <section className="py-16 lg:py-20 bg-bg-surface/40" aria-labelledby="industry-approach-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <SectionHeader
                    eyebrow="How We Engage"
                    heading="Our Approach"
                    align="left"
                    id="industry-approach-heading"
                    headingClassName="text-3xl md:text-4xl"
                  />
                </div>
                <div className="lg:col-span-2">
                  <p className="text-iron-200/80 text-base md:text-lg leading-relaxed">
                    {industry.approach}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {industry.faqs && industry.faqs.length > 0 && <FaqSection faqs={industry.faqs} />}

        <CtaBanner
          headline={`Protect your ${industry.title} operations`}
          cta={{ label: "Get in Touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
