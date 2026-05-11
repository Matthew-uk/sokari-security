import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Fragment } from "react"

interface BreadcrumbNavItem {
  label: string
  href?: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbNavItem[]
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-iron-500 hover:text-crimson transition-colors text-sm"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, i) => (
          <Fragment key={item.label}>
            <BreadcrumbSeparator className="text-iron-500" />
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink
                  href={item.href}
                  className="text-iron-500 hover:text-crimson transition-colors text-sm"
                >
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="text-iron-50 text-sm">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
