import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/Icon";
import type { RoadmapRow } from "@/content/blueprint";

type Tone = "lime" | "azure" | "amber";
const tones: Tone[] = ["lime", "azure", "amber"];

const dotBg: Record<Tone, string> = {
  lime: "bg-lime",
  azure: "bg-azure",
  amber: "bg-amber",
};

const pillStyle: Record<Tone, string> = {
  lime: "border-lime/30 bg-lime/10 text-lime",
  azure: "border-azure/30 bg-azure/10 text-azure",
  amber: "border-amber/30 bg-amber/10 text-amber",
};

export function Timeline({ rows }: { rows: RoadmapRow[] }) {
  return (
    <div className="relative mt-10">
      <div className="absolute left-5 top-2 bottom-2 w-px bg-border" aria-hidden="true" />
      <div className="flex flex-col gap-6">
        {rows.map((row, index) => {
          const tone = tones[index % tones.length];
          return (
            <Reveal key={`${row.weeks}-${row.stage}`}>
              <div className="flex gap-4">
                <div className="relative w-10 flex-shrink-0">
                  <span
                    className={`absolute left-3 top-1 h-4 w-4 rounded-full border-2 border-base ${dotBg[tone]}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 rounded-card border border-border bg-surface p-5 md:p-6">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.04em] ${pillStyle[tone]}`}
                  >
                    Weeks {row.weeks}
                  </span>
                  <p className="mt-3 font-display text-[17px] font-semibold text-text md:text-[19px]">
                    {row.stage}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.65] text-text-2">{row.ships}</p>
                  <div className="mt-3 flex items-start gap-2 border-t border-border pt-3">
                    <Icon name="CheckSquare" size={14} className="mt-0.5 flex-shrink-0 text-text-3" />
                    <p className="text-[13px] leading-[1.5] text-text-3">{row.gate}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
