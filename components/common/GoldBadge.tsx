import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface GoldBadgeProps {
  children: React.ReactNode
  className?: string
}

export function GoldBadge({ children, className }: GoldBadgeProps) {
  return (
    <Badge
      className={cn(
        "rounded-full border border-crimson/40 bg-crimson/10 text-crimson font-semibold text-xs tracking-wide py-0.5 px-2.5 hover:bg-crimson/20",
        className
      )}
    >
      {children}
    </Badge>
  )
}
