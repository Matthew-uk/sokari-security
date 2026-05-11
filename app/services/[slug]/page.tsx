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
import { SERVICES } from "@/lib/constants/services"

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
          backgroundImage={`https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1920&q=80`}
          variant="page"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <BreadcrumbNav items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
        </div>

        <section className="py-16 lg:py-20" aria-labelledby="service-detail-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                <div>
                  <h2 id="service-detail-heading" className="text-white font-bold text-2xl mb-4">
                    About This Service
                  </h2>
                  <p className="text-iron-500 leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Features sidebar */}
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
