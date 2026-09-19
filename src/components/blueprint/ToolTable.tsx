import { Icon } from "@/components/Icon";
import type { ToolRow } from "@/content/blueprint";

const costDot: Record<ToolRow["cost"], string> = {
  Free: "bg-text-3",
  "Free tier": "bg-text-3",
  Paid: "bg-text",
  "Paid API": "bg-text",
};

function CostBadge({ cost }: { cost: ToolRow["cost"] }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[12px] text-text-2">
      <span className={`h-2 w-2 rounded-full ${costDot[cost]}`} aria-hidden="true" />
      {cost}
    </span>
  );
}

export function ToolTable({ rows }: { rows: ToolRow[] }) {
  return (
    <div className="mt-8">
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
          {rows.map((row) => (
            <tr key={row.stage} className="border-b border-border">
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
          ))}
        </tbody>
      </table>

      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row) => (
          <div key={row.stage} className="rounded-card border border-border bg-surface p-5">
            <div className="flex items-start justify-between gap-3">
              <span className="flex items-center gap-3 text-[15px] font-medium text-text">
                <Icon name={row.icon} size={18} className="flex-shrink-0 text-text-3" />
                {row.stage}
              </span>
              <CostBadge cost={row.cost} />
            </div>
            <p className="mt-2 text-[14px] leading-[1.65] text-text-2">{row.tools}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
