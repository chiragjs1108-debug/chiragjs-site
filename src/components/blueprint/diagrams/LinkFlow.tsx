"use client";

import { DrawSVG } from "@/components/motion/DrawSVG";
import { RevealCircle } from "@/components/motion/RevealCircle";

const spokeX = [60, 153, 246, 340];

export function LinkFlow() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="mx-auto w-full max-w-[440px]"
      role="img"
      aria-label="Internal links flow authority upward from spoke pages to the hub page"
    >
      <title>Internal links flow authority upward to the hub</title>

      {spokeX.map((x, i) => (
        <DrawSVG key={x} d={`M${x} 190 L200 60`} strokeWidth={1.5} className="stroke-border-bright" delay={i * 0.1} />
      ))}

      {spokeX.map((x, i) => (
        <RevealCircle
          key={`spoke-${x}`}
          cx={x}
          cy={190}
          r={16}
          strokeWidth={1}
          className="fill-surface-2 stroke-border-bright"
          delay={0.3 + i * 0.08}
        />
      ))}

      <RevealCircle cx={200} cy={60} r={26} strokeWidth={2} className="fill-surface stroke-lime" delay={0.7} />
    </svg>
  );
}
