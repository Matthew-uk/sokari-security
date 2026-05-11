import type { Metadata } from "next"
import { Mail, Phone, MapPin, AlertCircle } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/common/ScrollProgress"
import { HeroSection } from "@/components/sections/HeroSection"
import { MapSection } from "@/components/sections/MapSection"
import { ContactForm } from "@/components/forms/ContactForm"
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_EMERGENCY } from "@/lib/constants/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sokari Securities — reach our security specialists in Port Harcourt, Lagos, and Abuja. Available 24/7 for urgent security requirements.",
}

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          eyebrow="Get in Touch"
          title="Let&apos;s Secure Your Future"
          subtitle="Our security specialists are ready to discuss your requirements. We typically respond within 24 hours."
          backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        />

        <section className="py-20 lg:py-28" aria-labelledby="contact-section-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="contact-section-heading" className="sr-only">Contact Information and Form</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">Send Us a Message</h3>
                  <p className="text-iron-500 text-sm">Fill in the form and a member of our team will be in touch.</p>
                </div>
                <ContactForm />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  <h3 className="text-white font-bold text-xl">Contact Information</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-crimson/10 border border-crimson/20 flex items-center justify-center shrink-0">
                        <MapPin className="h-4 w-4 text-crimson" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-white font-medium text-sm">Headquarters</span>
                        <span className="text-iron-500 text-sm leading-relaxed">{COMPANY_ADDRESS.full}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-crimson/10 border border-crimson/20 flex items-center justify-center shrink-0">
                        <Phone className="h-4 w-4 text-crimson" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-white font-medium text-sm">General Enquiries</span>
                        <a href={`tel:${COMPANY_PHONE}`} className="text-iron-500 text-sm hover:text-crimson transition-colors">
                          {COMPANY_PHONE}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-crimson/10 border border-crimson/20 flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4 text-crimson" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-white font-medium text-sm">Email</span>
                        <a href={`mailto:${COMPANY_EMAIL}`} className="text-iron-500 text-sm hover:text-crimson transition-colors">
                          {COMPANY_EMAIL}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency strip */}
                <div className="bg-red-950/30 border border-red-900/40 rounded-xl p-5 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold text-sm">Emergency Security Line</span>
                    <p className="text-red-200/70 text-xs">For immediate security incidents requiring urgent response</p>
                    <a href={`tel:${COMPANY_EMERGENCY}`} className="text-red-300 font-bold text-sm hover:text-red-200 transition-colors mt-1">
                      {COMPANY_EMERGENCY}
                    </a>
                  </div>
                </div>

                {/* Offices */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-white font-semibold text-sm">Regional Offices</h4>
                  {["Lagos — Victoria Island", "Abuja — Maitama District", "Warri — Effurun"].map((office) => (
                    <div key={office} className="flex items-center gap-2 text-iron-500 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-crimson shrink-0" aria-hidden="true" />
                      {office}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <MapSection />
      </main>
      <Footer />
    </>
  )
}
