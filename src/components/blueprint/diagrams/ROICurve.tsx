"use client";

import { DrawSVG } from "@/components/motion/DrawSVG";

export function ROICurve() {
  return (
    <div>
      <svg
        viewBox="0 0 400 200"
        className="w-full"
        role="img"
        aria-label="Paid spend stays flat then drops to zero when spend pauses; organic starts near zero and climbs steeply, compounding over time"
      >
        <title>Paid vs organic return over time</title>

        <line x1="0" y1="180" x2="400" y2="180" className="stroke-border" strokeWidth={1} />

        <DrawSVG d="M0 100 L280 100 L280 180 L400 180" strokeWidth={2} className="stroke-text-3" duration={1} />

        <DrawSVG
          d="M0 175 C 100 172, 180 150, 240 110 C 300 70, 340 40, 400 20"
          strokeWidth={2.5}
          className="stroke-lime"
          duration={1.4}
          delay={0.3}
        />
      </svg>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="flex items-center gap-2 font-mono text-[12px] text-text-3">
          <span className="h-2 w-2 rounded-full bg-text-3" aria-hidden="true" />
          Paid channel
        </span>
        <span className="flex items-center gap-2 font-mono text-[12px] text-lime">
          <span className="h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
          Organic at maturity
        </span>
      </div>
    </div>
  );
}
