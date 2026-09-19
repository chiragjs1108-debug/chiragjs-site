export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note?: string;
};

export const site = {
  name: "Chirag J S",
  title: "Fractional Digital Project Head & SEO Architect",
  headline: "I build organic admissions engines for education businesses.",
  supportingLine:
    "Twelve years inside admissions, applied to search architecture — so your lead pipeline compounds instead of resetting every time you pause ad spend.",

  email: "chiragjs@outlook.com",
  phone: {
    // Raw digits with country code, for tel: and wa.me links.
    raw: "918431202108",
    display: "+91 84312 02108",
  },
  location: "Bengaluru, Karnataka, India",

  // Intentionally empty — no LinkedIn or other social profiles.
  socials: [] as SocialLink[],

  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blueprint", href: "/blueprint" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  footerLinks: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blueprint", href: "/blueprint" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ] satisfies NavItem[],

  metadata: {
    title: "Chirag J S — Fractional SEO Architect for Education Admissions",
    // TODO: review copy
    description:
      "Fractional Digital Project Head and SEO Architect building organic admissions engines for colleges, coaching centres, and admissions consultancies in India.",
  },
} as const;

export type SiteContent = typeof site;

// TODO: add real Search Console figures
export const metrics: Metric[] = [];
