export const site = {
  name: "Chirag J S",
  domain: "chiragjs.in",
  role: "Fractional Digital Project Head & SEO Architect",
  tagline:
    "Fractional Digital Project Head and SEO Architect building organic admissions engines for colleges, coaching centres, and admissions consultancies.",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blueprint", href: "/blueprint" },
    { label: "About", href: "/about" },
  ],
  headerCta: { label: "Start a conversation", href: "/contact" },
  footerNote:
    "Built for college management, coaching centre owners, and admissions consultancies.",
} as const;

export type SiteContent = typeof site;
