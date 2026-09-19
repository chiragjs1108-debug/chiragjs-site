"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toc } from "@/content/blueprint";

export function TableOfContents() {
  const [activeSlug, setActiveSlug] = useState(toc[0]?.slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block"
    >
      <ol className="flex flex-col gap-1 border-l border-border pl-4">
        {toc.map((item) => {
          const isActive = item.slug === activeSlug;
          return (
            <li key={item.slug}>
              <Link
                href={`#${item.slug}`}
                aria-current={isActive ? "location" : undefined}
                className={`block py-1 font-mono text-[13px] transition-colors duration-[180ms] ${
                  isActive ? "text-lime" : "text-text-3 hover:text-text-2"
                }`}
              >
                {item.number} · {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
