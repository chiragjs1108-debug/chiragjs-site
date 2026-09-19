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
import { CountUp } from "@/components/motion/CountUp";
import { DrawSVG } from "@/components/motion/DrawSVG";
import { site, metrics } from "@/content/site";
import { services } from "@/content/services";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: site.metadata.title,
  description: site.metadata.description,
};

const h2Class =
  "mt-4 max-w-xl font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[44px]";

export default function Home() {
  const whatsappHref = `https://wa.me/${site.phone.raw}`;

  return (
    <>
      {/* 1. Hero — server-rendered, no motion: nothing may delay LCP */}
      <section className="relative overflow-hidden py-[72px] md:py-[120px]">
        <GridTexture />
        <Container>
          <Eyebrow>
            {home.hero.eyebrowLine1}
            <span className="hidden sm:inline"> · </span>
            <br className="sm:hidden" />
            {home.hero.eyebrowLine2}
          </Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-text md:text-[64px]">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-[38rem] text-[19px] leading-[1.65] text-text-2 md:text-[21px]">
            {site.supportingLine}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={home.hero.primaryCta.href} variant="primary">
              {home.hero.primaryCta.label}
            </Button>
            <Button href={home.hero.ghostCta.href} variant="ghost">
              {home.hero.ghostCta.label}
            </Button>
          </div>
          <p className="mt-4 font-mono text-[13px] text-text-3">{home.hero.note}</p>
        </Container>
      </section>

      {/* 2. The problem */}
      <section className="py-[72px] md:py-[120px]">
        <Container>
          <Eyebrow number="01">{home.problem.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className={h2Class}>{home.problem.heading}</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.65] text-text-2">
              {home.problem.intro}
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {home.problem.cards.map((card) => (
              <Reveal key={card.label}>
                <Card hoverable={false}>
                  <IconBadge icon={card.icon} />
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
            <Eyebrow>{home.proof.eyebrow}</Eyebrow>
            <StaggerGroup className="mt-8 grid gap-10 sm:grid-cols-3">
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
            <p className="mt-6 font-mono text-[13px] text-text-3">{home.proof.caption}</p>
          </Container>
        </section>
      )}

      {/* 4. What I actually do */}
      <section className="relative overflow-hidden py-[72px] md:py-[120px]">
        <GridTexture />
        <Container>
          <Eyebrow number="02">{home.approach.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className={h2Class}>{home.approach.heading}</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.65] text-text-2">
              {home.approach.intro}
            </p>
          </Reveal>

          <div className="relative mt-16">
            <svg
              viewBox="0 0 100 4"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-0 top-12 hidden h-1 w-full md:block"
              aria-hidden="true"
            >
              <DrawSVG d="M4 2 L96 2" strokeWidth={1} className="stroke-border-bright" />
            </svg>

            <StaggerGroup className="relative grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {home.approach.steps.map((step, index) => (
                <Reveal key={step.title}>
                  <Card hoverable={false} className="flex h-full flex-col items-start gap-3">
                    <IconBadge icon={step.icon} />
                    <p className="font-mono text-[13px] text-text-3">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="font-display text-[18px] font-semibold text-text">
                      {step.title}
                    </p>
                    <p className="text-[15px] leading-[1.65] text-text-2">{step.body}</p>
                  </Card>
                </Reveal>
              ))}
            </StaggerGroup>
          </div>

          <Reveal>
            <p className="mt-12 max-w-2xl text-[15px] leading-[1.65] text-text-2">
              {home.approach.closingLine}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 5. Who this is for */}
      <section className="py-[72px] md:py-[120px]">
        <Container>
          <Eyebrow number="03">{home.fit.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className={h2Class}>{home.fit.heading}</h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {home.fit.columns.map((column) => (
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

          <Reveal>
            <p className="mt-10 max-w-2xl text-[15px] leading-[1.65] text-text-2">
              {home.fit.footerLine}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 6. Why me */}
      <section className="py-[72px] md:py-[120px]">
        <Container>
          <Eyebrow number="04">{home.background.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className={h2Class}>{home.background.heading}</h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <Reveal>
              <div className="flex-shrink-0">
                <p className="font-display text-[56px] font-bold tracking-[-0.03em] text-text">
                  <CountUp value={home.background.stat.value} suffix={home.background.stat.suffix} />
                </p>
                <p className="mt-1 font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                  {home.background.stat.label}
                </p>
              </div>
            </Reveal>

            <div className="max-w-2xl space-y-4">
              {home.background.body.map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.06}>
                  <p className="text-[17px] leading-[1.65] text-text-2">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-8 max-w-2xl border-l-2 border-lime pl-6">
              <p className="text-[17px] leading-[1.65] text-text">{home.background.boundary}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8">
              <Button href={home.background.cta.href} variant="ghost">
                {home.background.cta.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 7. Services preview */}
      <section className="py-[72px] md:py-[120px]">
        <Container>
          <Eyebrow number="05">{home.servicesPreview.eyebrow}</Eyebrow>
          <Reveal>
            <h2 className={h2Class}>{home.servicesPreview.heading}</h2>
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

      {/* 8. Closing CTA */}
      <section className="py-[72px] md:py-[120px]">
        <Container>
          <Reveal>
            <div className="rounded-card border border-border bg-surface p-10 shadow-lime-glow md:p-14">
              <h2 className="max-w-2xl font-display text-[26px] font-semibold leading-[1.1] tracking-[-0.01em] text-text md:text-[36px]">
                {home.closingCta.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-[17px] leading-[1.65] text-text-2">
                {home.closingCta.body}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button href={home.closingCta.primaryCta.href} variant="primary">
                  {home.closingCta.primaryCta.label}
                </Button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] text-text-2 transition-colors duration-[180ms] hover:text-text"
                >
                  {home.closingCta.whatsappLabel}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="font-mono text-[13px] text-text-2 transition-colors duration-[180ms] hover:text-text"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
