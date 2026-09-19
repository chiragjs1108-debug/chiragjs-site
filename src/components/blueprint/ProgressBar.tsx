"use client";

import { motion, useScroll } from "motion/react";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-lime"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
