import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { ReviewsStats } from "@/components/sections/ReviewsStats"
import { ReviewsGrid } from "@/components/sections/ReviewsGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { SectionHeader } from "@/components/common/SectionHeader"
import { REVIEWS } from "@/lib/constants/reviews"

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read what our clients say about Sokari Securities — verified reviews from executives, security managers, and organisations across Nigeria and West Africa.",
  openGraph: {
    title: "Client Reviews | Sokari Securities",
    description:
      "Verified reviews from executives, security managers, and organisations across Nigeria and West Africa.",
    url: "https://sokarisecurities.com/reviews",
  },
}

const avgRating =
  REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sokari Securities",
  url: "https://sokarisecurities.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating.toFixed(1),
    reviewCount: REVIEWS.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.reviewer,
      jobTitle: r.title,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.body,
    datePublished: r.date,
    publisher: { "@type": "Organization", name: r.company },
  })),
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Client Feedback"
          title="What Our Clients Say"
          subtitle="Our reputation is built on results. These are the words of the people we protect."
          backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-20 lg:py-28" aria-labelledby="reviews-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <SectionHeader
              eyebrow="Reviews"
              heading="Verified Client Reviews"
              id="reviews-heading"
            />

            <ReviewsStats reviews={REVIEWS} />

            <ReviewsGrid reviews={REVIEWS} />
          </div>
        </section>

        <CtaBanner
          headline="Experience the Sokari Difference"
          subline="Join hundreds of organisations that trust us with their most important security requirements."
          cta={{ label: "Get in Touch", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
