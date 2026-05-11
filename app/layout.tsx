import type { Metadata } from "next"
import { Bebas_Neue, Lexend, DM_Mono } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
})

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sokarisecurities.com"),
  title: {
    default: "Sokari Securities | Elite International Security Solutions",
    template: "%s | Sokari Securities",
  },
  description:
    "Premium international security company headquartered in Port Harcourt, Nigeria. Executive protection, intelligence, physical security, and risk management.",
  keywords: [
    "security company Nigeria",
    "executive protection",
    "Port Harcourt security",
    "risk management",
    "intelligence services",
    "physical security",
    "corporate security",
    "international security",
  ],
  authors: [{ name: "Sokari Securities" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sokarisecurities.com",
    siteName: "Sokari Securities",
    title: "Sokari Securities | Elite International Security Solutions",
    description:
      "Premium international security company headquartered in Port Harcourt, Nigeria.",
    images: [
      {
        url: "/assets/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sokari Securities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SokariSecures",
    creator: "@SokariSecures",
    images: ["/assets/images/og/og-default.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  name: "Sokari Securities",
  url: "https://sokarisecurities.com",
  logo: "https://sokarisecurities.com/assets/icons/logo.svg",
  image: "https://sokarisecurities.com/assets/images/og/og-default.jpg",
  description:
    "Premium international security company headquartered in Port Harcourt, Nigeria. Executive protection, intelligence, physical security, and risk management.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Tombia Street, GRA Phase 2",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    postalCode: "500001",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.8156,
    longitude: 7.0498,
  },
  telephone: "+234-800-000-0000",
  email: "info@sokarisecurities.com",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+234-800-000-0000",
      contactType: "customer service",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+234-900-000-0000",
      contactType: "emergency",
      availableLanguage: "English",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "AdministrativeArea", name: "West Africa" },
  ],
  knowsAbout: [
    "Executive Protection",
    "Security Risk Management",
    "Intelligence & Surveillance",
    "Maritime Security",
    "Physical Security",
    "Cyber Security Advisory",
  ],
  sameAs: [
    "https://www.linkedin.com/company/sokari-securities",
    "https://twitter.com/SokariSecures",
    "https://instagram.com/sokarisecurities",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${lexend.variable} ${dmMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}
