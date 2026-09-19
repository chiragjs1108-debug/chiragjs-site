"use client";

import { DrawSVG } from "@/components/motion/DrawSVG";
import { RevealCircle } from "@/components/motion/RevealCircle";

const SPOKE_COUNT = 6;
const RADIUS = 105;
const CENTER = 150;

function spokePosition(index: number) {
  const angle = (index / SPOKE_COUNT) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

export function HubSpokeArchitecture() {
  const spokes = Array.from({ length: SPOKE_COUNT }, (_, i) => spokePosition(i));

  return (
    <svg
      viewBox="0 0 300 300"
      className="mx-auto w-full max-w-[360px]"
      role="img"
      aria-label="Hub and spoke URL architecture — spoke pages link up to a single hub page"
    >
      <title>Hub and spoke URL architecture</title>

      {spokes.map((point, i) => (
        <DrawSVG
          key={`line-${i}`}
          d={`M${CENTER} ${CENTER} L${point.x} ${point.y}`}
          strokeWidth={1}
          className="stroke-border-bright"
          delay={i * 0.06}
        />
      ))}

      {spokes.map((point, i) => (
        <RevealCircle
          key={`node-${i}`}
          cx={point.x}
          cy={point.y}
          r={14}
          strokeWidth={1}
          className="fill-surface-2 stroke-border-bright"
          delay={0.35 + i * 0.06}
        />
      ))}

      <RevealCircle cx={CENTER} cy={CENTER} r={24} strokeWidth={1.5} className="fill-surface stroke-lime" delay={0.7} />
    </svg>
  );
}
