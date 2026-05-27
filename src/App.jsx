"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import {
  ShoppingCart,
  MapPin,
  Star,
  Phone,
  Clock,
  InstagramLogo,
  TiktokLogo,
  ArrowRight,
  CaretLeft,
  CaretRight,
  List,
  X,
  Flame,
  Drop,
  Sparkle,
} from "@phosphor-icons/react";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Find Us", href: "#location" },
];

const MENU_CATEGORIES = [
  {
    id: "original",
    label: "Original",
    icon: Drop,
    items: [
      { name: "Original Dada", price: "15K", desc: "Dada ayam crispy original", src: "https://picsum.photos/seed/chicken-breast/400/400" },
      { name: "Original Paha Atas", price: "14K", desc: "Paha atas juicy gurih", src: "https://picsum.photos/seed/chicken-thigh/400/400" },
      { name: "Original Paha Bawah", price: "13K", desc: "Drumstick renyah", src: "https://picsum.photos/seed/chicken-drum/400/400" },
      { name: "Original Sayap", price: "12K", desc: "Sayap crispy favorit", src: "https://picsum.photos/seed/chicken-wing/400/400" },
    ],
  },
  {
    id: "spicy",
    label: "Spicy",
    icon: Flame,
    items: [
      { name: "Spicy Dada", price: "17K", desc: "Level pedas sedang, nagih", src: "https://picsum.photos/seed/spicy-breast/400/400" },
      { name: "Spicy Paha Atas", price: "16K", desc: "Paha atas pedas berapi", src: "https://picsum.photos/seed/spicy-thigh/400/400" },
      { name: "Spicy Paha Bawah", price: "15K", desc: "Drumstick hot & spicy", src: "https://picsum.photos/seed/spicy-drum/400/400" },
      { name: "Spicy Sayap", price: "14K", desc: "Sayap pedas mercon", src: "https://picsum.photos/seed/spicy-wing/400/400" },
    ],
  },
  {
    id: "cheese",
    label: "Cheese",
    icon: Sparkle,
    items: [
      { name: "Cheese Dada", price: "19K", desc: "Dada + lelehan keju", src: "https://picsum.photos/seed/cheese-breast/400/400" },
      { name: "Cheese Paha Atas", price: "18K", desc: "Paha atas keju mozzarella", src: "https://picsum.photos/seed/cheese-thigh/400/400" },
      { name: "Cheese Paha Bawah", price: "17K", desc: "Drumstick keju melted", src: "https://picsum.photos/seed/cheese-drum/400/400" },
      { name: "Cheese French Fries", price: "15K", desc: "Kentang + saus keju", src: "https://picsum.photos/seed/cheese-fries/400/400" },
    ],
  },
  {
    id: "combo",
    label: "Combo",
    items: [
      { name: "Paket Hemat 1", price: "25K", desc: "Ayam + Nasi + Minum", src: "https://picsum.photos/seed/combo1/400/400" },
      { name: "Paket Hemat 2", price: "35K", desc: "2 Ayam + Nasi + Minum", src: "https://picsum.photos/seed/combo2/400/400" },
      { name: "Paket Keluarga", price: "85K", desc: "4 Ayam + 2 Nasi + 2 Minum", src: "https://picsum.photos/seed/combo-family/400/400" },
      { name: "Bucket 6 Pcs", price: "75K", desc: "6 potong ayam pilihan", src: "https://picsum.photos/seed/bucket/400/400" },
    ],
  },
];

const TESTIMONIALS = [
  { name: "Rina Putri", location: "Jakarta Selatan", text: "Ayamnya crispy banget! Juicy di dalam, bumbunya meresap. Favorit keluarga sekarang!", rating: 5 },
  { name: "Andi Pradana", location: "Tangerang", text: "Pesen via ojol tetep renyah pas sampe. Spicy levelnya pas, nggak berlebihan.", rating: 5 },
  { name: "Maya Lestari", location: "Depok", text: "Cheese chicken-nya juara! Keju mozzarella yang stretchy, ayamnya fresh. Recommended!", rating: 5 },
  { name: "Dimas Ardian", location: "Bekasi", text: "Harga terjangkau tapi kualitas premium. Udah jadi langganan tiap weekend.", rating: 4 },
  { name: "Sari Indah", location: "Jakarta Pusat", text: "Combo hematnya worth it banget. Porsinya generous, ayamnya gede dan fresh.", rating: 5 },
];

const STATS = [
  { value: "50K+", label: "Pelanggan" },
  { value: "12", label: "Outlet" },
  { value: "8", label: "Tahun" },
  { value: "16+", label: "Varian Menu" },
];

/* ────────────────────────────────────────────
   COMPONENTS
   ──────────────────────────────────────────── */

