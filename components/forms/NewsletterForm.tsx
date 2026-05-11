"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2 } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<FormState>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("submitting")
    try {
      const res = await fetch("https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      })
      setState(res.ok ? "success" : "error")
    } catch {
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-crimson">
        <CheckCircle className="h-4 w-4" aria-hidden="true" />
        <span>Subscribed. You&apos;ll receive our next intelligence briefing.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
      <Label htmlFor="newsletter-email" className="sr-only">Email address</Label>
      <Input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email address"
        className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson flex-1"
      />
      <Button
        type="submit"
        disabled={state === "submitting"}
        className="bg-crimson text-iron-950 hover:bg-crimson-hover font-semibold shrink-0"
      >
        {state === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  )
}
