import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";
import type { PricingTier } from "@/content/blueprint";

const rows: { key: keyof PricingTier; label: string }[] = [
  { key: "courses", label: "Courses" },
  { key: "institutions", label: "Institutions" },
  { key: "pages", label: "Pages" },
  { key: "setup", label: "One-time setup" },
  { key: "retainer", label: "Monthly retainer" },
  { key: "successShare", label: "Success share" },
];

export function PricingTiers({ tiers }: { tiers: PricingTier[] }) {
  return (
    <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <Reveal key={tier.tier}>
          <div
            className={`flex h-full flex-col rounded-card border p-7 ${
              tier.highlighted ? "border-lime bg-surface shadow-lime-glow" : "border-border bg-surface"
            }`}
          >
            {tier.highlighted && (
              <p className="mb-4 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-lime">
                Most common fit
              </p>
            )}
            <p className="font-display text-[24px] font-semibold text-text">{tier.tier}</p>
            <dl className="mt-6 flex flex-1 flex-col gap-4">
              {rows.map((row) => (
                <div
                  key={row.key}
                  className="flex items-baseline justify-between gap-3 border-t border-border pt-4"
                >
                  <dt className="font-mono text-[13px] uppercase tracking-[0.03em] text-text-3">{row.label}</dt>
                  <dd className="text-right text-[16px] font-medium text-text">{tier[row.key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      ))}
    </StaggerGroup>
  );
}
