import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { GridTexture } from "@/components/GridTexture";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { CountUp } from "@/components/motion/CountUp";
import { DrawSVG } from "@/components/motion/DrawSVG";

export const metadata: Metadata = {
  title: "Style guide",
  description: "Internal design system reference. Not a public page.",
  robots: { index: false, follow: false },
};

const colorTokens = [
  { name: "base", hex: "#0A0A0B", use: "Page background" },
  { name: "surface", hex: "#141518", use: "Cards, raised panels" },
  { name: "surface-2", hex: "#1C1D21", use: "Nested cards, hover states" },
  { name: "border", hex: "#26282D", use: "Hairlines, dividers, card borders" },
  { name: "border-bright", hex: "#3A3D44", use: "Hover borders, active states" },
  { name: "lime", hex: "#C8FF3D", use: "The accent" },
  { name: "lime-dim", hex: "#9BCC2E", use: "Lime on hover, secondary accent" },
  { name: "lime-glow", hex: "rgba(200,255,61,0.12)", use: "Glow backgrounds, focus rings" },
  { name: "text", hex: "#F5F6F7", use: "Primary text" },
  { name: "text-2", hex: "#A1A4AB", use: "Secondary text, body on dark" },
  { name: "text-3", hex: "#6B6F78", use: "Muted, captions, metadata" },
  { name: "light", hex: "#F7F8F8", use: "Rare light-section background" },
  { name: "ink", hex: "#0A0A0B", use: "Text on light sections" },
] as const;

const swatchBg: Record<string, string> = {
  base: "bg-base",
  surface: "bg-surface",
  "surface-2": "bg-surface-2",
  border: "bg-border",
  "border-bright": "bg-border-bright",
  lime: "bg-lime",
  "lime-dim": "bg-lime-dim",
  text: "bg-text",
  "text-2": "bg-text-2",
  "text-3": "bg-text-3",
  light: "bg-light",
  ink: "bg-ink",
};

const fontFamilyVar: Record<string, string> = {
  display: "var(--font-space-grotesk)",
  sans: "var(--font-inter)",
  mono: "var(--font-jetbrains-mono)",
};

type TypeRow = {
  label: string;
  family: "display" | "sans" | "mono";
  desktop: number;
  mobile: number;
  weight: number;
  tracking: string;
  sample: string;
  lineHeight: number;
  uppercase?: boolean;
};

const typeScale: TypeRow[] = [
  {
    label: "h1",
    family: "display",
    desktop: 64,
    mobile: 38,
    weight: 700,
    tracking: "-0.03em",
    sample: "Search demand, engineered.",
    lineHeight: 1.1,
  },
  {
    label: "h2",
    family: "display",
    desktop: 44,
    mobile: 30,
    weight: 600,
    tracking: "-0.02em",
    sample: "The chain from demand to enquiry.",
    lineHeight: 1.1,
  },
  {
    label: "h3",
    family: "display",
    desktop: 26,
    mobile: 22,
    weight: 600,
    tracking: "-0.01em",
    sample: "Governance rhythm, not guesswork.",
    lineHeight: 1.1,
  },
  {
    label: "Body",
    family: "sans",
    desktop: 18,
    mobile: 17,
    weight: 400,
    tracking: "0em",
    sample:
      "Plain, direct, specific. No marketing superlatives. Concrete numbers over adjectives.",
    lineHeight: 1.65,
  },
  {
    label: "Body large",
    family: "sans",
    desktop: 21,
    mobile: 19,
    weight: 400,
    tracking: "0em",
    sample: "Short sentences. Confident about method, honest about limits.",
    lineHeight: 1.65,
  },
  {
    label: "Eyebrow",
    family: "mono",
    desktop: 13,
    mobile: 13,
    weight: 500,
    tracking: "0.12em",
    sample: "01 / the problem",
    lineHeight: 1.4,
    uppercase: true,
  },
  {
    label: "Stat figure",
    family: "display",
    desktop: 56,
    mobile: 40,
    weight: 700,
    tracking: "-0.03em",
    sample: "0123456789",
    lineHeight: 1.1,
  },
  {
    label: "Label / meta",
    family: "mono",
    desktop: 13,
    mobile: 13,
    weight: 400,
    tracking: "0.02em",
    sample: "Updated Sep 2026",
    lineHeight: 1.4,
  },
  {
    label: "Small",
    family: "sans",
    desktop: 15,
    mobile: 15,
    weight: 400,
    tracking: "0em",
    sample: "Formspree handles delivery and abuse filtering.",
    lineHeight: 1.65,
  },
];

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8">
      <Eyebrow number={number}>{title}</Eyebrow>
    </div>
  );
}

