import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { GridTexture } from "@/components/GridTexture";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { CountUp } from "@/components/motion/CountUp";
import { DrawSVG } from "@/components/motion/DrawSVG";
import { site, metrics } from "@/content/site";
import { services } from "@/content/services";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: site.metadata.title,
  description: site.metadata.description,
};

export default function Home() {
  return (
    <>
      {/* 1. Hero — server-rendered, no motion: nothing may delay LCP */}
      <section className="relative overflow-hidden py-[72px] md:py-[120px]">
        <GridTexture />
        <Container>
          <Eyebrow>{site.title}</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-text md:text-[64px]">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-[38rem] text-[19px] leading-[1.65] text-text-2 md:text-[21px]">
            {site.supportingLine}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/blueprint" variant="primary">
              See the blueprint
            </Button>
            <Button href="/contact" variant="ghost">
              Start a conversation
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. The problem */}
      <section className="py-[72px] md:py-[120px]">
        <Container>
          <Eyebrow number="01">{home.problem.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className="mt-4 max-w-xl font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[44px]">
              {home.problem.heading}
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {home.problem.cards.map((card) => (
              <Reveal key={card.label}>
                <Card hoverable={false}>
                  <Icon name={card.icon} size={32} className="text-text-2" />
                  <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                    {card.label}
                  </p>
                  <p className="mt-2 font-display text-[20px] font-semibold text-text">
                    {card.title}
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.65] text-text-2">{card.body}</p>
                </Card>
              </Reveal>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* 3. Proof bar — renders nothing until real Search Console figures exist */}
      {metrics.length > 0 && (
        <section className="py-[72px] md:py-[120px]">
          <Container>
            <StaggerGroup className="grid gap-10 sm:grid-cols-3">
              {metrics.map((metric) => (
                <Reveal key={metric.label}>
                  <div>
                    <p className="font-display text-[40px] font-bold tracking-[-0.03em] text-text md:text-[56px]">
                      <CountUp value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                    </p>
                    <p className="mt-2 font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                      {metric.label}
                    </p>
                    {metric.note && (
                      <p className="mt-1 text-[13px] text-text-3">{metric.note}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </StaggerGroup>
          </Container>
        </section>
      )}

      {/* 4. The chain */}
      <section className="py-[72px] md:py-[120px]">
        <Container>
          <Eyebrow number="02">{home.chain.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className="mt-4 max-w-xl font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[44px]">
              {home.chain.heading}
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <svg
              viewBox="0 0 100 4"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-0 top-6 hidden h-1 w-full md:block"
              aria-hidden="true"
            >
              <DrawSVG d="M4 2 L96 2" strokeWidth={1} className="stroke-border-bright" />
            </svg>

            <StaggerGroup className="relative grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              {home.chain.nodes.map((node) => (
                <Reveal key={node.label}>
                  <div className="flex flex-col items-start gap-3 md:items-center md:text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-bright bg-surface font-mono text-[13px] text-text">
                      {node.label}
                    </span>
                    <p className="font-display text-[18px] font-semibold text-text">
                      {node.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </section>

      {/* 5. Services preview */}
      <section className="py-[72px] md:py-[120px]">
        <Container>
          <Eyebrow number="03">{home.servicesPreview.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className="mt-4 max-w-xl font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[44px]">
              {home.servicesPreview.heading}
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Reveal key={service.slug}>
                <Card href="/services" className="group flex h-full flex-col">
                  <Icon name={service.icon} size={32} className="text-text-2" />
                  <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                    {service.label}
                  </p>
                  <p className="mt-2 font-display text-[20px] font-semibold text-text">
                    {service.title}
                  </p>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-text-2">
                    {service.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 font-mono text-[13px] text-text-2 transition-colors duration-[180ms] group-hover:text-text">
                    View services →
                  </span>
                </Card>
              </Reveal>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* 6. Closing CTA */}
      <section className="py-[72px] md:py-[120px]">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-card border border-border bg-surface p-10 shadow-lime-glow md:flex-row md:items-center md:justify-between md:p-14">
              <h2 className="max-w-xl font-display text-[26px] font-semibold leading-[1.1] tracking-[-0.01em] text-text md:text-[36px]">
                {home.closingCta.heading}
              </h2>
              <Button href="/contact" variant="primary">
                {home.closingCta.buttonLabel}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
