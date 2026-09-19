"use client";

import { Reveal } from "@/components/motion/Reveal";

const tiers = [
  { width: "100%", label: "Awareness — broad course research" },
  { width: "72%", label: "Consideration — comparison terms" },
  { width: "44%", label: "Decision — ready-to-enquire terms" },
];

export function IntentPyramid() {
  return (
    <div
      className="mx-auto flex max-w-[420px] flex-col-reverse items-center gap-2"
      role="img"
      aria-label="Search intent pyramid: broad awareness terms at the base, narrowing to ready-to-enquire decision terms at the top"
    >
      {tiers.map((tier, index) => (
        <Reveal key={tier.label} delay={index * 0.1} className="flex w-full justify-center">
          <div
            className="flex h-14 items-center justify-center rounded-md border border-border bg-surface-2 px-4 text-center"
            style={{ width: tier.width }}
          >
            <span className="font-mono text-[12px] text-text-2">{tier.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
