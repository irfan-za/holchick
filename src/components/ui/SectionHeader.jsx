"use client";

import { useReducedMotion, motion } from "motion/react";

export default function SectionHeader({
  label,
  title,
  description,
  className = "",
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`text-center mb-14 ${className}`}
    >
      {label && (
        <p className="text-sm font-semibold tracking-widest uppercase text-brand mb-3">
          {label}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-warm-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-warm-900/60 text-base max-w-[50ch] mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
