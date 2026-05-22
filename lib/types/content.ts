export type Service = {
  slug: string
  title: string
  shortDescription: string
  description: string
  metaDescription: string
  icon: string
  image: string
  features: string[]
  methodology?: { step: string; description: string }[]
  deliverables?: string[]
  faqs: { question: string; answer: string }[]
}

export type Industry = {
  slug: string
  title: string
  shortDescription: string
  description: string
  metaDescription: string
  icon: string
  image: string
  approach?: string
  challenges: string[]
  relatedServices: string[]
  faqs?: { question: string; answer: string }[]
}

export type Insight = {
  slug: string
  title: string
  excerpt: string
  body: string
  category: "news" | "threat-brief" | "company-update" | "industry-analysis"
  author: string
  authorTitle: string
  date: string
  coverImage: string
  tags: string[]
}

export type Job = {
  slug: string
  title: string
  department: string
  location: string
  type: "full-time" | "contract" | "part-time"
  description: string
  requirements: string[]
  benefits: string[]
  postedDate: string
}

export type TeamMember = {
  name: string
  title: string
  bio: string
  image: string
  linkedin?: string
}

export type Testimonial = {
  id: string
  quote: string
  reviewer: string
  title: string
  company: string
  avatar?: string
}

export type Project = {
  id: string
  title: string
  sector: "oil-gas" | "diplomatic" | "banking" | "government" | "construction" | "maritime"
  location: string
  year: number
  description: string
  fullDescription: string
  coverImage: string
  tags: string[]
}

export type Review = {
  id: string
  reviewer: string
  title: string
  company: string
  rating: 1 | 2 | 3 | 4 | 5
  body: string
  category: "executive-protection" | "intelligence" | "physical-security" | "risk-consulting"
  date: string
}

export type Stat = {
  value: number
  suffix: string
  prefix?: string
  label: string
}

export type Accreditation = {
  name: string
  body: string
  year: number
  logo?: string
}
