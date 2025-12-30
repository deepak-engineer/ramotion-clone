"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Completed Projects", value: 50, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Talented Designers", value: 20, suffix: "+" },
  { label: "Client Satisfaction", value: 4.9, suffix: "/5", isDecimal: true },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, index) => {
        const target = statsRefs.current[index];
        if (!target) return;

        gsap.fromTo(
          target,
          { innerText: 0 },
          {
            innerText: stat.value,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: target,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            snap: { innerText: stat.isDecimal ? 0.1 : 1 },
            onUpdate: function () {
              const val = parseFloat(this.targets()[0].innerText);
              this.targets()[0].innerText = stat.isDecimal
                ? val.toFixed(1)
                : Math.ceil(val);
            },
          }
        );
      });

      // Fade in text content
      gsap.from(".about-content", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#fafafa] py-[120px] max-[1024px]:py-14">
      <div className="mx-auto w-full max-w-[1312px] px-4">
        <div className="flex flex-wrap items-start justify-between gap-16">
          {/* Left Side: Content */}
          <div className="about-content w-full max-w-[640px]">
            <h2 className="mb-8 text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#262626] max-[1024px]:text-[32px]">
              We bridge the gap between product and brand with purpose-driven design.
            </h2>
            <p className="text-[18px] leading-[1.6] text-[#404040] max-[1024px]:text-[16px]">
              Being & Brand is a boutique design and development agency. We help 
              forward-thinking companies build impactful identities and seamless 
              digital experiences. Our approach combines strategic thinking with 
              meticulous execution to ensure every project not only looks 
              beautiful but drives real business growth.
            </p>
            <p className="mt-6 text-[18px] leading-[1.6] text-[#404040] max-[1024px]:text-[16px]">
              We believe that the best products are born from a deep understanding 
              of user needs and business goals. By treats every project as a 
              partnership, we ensure that our solutions are as unique as the 
              challenges they solve.
            </p>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="about-content grid w-full grid-cols-2 gap-x-8 gap-y-12 md:w-auto md:min-w-[400px]">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-2 text-[48px] font-bold tracking-tight text-[#262626] max-[1024px]:text-[36px]">
                  <span
                    ref={(el) => {
                      statsRefs.current[index] = el;
                    }}
                  >
                    0
                  </span>
                  {stat.suffix}
                </div>
                <div className="text-[14px] font-medium uppercase tracking-wider text-[#8a8a8a]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
