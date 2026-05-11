"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-iron-950 flex flex-col items-center justify-center px-4 text-center">
      <AlertTriangle className="h-14 w-14 text-crimson mb-6" aria-hidden="true" />
      <p className="text-crimson text-xs font-semibold uppercase tracking-[0.2em] mb-3">Something went wrong</p>
      <h1 className="text-3xl font-extrabold text-white mb-4">An error occurred</h1>
      <p className="text-iron-500 max-w-md mb-8">
        We encountered an unexpected error. Please try again or contact us if the problem persists.
      </p>
      <Button
        onClick={reset}
        className="bg-crimson text-iron-950 hover:bg-crimson-hover font-semibold"
      >
        Try Again
      </Button>
    </div>
  )
}
