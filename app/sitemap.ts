import type { MetadataRoute } from "next"
import { SERVICES } from "@/lib/constants/services"
import { INDUSTRIES } from "@/lib/constants/industries"
import { INSIGHTS } from "@/lib/constants/insights"
import { CAREERS } from "@/lib/constants/careers"

const BASE_URL = "https://sokarisecurities.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/solutions`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/insights`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/reviews`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/careers`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((i) => ({
    url: `${BASE_URL}/insights/${i.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
    lastModified: new Date(i.date),
  }))

  const careerRoutes: MetadataRoute.Sitemap = CAREERS.map((c) => ({
    url: `${BASE_URL}/careers/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...insightRoutes, ...careerRoutes]
}
