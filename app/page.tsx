import Hero from "@/components/sections/Hero";
import BrandStory from "@/components/sections/BrandStory";
import ClientsSection from "@/components/sections/ClientsSection";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BookingCTA from "@/components/sections/BookingCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BrandStory />
      <ClientsSection />
      <CaseStudiesGrid />
      <ServicesSection />
      <TestimonialsSection />
      <BookingCTA />
    </div>
  );
}
