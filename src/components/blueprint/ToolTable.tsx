"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { ToolRow } from "@/content/blueprint";

type CostGroup = "free" | "paid";

const costDot: Record<ToolRow["cost"], string> = {
  Free: "bg-azure",
  "Free tier": "bg-azure",
  Paid: "bg-amber",
  "Paid API": "bg-amber",
};

const costBorderL: Record<ToolRow["cost"], string> = {
  Free: "border-l-azure",
  "Free tier": "border-l-azure",
  Paid: "border-l-amber",
  "Paid API": "border-l-amber",
};

const costText: Record<ToolRow["cost"], string> = {
  Free: "text-azure",
  "Free tier": "text-azure",
  Paid: "text-amber",
  "Paid API": "text-amber",
};

const costGroup: Record<ToolRow["cost"], CostGroup> = {
  Free: "free",
  "Free tier": "free",
  Paid: "paid",
  "Paid API": "paid",
};

const legend: { key: CostGroup; label: string; dot: string; border: string; text: string }[] = [
  { key: "free", label: "Free", dot: "bg-azure", border: "border-azure", text: "text-azure" },
  { key: "paid", label: "Paid", dot: "bg-amber", border: "border-amber", text: "text-amber" },
];

type Tone = "lime" | "azure" | "amber";

const toneText: Record<Tone, string> = {
  lime: "text-lime",
  azure: "text-azure",
  amber: "text-amber",
};

// Individual tool → icon + accent tone. Generic lucide icons, not brand
// logos (real brand marks would need a new icon-library dependency — see
// project notes). Tones cycle for visual variety, not a taxonomy.
const toolMeta: Record<string, { icon: string; tone: Tone }> = {
  "Keyword Planner": { icon: "Target", tone: "lime" },
  "Search Console": { icon: "Search", tone: "azure" },
  Trends: { icon: "TrendingUp", tone: "amber" },
  Ahrefs: { icon: "Link2", tone: "lime" },
  SEMrush: { icon: "BarChart3", tone: "azure" },
  Sheets: { icon: "FileSpreadsheet", tone: "amber" },
  Supabase: { icon: "Database", tone: "lime" },
  "Screaming Frog": { icon: "Bug", tone: "azure" },
  Sitebulb: { icon: "Radar", tone: "amber" },
  PageSpeed: { icon: "Gauge", tone: "lime" },
  "Rich Results Test": { icon: "CheckSquare", tone: "azure" },
  Surfer: { icon: "Waves", tone: "amber" },
  Clearscope: { icon: "ClipboardCheck", tone: "lime" },
  LLM: { icon: "Bot", tone: "azure" },
  Forms: { icon: "FormInput", tone: "amber" },
  "Tag Manager": { icon: "Tags", tone: "lime" },
  GA4: { icon: "LineChart", tone: "azure" },
  "Looker Studio": { icon: "PieChart", tone: "amber" },
};

function CostBadge({ cost }: { cost: ToolRow["cost"] }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[13px] ${costText[cost]}`}>
      <span className={`h-2 w-2 rounded-full ${costDot[cost]}`} aria-hidden="true" />
      {cost}
    </span>
  );
}

function ToolChips({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((tool) => {
        const meta = toolMeta[tool] ?? { icon: "Sparkles", tone: "lime" as Tone };
        return (
          <span
            key={tool}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 transition-colors duration-[180ms] hover:border-border-bright"
          >
            <Icon name={meta.icon} size={16} className={`flex-shrink-0 ${toneText[meta.tone]}`} />
            <span className="font-mono text-[13px] font-medium text-text">{tool}</span>
          </span>
        );
      })}
    </div>
  );
}

export function ToolTable({ rows }: { rows: ToolRow[] }) {
  const [pinned, setPinned] = useState<CostGroup | null>(null);
  const [hovered, setHovered] = useState<CostGroup | null>(null);
  const active = hovered ?? pinned;

  return (
    <div className="mt-10">
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
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[13px] transition-colors duration-[180ms] ${
                isActive ? `${item.border} ${item.text}` : "border-border text-text-3"
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
                <td className="py-5 pr-6 align-top">
                  <span className="flex items-center gap-3 text-[16px] leading-[1.65] text-text-2">
                    <Icon name={row.icon} size={18} className="flex-shrink-0 text-text-3" />
                    {row.stage}
                  </span>
                </td>
                <td className="py-5 pr-6 align-top">
                  <ToolChips tools={row.tools} />
                </td>
                <td className="py-5 pr-6 align-top">
                  <CostBadge cost={row.cost} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex flex-col gap-5 md:hidden">
        {rows.map((row) => {
          const isMatch = !active || costGroup[row.cost] === active;
          return (
            <div
              key={row.stage}
              className={`rounded-card border border-l-4 border-border bg-surface p-6 transition-opacity duration-[220ms] ${
                costBorderL[row.cost]
              } ${isMatch ? "opacity-100" : "opacity-35"}`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex items-center gap-3 text-[16px] font-medium text-text">
                  <Icon name={row.icon} size={18} className="flex-shrink-0 text-text-3" />
                  {row.stage}
                </span>
                <CostBadge cost={row.cost} />
              </div>
              <div className="mt-3">
                <ToolChips tools={row.tools} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
