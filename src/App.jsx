import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import BrandStrip from "./components/layout/BrandStrip";
import MenuSection from "./components/sections/MenuSection";
import AboutSection from "./components/sections/AboutSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/layout/Footer";

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
