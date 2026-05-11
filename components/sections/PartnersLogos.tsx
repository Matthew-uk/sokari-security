import { SectionHeader } from "@/components/common/SectionHeader"

const PARTNERS = [
  "Bureau Veritas",
  "NIMASA",
  "NSCDC",
  "ISIO-A",
  "ASIS International",
  "OSAC Nigeria",
]

export function PartnersLogos() {
  return (
    <section className="py-16 bg-iron-900 border-y border-border-subtle" aria-label="Accredited with and affiliated to">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <p className="text-center text-iron-500 text-xs uppercase tracking-[0.2em] font-medium">
          Certified, Licensed &amp; Affiliated
        </p>
        {/* Logo strip — text placeholder until real SVGs are available */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="text-iron-500/50 hover:text-iron-500 font-semibold text-sm uppercase tracking-wider transition-colors"
              aria-label={partner}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
