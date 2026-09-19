export type ProblemCard = {
  icon: string;
  label: string;
  title: string;
  body: string;
};

export type ChainNode = {
  label: string;
  title: string;
};

export const home = {
  problem: {
    eyebrow: "The problem",
    // TODO: review copy
    heading: "Paid traffic doesn't compound.",
    cards: [
      {
        icon: "TrendingUp",
        label: "Rising CPC",
        title: "Admission keywords cost more every intake.",
        // TODO: review copy
        body: "Cost per click on admissions terms climbs every cycle, with no ceiling in sight.",
      },
      {
        icon: "CircleOff",
        label: "Zero equity",
        title: "Ad spend buys clicks, not an asset.",
        // TODO: review copy
        body: "Every rupee spent on ads disappears the moment the campaign stops. Nothing is left behind to compound.",
      },
      {
        icon: "TrendingDown",
        label: "Pipeline stops",
        title: "Pause spend, and the pipeline drops to zero.",
        // TODO: review copy
        body: "Paid leads stop arriving the day the budget does — there's no residual pipeline underneath it.",
      },
    ] as ProblemCard[],
  },

  chain: {
    eyebrow: "The chain",
    // TODO: review copy
    heading: "From demand to a compounding return.",
    nodes: [
      { label: "01", title: "Find the demand" },
      { label: "02", title: "Build the asset" },
      { label: "03", title: "Capture the lead" },
      { label: "04", title: "Compound the return" },
    ] as ChainNode[],
  },

  servicesPreview: {
    eyebrow: "Services",
    // TODO: review copy
    heading: "Three ways to engage.",
  },

  closingCta: {
    // TODO: review copy
    heading: "Ready to build the asset?",
    buttonLabel: "Start a conversation",
  },
} as const;
