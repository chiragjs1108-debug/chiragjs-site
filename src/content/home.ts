export type Cta = {
  label: string;
  href: string;
};

export type ProblemCard = {
  icon: string;
  label: string;
  title: string;
  body: string;
};

export type ApproachStep = {
  icon: string;
  title: string;
  body: string;
};

export type FitColumn = {
  icon: string;
  tone: "lime" | "azure" | "amber";
  header: string;
  body: string;
};

export const home = {
  hero: {
    // Split so a forced line break lands between role and discipline on narrow
    // screens, rather than wrapping wherever the browser happens to break it.
    eyebrowLine1: "Digital Project Head",
    eyebrowLine2: "Organic Growth · Bengaluru",
    primaryCta: { label: "See how it works", href: "/blueprint" } as Cta,
    ghostCta: { label: "Start a conversation", href: "/contact" } as Cta,
    note: "Typically replies within a day",
  },

  problem: {
    eyebrow: "The problem",
    heading: "Paid ads buy attention. They don't build anything.",
    intro:
      "Most institutions spend heavily each admission cycle and start from zero the next one. Three things quietly compound against you.",
    cards: [
      {
        icon: "TrendingUp",
        label: "Rising costs",
        title: "Every cycle costs more",
        body: "Competition for admission keywords grows each year, and your cost per enquiry grows with it. The same budget buys fewer students than it did last season.",
      },
      {
        icon: "Unplug",
        label: "No residual value",
        title: "Pause the spend, lose the pipeline",
        body: "Ad-driven enquiries stop within days of switching off. Nothing you paid for last cycle is still working for you today.",
      },
      {
        icon: "Users",
        label: "Wrong timing",
        title: "You meet them too late",
        body: "Parents research for months before they enquire. Ads reach them at the decision point. Search reaches them while they are still deciding what to decide.",
      },
    ] as ProblemCard[],
  },

  proof: {
    eyebrow: "Proof",
    caption: "Measured on properties I built and run",
  },

  approach: {
    eyebrow: "The approach",
    heading: "Build the asset once. Let it compound.",
    intro: "The work is structural, not promotional. Four stages, in order.",
    steps: [
      {
        icon: "Search",
        title: "Map the demand",
        body: "Every search a parent or student makes about your courses, your city and your competitors, mapped and prioritised by intent.",
      },
      {
        icon: "LayoutGrid",
        title: "Build the structure",
        body: "A portal architected so each search has exactly one page built to answer it, with the data, schema and speed Google needs to rank it.",
      },
      {
        icon: "MessageSquare",
        title: "Capture the enquiry",
        body: "Every page routed to a tracked enquiry point, so you know which search produced which admission conversation.",
      },
      {
        icon: "TrendingUp",
        title: "Compound the return",
        body: "Rankings strengthen over time rather than resetting. Cost per enquiry falls in the cycles where ad costs rise.",
      },
    ] as ApproachStep[],
    closingLine:
      "This takes months, not weeks. It is worth saying plainly: organic works slowly, then all at once.",
  },

  fit: {
    eyebrow: "Fit",
    heading: "Built for institutions that sell high-consideration decisions.",
    columns: [
      {
        icon: "GraduationCap",
        tone: "lime",
        header: "Colleges & groups",
        body: "Multiple courses, affiliated institutions, management quota seats to fill each cycle.",
      },
      {
        icon: "BookOpen",
        tone: "azure",
        header: "Coaching institutes",
        body: "Multiple exam categories across cities, where parents compare for weeks before enrolling.",
      },
      {
        icon: "Handshake",
        tone: "amber",
        header: "Admissions consultancies",
        body: "Counselling operations competing for the same searches as every other consultant in the state.",
      },
    ] as FitColumn[],
    footerLine:
      "If your admissions decision involves months of research, several family members and a significant fee, search is where that decision starts.",
  },

  background: {
    eyebrow: "Background",
    heading: "Twelve years in admissions. Not a generalist agency.",
    stat: { value: 12, suffix: "+", label: "Years in admissions" },
    body: [
      "I have spent over a decade inside medical and AYUSH admissions counselling in Karnataka — cutoffs, seat allotment, management quota, the questions parents actually ask at 11pm before a counselling round. I run my own admissions properties, Ayushpedia and cutoffs.info, which means the methods on this site are ones I use on my own traffic, not theory borrowed from another industry.",
      "When I design a page structure, I am designing around how admissions decisions actually get made. That is the part an agency cannot rent.",
    ],
    boundary:
      "I work with a small number of institutions at a time, as the strategic lead rather than an agency. I provide the architecture, the briefs and the governance. Your developer and writers execute against them — or I help you find people who can.",
    cta: { label: "More about how I work", href: "/about" } as Cta,
  },

  servicesPreview: {
    eyebrow: "Engagements",
    heading: "Three ways to work together.",
  },

  closingCta: {
    heading: "Worth a conversation?",
    body: "If you are spending on admission ads every cycle and wondering what you actually own at the end of it, that is the conversation to have. No pitch deck required — tell me what you are running now and I will tell you honestly whether this approach fits.",
    primaryCta: { label: "Start a conversation", href: "/contact" } as Cta,
    whatsappLabel: "WhatsApp",
  },
} as const;
