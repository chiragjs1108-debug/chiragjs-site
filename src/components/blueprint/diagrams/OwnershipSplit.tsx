"use client";

import { Reveal } from "@/components/motion/Reveal";

type OwnershipSplitProps = {
  mySuccess: string;
  yourSuccess: string;
};

export function OwnershipSplit({ mySuccess, yourSuccess }: OwnershipSplitProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Reveal>
        <div className="h-full rounded-card border border-lime/30 bg-surface p-7">
          <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.03em] text-lime">
            My metric of success
          </p>
          <p className="mt-3 text-[16px] leading-[1.65] text-text-2">{mySuccess}</p>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="h-full rounded-card border border-azure/30 bg-surface p-7">
          <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.03em] text-azure">
            Your metric of success
          </p>
          <p className="mt-3 text-[16px] leading-[1.65] text-text-2">{yourSuccess}</p>
        </div>
      </Reveal>
    </div>
  );
}
