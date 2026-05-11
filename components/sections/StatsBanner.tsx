import { StatCounter } from "@/components/common/StatCounter"
import { STATS } from "@/lib/constants/stats"
import { Separator } from "@/components/ui/separator"

export function StatsBanner() {
  return (
    <section className="relative bg-iron-900 border-y border-iron-800 py-16 overflow-hidden" aria-label="Company statistics">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(200,16,46,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <StatCounter
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="flex-1"
              />
              {i < STATS.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden lg:block h-12 bg-border-subtle mx-4"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
