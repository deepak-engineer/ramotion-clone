"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    description: "Your brand is more than just a logo; it's the strategic foundation of your business. We dive deep into market research and audience psychology to build a brand that resonates and lasts. Our process involves identifying your unique value proposition and crafting a narrative that connects with your customers on an emotional level.",
    deliverables: ["Market Research", "Brand Positioning", "Verbal Identity", "Brand Architecture"],
    image: "/brand-strat.png", // Placeholder path
    color: "#5C1D1D"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "We create digital experiences that are not only beautiful but intuitive and functional. Our design philosophy is rooted in user-centricity, ensuring that every interaction is seamless and purposeful. From wireframes to high-fidelity prototypes, we focus on clarity, efficiency, and aesthetics to drive user engagement and conversion.",
    deliverables: ["User Research", "Wireframing", "Prototypes", "Design Systems"],
    image: "/ui-ux.png", // Placeholder path
    color: "#262626"
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Our development team brings designs to life with clean, efficient, and scalable code. We specialize in building high-performance websites and web applications that are optimized for speed, SEO, and accessibility. We use modern frameworks and best practices to ensure your digital product is robust and ready for growth.",
    deliverables: ["Next.js/React", "Performance Optimization", "SEO Best Practices", "Scalable CMS"],
    image: "/web-dev.png", // Placeholder path
    color: "#404040"
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroTaglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      );
      gsap.fromTo(
        heroTaglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );

      // Staggered service breakdowns
      gsap.utils.toArray(".service-breakdown").forEach((section: any, i) => {
        const isEven = i % 2 === 0;
        const textArea = section.querySelector(".service-text");
        const imageArea = section.querySelector(".service-image");

        gsap.fromTo(
          [textArea, imageArea],
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Process Steps Sequential Animation
      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".process-step",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Services Hero */}
      <section className="pt-48 pb-24 max-[1024px]:pt-32">
        <div className="mx-auto w-full max-w-[1312px] px-4 text-center">
          <h1
            ref={heroTitleRef}
            className="mb-8 text-[140px] font-bold tracking-[-0.04em] text-[#262626] max-[1024px]:text-[80px] max-[640px]:text-[56px]"
          >
            Our Services
          </h1>
          <p
            ref={heroTaglineRef}
            className="mx-auto max-w-[800px] text-[24px] leading-[1.6] text-[#404040] max-[1024px]:text-[20px]"
          >
            We partner with forward-thinking companies to build digital products and brands that shape the future.
          </p>
        </div>
      </section>

      {/* Service Breakdowns */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className="service-breakdown border-t border-gray-100 py-32 max-[1024px]:py-20"
        >
          <div className="mx-auto w-full max-w-[1312px] px-4">
            <div className={`flex items-center gap-20 max-[1024px]:flex-col max-[1024px]:items-start ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              {/* Text Side */}
              <div className="service-text flex-1">
                <div
                  className="mb-6 h-1 w-20"
                  style={{ backgroundColor: service.color }}
                />
                <h2 className="mb-8 text-[64px] font-bold tracking-tight text-[#262626] max-[1024px]:text-[40px]">
                  {service.title}
                </h2>
                <p className="mb-10 text-[20px] leading-[1.7] text-[#404040] max-[1024px]:text-[18px]">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-12">
                  <h4 className="mb-4 text-[14px] font-bold uppercase tracking-widest text-gray-400">
                    Key Deliverables
                  </h4>
                  <ul className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center text-[18px] text-[#262626]">
                        <span className="mr-3 block h-1.5 w-1.5 rounded-full bg-black/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 rounded-full border border-black px-10 py-5 transition-all hover:bg-black hover:text-white"
                >
                  <span className="text-[18px] font-medium">Start a Project</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L26 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Image Side */}
              <div className="service-image relative aspect-[4/3] flex-1 overflow-hidden rounded-[32px] bg-gray-50">
                {/* mesh gradient placeholder since we don't have images yet */}
                <div className="absolute inset-0 -z-10 opacity-30 blur-[80px]">
                  <div className="absolute left-[10%] top-[10%] h-[300px] w-[300px] rounded-full" style={{ backgroundColor: service.color }} />
                  <div className="absolute right-[20%] bottom-[20%] h-[400px] w-[400px] rounded-full" style={{ backgroundColor: '#FFB5B5' }} />
                </div>
                <div className="flex h-full w-full items-center justify-center p-20">
                  <span className="text-[24px] font-bold text-gray-300 uppercase tracking-[0.2em]">{service.title}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Process Section */}
      <section className="bg-white py-32 max-[1024px]:py-20">
        <div className="mx-auto w-full max-w-[1312px] px-4">
          <div className="mb-24 text-center">
            <h2 className="text-[80px] font-bold tracking-tight text-[#262626] max-[1024px]:text-[48px]">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-5 gap-8 max-[1024px]:grid-cols-1 max-[1024px]:gap-16">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and goals." },
              { step: "02", title: "Strategy", desc: "Defining the path to success." },
              { step: "03", title: "Design", desc: "Crafting beautiful experiences." },
              { step: "04", title: "Development", desc: "Building with precision." },
              { step: "05", title: "Launch", desc: "Bringing it to the world." }
            ].map((p, i) => (
              <div key={i} className="process-step group relative">
                <div className="mb-6 text-[48px] font-bold text-gray-100 transition-colors group-hover:text-black/5">
                  {p.step}
                </div>
                <h3 className="mb-4 text-[24px] font-bold text-[#262626]">
                  {p.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#404040]">
                  {p.desc}
                </p>
                {i < 4 && (
                  <div className="absolute top-[24px] right-[-10%] h-[1px] w-[20%] bg-gray-100 max-[1024px]:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="bg-[#fafafa] py-32 max-[1024px]:py-20">
        <div className="mx-auto w-full max-w-[1312px] px-4 text-center">
          <h3 className="mb-12 text-[80px] font-bold tracking-tight text-[#262626] max-[1024px]:text-[48px]">
            Ready to start?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#262626] px-12 py-6 text-[20px] font-semibold text-white transition-all hover:bg-black"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
