"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Icon } from "@/components/Icon";

type IconBadgeProps = {
  icon: string;
  size?: number;
  /** Tailwind size classes for the badge circle itself, e.g. "h-7 w-7". */
  badgeSize?: string;
  className?: string;
};

export function IconBadge({ icon, size = 20, badgeSize = "h-12 w-12", className = "" }: IconBadgeProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const settled = isInView || shouldReduceMotion;

  return (
    <span
      ref={ref}
      className={`flex ${badgeSize} flex-shrink-0 items-center justify-center rounded-full border bg-surface-2 transition-colors duration-500 ${
        settled ? "border-border-bright" : "border-border"
      } ${className}`.trim()}
    >
      <Icon
        name={icon}
        size={size}
        className={`transition-colors duration-500 ${settled ? "text-text-2" : "text-text-3"}`}
      />
    </span>
  );
}
