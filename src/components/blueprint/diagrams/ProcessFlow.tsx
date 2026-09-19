"use client";

import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";
import type { MethodStage } from "@/content/blueprint";

const ownership: Record<MethodStage["ownership"], { card: string; text: string; legend: string }> = {
  mine: { card: "border-border-bright bg-surface-2", text: "text-text", legend: "Mine to design" },
  shared: { card: "border-border bg-surface", text: "text-text-2", legend: "Mine to govern, yours to execute" },
  joint: { card: "border-dashed border-border bg-transparent", text: "text-text-3", legend: "Joint" },
};

export function ProcessFlow({ stages }: { stages: MethodStage[] }) {
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
        {(Object.keys(ownership) as MethodStage["ownership"][]).map((key) => (
          <span key={key} className="flex items-center gap-2 font-mono text-[12px] text-text-3">
            <span className={`h-3 w-3 rounded-full border ${ownership[key].card}`} aria-hidden="true" />
            {ownership[key].legend}
          </span>
        ))}
      </div>

      <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {stages.map((stage) => (
          <Reveal key={stage.number}>
            <div
              className={`flex h-full flex-col gap-2 rounded-card border p-4 ${ownership[stage.ownership].card} ${ownership[stage.ownership].text}`}
            >
              <span className="font-mono text-[12px] text-text-3">{stage.number}</span>
              <p className="font-display text-[14px] font-semibold leading-tight">{stage.stage}</p>
              <p className="text-[12px] leading-[1.5] text-text-3">{stage.detail}</p>
            </div>
          </Reveal>
        ))}
      </StaggerGroup>
    </div>
  );
}
