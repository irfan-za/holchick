import {
  MapPin,
  Phone,
  Clock,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import { MENU_CATEGORIES } from "../../constants";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer id="location" className="bg-warm-900 text-cream py-16">
      <Container>
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
      </Container>
    </footer>
  );
}
