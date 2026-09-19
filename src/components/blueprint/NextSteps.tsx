import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";
import type { NextStep } from "@/content/blueprint";

export function NextSteps({ steps }: { steps: NextStep[] }) {
  return (
    <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <Reveal key={step.title}>
          <div className="flex h-full flex-col gap-3 rounded-card border border-border bg-surface p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-bright font-mono text-[13px] text-text">
              {index + 1}
            </span>
            <p className="font-display text-[17px] font-semibold text-text">{step.title}</p>
            <p className="text-[15px] leading-[1.65] text-text-2">{step.body}</p>
          </div>
        </Reveal>
      ))}
    </StaggerGroup>
  );
}
