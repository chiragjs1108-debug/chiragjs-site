import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";
import type { NextStep } from "@/content/blueprint";

export function NextSteps({ steps }: { steps: NextStep[] }) {
  return (
    <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <Reveal key={step.title}>
          <div className="flex h-full flex-col gap-3 rounded-card border border-border bg-surface p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-lime/40 bg-lime/10 font-mono text-[14px] font-semibold text-lime">
              {index + 1}
            </span>
            <p className="mt-1 font-display text-[18px] font-semibold text-text">{step.title}</p>
            <p className="text-[16px] leading-[1.65] text-text-2">{step.body}</p>
          </div>
        </Reveal>
      ))}
    </StaggerGroup>
  );
}
