"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type RevealCircleProps = {
  cx: number;
  cy: number;
  r: number;
  className?: string;
  strokeWidth?: number;
  delay?: number;
};

export function RevealCircle({ cx, cy, r, className = "", strokeWidth, delay = 0 }: RevealCircleProps) {
  const ref = useRef<SVGCircleElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const shown = isInView || shouldReduceMotion;

  return (
    <motion.circle
      ref={ref}
      cx={cx}
      cy={cy}
      r={r}
      strokeWidth={strokeWidth}
      className={className}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: shown ? 1 : 0, scale: shown ? 1 : 0.6 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
