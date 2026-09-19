import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold tracking-[-0.02em] text-text">
            {site.name}
          </p>
          <p className="mt-2 text-[15px] leading-[1.65] text-text-2">{site.title}</p>
          <p className="mt-4 font-mono text-[13px] text-text-3">{site.location}</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-self-center" aria-label="Footer">
          {site.footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] uppercase tracking-[0.02em] text-text-2 transition-colors duration-[180ms] hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-[13px] text-text-2 transition-colors duration-[180ms] hover:text-text"
          >
            {site.email}
          </a>
          <a
            href={`tel:+${site.phone.raw}`}
            className="font-mono text-[13px] text-text-2 transition-colors duration-[180ms] hover:text-text"
          >
            {site.phone.display}
          </a>
        </div>
      </Container>

      <Container>
        <p className="border-t border-border py-6 font-mono text-[13px] text-text-3">
          © {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
