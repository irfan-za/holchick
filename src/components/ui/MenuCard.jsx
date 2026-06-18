"use client";

import { motion } from "motion/react";
import { ShoppingCart } from "@phosphor-icons/react";

export default function MenuCard({ name, price, desc, src, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
        <div className="aspect-square overflow-hidden">
          <img
            src={src}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-warm-900 mb-1">{name}</h3>
          <p className="text-sm text-warm-900/50 mb-3">{desc}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold text-brand">{price}</span>
            <button className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-full transition-all active:scale-[0.98]">
              <ShoppingCart size={14} weight="fill" />
              Add
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