/* ---- NAV ---- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
        <a href="#" className="text-2xl font-extrabold tracking-tight text-warm-900">
          hol<span className="text-brand">chick</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-warm-900/70 hover:text-brand transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#order"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all active:scale-[0.98]"
          >
            <ShoppingCart size={16} weight="fill" />
            Order Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-warm-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-cream border-t border-warm-200"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium py-2 text-warm-900/80 hover:text-brand transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-full transition-all active:scale-[0.98] mt-2"
              >
                <ShoppingCart size={16} weight="fill" />
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ---- HERO ---- */
function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[80%] bg-brand/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[60%] bg-accent/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 py-24 md:py-32 w-full">
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
              Ayam goreng premium dengan resep rahasia turun-temurun. Dibuat fresh setiap hari,
              digoreng golden crispy, dijamin nagih dari gigitan pertama.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#order"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(232,117,26,0.35)] hover:shadow-[0_6px_24px_rgba(232,117,26,0.45)]"
              >
                <ShoppingCart size={20} weight="fill" />
                Order Sekarang
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 border-2 border-warm-200 hover:border-brand text-warm-900 font-semibold px-7 py-3.5 rounded-full text-base transition-all active:scale-[0.98]"
              >
                Lihat Menu
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-warm-200/60">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold tracking-tight text-warm-900">{s.value}</p>
                  <p className="text-xs text-warm-900/50 mt-0.5">{s.label}</p>
                </div>
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
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-1.5">
                  <Star size={16} weight="fill" className="text-yellow-500" />
                  <Star size={16} weight="fill" className="text-yellow-500" />
                  <Star size={16} weight="fill" className="text-yellow-500" />
                  <Star size={16} weight="fill" className="text-yellow-500" />
                  <Star size={16} weight="fill" className="text-yellow-500" />
                </div>
                <p className="text-xs font-semibold text-warm-900 mt-1">Rated 4.9 by 1.200+ reviews</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---- BRAND STRIP ---- */
function BrandStrip() {
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

/* ---- MENU SECTION ---- */
function MenuSection() {
  const [tab, setTab] = useState(0);
  const reduce = useReducedMotion();
  const category = MENU_CATEGORIES[tab];

  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-warm-900 mb-4">
            Our <span className="text-brand">Menu</span>
          </h2>
          <p className="text-warm-900/60 text-base max-w-[50ch] mx-auto leading-relaxed">
            Dari original crispy sampai spicy berani, dari cheese melted sampai combo hemat.
            Semua dibuat fresh setiap hari.
          </p>
        </motion.div>

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
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-warm-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-warm-900/50 mb-3">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-extrabold text-brand">{item.price}</span>
                      <button className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-full transition-all active:scale-[0.98]">
                        <ShoppingCart size={14} weight="fill" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---- ABOUT SECTION ---- */
function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-900 text-cream">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
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
                <div key={s.label}>
                  <p className="text-3xl font-extrabold tracking-tight text-brand">{s.value}</p>
                  <p className="text-xs text-cream/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---- TESTIMONIALS ---- */
function TestimonialsSection() {
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
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-warm-900 mb-4">
            Yang Mereka <span className="text-brand">Katanya</span>
          </h2>
          <p className="text-warm-900/60 text-base max-w-[50ch] mx-auto leading-relaxed">
            Udah ribuan pelanggan yang ketagihan. Ini cerita mereka.
          </p>
        </motion.div>

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
              <div className="flex items-center gap-1 mb-6">
                {[...Array(TESTIMONIALS[idx].rating)].map((_, i) => (
                  <Star key={i} size={20} weight="fill" className="text-yellow-500" />
                ))}
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
      </div>
    </section>
  );
}

/* ---- CTA BANNER ---- */
function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section id="order" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
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
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white hover:bg-cream text-brand font-bold px-8 py-4 rounded-full text-base transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
              >
                <ShoppingCart size={20} weight="fill" />
                Order via GoFood
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-4 rounded-full text-base transition-all active:scale-[0.98] backdrop-blur-sm border border-white/20"
              >
                <ShoppingCart size={20} weight="fill" />
                Order via GrabFood
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---- FOOTER ---- */
function Footer() {
  return (
    <footer id="location" className="bg-warm-900 text-cream py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-extrabold tracking-tight">
              hol<span className="text-brand">chick</span>
            </a>
            <p className="text-cream/50 text-sm mt-3 max-w-[30ch] leading-relaxed">
              Crispy outside, juicy inside. Fried chicken premium sejak 2016.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="text-cream/50 hover:text-brand transition-colors" aria-label="Instagram">
                <InstagramLogo size={20} />
              </a>
              <a href="#" className="text-cream/50 hover:text-brand transition-colors" aria-label="TikTok">
                <TiktokLogo size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 tracking-wide">Menu</h4>
            <div className="flex flex-col gap-2">
              {MENU_CATEGORIES.map((c) => (
                <a key={c.id} href="#menu" className="text-cream/50 hover:text-brand text-sm transition-colors">
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 tracking-wide">Company</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-cream/50 hover:text-brand text-sm transition-colors">About Us</a>
              <a href="#" className="text-cream/50 hover:text-brand text-sm transition-colors">Careers</a>
              <a href="#" className="text-cream/50 hover:text-brand text-sm transition-colors">Franchise</a>
              <a href="#" className="text-cream/50 hover:text-brand text-sm transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 tracking-wide">Find Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-cream/50 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span className="leading-relaxed">Jl. Fried Chicken No. 42, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-3 text-cream/50 text-sm">
                <Phone size={16} className="shrink-0" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-cream/50 text-sm">
                <Clock size={16} className="shrink-0" />
                <span>10:00 - 22:00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-cream/30 text-xs">
            &copy; 2024 Holchick. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs">
            Made with love in Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────────────────────────
   APP
   ──────────────────────────────────────────── */

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <BrandStrip />
      <MenuSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
