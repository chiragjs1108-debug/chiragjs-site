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
  title: "Digital Project Head & Organic Growth Architect",
  headline: "Admission enquiries that don't stop when your ads do.",
  supportingLine:
    "I help colleges, coaching institutes and admissions consultancies own the searches their students are already making — so enquiries keep arriving every month, without paying for every click. Twelve years inside admissions, applied to how search actually works.",

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
    title: "Chirag J S — Digital Project Head & Organic Growth Architect",
    // TODO: review copy
    description:
      "Digital Project Head and Organic Growth Architect building organic admission enquiries for colleges, coaching institutes, and admissions consultancies in India.",
  },
} as const;

export type SiteContent = typeof site;

// TODO: add real Search Console figures
export const metrics: Metric[] = [];
