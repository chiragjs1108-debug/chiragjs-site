import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { IconBadge } from "@/components/IconBadge";
import { GridTexture } from "@/components/GridTexture";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Parallax } from "@/components/motion/Parallax";
import { ProgressBar } from "@/components/blueprint/ProgressBar";
import { TableOfContents } from "@/components/blueprint/TableOfContents";
import { BlueprintSection } from "@/components/blueprint/BlueprintSection";
import { DataTable } from "@/components/blueprint/DataTable";
import { ComparisonTable } from "@/components/blueprint/ComparisonTable";
import { ToolTable } from "@/components/blueprint/ToolTable";
import { PricingTiers } from "@/components/blueprint/PricingTiers";
import { NextSteps } from "@/components/blueprint/NextSteps";
import { IntentPyramid } from "@/components/blueprint/diagrams/IntentPyramid";
import { HubSpokeArchitecture } from "@/components/blueprint/diagrams/HubSpokeArchitecture";
import { ROICurve } from "@/components/blueprint/diagrams/ROICurve";
import { ProcessFlow } from "@/components/blueprint/diagrams/ProcessFlow";
import { IndexationWaves } from "@/components/blueprint/diagrams/IndexationWaves";
import { LinkFlow } from "@/components/blueprint/diagrams/LinkFlow";
import { LeadCaptureFlow } from "@/components/blueprint/diagrams/LeadCaptureFlow";
import { OwnershipSplit } from "@/components/blueprint/diagrams/OwnershipSplit";
import { blueprint } from "@/content/blueprint";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: blueprint.meta.title,
  description: blueprint.meta.description,
};

const proseClass = "mt-6 max-w-2xl text-[16px] leading-[1.65] text-text-2";
const closingClass = "mt-6 max-w-2xl text-[16px] leading-[1.65] text-text";

