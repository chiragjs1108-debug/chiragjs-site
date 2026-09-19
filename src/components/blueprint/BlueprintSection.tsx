import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

type BlueprintSectionProps = {
  id: string;
  number: string;
  eyebrow: string;
  heading: string;
  children: ReactNode;
  className?: string;
};

export function BlueprintSection({
  id,
  number,
  eyebrow,
  heading,
  children,
  className = "",
}: BlueprintSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-[72px] md:py-[120px] ${className}`.trim()}>
      <Eyebrow number={number}>{eyebrow}</Eyebrow>
      <Reveal>
        <h2 className="mt-4 max-w-2xl font-display text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-text md:text-[42px]">
          {heading}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
