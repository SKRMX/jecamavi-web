import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import MethodologySection from "@/components/MethodologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <ServicesSection />
      <IndustriesSection />
      <TechStackSection />
      <ProjectsSection />
      <CTABanner />
      <MethodologySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
