"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Story content animation
      gsap.fromTo(storyRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Stats animation with stagger
      const statItems = statsRef.current?.children;
      if (statItems) {
        gsap.fromTo(statItems,
          { opacity: 0, scale: 0.8 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.8, 
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Parallax effect for story content
      gsap.to(storyRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "15+", label: "Years in business" },
    { number: "70+", label: "Team members" },
    { number: "200+", label: "Projects delivered" },
    { number: "4.9", label: "Client rating" }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-[120px] max-[1024px]:py-[80px]" ref={containerRef}>
      {/* Background decoration */}
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#FFEDBB] opacity-20 blur-[100px]" />
        <div className="absolute right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-[#FF6B4A] opacity-15 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1312px] px-4">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 
            ref={titleRef}
            className="text-[48px] font-bold leading-[54px] tracking-[-0.85px] text-[#262626] max-[1024px]:text-[32px]"
          >
            Our story is about
            <br className="max-[640px]:hidden" />
            <span className="text-[#6d0900]"> transformation</span>
          </h2>
        </div>

        {/* Story Content */}
        <div 
          ref={storyRef}
          className="mb-20 grid grid-cols-2 gap-16 max-[1024px]:grid-cols-1 max-[1024px]:gap-12"
        >
          <div className="story-content">
            <h3 className="mb-6 text-[32px] font-semibold leading-[1.2] text-[#262626] max-[1024px]:text-[28px]">
              From pixels to purpose
            </h3>
            <div className="space-y-4 text-[18px] leading-[1.6] text-[#404040]">
              <p>
                We started as a small team of designers who believed that great design could transform businesses. Today, we&apos;re a full-service agency helping marketing and product executives build brands that matter.
              </p>
              <p>
                Our approach is simple: we listen, we understand, we create. We don&apos;t just design pretty interfaces—we craft experiences that drive results, engage users, and build lasting connections between brands and their audiences.
              </p>
              <p>
                Every project is a partnership. We work alongside your team as an extension of your vision, bringing expertise in design, development, and digital strategy to help you achieve your most ambitious goals.
              </p>
            </div>
          </div>

          <div className="story-values">
            <h3 className="mb-6 text-[32px] font-semibold leading-[1.2] text-[#262626] max-[1024px]:text-[28px]">
              What drives us
            </h3>
            <div className="space-y-6">
              <div className="value-item">
                <h4 className="mb-2 text-[20px] font-medium text-[#262626]">Excellence in craft</h4>
                <p className="text-[16px] leading-[1.5] text-[#404040]">
                  We obsess over every detail, from pixel-perfect designs to seamless user experiences.
                </p>
              </div>
              <div className="value-item">
                <h4 className="mb-2 text-[20px] font-medium text-[#262626]">Partnership mindset</h4>
                <p className="text-[16px] leading-[1.5] text-[#404040]">
                  Your success is our success. We&apos;re invested in your goals and work as part of your team.
                </p>
              </div>
              <div className="value-item">
                <h4 className="mb-2 text-[20px] font-medium text-[#262626]">Results-driven</h4>
                <p className="text-[16px] leading-[1.5] text-[#404040]">
                  Beautiful design that delivers measurable business impact and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div 
          ref={statsRef}
          className="grid grid-cols-4 gap-8 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-[56px] font-bold leading-[1] text-[#6d0900] max-[1024px]:text-[48px]">
                {stat.number}
              </div>
              <div className="text-[16px] font-medium text-[#404040]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/about"
            className="group/btn relative flex items-center overflow-hidden rounded-[20px] border border-[#262626] text-[18px] leading-[1.5] tracking-[-0.4px] text-[#262626]"
          >
            <span className="relative z-[1] flex w-full items-center justify-center px-6 py-1.5 transition-all duration-300">
              Learn more about us
            </span>
            <span className="absolute inset-0 z-[2] flex items-center justify-center text-white opacity-0 transition-all duration-300 group-hover/btn:opacity-100">
              Learn more about us
            </span>
            <span className="absolute inset-0 origin-right scale-x-0 rounded-[20px] bg-[#262626] transition-transform duration-300 group-hover/btn:origin-left group-hover/btn:scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}