export default function BlueprintPage() {
  const whatsappHref = `https://wa.me/${site.phone.raw}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blueprint.header.heading,
    description: blueprint.meta.description,
    author: {
      "@type": "Person",
      name: site.name,
      jobTitle: site.title,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProgressBar />

      {/* Page header */}
      <header className="relative overflow-hidden py-[72px] md:py-[120px]">
        <Parallax offset={40} className="absolute inset-0">
          <GridTexture />
        </Parallax>
        <Container>
          <Eyebrow>{blueprint.header.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-[34px] font-bold leading-[1.1] tracking-[-0.03em] text-text md:text-[56px]">
            {blueprint.header.heading}
          </h1>
          <p className="mt-6 max-w-[42rem] text-[18px] leading-[1.65] text-text-2 md:text-[20px]">
            {blueprint.header.standfirst}
          </p>
          <p className="mt-4 font-mono text-[13px] text-text-3">
            Last updated {blueprint.header.lastUpdated}
          </p>
        </Container>
      </header>

      <Container>
        <div className="lg:grid lg:grid-cols-[180px_1fr] lg:items-start lg:gap-16">
          <TableOfContents />

          <div className="min-w-0 divide-y divide-border">
            {/* 01 — Orientation */}
            <BlueprintSection id="orientation" number="01" eyebrow={blueprint.s01.eyebrow} heading={blueprint.s01.heading}>
              <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
                {blueprint.s01.columns.map((column) => (
                  <Reveal key={column.header}>
                    <Card hoverable={false}>
                      <IconBadge icon={column.icon} />
                      <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                        {column.header}
                      </p>
                      <p className="mt-3 text-[15px] leading-[1.65] text-text-2">{column.body}</p>
                    </Card>
                  </Reveal>
                ))}
              </StaggerGroup>
              <p className={proseClass}>{blueprint.s01.intro}</p>
              <p className={proseClass}>{blueprint.s01.intro2}</p>
              <p className={closingClass}>{blueprint.s01.closing}</p>
            </BlueprintSection>

            {/* 02 — The problem */}
            <BlueprintSection id="problem" number="02" eyebrow={blueprint.s02.eyebrow} heading={blueprint.s02.heading}>
              <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
                {blueprint.s02.cards.map((card) => (
                  <Reveal key={card.label}>
                    <Card hoverable={false}>
                      <IconBadge icon={card.icon} />
                      <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                        {card.label}
                      </p>
                      <p className="mt-2 font-display text-[18px] font-semibold text-text">{card.title}</p>
                      <p className="mt-3 text-[15px] leading-[1.65] text-text-2">{card.body}</p>
                    </Card>
                  </Reveal>
                ))}
              </StaggerGroup>
              <p className={proseClass}>{blueprint.s02.intro}</p>
              <p className={proseClass}>{blueprint.s02.intro2}</p>
              <p className={closingClass}>{blueprint.s02.closing}</p>
            </BlueprintSection>

            {/* 03 — The economics */}
            <BlueprintSection id="economics" number="03" eyebrow={blueprint.s03.eyebrow} heading={blueprint.s03.heading}>
              <ComparisonTable
                leftHeader={blueprint.s03.table.leftHeader}
                rightHeader={blueprint.s03.table.rightHeader}
                rows={[...blueprint.s03.table.rows]}
              />
              <p className={proseClass}>{blueprint.s03.intro}</p>
              <p className={closingClass}>{blueprint.s03.closing}</p>
            </BlueprintSection>

            {/* 04 — The honest timeline */}
            <BlueprintSection id="timeline" number="04" eyebrow={blueprint.s04.eyebrow} heading={blueprint.s04.heading}>
              <div className="mt-10">
                <ROICurve />
              </div>
              <p className={proseClass}>{blueprint.s04.intro}</p>
              <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-3">
                {blueprint.s04.phases.map((phase) => (
                  <Reveal key={phase.label}>
                    <Card hoverable={false}>
                      <IconBadge icon={phase.icon} />
                      <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                        {phase.label}
                      </p>
                      <p className="mt-2 font-display text-[18px] font-semibold text-text">{phase.title}</p>
                      <p className="mt-3 text-[15px] leading-[1.65] text-text-2">{phase.body}</p>
                    </Card>
                  </Reveal>
                ))}
              </StaggerGroup>
              <p className={closingClass}>{blueprint.s04.closing}</p>
            </BlueprintSection>

            {/* 05 — Why a project head, not an agency */}
            <BlueprintSection id="model" number="05" eyebrow={blueprint.s05.eyebrow} heading={blueprint.s05.heading}>
              <ComparisonTable
                leftHeader={blueprint.s05.table.leftHeader}
                rightHeader={blueprint.s05.table.rightHeader}
                rows={[...blueprint.s05.table.rows]}
              />
              <p className={proseClass}>{blueprint.s05.intro}</p>
              <p className={closingClass}>{blueprint.s05.closing}</p>
            </BlueprintSection>

            {/* 06 — The ten-stage method */}
            <BlueprintSection id="method" number="06" eyebrow={blueprint.s06.eyebrow} heading={blueprint.s06.heading} className="relative overflow-hidden">
              <Parallax offset={30} className="absolute inset-0 -z-10">
                <GridTexture />
              </Parallax>
              <p className={proseClass}>{blueprint.s06.intro}</p>
              <div className="mt-10">
                <ProcessFlow stages={[...blueprint.s06.stages]} />
              </div>
              <p className={closingClass}>{blueprint.s06.ownershipLine}</p>

              <div className="mt-16 flex flex-col gap-16">
                {blueprint.s06.subsections.map((sub) => (
                  <div key={sub.slug}>
                    <h3 className="font-display text-[20px] font-semibold text-text md:text-[24px]">
                      {sub.heading}
                    </h3>
                    <div className="mt-6">
                      {sub.slug === "keyword-layer" && <IntentPyramid />}
                      {sub.slug === "url-taxonomy" && <HubSpokeArchitecture />}
                      {sub.slug === "content-system" && (
                        <Card hoverable={false} className="max-w-lg">
                          <p className="font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                            Brief anatomy
                          </p>
                          <ul className="mt-4 flex flex-col gap-2">
                            {[
                              "Target keyword",
                              "Secondary terms",
                              "Full heading outline",
                              "Data points to include",
                              "Internal links, exact anchors",
                              "Meta description",
                            ].map((item) => (
                              <li key={item} className="flex items-center gap-2 text-[14px] text-text-2">
                                <span className="h-1 w-1 rounded-full bg-text-3" aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Card>
                      )}
                      {sub.slug === "indexation" && <IndexationWaves />}
                      {sub.slug === "link-architecture" && <LinkFlow />}
                    </div>
                    <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-text-2">{sub.body}</p>
                  </div>
                ))}
              </div>
            </BlueprintSection>

            {/* 07 — Scope */}
            <BlueprintSection id="scope" number="07" eyebrow={blueprint.s07.eyebrow} heading={blueprint.s07.heading}>
              <div className="mt-10 rounded-card border border-border bg-surface-2 p-6">
                <p className="font-mono text-[14px] leading-[1.65] text-text md:text-[15px]">
                  {blueprint.s07.formula}
                </p>
              </div>

              <DataTable
                columns={[
                  { key: "scenario", header: "Scenario" },
                  { key: "pageCount", header: "Typical page count" },
                  { key: "intent", header: "Primary search intent" },
                  { key: "conversion", header: "What a conversion is" },
                ]}
                rows={[...blueprint.s07.scenarios]}
                iconKey="icon"
              />

              <p className={proseClass}>{blueprint.s07.intro}</p>

              <div className="mt-8 max-w-2xl">
                <p className="font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                  How you verify I&apos;m not overbuilding
                </p>
                <ul className="mt-3 flex flex-col gap-3">
                  {blueprint.s07.verify.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-[1.65] text-text-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-lime" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </BlueprintSection>

            {/* 08 — Tooling */}
            <BlueprintSection id="tooling" number="08" eyebrow={blueprint.s08.eyebrow} heading={blueprint.s08.heading}>
              <p className={proseClass}>{blueprint.s08.intro}</p>
              <ToolTable rows={[...blueprint.s08.rows]} />
              <p className={closingClass}>{blueprint.s08.note}</p>
            </BlueprintSection>

            {/* 09 — Roadmap */}
            <BlueprintSection id="roadmap" number="09" eyebrow={blueprint.s09.eyebrow} heading={blueprint.s09.heading}>
              <DataTable
                columns={[
                  { key: "weeks", header: "Weeks" },
                  { key: "stage", header: "Stage" },
                  { key: "ships", header: "What ships" },
                  { key: "gate", header: "Gate to pass" },
                ]}
                rows={[...blueprint.s09.rows]}
              />
              <p className={closingClass}>{blueprint.s09.closing}</p>
            </BlueprintSection>

            {/* 10 — Governance rhythm */}
            <BlueprintSection id="governance" number="10" eyebrow={blueprint.s10.eyebrow} heading={blueprint.s10.heading}>
              <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {blueprint.s10.cadence.map((item) => (
                  <Reveal key={item.label}>
                    <Card hoverable={false}>
                      <IconBadge icon={item.icon} />
                      <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                        {item.label}
                      </p>
                      <p className="mt-2 font-display text-[17px] font-semibold text-text">{item.title}</p>
                      <p className="mt-3 text-[14px] leading-[1.65] text-text-2">{item.body}</p>
                    </Card>
                  </Reveal>
                ))}
              </StaggerGroup>
            </BlueprintSection>

            {/* 11 — Attribution */}
            <BlueprintSection id="attribution" number="11" eyebrow={blueprint.s11.eyebrow} heading={blueprint.s11.heading}>
              <div className="mt-10">
                <LeadCaptureFlow />
              </div>
              <p className={proseClass}>{blueprint.s11.intro}</p>
              <p className={proseClass}>{blueprint.s11.intro2}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                {blueprint.s11.tabs.map((tab) => (
                  <span
                    key={tab.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 font-mono text-[13px] text-text-2"
                  >
                    <IconBadge icon={tab.icon} size={14} badgeSize="h-7 w-7" />
                    {tab.label}
                  </span>
                ))}
              </div>
              <p className={closingClass}>{blueprint.s11.closing}</p>
            </BlueprintSection>

            {/* 12 — Risk */}
            <BlueprintSection id="risk" number="12" eyebrow={blueprint.s12.eyebrow} heading={blueprint.s12.heading}>
              <DataTable
                columns={[
                  { key: "risk", header: "Risk" },
                  { key: "handling", header: "How it's handled" },
                ]}
                rows={[...blueprint.s12.rows]}
              />
              <p className="mt-8 max-w-2xl font-display text-[19px] font-semibold leading-[1.4] text-lime">
                {blueprint.s12.closing}
              </p>
            </BlueprintSection>

            {/* 13 — Boundaries */}
            <BlueprintSection id="boundaries" number="13" eyebrow={blueprint.s13.eyebrow} heading={blueprint.s13.heading}>
              <div className="mt-10">
                <OwnershipSplit mySuccess={blueprint.s13.mySuccess} yourSuccess={blueprint.s13.yourSuccess} />
              </div>
              <DataTable
                columns={[
                  { key: "role", header: "Role" },
                  { key: "responsibility", header: "Responsibility" },
                  { key: "providedBy", header: "Provided by" },
                ]}
                rows={[...blueprint.s13.resources]}
                iconKey="icon"
              />
              <p className={closingClass}>{blueprint.s13.closing}</p>
            </BlueprintSection>

            {/* 14 — Investment */}
            <BlueprintSection id="investment" number="14" eyebrow={blueprint.s14.eyebrow} heading={blueprint.s14.heading}>
              <PricingTiers tiers={[...blueprint.s14.tiers]} />

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {blueprint.s14.whyScales.map((item) => (
                  <div key={item.title}>
                    <p className="font-display text-[16px] font-semibold text-text">{item.title}</p>
                    <p className="mt-2 text-[14px] leading-[1.65] text-text-2">{item.body}</p>
                  </div>
                ))}
              </div>

              <p className={proseClass}>{blueprint.s14.notIncluded}</p>
              <p className={closingClass}>{blueprint.s14.closing}</p>
            </BlueprintSection>

            {/* 15 — Where to start */}
            <BlueprintSection id="next" number="15" eyebrow={blueprint.s15.eyebrow} heading={blueprint.s15.heading}>
              <p className={proseClass}>{blueprint.s15.intro}</p>
              <p className={proseClass}>{blueprint.s15.intro2}</p>

              <NextSteps steps={[...blueprint.s15.steps]} />

              <div className="mt-10 rounded-card border border-border bg-surface p-8 shadow-lime-glow md:p-10">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Button href={blueprint.s15.primaryCta.href} variant="primary">
                    {blueprint.s15.primaryCta.label}
                  </Button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[13px] text-text-2 transition-colors duration-[180ms] hover:text-text"
                  >
                    <Icon name="MessageCircle" size={15} />
                    {blueprint.s15.whatsappLabel}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 font-mono text-[13px] text-text-2 transition-colors duration-[180ms] hover:text-text"
                  >
                    <Icon name="Mail" size={15} />
                    {site.email}
                  </a>
                </div>
              </div>
            </BlueprintSection>
          </div>
        </div>
      </Container>
    </>
  );
}
