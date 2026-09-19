import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { GridTexture } from "@/components/GridTexture";

export const metadata: Metadata = {
  title: "Chirag J S — Fractional SEO Architect for Education Admissions",
  description:
    "Fractional Digital Project Head and SEO Architect building organic admissions engines for colleges, coaching centres, and admissions consultancies.",
};

export default function Home() {
  return (
    <section className="relative overflow-hidden py-[72px] md:py-[120px]">
      <GridTexture />
      <Container>
        <Eyebrow number="00">chiragjs.in</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-text md:text-[64px]">
          The homepage is under construction.
        </h1>
        <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.65] text-text-2 md:text-[18px]">
          This page is a placeholder while the foundation and design system
          are being built out. Real content lands in a later session.
        </p>
      </Container>
    </section>
  );
}
