import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { IconBadge } from "@/components/IconBadge";
import { GridTexture } from "@/components/GridTexture";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { dataAnalystJob as job } from "@/content/careers";

export const metadata: Metadata = {
  title: job.meta.title,
  description: job.meta.description,
  alternates: { canonical: job.meta.path },
};

const h2Class =
  "mt-4 max-w-2xl font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[44px]";
const proseClass = "mt-6 max-w-2xl text-[17px] leading-[1.7] text-text-2 md:text-[18px]";
const sectionClass = "py-[72px] md:py-[120px]";

export default function DataAnalystJobPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.schema.title,
    description: `${job.header.standfirst} ${job.role.body.join(" ")}`,
    datePosted: job.schema.datePosted,
    employmentType: job.schema.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: job.schema.organization,
      sameAs: job.schema.organizationUrl,
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "India" },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.schema.locality,
        addressRegion: job.schema.region,
        addressCountry: job.schema.country,
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header — server-rendered, no motion */}
      <header className="relative overflow-hidden py-[72px] md:py-[120px]">
        <GridTexture />
        <Container>
          <Eyebrow>{job.header.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-text md:text-[64px]">
            {job.header.heading}
          </h1>
          <p className="mt-6 max-w-[42rem] text-[19px] leading-[1.7] text-text md:text-[21px]">
            {job.header.standfirst}
          </p>

          <dl className="mt-10 grid max-w-3xl gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2">
            {job.facts.map((fact) => (
              <div key={fact.label} className="bg-surface p-5">
                <dt className="font-mono text-[13px] uppercase tracking-[0.02em] text-text-3">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-[20px] font-semibold text-text">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={job.apply.href} variant="primary">
              {job.header.applyLabel}
            </Button>
          </div>
          <p className="mt-4 font-mono text-[13px] text-text-3">{job.header.applyNote}</p>
        </Container>
      </header>

      <div>
        {/* 01 About */}
        <section className={`${sectionClass} border-t border-border`}>
          <Container>
            <Eyebrow number="01">{job.about.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className={h2Class}>{job.about.heading}</h2>
            </Reveal>
            {job.about.body.map((p) => (
              <Reveal key={p}>
                <p className={proseClass}>{p}</p>
              </Reveal>
            ))}
            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Tech stack">
              {job.about.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-badge border border-border bg-surface px-3 py-1.5 font-mono text-[13px] text-text-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* 02 Role */}
        <section className={`${sectionClass} border-t border-border`}>
          <Container>
            <Eyebrow number="02">{job.role.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className={h2Class}>{job.role.heading}</h2>
            </Reveal>
            {job.role.body.map((p) => (
              <Reveal key={p}>
                <p className={proseClass}>{p}</p>
              </Reveal>
            ))}
          </Container>
        </section>

        {/* 03 Responsibilities */}
        <section className={`${sectionClass} border-t border-border`}>
          <Container>
            <Eyebrow number="03">{job.responsibilities.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className={h2Class}>{job.responsibilities.heading}</h2>
            </Reveal>
            <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {job.responsibilities.items.map((item) => (
                <Reveal key={item.title}>
                  <Card hoverable={false} className="h-full">
                    <IconBadge icon={item.icon} />
                    <h3 className="mt-6 font-display text-[22px] font-semibold leading-[1.1] tracking-[-0.01em] text-text md:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.7] text-text-2">{item.body}</p>
                  </Card>
                </Reveal>
              ))}
            </StaggerGroup>
          </Container>
        </section>

        {/* 04 Requirements */}
        <section className={`${sectionClass} border-t border-border`}>
          <Container>
            <Eyebrow number="04">{job.requirements.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className={h2Class}>{job.requirements.heading}</h2>
            </Reveal>
            <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
              {job.requirements.items.map((item) => (
                <Reveal key={item.title}>
                  <Card hoverable={false} className="h-full">
                    <IconBadge icon={item.icon} />
                    <h3 className="mt-6 font-display text-[22px] font-semibold leading-[1.1] tracking-[-0.01em] text-text md:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.7] text-text-2">{item.body}</p>
                  </Card>
                </Reveal>
              ))}
            </StaggerGroup>
            <Reveal>
              <div className="mt-6 rounded-card border border-border-bright bg-surface-2 p-6">
                <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-text-3">
                  {job.requirements.bonus.label}
                </p>
                <h3 className="mt-3 font-display text-[22px] font-semibold leading-[1.1] tracking-[-0.01em] text-text md:text-[26px]">
                  {job.requirements.bonus.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[16px] leading-[1.7] text-text-2">
                  {job.requirements.bonus.body}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 05 Row shape */}
        <section className={`relative overflow-hidden ${sectionClass} border-t border-border`}>
          <GridTexture />
          <Container className="relative">
            <Eyebrow number="05">{job.rowShape.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className={h2Class}>{job.rowShape.heading}</h2>
            </Reveal>
            <Reveal>
              <p className={proseClass}>{job.rowShape.intro}</p>
            </Reveal>
            <Reveal>
              <div className="mt-10 overflow-x-auto rounded-card border border-border bg-surface">
                <table className="w-full min-w-[640px] border-collapse text-left font-mono text-[13px]">
                  <caption className="sr-only">Target CSV row structure</caption>
                  <thead>
                    <tr className="border-b border-border">
                      {job.rowShape.columns.map((col) => (
                        <th
                          key={col}
                          scope="col"
                          className="px-4 py-3 font-medium uppercase tracking-[0.12em] text-text-3"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {job.rowShape.sample.map((cell, i) => (
                        <td key={job.rowShape.columns[i]} className="px-4 py-3 text-text-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>
            <ul className="mt-8 grid max-w-3xl gap-3">
              {job.rowShape.rules.map((rule) => (
                <li
                  key={rule}
                  className="border-l border-border-bright pl-4 text-[16px] leading-[1.7] text-text-2"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* 06 Evaluation */}
        <section className={`${sectionClass} border-t border-border`}>
          <Container>
            <Eyebrow number="06">{job.evaluation.eyebrow}</Eyebrow>
            <Reveal>
              <h2 className={h2Class}>{job.evaluation.heading}</h2>
            </Reveal>
            <Reveal>
              <p className={proseClass}>{job.evaluation.intro}</p>
            </Reveal>
            <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {job.evaluation.steps.map((s) => (
                <Reveal key={s.step}>
                  <Card hoverable={false} className="h-full">
                    <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-text-3">
                      {s.step}
                    </p>
                    <h3 className="mt-4 font-display text-[22px] font-semibold leading-[1.1] tracking-[-0.01em] text-text md:text-[26px]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.7] text-text-2">{s.body}</p>
                  </Card>
                </Reveal>
              ))}
            </StaggerGroup>
          </Container>
        </section>

        {/* 07 Apply — the one lime CTA block */}
        <section className={`${sectionClass} border-t border-border`}>
          <Container>
            <Eyebrow number="07" tone="lime">
              {job.apply.eyebrow}
            </Eyebrow>
            <Reveal>
              <h2 className={h2Class}>{job.apply.heading}</h2>
            </Reveal>
            <Reveal>
              <p className={proseClass}>{job.apply.body}</p>
            </Reveal>
            <div className="mt-10">
              <Button href={job.apply.href} variant="primary">
                {job.apply.cta}
              </Button>
            </div>
            <p className="mt-4 font-mono text-[13px] text-text-3">{job.apply.note}</p>
          </Container>
        </section>
      </div>
    </>
  );
}
