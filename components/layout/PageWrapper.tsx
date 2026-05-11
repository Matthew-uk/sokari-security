import { cn } from "@/lib/utils"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "main"
}

export function PageWrapper({ children, className, as: Tag = "div" }: PageWrapperProps) {
  return (
    <Tag className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  )
}
