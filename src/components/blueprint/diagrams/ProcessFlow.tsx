"use client";

import { useState } from "react";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";
import type { MethodStage } from "@/content/blueprint";

type Ownership = MethodStage["ownership"];

const ownership: Record<
  Ownership,
  { card: string; text: string; swatch: string; activeBorder: string; activeText: string; legend: string }
> = {
  mine: {
    card: "border-border-bright bg-surface-2",
    text: "text-text",
    swatch: "bg-lime",
    activeBorder: "border-lime",
    activeText: "text-lime",
    legend: "Mine to design",
  },
  shared: {
    card: "border-border bg-surface",
    text: "text-text-2",
    swatch: "bg-azure",
    activeBorder: "border-azure",
    activeText: "text-azure",
    legend: "Mine to govern, yours to execute",
  },
  joint: {
    card: "border-dashed border-border bg-transparent",
    text: "text-text-3",
    swatch: "bg-amber",
    activeBorder: "border-amber",
    activeText: "text-amber",
    legend: "Joint",
  },
};

const tiers = Object.keys(ownership) as Ownership[];

export function ProcessFlow({ stages }: { stages: MethodStage[] }) {
  const [pinned, setPinned] = useState<Ownership | null>(null);
  const [hovered, setHovered] = useState<Ownership | null>(null);
  const active = hovered ?? pinned;

  return (
    <div>
      <div
        className="mb-6 flex flex-wrap gap-x-3 gap-y-2"
        role="group"
        aria-label="Filter stages by who owns them"
      >
        {tiers.map((key) => {
          const isActive = active === key;
          const tier = ownership[key];
          return (
            <button
              key={key}
              type="button"
              aria-pressed={pinned === key}
              onClick={() => setPinned((prev) => (prev === key ? null : key))}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(key)}
              onBlur={() => setHovered(null)}
              className={`flex items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-[13px] transition-colors duration-[180ms] ${
                isActive ? `${tier.activeBorder} ${tier.activeText}` : "border-border text-text-3"
              }`}
            >
              <span className={`h-3 w-3 flex-shrink-0 rounded-full ${tier.swatch}`} aria-hidden="true" />
              {tier.legend}
            </button>
          );
        })}
      </div>

      <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {stages.map((stage) => {
          const isMatch = !active || stage.ownership === active;
          const tier = ownership[stage.ownership];
          return (
            <Reveal key={stage.number}>
              <div
                onMouseEnter={() => setHovered(stage.ownership)}
                onMouseLeave={() => setHovered(null)}
                className={`flex h-full flex-col gap-2.5 rounded-card border p-5 transition-all duration-[220ms] ${
                  active && isMatch ? tier.activeBorder : tier.card
                } ${tier.text} ${isMatch ? "opacity-100" : "opacity-35"}`}
              >
                <span className="font-mono text-[13px] text-text-3">{stage.number}</span>
                <p className="font-display text-[16px] font-semibold leading-tight">{stage.stage}</p>
                <p className="text-[13px] leading-[1.5] text-text-3">{stage.detail}</p>
              </div>
            </Reveal>
          );
        })}
      </StaggerGroup>
    </div>
  );
}
