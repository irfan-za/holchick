import { Drop, Flame, Sparkle } from "@phosphor-icons/react";

const MENU_CATEGORIES = [
  {
    id: "original",
    label: "Original",
    icon: Drop,
    items: [
      {
        name: "Original Dada",
        price: "15K",
        desc: "Dada ayam crispy original",
        src: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop",
      },
      {
        name: "Original Paha Atas",
        price: "14K",
        desc: "Paha atas juicy gurih",
        src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop",
      },
      {
        name: "Original Paha Bawah",
        price: "13K",
        desc: "Drumstick renyah",
        src: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&h=400&fit=crop",
      },
      {
        name: "Original Sayap",
        price: "12K",
        desc: "Sayap crispy favorit",
        src: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=400&fit=crop",
      },
    ],
  },
  {
    id: "spicy",
    label: "Spicy",
    icon: Flame,
    items: [
      {
        name: "Spicy Dada",
        price: "17K",
        desc: "Level pedas sedang, nagih",
        src: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=400&fit=crop",
      },
      {
        name: "Spicy Paha Atas",
        price: "16K",
        desc: "Paha atas pedas berapi",
        src: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=400&h=400&fit=crop",
      },
      {
        name: "Spicy Paha Bawah",
        price: "15K",
        desc: "Drumstick hot & spicy",
        src: "https://images.unsplash.com/photo-1599490659213-e2b1a4551ff7?w=400&h=400&fit=crop",
      },
      {
        name: "Spicy Sayap",
        price: "14K",
        desc: "Sayap pedas mercon",
        src: "https://images.unsplash.com/photo-1599490659213-e2b1a4551ff7?w=400&h=400&fit=crop",
      },
    ],
  },
  {
    id: "cheese",
    label: "Cheese",
    icon: Sparkle,
    items: [
      {
        name: "Cheese Dada",
        price: "19K",
        desc: "Dada + lelehan keju",
        src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop",
      },
      {
        name: "Cheese Paha Atas",
        price: "18K",
        desc: "Paha atas keju mozzarella",
        src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop",
      },
      {
        name: "Cheese Paha Bawah",
        price: "17K",
        desc: "Drumstick keju melted",
        src: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400&h=400&fit=crop",
      },
      {
        name: "Cheese French Fries",
        price: "15K",
        desc: "Kentang + saus keju",
        src: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400&h=400&fit=crop",
      },
    ],
  },
  {
    id: "combo",
    label: "Combo",
    icon: null,
    items: [
      {
        name: "Paket Hemat 1",
        price: "25K",
        desc: "Ayam + Nasi + Minum",
        src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop",
      },
      {
        name: "Paket Hemat 2",
        price: "35K",
        desc: "2 Ayam + Nasi + Minum",
        src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop",
      },
      {
        name: "Paket Keluarga",
        price: "85K",
        desc: "4 Ayam + 2 Nasi + 2 Minum",
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
      },
      {
        name: "Bucket 6 Pcs",
        price: "75K",
        desc: "6 potong ayam pilihan",
        src: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop",
      },
    ],
  },
];

export default MENU_CATEGORIES;
