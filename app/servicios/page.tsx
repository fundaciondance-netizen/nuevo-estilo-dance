import { DanceNavbar } from "../../components/Navbar";
import { HeroCarousel } from "../../components/service-sections/hero-carousel";
import { ServicesSection } from "../../components/service-sections/services-section";
import {GallerySection}  from "../../components/service-sections/gallery-section";
import {ActionLinesSection}  from "../../components/service-sections/action-lines-section";
import { CTASection } from "../../components/cta-section";
import { Footer } from "../../components/footer";
import { BackgroundBreakSection } from "../../components/back";
import { ScrollToTop } from "../../components/float-buttons/ScrollToTop";
import { FloatingWhatsApp } from "../../components/float-buttons/FloatingWhatsApp";
import { FloatingPortfolio } from "../../components/float-buttons/FloatingPortfolio";


export default function Service() {
  return (
    <main className="relative ">
      <DanceNavbar />
      <HeroCarousel />
      <ServicesSection />

      <BackgroundBreakSection />

      <ActionLinesSection />

      <BackgroundBreakSection />
      
      <GallerySection />
      <CTASection />
      <Footer />

      {/* Botones */}
      <ScrollToTop />
      <FloatingWhatsApp />
      <FloatingPortfolio />
    </main>
  );
}
