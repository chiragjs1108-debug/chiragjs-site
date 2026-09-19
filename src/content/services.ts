export type Service = {
  slug: string;
  title: string;
  label: string;
  icon: string;
  summary: string;
  whoItsFor: string;
  delivered: string[];
  notIncluded: string[];
};

export const services: Service[] = [
  {
    slug: "fractional-seo-architecture",
    title: "Fractional SEO Architecture",
    label: "Core engagement",
    icon: "Compass",
    summary:
      "I design the architecture — keyword map, URL taxonomy, CMS data model, schema plan, content briefs — then run the weekly sprints that hold it to standard.",
    // TODO: review copy
    whoItsFor:
      "College groups and coaching networks with an in-house developer and writers, who need the architecture and the governance rhythm, not the execution.",
    delivered: [
      "Keyword map and URL taxonomy",
      "CMS data model",
      "Schema plan",
      "Content briefs",
      "Weekly sprints and quality governance",
    ],
    notIncluded: ["Coding", "Writing", "Design execution"],
  },
  {
    slug: "cornerstone-content-writing",
    title: "Cornerstone Content Writing",
    label: "Priced separately",
    icon: "PenTool",
    summary:
      "I write the core, pillar and cornerstone pages myself — the commercial hubs carrying the hardest keywords.",
    // TODO: review copy
    whoItsFor:
      "Teams whose in-house writers can handle directory pages but need the highest-value hub pages written by someone who owns the keyword strategy.",
    delivered: [
      "Core, pillar and cornerstone pages, written personally",
      "Priced separately, per page or in a batch",
      "Briefs for the remaining directory pages, executed by the client's writers",
    ],
    // TODO: review copy
    notIncluded: [
      "Directory-page writing",
      "On-page publishing into the CMS",
      "Ongoing content calendar management",
    ],
  },
  {
    slug: "organic-lead-system",
    title: "Organic Lead System",
    label: "No licence fee",
    icon: "Radar",
    summary:
      "Every form across the portal feeds one tracked sheet, tagged with source and campaign, plus WhatsApp and call logging the sales team works directly.",
    // TODO: review copy
    whoItsFor:
      "Teams tired of leads scattered across inboxes and spreadsheets, who want one source of truth without paying for CRM software.",
    delivered: [
      "Every portal form feeding one tracked sheet",
      "Source and campaign tagging",
      "WhatsApp and call logging the sales team works directly",
      "Built once, owned by the client",
    ],
    // TODO: review copy
    notIncluded: ["CRM software or licence fees", "Sales team management", "Ad spend or media buying"],
  },
];
