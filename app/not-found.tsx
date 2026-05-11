import type { Metadata } from "next"
import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Return to Sokari Securities.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-iron-950 flex flex-col items-center justify-center px-4 text-center">
      <Shield className="h-16 w-16 text-crimson mb-6" aria-hidden="true" />
      <p className="text-crimson text-xs font-semibold uppercase tracking-[0.2em] mb-3">Error 404</p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
        Page Not Found
      </h1>
      <p className="text-iron-500 text-lg max-w-md mb-10 leading-relaxed">
        The page you are looking for does not exist or has been moved. Return to safety below.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className={cn(buttonVariants(), "bg-crimson text-iron-950 hover:bg-crimson-hover font-semibold")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Return Home
        </Link>
        <Link
          href="/services"
          className={cn(buttonVariants({ variant: "outline" }), "border-crimson/50 text-crimson hover:border-crimson")}
        >
          Our Services
        </Link>
      </div>
    </div>
  )
}
