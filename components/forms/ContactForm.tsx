"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const SERVICES = [
  "Executive Protection",
  "Intelligence & Surveillance",
  "Physical Security",
  "Risk Management",
  "Maritime Security",
  "Cyber Security Advisory",
  "General Enquiry",
]

type FormState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    country: "",
    service: "",
    message: "",
  })

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("submitting")
    // Formspree integration — replace YOUR_FORM_ID with actual Formspree endpoint
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState("success")
      } else {
        setState("error")
      }
    } catch {
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle className="h-12 w-12 text-crimson" />
        <h3 className="text-white font-bold text-xl">Message Received</h3>
        <p className="text-iron-500 text-sm max-w-sm">
          Thank you for reaching out. A member of our team will be in contact within 24 hours.
        </p>
        <Button
          variant="outline"
          className="border-crimson/50 text-crimson hover:border-crimson mt-2"
          onClick={() => { setState("idle"); setForm({ name: "", company: "", phone: "", email: "", country: "", service: "", message: "" }) }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-name" className="text-iron-50 text-sm">Full Name <span className="text-crimson">*</span></Label>
          <Input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            required
            placeholder="John Adewale"
            className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-company" className="text-iron-50 text-sm">Company</Label>
          <Input
            id="contact-company"
            type="text"
            value={form.company}
            onChange={handleChange("company")}
            placeholder="Acme Corporation"
            className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-email" className="text-iron-50 text-sm">Email Address <span className="text-crimson">*</span></Label>
          <Input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            required
            placeholder="john@company.com"
            className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-phone" className="text-iron-50 text-sm">Phone Number</Label>
          <Input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            placeholder="+234 800 000 0000"
            className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-country" className="text-iron-50 text-sm">Country</Label>
          <Input
            id="contact-country"
            type="text"
            value={form.country}
            onChange={handleChange("country")}
            placeholder="Nigeria"
            className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-service" className="text-iron-50 text-sm">Service of Interest</Label>
          <Select onValueChange={(v: unknown) => setForm((p) => ({ ...p, service: String(v) }))}>
            <SelectTrigger id="contact-service" className="bg-bg-surface border-border-subtle text-white focus:border-crimson">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-iron-900 border-border-subtle">
              {SERVICES.map((s) => (
                <SelectItem key={s} value={s} className="text-iron-50 hover:text-crimson focus:text-crimson focus:bg-crimson/10">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-message" className="text-iron-50 text-sm">Message <span className="text-crimson">*</span></Label>
        <Textarea
          id="contact-message"
          value={form.message}
          onChange={handleChange("message")}
          required
          rows={5}
          placeholder="Please describe your security requirements..."
          className="bg-bg-surface border-border-subtle text-white placeholder:text-iron-500/50 focus:border-crimson resize-none"
        />
      </div>

      {state === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-950/30 border border-red-900/40 rounded-lg px-4 py-3">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Button
        type="submit"
        disabled={state === "submitting"}
        className="bg-crimson text-iron-950 hover:bg-crimson-hover font-semibold text-base py-3 h-auto"
      >
        {state === "submitting" ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> Sending...</>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
