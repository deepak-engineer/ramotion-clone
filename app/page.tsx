import Hero from "@/components/sections/Hero";
import ClientsSection from "@/components/sections/ClientsSection";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientsSection />
      <CaseStudiesGrid />
      <ServicesSection />
      <TestimonialsSection />

      {/* Placeholder sections for scroll testing */}
      <section className="h-screen bg-white" />
    </div>
  );
}
