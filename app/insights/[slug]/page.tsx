import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav"
import { GoldBadge } from "@/components/common/GoldBadge"
import { TagList } from "@/components/common/TagList"
import { NewsletterForm } from "@/components/forms/NewsletterForm"
import { InsightsGrid } from "@/components/sections/InsightsGrid"
import { SectionHeader } from "@/components/common/SectionHeader"
import { INSIGHTS } from "@/lib/constants/insights"
import { formatDate } from "@/lib/utils/formatters"
import { Calendar, User } from "lucide-react"

const CATEGORY_LABELS: Record<string, string> = {
  news: "News",
  "threat-brief": "Threat Brief",
  "company-update": "Company Update",
  "industry-analysis": "Industry Analysis",
}

export async function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const insight = INSIGHTS.find((i) => i.slug === slug)
  if (!insight) return { title: "Article Not Found" }
  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: { images: [{ url: insight.coverImage }] },
  }
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const insight = INSIGHTS.find((i) => i.slug === slug)
  if (!insight) notFound()

  const related = INSIGHTS.filter((i) => i.slug !== slug && i.category === insight.category).slice(0, 3)

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    author: { "@type": "Organization", name: insight.author },
    datePublished: insight.date,
    image: insight.coverImage,
    publisher: {
      "@type": "Organization",
      name: "Sokari Securities",
      url: "https://sokarisecurities.com",
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sokarisecurities.com" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://sokarisecurities.com/insights" },
      { "@type": "ListItem", position: 3, name: insight.title, item: `https://sokarisecurities.com/insights/${insight.slug}` },
    ],
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" tabIndex={-1} className="pt-20 lg:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNav
            items={[{ label: "Insights", href: "/insights" }, { label: insight.title }]}
          />
        </div>

        <article aria-labelledby="article-heading">
          {/* Header */}
          <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex flex-col gap-4">
            <GoldBadge>{CATEGORY_LABELS[insight.category]}</GoldBadge>
            <h1 id="article-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {insight.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-iron-500 text-sm">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" />
                {insight.author} · {insight.authorTitle}
              </span>
              <time dateTime={insight.date} className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {formatDate(insight.date)}
              </time>
            </div>
          </header>

          {/* Cover image */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border-subtle">
              <Image
                src={insight.coverImage}
                alt={insight.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>

          {/* Body */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div
              className="prose-sokari"
              dangerouslySetInnerHTML={{ __html: insight.body.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br/>").replace(/## (.+)/g, "<h2>$1</h2>").replace(/### (.+)/g, "<h3>$1</h3>") }}
            />
            <div className="mt-8 pt-8 border-t border-border-subtle">
              <TagList tags={insight.tags} />
            </div>
          </div>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="py-16 bg-iron-900 border-t border-border-subtle" aria-labelledby="related-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
              <SectionHeader heading="Related Articles" align="left" id="related-heading" />
              <InsightsGrid insights={related} />
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="py-14 border-t border-border-subtle" aria-labelledby="subscribe-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 text-center">
            <h2 id="subscribe-heading" className="text-white font-bold text-xl">Stay Informed</h2>
            <p className="text-iron-500 text-sm">Receive our security intelligence briefings directly to your inbox.</p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
