export type Cta = {
  label: string;
  href: string;
};

export type IconColumn = {
  icon: string;
  tone: "lime" | "azure" | "amber";
  header: string;
  body: string;
};

export type StatCardItem = {
  icon: string;
  label: string;
  title: string;
  body: string;
};

export type ComparisonRow = {
  label: string;
  left: string;
  right: string;
};

export type ComparisonTable = {
  leftHeader: string;
  rightHeader: string;
  rows: ComparisonRow[];
};

export type PhaseCard = {
  icon: string;
  label: string;
  title: string;
  body: string;
};

export type MethodStage = {
  number: string;
  stage: string;
  detail: string;
  /** Which of the three ownership tiers this stage belongs to. */
  ownership: "mine" | "shared" | "joint";
};

export type MethodSubsection = {
  slug: string;
  heading: string;
  visual: string;
  body: string;
};

export type ScopeScenario = {
  icon: string;
  tone: "lime" | "azure" | "amber";
  scenario: string;
  pageCount: string;
  intent: string;
  conversion: string;
};

export type ToolRow = {
  icon: string;
  stage: string;
  tools: string[];
  cost: "Free" | "Free tier" | "Paid" | "Paid API";
};

export type RoadmapRow = {
  weeks: string;
  stage: string;
  ships: string;
  gate: string;
};

export type CadenceCard = {
  icon: string;
  label: string;
  title: string;
  body: string;
};

export type RiskRow = {
  risk: string;
  handling: string;
};

export type ResourceRow = {
  icon: string;
  role: string;
  responsibility: string;
  providedBy: string;
};

export type PricingTier = {
  tier: string;
  courses: string;
  institutions: string;
  pages: string;
  setup: string;
  retainer: string;
  successShare: string;
  highlighted?: boolean;
};

export type NextStep = {
  title: string;
  body: string;
};

export type TocEntry = {
  slug: string;
  number: string;
  label: string;
};

export const toc: TocEntry[] = [
  { slug: "orientation", number: "01", label: "Orientation" },
  { slug: "problem", number: "02", label: "The problem" },
  { slug: "economics", number: "03", label: "The maths" },
  { slug: "timeline", number: "04", label: "Expectations" },
  { slug: "model", number: "05", label: "The model" },
  { slug: "method", number: "06", label: "The method" },
  { slug: "scope", number: "07", label: "Scope" },
  { slug: "tooling", number: "08", label: "Tooling" },
  { slug: "roadmap", number: "09", label: "Timeline" },
  { slug: "governance", number: "10", label: "How I show up" },
  { slug: "attribution", number: "11", label: "Attribution" },
  { slug: "risk", number: "12", label: "Risk" },
  { slug: "boundaries", number: "13", label: "Boundaries" },
  { slug: "investment", number: "14", label: "Investment" },
  { slug: "next", number: "15", label: "Where to start" },
];

