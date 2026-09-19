"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Icon } from "@/components/Icon";

type IconBadgeProps = {
  icon: string;
  size?: number;
  className?: string;
};

export function IconBadge({ icon, size = 20, className = "" }: IconBadgeProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const settled = isInView || shouldReduceMotion;

  return (
    <span
      ref={ref}
      className={`flex h-12 w-12 items-center justify-center rounded-full border bg-surface-2 transition-colors duration-500 ${
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
