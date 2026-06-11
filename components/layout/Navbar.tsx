'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { buttonVariants } from '@/components/ui/button';
import { NavbarMobile } from './NavbarMobile';
import { NAV_ITEMS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const desktopItems = NAV_ITEMS.filter(
    (item) => item.label !== 'Home' && item.label !== 'Contact',
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-iron-950/96 backdrop-blur-md border-b border-iron-800/60 border-b-crimson/10 shadow-nav'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Sokari Securities home"
          >
            <Image
              src="/logo/logo.png"
              alt="Sokari Securities"
              width={200}
              height={200}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center"
            aria-label="Main navigation"
          >
            <NavigationMenu>
              <NavigationMenuList className="gap-0.5">
                {desktopItems.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger
                        className={cn(
                          'bg-transparent text-sm font-medium transition-colors hover:text-crimson hover:bg-transparent data-[state=open]:text-crimson data-[state=open]:bg-transparent',
                          pathname.startsWith(item.href) && item.href !== '/'
                            ? 'text-crimson'
                            : 'text-iron-200',
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-52 gap-0.5 p-2 bg-iron-900 border border-iron-800 border-l-2 border-l-crimson rounded-lg shadow-card">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink
                                render={<Link href={child.href} />}
                                className={cn(
                                  'block px-3 py-2 text-sm rounded-md transition-colors',
                                  pathname === child.href
                                    ? 'text-crimson bg-crimson-muted'
                                    : 'text-iron-200 hover:text-crimson hover:bg-crimson-muted',
                                )}
                              >
                                {child.label}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        render={<Link href={item.href} />}
                        className={cn(
                          'px-3 py-2 text-sm font-medium rounded-md transition-colors inline-block',
                          pathname === item.href
                            ? 'text-crimson'
                            : 'text-iron-200 hover:text-crimson',
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(buttonVariants(), 'hidden lg:inline-flex')}
            >
              Request Consultation
            </Link>
            <NavbarMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
