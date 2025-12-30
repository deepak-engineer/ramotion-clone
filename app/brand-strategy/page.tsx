"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStrategyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      );
      gsap.fromTo(
        heroDescriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );

      // Staggered animations for benefits
      gsap.utils.toArray(".capability-item").forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Sticky cards reveal animations with delays
      const cards = gsap.utils.toArray<HTMLElement>(".sticky-card");

      cards.forEach((card, index) => {
        const paragraph = card.querySelector(".paragraph-reveal");

        // Delay based on card index: 0ms, 150ms, 300ms, 400ms
        const delays = [0, 150, 300, 400];
        const delay = delays[index] !== undefined ? delays[index] / 1000 : index * 0.15;

        // Initial state
        gsap.set(card, {
          opacity: 0,
          y: 80,
          scale: 0.96,
        });

        // Card reveal with delay
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Paragraph reveal on scroll with progressive animation
        if (paragraph) {
          // Use requestAnimationFrame to ensure DOM is ready
          requestAnimationFrame(() => {
            // Split paragraph text into words
            const text = paragraph.textContent || "";
            if (!text.trim()) return;
            
            const words = text.split(" ");
            
            // Clear paragraph and wrap each word in a span with proper spacing
            paragraph.innerHTML = words.map((word, i) => 
              `<span class="word-reveal" style="opacity: 0; display: inline-block;">${word}</span>`
            ).join(" ");
            
            // Get all word spans
            const wordSpans = paragraph.querySelectorAll(".word-reveal");
            
            if (wordSpans.length === 0) return;
            
            // Set initial state for all words
            gsap.set(wordSpans, {
              opacity: 0,
              y: 40,
            });
            
            // Create timeline for progressive reveal with proper scroll scrubbing
            const totalWords = wordSpans.length;
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 15%",
                scrub: 1.5, // Smooth scrubbing tied to scroll
                invalidateOnRefresh: true,
              },
            });
            
            // Animate words progressively - spread evenly across scroll
            wordSpans.forEach((word, i) => {
              const progress = i / totalWords; // Progress from 0 to 1
              tl.to(word, {
                opacity: 1,
                y: 0,
                duration: 0.01, // Very short duration per word
                ease: "none",
              }, progress); // Spread words evenly across entire timeline
            });
          });
        }
      });

      // Stats animation
      gsap.utils.toArray(".stat-item").forEach((item: any) => {
        const strong = item.querySelector("strong");
        if (!strong) return;

        const originalText = strong.textContent || "";
        const target = parseFloat(originalText.replace(/[^\d.]/g, "") || "0");
        const hasPlus = originalText.includes("+");
        const hasDecimal = originalText.includes(".");

        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          onUpdate: function () {
            if (strong) {
              const current = hasDecimal ? obj.value.toFixed(1) : Math.floor(obj.value).toString();
              strong.textContent = hasPlus ? `${current}+` : current;
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const [cardScrollPosition, setCardScrollPosition] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: "left" | "right") => {
    if (!cardsContainerRef.current) return;
    const container = cardsContainerRef.current;
    const cardWidth = container.querySelector(".tab-card")?.clientWidth || 0;
    const gap = 32; // gap-8 = 32px
    const scrollAmount = (cardWidth + gap) * 2; // Scroll 2 cards at a time

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const tabs = [
    {
      title: "Capabilities",
      content: [
        {
          duration: "1 - 3 weeks",
          title: "Design strategy",
          bgColor: "#e8eaf2",
          textColor: "#404042",
          description: "Design strategy helps align the vision of the client's team and the agency, creating a shared understanding of the project's goals and objectives. It involves studying the brand strategy, conducting in-depth interviews with key stakeholders, and organizing workshops to determine how best to translate strategic decisions into design solutions. As a result, we achieve a clear, synchronized vision of the design solution, ensuring it effectively supports the brand's business goals.",
          items: ["Discovery", "Sync exercises", "Competitive Analysis", "Creative direction"]
        },
        {
          duration: "2 - 8 weeks",
          title: "Brand strategy",
          description: "Brand strategy is a service focused on defining a clear approach to building a brand that reflects its values, mission, and uniqueness. It involves analyzing the market, audience, and competitors to establish a strong and recognizable position. The process develops the brand's positioning, key messages, and emotional connection with the audience. The result is a strategic framework guiding the brand's growth and communications.",
          items: ["Internal environment analysis", "Analysis of the competitive environment and target audience", "Development of positioning hypotheses", "Brand platform"]
        },
        {
          duration: "1 - 2 weeks",
          title: "Brand platform",
          description: "Brand platform defines the core elements of your brand, shaping its identity, voice, and direction. It ensures consistency across all brand communications, creating a strong connection with your audience and aligning your brand with business goals. The result is a clear and structured foundation for long-term growth and recognition.",
          items: ["Brand positioning", "Core values and characteristics", "Role model definition", "Directions for brand expression"]
        },
        {
          duration: "1 - 2 weeks",
          title: "Brand audit",
          description: "Brand audit helps evaluate the current state of your brand to identify strengths, weaknesses, and opportunities for growth. It provides objective insights into how your brand is perceived, its position in the market, and the effectiveness of your current branding and marketing efforts. The audit results in actionable recommendations to enhance your brand's strategy, visibility, and overall impact.",
          items: ["Analysis of existing brand materials", "Competitive review", "Consumer perception evaluation", "Strategic recommendations"]
        },
        {
          duration: "3 - 8 weeks",
          title: "Naming",
          description: "Naming develops a powerful and memorable name for your brand that resonates with your target audience and embodies your brand's identity and values. A strong name distinguishes you in the market, enhances brand recognition, and provides a foundation for effective marketing and communication. The result is a name that not only stands out but also aligns perfectly with your business objectives.",
          items: ["Market and audience research", "Creative ideation and name generation", "Trademark and domain availability checks", "Final name selection and validation"]
        },
        {
          duration: "from 2 days",
          title: "Surveys & tests",
          description: "Surveys & tests help gather valuable insights directly from your target audience to validate ideas, concepts, or strategies. This service ensures that your brand decisions are grounded in real consumer feedback, reducing risks and enhancing the effectiveness of your initiatives. The result is a data-driven approach to refining your branding, design, or communication strategies.",
          items: ["Survey design and distribution", "Concept testing with target groups", "Data analysis and interpretation", "Actionable recommendations based on insights"]
        },
        {
          duration: "2 - 14 weeks",
          title: "Brand architecture",
          description: "Brand architecture organizes and structures your brand portfolio to ensure clarity, consistency, and alignment with your business goals. It defines the relationships between your main brand, sub-brands, and products, creating a cohesive system that enhances brand recognition and simplifies customer decision-making. The result is a well-structured brand ecosystem that supports growth and strengthens market presence.",
          items: ["Analysis of existing brand portfolio", "Definition of brand hierarchy", "Development of naming conventions for sub-brands and products", "Strategic recommendations for future growth and alignment"]
        },
        {
          duration: "1 - 3 weeks",
          title: "Tone of voice",
          description: "Tone of voice defines the unique style and personality of your brand's communication, ensuring consistency across all touchpoints. It helps your brand connect emotionally with its audience, build trust, and stand out in the market. The result is a clear, distinctive voice that reflects your brand's values and resonates with your customers.",
          items: ["Analysis of current brand communication", "Definition of tone and style guidelines", "Development of messaging frameworks", "Practical recommendations for consistent implementation"]
        },
        {
          duration: "1 - 2 weeks",
          title: "Brand positioning development",
          description: "Brand positioning establishes the unique space your brand occupies in the minds of your target audience, differentiating it from competitors. This service helps articulate what makes your brand relevant, credible, and compelling, ensuring alignment with your audience's needs and your business goals. The result is a clear and strategic positioning statement that serves as the foundation for all brand activities.",
          items: ["Audience and market analysis", "Competitive differentiation study", "Development of positioning statement", "Validation and refinement through feedback and testing"]
        },
        {
          duration: "It depends",
          title: "Competitive analysis",
          description: "Competitive analysis provides a detailed understanding of your market landscape by evaluating competitors' strengths, weaknesses, and strategies. This service identifies opportunities for differentiation and helps you position your brand more effectively. The result is a clear roadmap to stand out and gain a competitive advantage in your industry.",
          items: ["Competitor identification and profiling", "Analysis of competitors' branding and communication", "Positioning maps", "Strategic recommendations for differentiation"]
        }
      ]
    },
    {
      title: "Process",
      content: [
        {
          duration: "Week 1-2",
          title: "Discovery & Research",
          description: "We start by understanding your business, market, and audience through comprehensive research and stakeholder interviews.",
          items: ["Market analysis", "Competitor research", "Stakeholder interviews", "Audience insights"]
        },
        {
          duration: "Week 3-4",
          title: "Strategy Development",
          description: "Based on research findings, we develop a comprehensive brand strategy that positions your brand uniquely in the market.",
          items: ["Brand positioning", "Messaging framework", "Brand architecture", "Strategic recommendations"]
        },
        {
          duration: "Week 5-6",
          title: "Implementation Planning",
          description: "We create a detailed roadmap for implementing the brand strategy across all touchpoints and channels.",
          items: ["Implementation roadmap", "Timeline planning", "Resource allocation", "Success metrics"]
        }
      ]
    },
    {
      title: "Industries",
      content: [
        {
          duration: "",
          title: "Technology",
          description: "We help tech companies build brands that communicate innovation, trust, and cutting-edge solutions.",
          items: ["SaaS platforms", "Enterprise software", "Developer tools", "AI & Machine Learning"]
        },
        {
          duration: "",
          title: "Healthcare",
          description: "Healthcare brands require trust, empathy, and clarity. We create strategies that connect with patients and professionals.",
          items: ["Medical devices", "Health tech", "Pharmaceuticals", "Telemedicine"]
        },
        {
          duration: "",
          title: "Financial Services",
          description: "Building trust and credibility in financial services through strategic brand positioning and clear communication.",
          items: ["Fintech", "Banking", "Investment platforms", "Insurance"]
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "Build brand loyalty",
      description: "Creates strong emotional connections, fostering long-term customer loyalty."
    },
    {
      title: "Brand recognition",
      description: "Boosts visibility, making your business easily recognizable and memorable."
    },
    {
      title: "Consistency",
      description: "Ensures a unified message and identity across all platforms and touchpoints."
    },
    {
      title: "Differentiation",
      description: "Positions your brand uniquely to stand out in a crowded marketplace."
    },
    {
      title: "Marketing effectiveness",
      description: "Aligns campaigns with a clear strategy, maximizing advertising impact and ROI."
    },
    {
      title: "Establish credibility",
      description: "Builds trust and authority, reinforcing customer confidence in your brand."
    }
  ];

  const stats = [
    { label: "Years in business", value: "15+" },
    { label: "Distributed team members", value: "70+" },
    { label: "Strategies defined", value: "60+" },
    { label: "Avg. rating on DesignRush & Clutch", value: "4.9" }
  ];

  const awards = [
    {
      logo: "https://www.datocms-assets.com/22695/1734071111-apple.svg",
      name: "Apple",
      description: ["Best App of the Year", "App of The Week", "App Store Editors' Choice"]
    },
    {
      logo: "https://www.datocms-assets.com/22695/1734071180-tc.svg",
      name: "TechCrunch",
      description: ["Verified Brand Strategy Agency"]
    },
    {
      logo: "https://www.datocms-assets.com/22695/1734071194-clutch.svg",
      name: "Clutch",
      description: ["Best Brand Strategy Company", "25+ Reviews"]
    },
    {
      logo: "https://www.datocms-assets.com/22695/1734427483-designrush.svg",
      name: "DesignRush",
      description: ["Top Brand Strategy Agency", "20+ Reviews"]
    },
    {
      logo: "https://www.datocms-assets.com/22695/1734427543-the-branding-journal.svg",
      name: "The Branding Journal",
      description: ["One of the Top Brand Strategy Agencies In The World"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-[120px] max-[1600px]:py-[140px] max-[1600px]:pb-20 max-[1024px]:py-[120px] max-[1024px]:pb-[60px]">
        <div className="mx-auto w-full max-w-[1312px] px-4">
          {/* Gradient Card with All Content */}
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            <div className="relative min-h-[738px] w-full overflow-hidden max-[1024px]:min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFEDBB] via-[#FF6B4A] to-[#FFD1F3]">
                {/* Decorative gradient circles */}
                <div className="absolute left-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#FFE0C9] opacity-70 blur-[80px]" />
                <div className="absolute right-[15%] bottom-[15%] h-[500px] w-[500px] rounded-full bg-[#FF59AC] opacity-50 blur-[100px]" />
                <div className="absolute left-[50%] top-[50%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-30 blur-[120px]" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex min-h-[738px] flex-col p-12 max-[1024px]:min-h-[400px] max-[1024px]:p-8">
                {/* Title - Centered */}
                <div className="mb-auto flex flex-1 items-center justify-center">
                  <h1
                    ref={heroTitleRef}
                    className="text-center text-[82px] font-bold leading-[86px] tracking-[-2px] text-[#6d0900] max-[1024px]:text-[48px] max-[1024px]:leading-[54px]"
                  >
                    Brand strategy
                  </h1>
                </div>

                {/* Description and CTA - Bottom */}
                <div className="mt-auto flex items-start justify-between gap-8 max-[1024px]:flex-col">
                  {/* Description - Left Aligned */}
                  <div className="info flex-1 max-w-[640px]">
                    <p
                      ref={heroDescriptionRef}
                      className="text-[24px] leading-[1.4] text-[#262626] max-[1024px]:text-[20px]"
                    >
                      Ramotion builds transformative brand strategies through innovative
                      positioning, cohesive identity, and memorable experiences,
                      empowering brands to stand out, resonate, and foster lasting
                      customer connections.
                    </p>
                  </div>

                  {/* CTA Button - Right Side */}
                  <div className="contact-block content-cta shrink-0">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-[#6d0900] bg-white px-8 py-4 text-[18px] font-medium text-[#6d0900] transition-all hover:bg-[#6d0900] hover:text-white"
                    >
                      <span className="relative z-10">Let&apos;s talk</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative z-10 transition-transform group-hover:translate-y-1"
                      >
                        <path
                          d="M8 3V13M8 13L3 8M8 13L13 8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients Section */}
      <section className="border-t border-gray-200">
        <ClientsSection
          title="Featured clients"
          description="We specialize in crafting cohesive and impactful brand strategies for businesses of all sizes, from early-stage startups to Fortune 500 companies, helping them achieve their business goals."
          showCta={false}
        />
      </section>

      {/* Brand Strategy Benefits */}
      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto w-full max-w-[1312px] px-4">
          <h2 className="mb-16 text-[48px] font-bold leading-[54px] tracking-[-0.85px] text-[#262626] max-[1024px]:text-[32px]">
            Brand strategy benefits
          </h2>
          <div className="grid grid-cols-3 gap-8 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {benefits.map((benefit, index) => (
              <div key={index} className="capability-item">
                <h3 className="mb-4 text-[24px] font-bold leading-[36px] tracking-[-0.5px] text-[#262626]">
                  {benefit.title}
                </h3>
                <p className="text-[18px] leading-[28px] text-[#404040]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ramotion Section */}
      <section className="border-t border-gray-200 py-20">
        <div className="mx-auto w-full max-w-[1312px] px-4">
          <div className="mb-16 grid grid-cols-2 gap-8 max-[1024px]:grid-cols-1">
            <div>
              <h2 className="mb-4 text-[48px] font-bold leading-[54px] tracking-[-0.85px] text-[#262626] max-[1024px]:text-[32px]">
                Why Ramotion?
              </h2>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[16px] font-medium text-[#262626] transition-colors hover:text-[#404040]"
              >
                More reasons
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M13.1237 4.81222L9.45487 1.14342L10.5155 0.0827573L15.9956 5.56283L10.5155 11.0429L9.45487 9.98225L13.1249 6.31222L0.187622 6.31226L0.187622 4.81226L13.1237 4.81222Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
            <div>
              <p className="text-[18px] leading-[28px] text-[#404040]">
                Ramotion is a brand strategy agency specializing in
                crafting impactful brand positioning, delivering
                consistent brand experiences, and analyzing market
                perceptions to help businesses achieve their objectives.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <p className="mb-2 text-[16px] leading-[24px] text-[#404040]">
                  {stat.label}
                </p>
                <strong className="block text-[78px] font-medium leading-[1.3] text-[#262626] max-[1024px]:text-[48px]">
                  {stat.value}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto w-full max-w-[1312px] px-4">
          <div className="mb-8">
            <h3 className="mb-4 text-[32px] font-semibold leading-[1.2] text-[#262626]">
              Awards & recognition
            </h3>
            <Link
              href="/awards-recognition"
              className="group inline-flex items-center gap-2 text-[16px] font-medium text-[#262626] transition-colors hover:text-[#404040]"
            >
              More awards
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M13.1237 4.81222L9.45487 1.14342L10.5155 0.0827573L15.9956 5.56283L10.5155 11.0429L9.45487 9.98225L13.1249 6.31222L0.187622 6.31226L0.187622 4.81226L13.1237 4.81222Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="awards-container relative grid grid-cols-5 gap-0 border-t border-l border-[#bdbdbd] max-[767px]:grid-cols-2 max-[767px]:border-none">
            {awards.map((award, index) => (
              <div
                key={index}
                className="award-item group relative flex min-h-[244px] flex-col border-b border-r border-[#bdbdbd] bg-white p-8 transition-all hover:bg-gray-50 max-[767px]:border max-[767px]:border-[#bdbdbd]"
              >
                <div className="mb-4 flex flex-col items-center">
                  <div className="mb-4 h-[140px] w-[140px] transition-opacity">
                    <Image
                      src={award.logo}
                      alt={award.name}
                      width={140}
                      height={140}
                      className="h-full w-full object-contain grayscale transition-all group-hover:grayscale-0"
                    />
                  </div>
                  <strong className="text-[18px] font-bold leading-[24px] text-[#262626] transition-opacity">
                    {award.name}
                  </strong>
                </div>
                {/* Description - Outside Card */}
                <div className="award-description absolute left-0 right-0 top-full z-10 max-h-0 overflow-hidden bg-white p-6 text-center opacity-0 shadow-lg transition-all duration-300 group-hover:max-h-[500px] group-hover:opacity-100">
                  {Array.isArray(award.description) ? (
                    <ul className="space-y-2 text-left">
                      {award.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-[16px] leading-[24px] text-[#404040]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[16px] leading-[24px] text-[#404040]">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="border-t border-gray-200 py-20">
        <div className="mx-auto w-full max-w-[1312px] px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-[48px] font-bold leading-[54px] tracking-[-0.85px] text-[#262626] max-[1024px]:text-[32px]">
              Case studies
            </h2>
            <Link
              href="/work?filter=branding"
              className="group inline-flex items-center gap-2 text-[16px] font-medium text-[#262626] transition-colors hover:text-[#404040]"
            >
              See more work
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M13.1237 4.81222L9.45487 1.14342L10.5155 0.0827573L15.9956 5.56283L10.5155 11.0429L9.45487 9.98225L13.1249 6.31222L0.187622 6.31226L0.187622 4.81226L13.1237 4.81222Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          {/* Case Studies Grid */}
          <div className="case-studies-container grid grid-cols-3 gap-8 max-[1024px]:grid-cols-1">
            {[
              {
                title: "Ninox",
                image: "https://www.datocms-assets.com/22695/1764951103-ninox-first-frame-cover-1600-1200.jpg",
                description: "Improving retention and trial-to-paid conversion by 30% for a business automation company"
              },
              {
                title: "Transcend",
                image: "https://www.datocms-assets.com/22695/1764693099-transcend-first-frame-cover-1600-1200.jpg",
                description: "We designed Transcend's branding and website, boosting user engagement and supporting its growth to serve 1.2B+ users."
              },
              {
                title: "Proemion",
                image: "https://www.datocms-assets.com/22695/1764692977-proemion-first-frame-cover-1600-1200.jpg",
                description: "Branding, website, and UI/UX redesign for Proemion, elevating engagement and customer experience across 200,000+ devices."
              }
            ].map((study, index) => (
              <Link
                key={index}
                href={`/work/${study.title.toLowerCase()}`}
                className="case-study-card group relative overflow-hidden rounded-xl bg-white transition-all hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-[24px] font-bold leading-[36px] tracking-[-0.5px] text-[#262626]">
                    {study.title}
                  </h3>
                  {/* Description - Hidden by default, shows on hover */}
                  <p className="case-study-description max-h-0 overflow-hidden text-[16px] leading-[24px] text-[#404040] opacity-0 transition-all duration-300 group-hover:max-h-[200px] group-hover:opacity-100">
                    {study.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Tabs Section - Capabilities, Process, Industries */}
      <section className="tabs-block border-t border-gray-200 bg-white">
        <div className="container mx-auto w-full max-w-[1312px] px-4">
          {/* Header with Title */}
          <div className="relative mb-12 text-center">
            <h2 className="text-[48px] font-bold leading-[54px] tracking-[-0.8px] text-[#262626] max-[1024px]:text-[32px]">
              Our Services
            </h2>
          </div>

          {/* Sticky Cards Container */}
          <div className="tabs-content relative">
            {tabs.map((tab, tabIndex) => (
              <div
                key={tabIndex}
                className={`tab-content ${activeTab === tabIndex ? "active" : ""}`}
              >
                <section className="relative bg-white">
                  <div className="mx-auto max-w-[1312px] px-4">
                    <div className="relative">
                      {tab.content.map((item, index) => (
                        <React.Fragment key={index}>
                          <div
                            className="sticky-card sticky top-0 min-h-screen flex items-start justify-center overflow-hidden rounded-2xl p-10 shadow-xl"
                          >
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFEDBB] via-[#FF6B4A] to-[#FFD1F3]">
                              {/* Decorative gradient circles */}
                              <div className="absolute left-[10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#FFE0C9] opacity-60 blur-[60px]" />
                              <div className="absolute right-[10%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-[#FF59AC] opacity-50 blur-[80px]" />
                              <div className="absolute left-[50%] top-[50%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-25 blur-[100px]" />
                            </div>
                            
                            {/* Content Container */}
                            <div className="relative z-10 w-full max-w-4xl pt-8">
                              {/* Title - Centered for first and second card */}
                              <h3 className={`mb-6 text-[44px] font-bold leading-[52px] text-[#404042] ${index === 0 || index === 1 ? "text-center" : ""}`}>
                                {index === 0 ? "UI/UX Design" : index === 1 ? "Branding" : item.title}
                              </h3>

                              {/* Content */}
                              <div className="content">
                                <p className="paragraph-reveal mb-6 text-[22px] leading-[34px] text-[#404042]">
                                  {index === 0
                                    ? "UI/UX Design is a critical discipline in the digital product lifecycle that focuses on creating meaningful, intuitive, and engaging experiences for users. UI, or User Interface design, deals with the visual and interactive elements of a product such as layouts, colors, typography, buttons, icons, and animations. Its primary goal is to ensure that the interface is visually appealing, consistent, and aligned with the brand identity. UX, or User Experience design, goes deeper into understanding how users interact with a product and how they feel throughout their journey. It involves analyzing user behavior, needs, motivations, and pain points to design solutions that are practical, efficient, and satisfying. Together, UI and UX work as a single system to bridge aesthetics and functionality, ensuring that a product not only looks good but also performs well for real users. The UI/UX design process typically begins with research, where designers study the target audience, competitors, and business goals. Techniques such as user interviews, surveys, and usability analysis help uncover valuable insights that guide design decisions. Based on this research, designers create user flows, wireframes, and information architecture to structure the product logically. Prototypes are then developed to visualize interactions and test ideas before moving into full-scale development. Usability testing plays a key role in validating assumptions and identifying areas for improvement, allowing designers to refine the experience iteratively. A strong UI/UX design enhances usability by making products easy to navigate and understand, even for first-time users. Clear visual hierarchy, consistent patterns, and intuitive interactions reduce cognitive load and prevent user frustration. From a business perspective, effective UI/UX design directly impacts key metrics such as user engagement, retention, and conversion rates. When users can achieve their goals quickly and effortlessly, they are more likely to trust the product and return to it. In competitive digital markets, user experience often becomes a major differentiator between successful and unsuccessful products. UI/UX design also plays an important role in accessibility and inclusivity. By considering factors such as contrast, typography, responsiveness, and assistive technologies, designers can ensure that digital products are usable by a wider audience, including users with disabilities. Additionally, collaboration between designers, developers, and stakeholders is essential to translate design intent into functional, scalable solutions. In today's fast-evolving digital landscape, investing in high-quality UI/UX design is no longer optional. It is a strategic necessity that helps businesses create user-centered products, build brand credibility, and deliver long-term value through exceptional digital experiences."
                                    : index === 1
                                    ? "Branding is the process of creating a unique identity that defines how a business is perceived by its audience. It goes beyond logos and colors to include brand values, tone of voice, messaging, and the overall emotional connection with customers. Effective branding helps a business stand out in a competitive market by communicating its purpose, personality, and promise clearly and consistently. Through thoughtful visual identity, storytelling, and brand strategy, branding builds recognition and trust over time. A strong brand creates a lasting impression, making it easier for customers to remember, relate to, and choose a business over others. Branding also plays a vital role in shaping customer loyalty, as people tend to connect with brands that reflect their beliefs and aspirations. In today's digital-first world, consistent branding across websites, social media, and marketing channels is essential for credibility and growth. When done right, branding strengthens market positioning, supports business goals, and creates long-term value by turning customers into loyal brand advocates."
                                    : item.description}
                                </p>

                                {index !== 0 && index !== 1 && (
                                  <ul className="space-y-3">
                                    {item.items.map((li, i) => (
                                      <li
                                        key={i}
                                        className="flex items-start text-[18px] leading-[28px] text-[#404042]"
                                      >
                                        <span className="mr-3 mt-2 block h-1.5 w-1.5 rounded-full bg-[#404042]" />
                                        {li}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                          {/* Spacer for scrolling - except for last card */}
                          {index < tab.content.length - 1 && (
                            <div className="h-screen" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
