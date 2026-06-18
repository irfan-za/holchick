"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { ShoppingCart, ArrowRight } from "@phosphor-icons/react";
import { STATS } from "../../constants";
import Container from "../ui/Container";
import Button from "../ui/Button";
import StatItem from "../ui/StatItem";
import StarRating from "../ui/StarRating";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[80%] bg-brand/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[60%] bg-accent/6 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-brand mb-4">
              Crispy Fried Chicken
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] text-warm-900 mb-6">
              Crispy Outside,
              <br />
              <span className="text-brand">Juicy Inside</span>
            </h1>
            <p className="text-base md:text-lg text-warm-900/60 leading-relaxed max-w-[46ch] mb-8">
              Ayam goreng premium dengan resep rahasia turun-temurun. Dibuat
              fresh setiap hari, digoreng golden crispy, dijamin nagih dari
              gigitan pertama.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="#order"
                variant="primary"
                size="lg"
                icon={ShoppingCart}
              >
                Order Sekarang
              </Button>
              <Button
                href="#menu"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
              >
                Lihat Menu
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-warm-200/60">
              {STATS.slice(0, 3).map((s) => (
                <StatItem key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <img
                src="https://picsum.photos/seed/fried-chicken-hero/800/800"
                alt="Holchick crispy fried chicken"
                className="w-full h-full object-cover rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              />
              {/* Floating badge */}
              <motion.div
                animate={reduce ? {} : { y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              >
                <StarRating
                  count={5}
                  size={16}
                  showLabel
                  label="Rated 4.9 by 1.200+ reviews"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
