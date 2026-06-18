import { Drop, Flame, Sparkle } from "@phosphor-icons/react";

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
    icon: null,
    items: [
      { name: "Paket Hemat 1", price: "25K", desc: "Ayam + Nasi + Minum", src: "https://picsum.photos/seed/combo1/400/400" },
      { name: "Paket Hemat 2", price: "35K", desc: "2 Ayam + Nasi + Minum", src: "https://picsum.photos/seed/combo2/400/400" },
      { name: "Paket Keluarga", price: "85K", desc: "4 Ayam + 2 Nasi + 2 Minum", src: "https://picsum.photos/seed/combo-family/400/400" },
      { name: "Bucket 6 Pcs", price: "75K", desc: "6 potong ayam pilihan", src: "https://picsum.photos/seed/bucket/400/400" },
    ],
  },
];

export default MENU_CATEGORIES;