export const blueprint = {
  meta: {
    // The root layout's title template already appends " — Chirag J S".
    title: "The Organic Growth Blueprint",
    description:
      "How education institutions build a search asset that produces admission enquiries every cycle, instead of renting them from Google. The full method, timeline and costs.",
  },

  header: {
    eyebrow: "The blueprint",
    heading: "Build an enquiry pipeline you actually own",
    standfirst:
      "The complete method I use to turn search demand into a compounding admission enquiry engine — architecture, timeline, tooling and cost. Roughly a 15-minute read.",
    // Set at ship time — see "Still needed before this page ships" in the source spec.
    lastUpdated: "September 2026",
  },

  s01: {
    eyebrow: "Orientation",
    heading: "Who this is written for",
    intro:
      "This is the method I use when an institution wants admission enquiries that keep arriving after the ad budget stops. It is written in full, including the costs, because the decision to commit to this takes months of conversation and you should be able to evaluate it properly before we speak.",
    intro2:
      "It applies wherever the buying decision is high-consideration: months of research, several family members involved, a significant fee at the end.",
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
        header: "Consultancies",
        body: "Counselling operations competing for the same searches as every other consultant in the state.",
      },
    ] as IconColumn[],
    closing:
      "The mechanics are identical. Only the inputs change — and section 07 shows exactly how those inputs change the scope.",
  },

  s02: {
    eyebrow: "The problem",
    heading: "Paid ads buy attention. They don't build anything.",
    intro:
      "Performance marketing works. It delivers enquiries this month, measurably, and no serious institution should stop running it. The problem is what it leaves behind, which is nothing.",
    intro2:
      "Every rupee spent on ads buys a visitor once. When the cycle ends and the budget pauses, the pipeline stops within days. The next cycle starts from zero, at a higher cost per click than the last one, because competition for admission keywords increases every year.",
    closing: "You are renting visibility. The rent goes up, and you never own the property.",
    cards: [
      {
        icon: "TrendingUp",
        label: "Rising costs",
        title: "Every cycle costs more.",
        body: "Competition for admission keywords grows each year and cost per enquiry grows with it.",
      },
      {
        icon: "Unplug",
        label: "No residual value",
        title: "Pause the spend, lose the pipeline.",
        body: "Ad-driven enquiries stop within days. Nothing you paid for last cycle still works today.",
      },
      {
        icon: "Users",
        label: "Wrong timing",
        title: "You meet them too late.",
        body: "Parents research for months. Ads reach the decision point; search reaches them while they are still deciding what to decide.",
      },
    ] as StatCardItem[],
  },

  s03: {
    eyebrow: "The maths",
    heading: "What a paid enquiry actually costs you",
    table: {
      leftHeader: "Paid channel",
      rightHeader: "Organic at maturity",
      rows: [
        { label: "Monthly cost", left: "Scales with volume, every cycle", right: "Fixed retainer, independent of volume" },
        { label: "Cost per enquiry", left: "Rises each cycle", right: "Falls as pages mature" },
        { label: "If you stop paying", left: "Enquiries end within 48 hours", right: "Pages keep ranking and producing" },
        { label: "Value after 3 years", left: "Zero — spend is expensed", right: "A ranking property you own" },
        { label: "Competitive moat", left: "None — outbid at any time", right: "Years of topical authority to displace" },
      ],
    } as ComparisonTable,
    intro:
      "The comparison that matters is not cost per enquiry this month. It is what you hold at the end of three years of spending.",
    closing:
      "Bring your own numbers to this table. In a first conversation I will ask what you currently spend per cycle and what your cost per enquiry is, and we will fill these cells with your figures. Your own numbers make the case far better than mine.",
  },

  s04: {
    eyebrow: "Expectations",
    heading: "This compounds. It does not spike.",
    intro:
      "If you are used to paid campaigns, the first three months of this will feel like nothing is happening. That is expected, not a shortfall, and it is worth agreeing on before we start rather than discovering at month three.",
    phases: [
      {
        icon: "Rocket",
        label: "Months 1–3",
        title: "Build and index.",
        body: "Architecture, content and technical work go live. Organic enquiries near zero.",
      },
      {
        icon: "TrendingUp",
        label: "Months 3–6",
        title: "Early rankings.",
        body: "Long-tail pages land. Enquiry trickle begins alongside your existing paid channels.",
      },
      {
        icon: "LineChart",
        label: "Months 6–12+",
        title: "Compounding.",
        body: "Volume climbs, cost per enquiry falls, and the curve never resets to zero.",
      },
    ] as PhaseCard[],
    closing:
      "Keep running your ads throughout. This is not a replacement for paid acquisition in year one; it is what makes paid acquisition optional in year three.",
  },

  s05: {
    eyebrow: "The model",
    heading: "What this engagement is, structurally",
    table: {
      leftHeader: "Typical agency",
      rightHeader: "This engagement",
      rows: [
        { label: "Domain knowledge", left: "Generalist SEO applied to education", right: "12+ years inside admissions — counselling, cutoffs, seat allotment" },
        { label: "Who does your strategy", left: "Senior in the pitch, junior on the account", right: "The same person, pitch to delivery" },
        { label: "Cost structure", left: "Bundled — you fund overhead and margin on execution", right: "Strategy only — you source execution at market rate" },
        { label: "Incentive", left: "Paid on retainer regardless of outcome", right: "Retainer plus a success share on closed admissions" },
        { label: "What you keep", left: "Knowledge leaves with the agency", right: "Blueprints, briefs and schema stay with you" },
      ],
    } as ComparisonTable,
    intro:
      "This is a structural difference, not a claim that agencies do poor work. Many do excellent work. But an agency has to fund a team, which means the person who designed your strategy is rarely the person executing it six months later.",
    closing:
      "I work with a small number of institutions at a time, as the strategic lead. I provide the architecture, the briefs and the governance. Your developer and writers execute against them — or I help you find people who can.",
  },

  s06: {
    eyebrow: "The method",
    heading: "Ten stages, in order",
    intro:
      "Each stage depends on the one before it. Running them in parallel to save time is the most common reason large education portals fail to rank.",
    stages: [
      { number: "01", stage: "Keyword layer", detail: "Demand mapped, intent-tagged, clustered", ownership: "mine" },
      { number: "02", stage: "URL taxonomy", detail: "Silo structure and URL patterns locked", ownership: "mine" },
      { number: "03", stage: "Data model", detail: "CMS fields and page templates defined", ownership: "mine" },
      { number: "04", stage: "Technical layer", detail: "Schema, speed, crawl controls", ownership: "mine" },
      { number: "05", stage: "Content system", detail: "Briefs, production line, QA gates", ownership: "shared" },
      { number: "06", stage: "Link architecture", detail: "Internal authority flow engineered", ownership: "shared" },
      { number: "07", stage: "Indexation", detail: "Phased release, crawl budget managed", ownership: "shared" },
      { number: "08", stage: "Conversion layer", detail: "Traffic turned into tracked enquiries", ownership: "shared" },
      { number: "09", stage: "Measurement", detail: "Attribution wired end to end", ownership: "joint" },
      { number: "10", stage: "Optimization loop", detail: "Continuous refresh and expansion", ownership: "joint" },
    ] as MethodStage[],
    ownershipLine:
      "Stages 1–4 are mine to design. Stages 5–8 are mine to specify and govern, yours to execute. Stages 9–10 run jointly for the life of the engagement.",
    subsections: [
      {
        slug: "keyword-layer",
        heading: "Keyword layer",
        visual: "Intent pyramid, tiers filling bottom-up",
        body: "Every search a parent or student makes about your courses, your city and your competitors — harvested from Search Console, competitor gap analysis, autocomplete, and the phrasing families actually use on the counselling floor. Typically 800 to 2,500 terms, each tagged by intent and mapped to exactly one page. One keyword, one page: two pages chasing the same term both rank worse.",
      },
      {
        slug: "url-taxonomy",
        heading: "URL taxonomy and data model",
        visual: "Hub-and-spoke architecture diagram",
        body: "Six to eight URL patterns, fixed before a single page is built. College pages are generated from structured records of 35 to 50 fields — approvals, intake, fees by quota, placements, infrastructure — not written one at a time. A fee revision then updates one record and corrects every page it appears on. Without this layer a 400-page portal becomes unmaintainable within one admission cycle.",
      },
      {
        slug: "content-system",
        heading: "Content system",
        visual: "Brief anatomy card",
        body: "Writers do not decide what a page says; the brief does. Each brief carries the target keyword, secondary terms, a full heading outline, the data points to include, internal links with exact anchors, and the meta description. Nothing publishes without passing a QA gate: brief compliance, factual verification of every fee and intake figure against source, and schema validation.",
      },
      {
        slug: "indexation",
        heading: "Indexation",
        visual: "Four-step wave staircase",
        body: "Publishing 400 pages on one day consumes crawl budget on thin pages and stalls indexation. Pages release in four waves — core hubs, priority profiles, full directory, then long-tail — with each wave gated on the previous clearing 90% indexation.",
      },
      {
        slug: "link-architecture",
        heading: "Link architecture",
        visual: "Node diagram, authority flowing upward",
        body: "Every spoke page links up to its hub using the hub's exact target keyword as anchor text. That single rule is what concentrates ranking authority on the pages that actually produce enquiries. Minimum three and maximum eight contextual links per page, zero orphan pages, click depth capped at three.",
      },
    ] as MethodSubsection[],
  },

  s07: {
    eyebrow: "Scope",
    heading: "The page count is calculated, not guessed",
    formula: "Institutions per course in your region × courses to be ranked = core page count",
    scenarios: [
      {
        icon: "GraduationCap",
        tone: "lime",
        scenario: "College or group, 4 courses, 50 affiliated institutions",
        pageCount: "200–250",
        intent: "“top [course] colleges in [city]”",
        conversion: "Seat enquiry or counselling call",
      },
      {
        icon: "BookOpen",
        tone: "azure",
        scenario: "Coaching institute, 6 exam categories, 3 cities",
        pageCount: "120–200",
        intent: "“[exam] coaching in [area]”",
        conversion: "Demo class booking or callback",
      },
      {
        icon: "Handshake",
        tone: "amber",
        scenario: "Admissions consultancy, statewide",
        pageCount: "150–400",
        intent: "“[exam] counselling”, “cutoff [year]”",
        conversion: "Counselling consultation",
      },
    ] as ScopeScenario[],
    intro:
      "Three reasons the number lands where it does. Google ranks one page per intent, so “top BAMS colleges in Bangalore” and “[college] BAMS admission” need separate pages. Two pages chasing one keyword both underperform. And a directory listing 10 institutions where 50 exist reads as incomplete, which weakens even the hub page.",
    verify: [
      "Every page maps to a real search term with volume attached",
      "The count is locked during the scoping sprint, from your actual course list",
      "No page ships without a brief naming its target keyword, so you can audit page by page",
    ],
  },

  s08: {
    eyebrow: "Tooling",
    heading: "What runs the build, and what it costs",
    intro:
      "Free tools handle verification and baseline research throughout. Paid tools appear only where manual work stops scaling — crawling past 500 URLs, clustering past a few hundred keywords, tracking rankings across tiers.",
    rows: [
      {
        icon: "Search",
        stage: "Keyword research",
        tools: ["Keyword Planner", "Search Console", "Trends"],
        cost: "Free",
      },
      { icon: "Layers", stage: "Keyword clustering", tools: ["Ahrefs", "SEMrush"], cost: "Paid" },
      { icon: "Database", stage: "Site structure", tools: ["Sheets", "Supabase"], cost: "Free tier" },
      { icon: "Bug", stage: "Crawling and audit", tools: ["Screaming Frog", "Sitebulb"], cost: "Paid" },
      {
        icon: "Gauge",
        stage: "Technical validation",
        tools: ["PageSpeed", "Rich Results Test"],
        cost: "Free",
      },
      { icon: "FileText", stage: "Content scoring", tools: ["Surfer", "Clearscope"], cost: "Paid" },
      { icon: "Sparkles", stage: "Drafting", tools: ["LLM"], cost: "Paid API" },
      { icon: "FormInput", stage: "Lead capture", tools: ["Forms", "Tag Manager", "Sheets"], cost: "Free" },
      {
        icon: "LineChart",
        stage: "Measurement",
        tools: ["GA4", "Search Console", "Looker Studio"],
        cost: "Free",
      },
      { icon: "BarChart3", stage: "Rank tracking", tools: ["Ahrefs", "SEMrush"], cost: "Paid" },
    ] as ToolRow[],
    note:
      "Drafting runs from locked briefs, and every fee, intake figure and cutoff still passes human verification against source. AI drafts. It never substitutes for the fact-check.",
  },

  s09: {
    eyebrow: "Timeline",
    heading: "Sixteen weeks, with gates",
    rows: [
      { weeks: "1–2", stage: "Keyword layer", ships: "Clustered keyword master sheet, competitor gap report", gate: "Sign-off on target course list" },
      { weeks: "3", stage: "Taxonomy and data model", ships: "Full sitemap, URL patterns, CMS field schema", gate: "Page count locked; dev signs off" },
      { weeks: "4–5", stage: "CMS build", ships: "Templates coded, wireframes implemented", gate: "Staging renders all templates" },
      { weeks: "6–7", stage: "Technical layer", ships: "Schema, Core Web Vitals, sitemaps, canonicals", gate: "Rich Results valid; CWV green on mobile" },
      { weeks: "6–8", stage: "Brief production", ships: "All SEO briefs written and released in batches", gate: "Your data handover complete" },
      { weeks: "8–10", stage: "Wave 1 content", ships: "Core hub pages live, database populated", gate: "Hubs indexed before wave 2" },
      { weeks: "10–13", stage: "Waves 2–3", ships: "Priority and full directory pages", gate: "90% indexation per wave" },
      { weeks: "13–14", stage: "Link architecture", ships: "Internal linking pass, orphan sweep", gate: "Zero orphans, depth ≤ 3" },
      { weeks: "15", stage: "Conversion layer", ships: "Enquiry points, WhatsApp hooks, forms", gate: "Test enquiry arrives tagged" },
      { weeks: "16", stage: "Measurement", ships: "GA4, Search Console, tracking live", gate: "Attribution verified end to end" },
    ] as RoadmapRow[],
    closing: "Week 17 onward, the optimization loop runs under the monthly retainer.",
  },

  s10: {
    eyebrow: "How I show up",
    heading: "What the retainer actually buys",
    cadence: [
      {
        icon: "Calendar",
        label: "Weekly",
        title: "Sprint review",
        body: "60-minute sprint review with your developer and content leads. Blockers cleared, next briefs released, QA sign-off on delivered pages.",
      },
      {
        icon: "CheckSquare",
        label: "Fortnightly",
        title: "Technical audit",
        body: "Technical audit against a 40-point checklist: indexation, Core Web Vitals, schema validity, broken links, orphan pages, duplicate metas.",
      },
      {
        icon: "FileText",
        label: "Monthly",
        title: "Leadership report",
        body: "Written report to leadership: indexation coverage, ranking movement by keyword tier, enquiry volume, cost per enquiry trend.",
      },
      {
        icon: "RefreshCw",
        label: "Quarterly",
        title: "Strategy reset",
        body: "Keyword gaps re-scanned, competitor movement reviewed, next quarter's page roadmap re-prioritised.",
      },
    ] as CadenceCard[],
  },

  s11: {
    eyebrow: "Attribution",
    heading: "No CRM required, no software to buy",
    intro:
      "A CRM is not a prerequisite. Every enquiry can be captured, tagged and logged into a single Google Sheet at zero licence cost, set up as part of week 15.",
    intro2:
      "Every form carries hidden fields — source, campaign, landing page, course and timestamp — written into the sheet on submission. WhatsApp click-to-chat links carry the page and course in the pre-filled message, so enquiries arrive self-labelled. Calls are logged by your counselling team against the same columns.",
    tabs: [
      { icon: "FormInput", label: "Form fills" },
      { icon: "MessageCircle", label: "WhatsApp" },
      { icon: "Phone", label: "Phone calls" },
    ],
    closing: "If you already run a CRM, the same tags write into it instead. Nothing about the method changes.",
  },

  s12: {
    eyebrow: "Risk",
    heading: "What could go wrong, and what happens then",
    rows: [
      {
        risk: "Google algorithm update mid-build",
        handling: "Architecture is built on topical depth and genuine utility, not tactics. Quarterly reset absorbs updates",
      },
      {
        risk: "Your writer or developer under-delivers",
        handling: "Weekly reviews surface slippage early; briefs are specific enough that a replacement picks up mid-stream",
      },
      {
        risk: "Rankings slower than projected",
        handling: "Long-tail pages are sequenced first to produce early wins while competitive hub terms mature",
      },
      {
        risk: "Enquiries arrive but don't convert",
        handling: "The monthly report separates enquiry volume from close rate, so the bottleneck is visible rather than argued about",
      },
      {
        risk: "A competitor builds the same asset",
        handling: "Indexed authority takes years to displace. Delay is the expensive option",
      },
      {
        risk: "Engagement ends early",
        handling: "All blueprints, briefs, keyword maps and schema documentation remain yours",
      },
    ] as RiskRow[],
    closing: "I will not promise specific keyword rankings by specific dates. Anyone who does is guessing.",
  },

  s13: {
    eyebrow: "Boundaries",
    heading: "Enquiry generation is mine. Admissions closing is yours.",
    mySuccess:
      "Month-over-month growth in organic enquiries: WhatsApp messages, inbound calls and form fills originating from search. Plus full indexation of the portal and passing Core Web Vitals.",
    yourSuccess:
      "Closed admissions. Converting an enquiry into a confirmed seat depends entirely on your counselling team's speed, pricing and follow-up persistence.",
    resources: [
      { icon: "Compass", role: "Project head / architect", responsibility: "Strategy, blueprints, quality control", providedBy: "Chirag" },
      { icon: "Code2", role: "Full-stack developer", responsibility: "CMS, coding, site speed", providedBy: "You or your agency" },
      { icon: "PenTool", role: "SEO content writers", responsibility: "Long-form writing, data entry", providedBy: "You or your agency" },
      { icon: "Palette", role: "UI/UX designer", responsibility: "Conversion layouts, graphics", providedBy: "You or your agency" },
      { icon: "Phone", role: "Admissions team", responsibility: "Enquiry follow-up and closing", providedBy: "You" },
    ] as ResourceRow[],
    closing: "No developer or writers in place? Not a blocker — I can help you source and brief them.",
  },

  s14: {
    eyebrow: "Investment",
    heading: "Priced by scope, not by guess",
    // TODO: confirm public-facing figures before this page ships — these are
    // the tiers from the deck; the spec explicitly flags them for review.
    tiers: [
      {
        tier: "Small",
        courses: "1–2",
        institutions: "Up to 25",
        pages: "80–120",
        setup: "₹75,000–₹1,20,000",
        retainer: "₹35,000–₹50,000",
        successShare: "5–7% per seat",
      },
      {
        tier: "Medium",
        courses: "3–5",
        institutions: "25–50",
        pages: "150–250",
        setup: "₹1,20,000–₹2,00,000",
        retainer: "₹50,000–₹80,000",
        successShare: "6–8% per seat",
        highlighted: true,
      },
      {
        tier: "Large",
        courses: "6+",
        institutions: "50+",
        pages: "300–500",
        setup: "₹2,00,000–₹3,50,000",
        retainer: "₹80,000–₹1,20,000",
        successShare: "7–10% per seat",
      },
    ] as PricingTier[],
    whyScales: [
      {
        title: "Setup scales with pages.",
        body: "Keyword research, sitemap, schema plan and briefs each grow directly with page count.",
      },
      {
        title: "Retainer steps by tier.",
        body: "Governance effort holds flat within a tier, then jumps.",
      },
      {
        title: "Success share rises with moat.",
        body: "A larger, more defensible portal justifies sharing more upside.",
      },
    ],
    notIncluded:
      "Development, content writing and design execution, budgeted separately. Cornerstone content writing and the lead-tracking build are available as separate add-ons.",
    closing: "Exact tier is locked after the scoping sprint, from your real course list and institution count.",
  },

  s15: {
    eyebrow: "Next",
    heading: "A small first step, not a large commitment",
    intro:
      "Before either of us commits to a 16-week build, a scoping sprint of one to two weeks replaces every estimate on this page with your actual numbers: the exact keyword count, the exact page count, the schema plan and a fixed scope document.",
    intro2:
      "It costs ₹15,000–₹25,000, credited in full against the setup fee if you proceed. If the sprint shows the opportunity is not there at the volume required, I will tell you — and you will have paid a small fee instead of a large one.",
    steps: [
      { title: "A conversation", body: "Tell me what you are running now and what you spend." },
      { title: "Scoping sprint", body: "One to two weeks, real numbers, fixed scope." },
      { title: "Resource alignment", body: "Introduce your developer and writers, or I help you find them." },
      { title: "Kickoff", body: "Sign-off and week 1 begins." },
    ] as NextStep[],
    primaryCta: { label: "Start a conversation", href: "/contact" } as Cta,
    whatsappLabel: "WhatsApp",
  },
} as const;
