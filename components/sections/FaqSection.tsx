import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/common/SectionHeader"

interface FaqSectionProps {
  faqs: { question: string; answer: string }[]
  heading?: string
}

export function FaqSection({ faqs, heading = "Frequently Asked Questions" }: FaqSectionProps) {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <SectionHeader heading={heading} align="left" id="faq-heading" />
        <Accordion className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-bg-surface border border-border-subtle rounded-lg px-5 data-[state=open]:border-crimson/40"
            >
              <AccordionTrigger className="text-white text-sm font-medium hover:text-crimson hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-iron-500 text-sm leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
