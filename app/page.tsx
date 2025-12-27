import Hero from "@/components/sections/Hero";
import ClientsSection from "@/components/sections/ClientsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientsSection />

      {/* Placeholder sections for scroll testing */}
      <section className="h-screen bg-white" />
    </div>
  );
}
