import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav"
import { GoldBadge } from "@/components/common/GoldBadge"
import { IconBox } from "@/components/common/IconBox"
import { CareerApplyForm } from "@/components/forms/CareerApplyForm"
import { CAREERS } from "@/lib/constants/careers"
import { MapPin, Clock, Building2 } from "lucide-react"

const TYPE_LABELS: Record<string, string> = {
  "full-time": "Full Time",
  contract: "Contract",
  "part-time": "Part Time",
}

export async function generateStaticParams() {
  return CAREERS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const job = CAREERS.find((c) => c.slug === slug)
  if (!job) return { title: "Role Not Found" }
  return {
    title: job.title,
    description: `${job.title} — ${job.location}. ${job.description.slice(0, 120)}...`,
  }
}

export default async function CareerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const job = CAREERS.find((c) => c.slug === slug)
  if (!job) notFound()

  const jobJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    hiringOrganization: {
      "@type": "Organization",
      name: "Sokari Securities",
      sameAs: "https://sokarisecurities.com",
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: job.location },
    },
    employmentType: job.type.toUpperCase().replace("-", "_"),
    datePosted: job.postedDate,
    url: `https://sokarisecurities.com/careers/${job.slug}`,
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sokarisecurities.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://sokarisecurities.com/careers" },
      { "@type": "ListItem", position: 3, name: job.title, item: `https://sokarisecurities.com/careers/${job.slug}` },
    ],
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" tabIndex={-1} className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNav items={[{ label: "Careers", href: "/careers" }, { label: job.title }]} />
        </div>

        <section className="py-8 lg:py-12" aria-labelledby="job-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Job header */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    <GoldBadge>{job.department}</GoldBadge>
                    <GoldBadge>{TYPE_LABELS[job.type]}</GoldBadge>
                  </div>
                  <h1 id="job-heading" className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {job.title}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-iron-500 text-sm">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" aria-hidden="true" />{job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Building2 className="h-4 w-4" aria-hidden="true" />{job.department}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-white font-bold text-lg mb-3">About the Role</h2>
                  <p className="text-iron-500 leading-relaxed">{job.description}</p>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="text-white font-bold text-lg mb-4">Requirements</h2>
                  <div className="flex flex-col gap-2.5">
                    {job.requirements.map((r) => <IconBox key={r} text={r} />)}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-white font-bold text-lg mb-4">What We Offer</h2>
                  <div className="flex flex-col gap-2.5">
                    {job.benefits.map((b) => <IconBox key={b} text={b} />)}
                  </div>
                </div>
              </div>

              {/* Application form sidebar */}
              <div className="lg:sticky lg:top-24 h-fit bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col gap-5">
                <div>
                  <h2 className="text-white font-bold text-lg">Apply for This Role</h2>
                  <p className="text-iron-500 text-xs mt-1">Complete the form below to submit your application.</p>
                </div>
                <CareerApplyForm jobTitle={job.title} jobSlug={job.slug} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
