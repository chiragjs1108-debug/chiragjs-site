import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  as?: "div" | "article" | "li";
};

export function Card({ children, className = "", hoverable = true, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`rounded-card border border-border bg-surface p-6 transition-all duration-[180ms] ${
        hoverable ? "hover:-translate-y-0.5 hover:border-border-bright" : ""
      } ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
