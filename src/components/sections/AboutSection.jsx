"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { STATS } from "../../constants";
import Container from "../ui/Container";
import StatItem from "../ui/StatItem";

export default function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-900 text-cream">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://picsum.photos/seed/chicken-kitchen/800/600"
              alt="Holchick kitchen"
              className="rounded-2xl w-full shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </motion.div>

          {/* Right - Copy */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-brand mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-6">
              Resep <span className="text-brand">Rahasia</span> Turun-Temurun Sejak 2016
            </h2>
            <p className="text-cream/65 leading-relaxed mb-8 max-w-[55ch]">
              Holchick lahir dari passion menghadirkan ayam goreng terbaik. Setiap potong ayam
              dipilih dari peternakan lokal berkualitas, direndam dalam bumbu rahasia 12 rempah,
              lalu digoreng dengan teknik double-fry sampai golden crispy di luar dan juicy di dalam.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <StatItem key={s.label} value={s.value} label={s.label} variant="dark" />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
