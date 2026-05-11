import type { NavItem, FooterSection } from "@/lib/types"

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us",     href: "/about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Reviews",      href: "/reviews" },
      { label: "Careers",      href: "/careers" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Executive Protection",        href: "/services/executive-protection" },
      { label: "Intelligence & Surveillance", href: "/services/intelligence-surveillance" },
      { label: "Physical Security",           href: "/services/physical-security" },
      { label: "Risk Management",             href: "/services/risk-management" },
      { label: "Maritime Security",           href: "/services/maritime-security" },
      { label: "Cyber Security Advisory",     href: "/services/cyber-security-advisory" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Oil & Gas",         href: "/industries/oil-gas" },
      { label: "Banking & Finance", href: "/industries/banking-finance" },
      { label: "Diplomatic",        href: "/industries/diplomatic" },
      { label: "Government",        href: "/industries/government" },
      { label: "Construction",      href: "/industries/construction" },
      { label: "Maritime",          href: "/industries/maritime" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact",  href: "/contact" },
]

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    heading: "Services",
    links: [
      { label: "Executive Protection", href: "/services/executive-protection" },
      { label: "Intelligence & Surveillance", href: "/services/intelligence-surveillance" },
      { label: "Physical Security", href: "/services/physical-security" },
      { label: "Risk Management", href: "/services/risk-management" },
      { label: "Maritime Security", href: "/services/maritime-security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Insights", href: "/insights" },
      { label: "Reviews", href: "/reviews" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Banking & Finance", href: "/industries/banking-finance" },
      { label: "Diplomatic", href: "/industries/diplomatic" },
      { label: "Government", href: "/industries/government" },
      { label: "Construction", href: "/industries/construction" },
    ],
  },
]
