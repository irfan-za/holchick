"use client";

import { useState } from "react";
import { useReducedMotion, AnimatePresence } from "motion/react";
import { MENU_CATEGORIES } from "../../constants";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import MenuCard from "../ui/MenuCard";

export default function MenuSection() {
  const [tab, setTab] = useState(0);
  const reduce = useReducedMotion();
  const category = MENU_CATEGORIES[tab];

  return (
    <section id="menu" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          title={<>Our <span className="text-brand">Menu</span></>}
          description="Dari original crispy sampai spicy berani, dari cheese melted sampai combo hemat. Semua dibuat fresh setiap hari."
        />

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {MENU_CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                onClick={() => setTab(i)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  tab === i
                    ? "bg-brand text-white shadow-[0_4px_16px_rgba(232,117,26,0.3)]"
                    : "bg-warm-100 text-warm-900/70 hover:bg-warm-200"
                }`}
              >
                {Icon && <Icon size={16} weight={tab === i ? "fill" : "regular"} />}
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {category.items.map((item, i) => (
              <MenuCard
                key={item.name}
                name={item.name}
                price={item.price}
                desc={item.desc}
                src={item.src}
                delay={i * 0.05}
              />
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
