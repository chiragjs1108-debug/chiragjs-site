"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { ToolRow } from "@/content/blueprint";

type CostGroup = "free" | "paid";

const costDot: Record<ToolRow["cost"], string> = {
  Free: "bg-text-3",
  "Free tier": "bg-text-3",
  Paid: "bg-text",
  "Paid API": "bg-text",
};

const costGroup: Record<ToolRow["cost"], CostGroup> = {
  Free: "free",
  "Free tier": "free",
  Paid: "paid",
  "Paid API": "paid",
};

const legend: { key: CostGroup; label: string; dot: string }[] = [
  { key: "free", label: "Free", dot: "bg-text-3" },
  { key: "paid", label: "Paid", dot: "bg-text" },
];

function CostBadge({ cost }: { cost: ToolRow["cost"] }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[12px] text-text-2">
      <span className={`h-2 w-2 rounded-full ${costDot[cost]}`} aria-hidden="true" />
      {cost}
    </span>
  );
}

export function ToolTable({ rows }: { rows: ToolRow[] }) {
  const [pinned, setPinned] = useState<CostGroup | null>(null);
  const [hovered, setHovered] = useState<CostGroup | null>(null);
  const active = hovered ?? pinned;

  return (
    <div className="mt-8">
      <div className="mb-4 flex flex-wrap gap-3" role="group" aria-label="Filter tools by cost">
        {legend.map((item) => {
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              type="button"
              aria-pressed={pinned === item.key}
              onClick={() => setPinned((prev) => (prev === item.key ? null : item.key))}
              onMouseEnter={() => setHovered(item.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(item.key)}
              onBlur={() => setHovered(null)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[12px] transition-colors duration-[180ms] ${
                isActive ? "border-lime text-lime" : "border-border text-text-3"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${item.dot}`} aria-hidden="true" />
              {item.label}
            </button>
          );
        })}
      </div>

      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 pr-6 font-mono text-[13px] font-medium uppercase tracking-[0.02em] text-text-3">
              Stage
            </th>
            <th className="py-3 pr-6 font-mono text-[13px] font-medium uppercase tracking-[0.02em] text-text-3">
              Tools
            </th>
            <th className="py-3 pr-6 font-mono text-[13px] font-medium uppercase tracking-[0.02em] text-text-3">
              Cost
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isMatch = !active || costGroup[row.cost] === active;
            return (
              <tr
                key={row.stage}
                onMouseEnter={() => setHovered(costGroup[row.cost])}
                onMouseLeave={() => setHovered(null)}
                className={`border-b border-border transition-opacity duration-[220ms] ${
                  isMatch ? "opacity-100" : "opacity-35"
                }`}
              >
                <td className="py-4 pr-6 align-top">
                  <span className="flex items-center gap-3 text-[15px] leading-[1.65] text-text-2">
                    <Icon name={row.icon} size={18} className="flex-shrink-0 text-text-3" />
                    {row.stage}
                  </span>
                </td>
                <td className="py-4 pr-6 align-top text-[15px] leading-[1.65] text-text-2">{row.tools}</td>
                <td className="py-4 pr-6 align-top">
                  <CostBadge cost={row.cost} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row) => {
          const isMatch = !active || costGroup[row.cost] === active;
          return (
            <div
              key={row.stage}
              className={`rounded-card border border-border bg-surface p-5 transition-opacity duration-[220ms] ${
                isMatch ? "opacity-100" : "opacity-35"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex items-center gap-3 text-[15px] font-medium text-text">
                  <Icon name={row.icon} size={18} className="flex-shrink-0 text-text-3" />
                  {row.stage}
                </span>
                <CostBadge cost={row.cost} />
              </div>
              <p className="mt-2 text-[14px] leading-[1.65] text-text-2">{row.tools}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
