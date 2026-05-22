"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

interface CareerApplyFormProps {
  jobTitle: string
  jobSlug: string
}

export function CareerApplyForm({ jobTitle, jobSlug }: CareerApplyFormProps) {
  const [state, setState] = useState<FormState>("idle")
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: "",
  })

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("submitting")
    try {
      const res = await fetch("https://formspree.io/f/YOUR_CAREERS_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, role: jobTitle, slug: jobSlug }),
      })
      setState(res.ok ? "success" : "error")
    } catch {
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle className="h-12 w-12 text-crimson" />
        <h3 className="text-white font-bold text-xl">Application Submitted</h3>
        <p className="text-iron-500 text-sm max-w-sm">
          Thank you for your interest in joining Sokari Securities. We review all applications carefully and will be in touch if your profile matches our requirements.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="apply-name" className="text-iron-50 text-sm">Full Name <span className="text-crimson">*</span></Label>
          <Input id="apply-name" type="text" value={form.name} onChange={handleChange("name")} required placeholder="Your full name" className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="apply-email" className="text-iron-50 text-sm">Email <span className="text-crimson">*</span></Label>
          <Input id="apply-email" type="email" value={form.email} onChange={handleChange("email")} required placeholder="you@email.com" className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="apply-phone" className="text-iron-50 text-sm">Phone</Label>
          <Input id="apply-phone" type="tel" value={form.phone} onChange={handleChange("phone")} placeholder="08068936919" className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="apply-linkedin" className="text-iron-50 text-sm">LinkedIn Profile</Label>
          <Input id="apply-linkedin" type="url" value={form.linkedin} onChange={handleChange("linkedin")} placeholder="linkedin.com/in/yourname" className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="apply-cover" className="text-iron-50 text-sm">Cover Letter <span className="text-crimson">*</span></Label>
        <Textarea id="apply-cover" value={form.coverLetter} onChange={handleChange("coverLetter")} required rows={6} placeholder="Tell us about your relevant experience and why you want to join Sokari Securities..." className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson resize-none" />
      </div>

      {state === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-950/30 border border-red-900/40 rounded-lg px-4 py-3">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong. Please try again.
        </div>
      )}

      <Button type="submit" disabled={state === "submitting"} className="bg-crimson text-iron-950 hover:bg-crimson-hover font-semibold text-base py-3 h-auto">
        {state === "submitting" ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />Submitting...</>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  )
}
