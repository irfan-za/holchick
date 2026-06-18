"use client";

import { useState, useEffect } from "react";
import { useReducedMotion, AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { TESTIMONIALS } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import StarRating from "../ui/StarRating";

export default function TestimonialsSection() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const max = TESTIMONIALS.length;

  const prev = () => setIdx((i) => (i === 0 ? max - 1 : i - 1));
  const next = () => setIdx((i) => (i === max - 1 ? 0 : i + 1));

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          title={<>Yang Mereka <span className="text-brand">Katanya</span></>}
          description="Udah ribuan pelanggan yang ketagihan. Ini cerita mereka."
        />

        {/* Carousel */}
        <div className="relative max-w-[900px] mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all hidden md:block"
            aria-label="Previous testimonial"
          >
            <CaretLeft size={20} weight="bold" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-6">
                <StarRating count={TESTIMONIALS[idx].rating} size={20} />
              </div>
              <p className="text-lg md:text-xl text-warm-900/80 leading-relaxed mb-8 max-w-[60ch]">
                "{TESTIMONIALS[idx].text}"
              </p>
              <div>
                <p className="font-bold text-warm-900">{TESTIMONIALS[idx].name}</p>
                <p className="text-sm text-warm-900/50">{TESTIMONIALS[idx].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all hidden md:block"
            aria-label="Next testimonial"
          >
            <CaretRight size={20} weight="bold" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === idx ? "bg-brand w-6" : "bg-warm-200 hover:bg-warm-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
