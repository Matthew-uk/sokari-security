import { Shield } from "lucide-react"

export default function Loading() {
  return (
    <div
      className="fixed inset-0 bg-iron-950 flex items-center justify-center z-50"
      aria-label="Loading"
      role="status"
    >
      <div className="flex flex-col items-center gap-3">
        <Shield className="h-12 w-12 text-crimson animate-crimson-pulse" aria-hidden="true" />
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-crimson/60 animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
