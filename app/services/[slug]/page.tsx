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
import { IndustryCard } from "@/components/sections/IndustryCard"
import { SERVICES } from "@/lib/constants/services"
import { INDUSTRIES } from "@/lib/constants/industries"

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return { title: "Service Not Found" }
  return {
    title: service.title,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | Sokari Securities`,
      description: service.metaDescription,
      url: `https://sokarisecurities.com/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const relatedIndustries = INDUSTRIES.filter((i) =>
    i.relatedServices.includes(service.slug)
  )

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `https://sokarisecurities.com/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Sokari Securities",
      url: "https://sokarisecurities.com",
    },
    areaServed: { "@type": "Country", name: "Nigeria" },
    serviceType: service.title,
  }

  const faqJsonLd = service.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sokarisecurities.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://sokarisecurities.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://sokarisecurities.com/services/${service.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Our Services"
          title={service.title}
          subtitle={service.shortDescription}
          backgroundImage={service.image}
          variant="page"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <BreadcrumbNav items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
        </div>

        <section className="py-16 lg:py-20" aria-labelledby="service-detail-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 flex flex-col gap-8">
                <div>
                  <h2 id="service-detail-heading" className="text-white font-bold text-2xl mb-4">
                    About This Service
                  </h2>
                  <p className="text-iron-500 leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col gap-4 h-fit">
                <SectionHeader
                  eyebrow="What's Included"
                  heading="Service Features"
                  align="left"
                  headingClassName="text-lg"
                />
                <div className="flex flex-col gap-3">
                  {service.features.map((f) => (
                    <IconBox key={f} text={f} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {service.methodology && service.methodology.length > 0 && (
          <section className="py-16 lg:py-20 bg-bg-surface/40" aria-labelledby="service-methodology-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                eyebrow="How We Engage"
                heading="Our Methodology"
                align="left"
                id="service-methodology-heading"
                headingClassName="text-3xl md:text-4xl"
              />
              <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.methodology.map((m, idx) => (
                  <li
                    key={m.step}
                    className="relative bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-crimson text-2xl font-bold leading-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-crimson/30" />
                    </div>
                    <h3 className="text-white font-bold text-base">{m.step}</h3>
                    <p className="text-iron-500 text-sm leading-relaxed">{m.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {service.deliverables && service.deliverables.length > 0 && (
          <section className="py-16 lg:py-20" aria-labelledby="service-deliverables-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <SectionHeader
                    eyebrow="What You Receive"
                    heading="Deliverables"
                    align="left"
                    id="service-deliverables-heading"
                    headingClassName="text-3xl"
                  />
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d) => (
                    <IconBox key={d} text={d} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {relatedIndustries.length > 0 && (
          <section className="py-16 lg:py-20 bg-bg-surface/40" aria-labelledby="service-industries-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                eyebrow="Sectors We Support"
                heading="Industries Using This Service"
                align="left"
                id="service-industries-heading"
                headingClassName="text-3xl md:text-4xl"
              />
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedIndustries.map((industry) => (
                  <IndustryCard key={industry.slug} industry={industry} />
                ))}
              </div>
            </div>
          </section>
        )}

        {service.faqs.length > 0 && <FaqSection faqs={service.faqs} />}

        <CtaBanner
          headline={`Commission ${service.title}`}
          subline="Speak with a specialist to design the right programme for your requirements."
          cta={{ label: "Get in Touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
