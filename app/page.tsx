import { DanceNavbar } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { AboutSection } from "../components/about-section";
import { ActionLinesSection } from "../components/action-lines-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { ExperienceSection } from "../components/experience-section";
import { ChampionshipsSection } from "../components/championships-section";
import { BackgroundBreakSection } from "../components/back";
import { CTASection } from "../components/cta-section";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/float-buttons/ScrollToTop";
import { FloatingWhatsApp } from "../components/float-buttons/FloatingWhatsApp";
import { FloatingPortfolio } from "../components/float-buttons/FloatingPortfolio";


export default function Home() {
  return (
    <main className="relative ">
      <DanceNavbar />
      <HeroSection />
      <ChampionshipsSection />
      <AboutSection />

      <BackgroundBreakSection />

      <ActionLinesSection />
      <ExperienceSection />

      <BackgroundBreakSection />

      <TestimonialsSection />
      <CTASection />
      <Footer />

      {/* Botones */}
      <ScrollToTop />
      <FloatingWhatsApp />
      <FloatingPortfolio />
    </main>
  );
}
