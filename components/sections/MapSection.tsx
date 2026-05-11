import { MapPin } from "lucide-react"
import { COMPANY_ADDRESS } from "@/lib/constants/site"

export function MapSection() {
  return (
    <section className="py-16" aria-label="Our location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl overflow-hidden border border-border-subtle">
          <iframe
            title="Sokari Securities — Port Harcourt headquarters location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2!2d7.0299!3d4.8156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnNTYuMiJOIDfCsDAyJzA3LjYiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
            width="100%"
            height="400"
            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(95%)", opacity: 0.8 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Address overlay */}
          <div className="absolute bottom-4 left-4 bg-iron-950/95 backdrop-blur-sm border border-border-accent rounded-lg p-4 flex items-start gap-3 max-w-xs">
            <MapPin className="h-5 w-5 text-crimson shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex flex-col gap-0.5">
              <span className="text-white font-semibold text-sm">Headquarters</span>
              <span className="text-iron-500 text-xs leading-relaxed">{COMPANY_ADDRESS.full}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
