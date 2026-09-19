"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const waves = [
  { label: "Core hubs", heightPct: 40 },
  { label: "Priority profiles", heightPct: 60 },
  { label: "Full directory", heightPct: 80 },
  { label: "Long-tail", heightPct: 100 },
];

export function IndexationWaves() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const shown = isInView || shouldReduceMotion;

  return (
    <div
      ref={ref}
      className="flex h-40 items-end gap-4"
      role="img"
      aria-label="Four release waves, each taller than the last: core hubs, priority profiles, full directory, then long-tail"
    >
      {waves.map((wave, index) => (
        <div key={wave.label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex h-32 w-full items-end overflow-hidden rounded-t-md border border-b-0 border-border bg-surface-2">
            <motion.div
              className="w-full bg-border-bright"
              initial={{ height: 0 }}
              animate={{ height: shown ? `${wave.heightPct}%` : 0 }}
              transition={
                shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.15, ease: "easeOut" }
              }
            />
          </div>
          <span className="text-center font-mono text-[11px] text-text-3">{wave.label}</span>
        </div>
      ))}
    </div>
  );
}
