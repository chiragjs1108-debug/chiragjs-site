"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Icon } from "@/components/Icon";

type Tone = "neutral" | "lime" | "azure" | "amber";

const toneStyles: Record<Tone, { border: string; icon: string }> = {
  neutral: { border: "border-border-bright", icon: "text-text-2" },
  lime: { border: "border-lime", icon: "text-lime" },
  azure: { border: "border-azure", icon: "text-azure" },
  amber: { border: "border-amber", icon: "text-amber" },
};

type IconBadgeProps = {
  icon: string;
  size?: number;
  /** Tailwind size classes for the badge circle itself, e.g. "h-7 w-7". */
  badgeSize?: string;
  /** Accent colour once settled. Defaults to neutral (grayscale). */
  tone?: Tone;
  className?: string;
};

export function IconBadge({
  icon,
  size = 20,
  badgeSize = "h-12 w-12",
  tone = "neutral",
  className = "",
}: IconBadgeProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const settled = isInView || shouldReduceMotion;
  const settledStyle = toneStyles[tone];

  return (
    <span
      ref={ref}
      className={`flex ${badgeSize} flex-shrink-0 items-center justify-center rounded-full border bg-surface-2 transition-colors duration-500 ${
        settled ? settledStyle.border : "border-border"
      } ${className}`.trim()}
    >
      <Icon
        name={icon}
        size={size}
        className={`transition-colors duration-500 ${settled ? settledStyle.icon : "text-text-3"}`}
      />
    </span>
  );
}
