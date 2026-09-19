"use client";

import { Reveal } from "@/components/motion/Reveal";

type OwnershipSplitProps = {
  mySuccess: string;
  yourSuccess: string;
};

export function OwnershipSplit({ mySuccess, yourSuccess }: OwnershipSplitProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Reveal>
        <div className="h-full rounded-card border border-border bg-surface p-6">
          <p className="font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">My metric of success</p>
          <p className="mt-3 text-[15px] leading-[1.65] text-text-2">{mySuccess}</p>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="h-full rounded-card border border-border bg-surface p-6">
          <p className="font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">Your metric of success</p>
          <p className="mt-3 text-[15px] leading-[1.65] text-text-2">{yourSuccess}</p>
        </div>
      </Reveal>
    </div>
  );
}
