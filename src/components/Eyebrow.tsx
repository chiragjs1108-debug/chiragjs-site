import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  number?: string;
  tone?: "muted" | "lime";
  className?: string;
};

const toneStyles = {
  muted: "text-text-3",
  lime: "text-lime",
};

export function Eyebrow({ children, number, tone = "muted", className = "" }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-[13px] font-medium uppercase tracking-[0.12em] ${toneStyles[tone]} ${className}`.trim()}
    >
      {number ? `${number} / ${children}` : children}
    </p>
  );
}
