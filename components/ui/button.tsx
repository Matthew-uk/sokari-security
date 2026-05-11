import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding font-semibold tracking-wide whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-crimson to-[#a50d25] text-white border-crimson/20 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_4px_12px_rgba(200,16,46,0.3)] hover:shadow-[0_0_24px_rgba(200,16,46,0.5),0_4px_12px_rgba(200,16,46,0.3)] hover:scale-[1.02] hover:from-crimson-hover hover:to-crimson",
        outline:
          "border-crimson/50 text-crimson bg-transparent hover:bg-crimson/8 hover:border-crimson hover:shadow-[0_0_16px_rgba(200,16,46,0.2)] hover:scale-[1.02]",
        secondary:
          "bg-iron-800 text-white border border-iron-700 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] hover:bg-iron-700 hover:border-iron-600 hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:scale-[1.02]",
        ghost:
          "text-iron-200 hover:text-white hover:bg-iron-800/60 hover:scale-[1.02]",
        destructive:
          "bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20 hover:shadow-[0_0_16px_rgba(239,68,68,0.2)] focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-crimson underline-offset-4 hover:underline hover:text-crimson-hover",
      },
      size: {
        default: "h-9 gap-2 px-4 text-sm",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1.5 rounded-[min(var(--radius-md),12px)] px-3 text-[0.8rem] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2.5 px-8 text-base",
        icon: "size-9",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)]",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
