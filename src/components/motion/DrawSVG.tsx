"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type DrawSVGProps = {
  d: string;
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "miter" | "round" | "bevel";
  duration?: number;
  delay?: number;
};

export function DrawSVG({ duration = 1.2, delay = 0, ...pathProps }: DrawSVGProps) {
  const ref = useRef<SVGPathElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const drawn = isInView || shouldReduceMotion;

  return (
    <motion.path
      ref={ref}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: drawn ? 1 : 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration, delay, ease: "easeInOut" }}
      {...pathProps}
    />
  );
}
