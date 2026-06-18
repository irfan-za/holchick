"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";

export default function BrandStrip() {
  const reduce = useReducedMotion();
  const words = ["CRISPY", "JUICY", "SPICY", "SAVORY", "HOT", "FRESH", "GOLDEN", "CRUNCHY"];

  return (
    <section className="bg-warm-900 py-5 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap text-cream/10 text-5xl md:text-7xl font-black tracking-tighter select-none"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className="inline-block">
            {w}
            <span className="text-brand mx-6">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
