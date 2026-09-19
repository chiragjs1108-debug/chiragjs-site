"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-base/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-[-0.02em] text-text"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-mono text-[13px] uppercase tracking-[0.02em] transition-colors duration-[180ms] ${
                  isActive ? "text-lime" : "text-text-2 hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={site.headerCta.href} variant="ghost">
            {site.headerCta.label}
          </Button>
        </div>
        <div className="md:hidden">
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </div>
      </Container>
    </header>
  );
}
