export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export type FooterLink = {
  label: string
  href: string
}

export type FooterSection = {
  heading: string
  links: FooterLink[]
}
