"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { ShoppingCart } from "@phosphor-icons/react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section id="order" className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-brand p-10 md:p-16 text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-[-30%] right-[-10%] w-72 h-72 bg-white/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-30%] left-[-10%] w-80 h-80 bg-accent/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4">
              Siap Ngemil?
            </h2>
            <p className="text-white/75 text-base md:text-lg mb-10 max-w-[50ch] mx-auto leading-relaxed">
              Order sekarang via GoFood atau GrabFood. Dijamin crispy sampe rumah!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="#"
                variant="accent"
                size="xl"
                icon={ShoppingCart}
              >
                Order via GoFood
              </Button>
              <Button
                href="#"
                variant="ghost"
                size="xl"
                icon={ShoppingCart}
              >
                Order via GrabFood
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