function TypeSample({ row, size }: { row: TypeRow; size: "desktop" | "mobile" }) {
  const px = size === "desktop" ? row.desktop : row.mobile;
  return (
    <div className="flex-1">
      <p className="mb-2 font-mono text-[13px] text-text-3">
        {size === "desktop" ? "Desktop" : "Mobile"} · {px}px
      </p>
      <p
        style={{
          fontFamily: fontFamilyVar[row.family],
          fontSize: `${px}px`,
          fontWeight: row.weight,
          letterSpacing: row.tracking,
          lineHeight: row.lineHeight,
          textTransform: row.uppercase ? "uppercase" : undefined,
        }}
        className="text-text"
      >
        {row.sample}
      </p>
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <div className="py-16">
      <Container>
        <Eyebrow number="SG">Internal — not a real page</Eyebrow>
        <h1 className="mt-4 font-display text-[38px] font-bold tracking-[-0.03em] text-text md:text-[64px]">
          Style guide
        </h1>
        <p className="mt-4 max-w-[42rem] text-[17px] leading-[1.65] text-text-2 md:text-[18px]">
          Every colour token, type style, and component primitive in its
          documented states. Review here before anything touches a real
          page — fixing the palette or type scale later means touching
          everything.
        </p>
      </Container>

      {/* Colour tokens */}
      <Container className="mt-24">
        <SectionHeading number="01" title="Colour tokens" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {colorTokens.map((token) => (
            <div key={token.name} className="flex flex-col gap-3">
              {token.name === "lime-glow" ? (
                <div className="relative h-20 overflow-hidden rounded-card border border-border bg-surface">
                  <div className="absolute inset-0 bg-lime-glow" />
                </div>
              ) : (
                <div
                  className={`h-20 rounded-card border border-border ${swatchBg[token.name]}`}
                />
              )}
              <div>
                <p className="font-mono text-[13px] text-text">{token.name}</p>
                <p className="font-mono text-[13px] text-text-3">{token.hex}</p>
                <p className="mt-1 text-[15px] text-text-2">{token.use}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Typography */}
      <Container className="mt-24">
        <SectionHeading number="02" title="Typography" />
        <div className="flex flex-col divide-y divide-border">
          {typeScale.map((row) => (
            <div key={row.label} className="grid gap-6 py-8 md:grid-cols-[120px_1fr_1fr]">
              <p className="font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                {row.label}
              </p>
              <TypeSample row={row} size="desktop" />
              <TypeSample row={row} size="mobile" />
            </div>
          ))}
        </div>
      </Container>

      {/* Buttons */}
      <Container className="mt-24">
        <SectionHeading number="03" title="Button" />

        <div className="space-y-12">
          <div>
            <p className="mb-4 font-mono text-[13px] text-text-3">
              Live — hover or tab to each to see its interactive state
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary button</Button>
              <Button variant="ghost">Ghost button</Button>
              <Button variant="link">Link button →</Button>
              <Button variant="primary" disabled>
                Primary (disabled)
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[13px] text-text-3">
              Forced-state previews (non-interactive)
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="mb-3 text-[13px] font-mono text-text-3">Primary · hover</p>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-lime px-6 py-3 text-[15px] font-medium leading-none text-ink shadow-[0_0_56px_rgba(200,255,61,0.18)] brightness-110"
                >
                  Primary button
                </span>
              </div>
              <div>
                <p className="mb-3 text-[13px] font-mono text-text-3">Ghost · hover</p>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center gap-2 rounded-button border border-border-bright bg-surface-2 px-6 py-3 text-[15px] font-medium leading-none text-text"
                >
                  Ghost button
                </span>
              </div>
              <div>
                <p className="mb-3 text-[13px] font-mono text-text-3">Any variant · focus</p>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center gap-2 rounded-button border border-border px-6 py-3 text-[15px] font-medium leading-none text-text outline outline-2 outline-offset-2 outline-lime"
                >
                  Focused element
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Card */}
      <Container className="mt-24">
        <SectionHeading number="04" title="Card" />
        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <p className="font-mono text-[13px] text-text-3">Rest — hover me</p>
            <p className="mt-2 text-[17px] leading-[1.65] text-text-2">
              Default card. Hover lifts it 2px and brightens the border.
            </p>
          </Card>
          <div>
            <p className="mb-3 font-mono text-[13px] text-text-3">Hover (forced preview)</p>
            <div
              aria-hidden="true"
              className="-translate-y-0.5 rounded-card border border-border-bright bg-surface p-6"
            >
              <p className="text-[17px] leading-[1.65] text-text-2">
                Same card, hover state applied permanently for review.
              </p>
            </div>
          </div>
          <Card hoverable={false}>
            <p className="font-mono text-[13px] text-text-3">Static (hoverable=false)</p>
            <p className="mt-2 text-[17px] leading-[1.65] text-text-2">
              For non-interactive surfaces that shouldn&apos;t suggest a hover
              affordance.
            </p>
          </Card>
        </div>
      </Container>

      {/* Eyebrow */}
      <Container className="mt-24">
        <SectionHeading number="05" title="Eyebrow" />
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 font-mono text-[13px] text-text-3">Muted, with section number</p>
            <Eyebrow number="01">The problem</Eyebrow>
          </div>
          <div>
            <p className="mb-2 font-mono text-[13px] text-text-3">Muted, no number</p>
            <Eyebrow>Case study</Eyebrow>
          </div>
          <div>
            <p className="mb-2 font-mono text-[13px] text-text-3">
              Lime tone — active nav / table-of-contents state
            </p>
            <Eyebrow tone="lime">Governance rhythm</Eyebrow>
          </div>
        </div>
      </Container>

      {/* GridTexture */}
      <Container className="mt-24">
        <SectionHeading number="06" title="GridTexture" />
        <div className="relative overflow-hidden rounded-card border border-border bg-base p-12">
          <GridTexture />
          <p className="relative font-mono text-[13px] text-text-3">
            3–5% opacity dot grid — for hero and diagram backgrounds only, never behind body text
          </p>
        </div>
      </Container>

      {/* Motion */}
      <Container className="mt-24 mb-24">
        <SectionHeading number="07" title="Motion" />
        <p className="mb-10 max-w-[42rem] text-[15px] leading-[1.65] text-text-2">
          All four honour <code className="font-mono text-text">prefers-reduced-motion</code> —
          enable it in your OS to confirm transforms collapse to instant opacity changes,
          counters jump straight to their final value, and the diagram line renders complete.
        </p>

        <div className="space-y-14">
          <div>
            <p className="mb-4 font-mono text-[13px] text-text-3">
              Reveal — fades up 16px once, as it enters the viewport
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal>
                <Card hoverable={false}>
                  <p className="text-[17px] leading-[1.65] text-text-2">
                    Reveal wraps any block and fades it up once on scroll entry.
                  </p>
                </Card>
              </Reveal>
              <Reveal delay={0.06}>
                <Card hoverable={false}>
                  <p className="text-[17px] leading-[1.65] text-text-2">
                    A second Reveal with a manual 60ms delay, matching the stagger rhythm.
                  </p>
                </Card>
              </Reveal>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[13px] text-text-3">
              StaggerGroup — wraps Reveal children, staggering each by 60ms
            </p>
            <StaggerGroup className="grid gap-6 sm:grid-cols-3">
              <Reveal>
                <Card hoverable={false}>
                  <p className="font-mono text-[13px] text-text-3">01</p>
                  <p className="mt-2 text-[15px] text-text-2">First</p>
                </Card>
              </Reveal>
              <Reveal>
                <Card hoverable={false}>
                  <p className="font-mono text-[13px] text-text-3">02</p>
                  <p className="mt-2 text-[15px] text-text-2">Second</p>
                </Card>
              </Reveal>
              <Reveal>
                <Card hoverable={false}>
                  <p className="font-mono text-[13px] text-text-3">03</p>
                  <p className="mt-2 text-[15px] text-text-2">Third</p>
                </Card>
              </Reveal>
            </StaggerGroup>
          </div>

          <div>
            <p className="mb-4 font-mono text-[13px] text-text-3">
              CountUp — demo values, not real metrics
            </p>
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="font-display text-[56px] font-bold tracking-[-0.03em] text-text">
                  <CountUp value={128} />
                </p>
                <p className="mt-1 font-mono text-[13px] text-text-3">sample integer</p>
              </div>
              <div>
                <p className="font-display text-[56px] font-bold tracking-[-0.03em] text-text">
                  <CountUp value={4.5} decimals={1} suffix="s" />
                </p>
                <p className="mt-1 font-mono text-[13px] text-text-3">sample decimal + suffix</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[13px] text-text-3">
              DrawSVG — pathLength animates from 0 to 1 on scroll entry
            </p>
            <svg
              viewBox="0 0 400 80"
              className="w-full max-w-md"
              fill="none"
              role="img"
              aria-label="Sample line drawing on scroll"
            >
              <title>Sample line drawing on scroll</title>
              <DrawSVG
                d="M10 60 L110 20 L210 60 L310 20 L390 50"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-lime"
              />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
}
