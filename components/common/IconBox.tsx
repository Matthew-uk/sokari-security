import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface IconBoxProps {
  text: string
  icon?: React.ReactNode
  className?: string
}

export function IconBox({ text, icon, className }: IconBoxProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div className="shrink-0 h-5 w-5 rounded-full bg-crimson/10 border border-crimson/30 flex items-center justify-center mt-0.5">
        {icon ?? <Check className="h-3 w-3 text-crimson" aria-hidden="true" />}
      </div>
      <span className="text-iron-50 text-sm leading-relaxed">{text}</span>
    </div>
  )
}
