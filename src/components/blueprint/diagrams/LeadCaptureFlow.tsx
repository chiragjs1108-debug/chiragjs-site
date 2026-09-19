"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { DrawSVG } from "@/components/motion/DrawSVG";
import { RevealCircle } from "@/components/motion/RevealCircle";

const nodes = [
  { x: 40, label: "Form submit" },
  { x: 180, label: "Hidden fields fire" },
  { x: 320, label: "Row appended" },
  { x: 460, label: "Sheet, 3 tabs" },
];

export function LeadCaptureFlow() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const shown = isInView || shouldReduceMotion;

  return (
    <div>
      <svg
        ref={ref}
        viewBox="0 0 500 100"
        className="w-full"
        role="img"
        aria-label="A form submission flows through hidden fields into an appended row in a tracked sheet"
      >
        <title>Form submission flows into a tracked sheet</title>

        <DrawSVG d="M40 50 L460 50" strokeWidth={1.5} className="stroke-border-bright" duration={1} />

        {!shouldReduceMotion && (
          <motion.circle
            cy={50}
            r={5}
            className="fill-lime"
            initial={{ cx: 40, opacity: 0 }}
            animate={shown ? { cx: [40, 460], opacity: [0, 1, 1, 0] } : { cx: 40, opacity: 0 }}
            transition={{ duration: 1.4, delay: 0.9, ease: "easeInOut" }}
          />
        )}

        {nodes.map((node, i) => (
          <RevealCircle
            key={node.label}
            cx={node.x}
            cy={50}
            r={10}
            strokeWidth={1.5}
            className="fill-surface-2 stroke-border-bright"
            delay={0.2 + i * 0.15}
          />
        ))}
      </svg>

      <div className="mt-3 grid grid-cols-4 gap-2">
        {nodes.map((node) => (
          <p key={node.label} className="text-center font-mono text-[11px] text-text-3">
            {node.label}
          </p>
        ))}
      </div>
    </div>
  );
}
