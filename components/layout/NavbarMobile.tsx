"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Shield } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { NAV_ITEMS } from "@/lib/constants/navigation"
import { cn } from "@/lib/utils"

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.15 } },
}

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring" as const, stiffness: 320, damping: 32 } },
  exit: { x: "100%", transition: { type: "spring" as const, stiffness: 320, damping: 32 } },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: "spring" as const, stiffness: 320, damping: 28 },
  },
}

export function NavbarMobile() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const navItems = NAV_ITEMS.filter((item) => item.label !== "Home")

  return (
    <>
      <button
        className="lg:hidden text-iron-200 hover:text-crimson rounded-lg p-2 inline-flex items-center justify-center transition-colors"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-40 bg-iron-950/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-iron-950 border-l border-iron-800 flex flex-col shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-iron-800 shrink-0">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5"
                  aria-label="Sokari Securities home"
                >
                  <Shield className="h-5 w-5 text-crimson" />
                  <span className="text-white font-black text-sm tracking-[0.18em] uppercase">
                    SOKARI SECURITIES
                  </span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="text-iron-500 hover:text-white p-1 rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <motion.nav
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 overflow-y-auto px-4 py-4"
                aria-label="Mobile navigation links"
              >
                {navItems.map((item) =>
                  item.children ? (
                    <motion.div key={item.label} variants={itemVariants}>
                      <Accordion>
                        <AccordionItem value={item.label} className="border-b-iron-800">
                          <AccordionTrigger
                            className={cn(
                              "text-sm font-medium py-3 px-2 hover:text-crimson hover:no-underline",
                              pathname.startsWith(item.href) && item.href !== "/"
                                ? "text-crimson"
                                : "text-iron-200"
                            )}
                          >
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <div className="flex flex-col gap-1 pl-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className={cn(
                                    "text-sm py-2 px-2 rounded-md transition-colors",
                                    pathname === child.href
                                      ? "text-crimson bg-crimson-muted"
                                      : "text-iron-500 hover:text-crimson"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </motion.div>
                  ) : (
                    <motion.div key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center text-sm font-medium py-3 px-2 rounded-md transition-colors",
                          pathname === item.href
                            ? "text-crimson"
                            : "text-iron-200 hover:text-crimson"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.nav>

              {/* CTA */}
              <div className="px-6 py-6 border-t border-iron-800 shrink-0">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={`${buttonVariants()} w-full bg-crimson text-white hover:bg-crimson-hover font-semibold tracking-wide`}
                >
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
