"use client";

import { useEffect, useRef } from "react";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stats = [
        { value: 70 },
        { value: 2009 },
        { value: 350 }
      ];

      counterRefs.current.forEach((el, i) => {
        if (!el) return;

        const targetValue = stats[i].value;

        gsap.fromTo(el,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none"
            },
            snap: { innerText: 1 },
            onUpdate: function () {
              const val = Math.floor(parseFloat(this.targets()[0].innerText));
              this.targets()[0].innerText = val;
            }
          }
        );
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen" ref={statsRef}>
      {/* About Hero Section */}
      <section className="bg-[#fafafa] pt-[40px] pb-[120px] max-[1024px]:pt-[30px] max-[1024px]:pb-16">
        <div className="mx-auto w-full max-w-[1312px] px-4">
          <div className="flex w-full flex-col items-center justify-center text-center">
            <h1 className="mb-16 text-[140px] font-bold tracking-[-0.04em] text-[#262626] max-[1024px]:text-[80px] max-[1024px]:mb-10">
              About
            </h1>
            <p className="mb-32 max-w-[1000px] text-[20px] leading-[1.6] text-[#262626] max-[1024px]:text-[18px] max-[1024px]:mb-20">
              Being & Brand is an agency that combines expertise in design, technology, and psychology to deliver measurable
              business outcomes for growing startups and established companies. We strategically curate our client roster,
              focusing on relationships where we can deliver distinct, quantifiable results.
            </p>

            <div className="grid w-full grid-cols-3 gap-12 text-left max-[1024px]:grid-cols-1 max-[1024px]:gap-16">
              <div className="flex flex-col border-t border-[#26262614] pt-10">
                <span className="mb-6 text-[16px] font-bold text-[#262626]">Team experts</span>
                <span className="text-[100px] font-bold tracking-tight text-[#262626] max-[1024px]:text-[80px]">
                  <span ref={el => { counterRefs.current[0] = el }}>0</span>
                </span>
              </div>
              <div className="flex flex-col border-t border-[#26262614] pt-10">
                <span className="mb-6 text-[16px] font-bold text-[#262626]">In the industry since</span>
                <span className="text-[100px] font-bold tracking-tight text-[#262626] max-[1024px]:text-[80px]">
                  <span ref={el => { counterRefs.current[1] = el }}>0</span>
                </span>
              </div>
              <div className="flex flex-col border-t border-[#26262614] pt-10">
                <span className="mb-6 text-[16px] font-bold text-[#262626]">Projects completed</span>
                <span className="text-[100px] font-bold tracking-tight text-[#262626] max-[1024px]:text-[80px]">
                  <span ref={el => { counterRefs.current[2] = el }}>0</span>
                  +
                </span>
              </div>
            </div>

            {/* Who We Are Title and Paragraph */}
            {/* Who We Are Title and Paragraph - Centered */}
            <div className="mt-40 flex w-full flex-col items-center justify-center text-center max-[1024px]:mt-20">
              <h2 className="mb-12 text-[80px] font-bold tracking-[-0.02em] text-[#262626] max-[1024px]:text-[48px] max-[1024px]:mb-8">
                Who we are
              </h2>
              <div className="w-full max-w-[840px]">
                <p className="text-[18px] leading-[1.8] text-[#404040] max-[1024px]:text-[16px]">
                  At Being & Brand, we are a multidisciplinary collective of digital architects,
                  product designers, and software engineers dedicated to redefining the digital
                  landscape. Our core expertise lies in the intersection of cutting-edge IT
                  solutions and human-centric UI/UX design. We don&apos;t just build applications;
                  we craft immersive digital journeys that resonate with users on a psychological
                  level while maintaining a rock-solid technological foundation. Our approach
                  is data-driven and design-led, ensuring that every interface we create is
                  not only visually stunning but also hyper-functional and scalable.
                  <br /><br />
                  In the rapidly evolving world of Information Technology, we stay ahead of the
                  curve by integrating the latest frameworks and development practices into our
                  workflow. Whether it&apos;s a complex enterprise platform or a sleek consumer
                  mobile app, our team meticulously handles every detail from wireframing and
                  prototyping to full-stack engineering. We believe that UI/UX is the soul of
                  a product, while the IT infrastructure is its backbone. By harmonizing these
                  two elements, we empower businesses to innovate faster, engage deeper, and
                  achieve sustainable growth in a competitive global market. Our commitment is
                  to deliver excellence that transforms your vision into a digital reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <ClientsSection />
      <TestimonialsSection />

      {/* Contact CTA Section */}
      <section className="bg-white py-[120px] max-[1024px]:py-16">
        <div className="mx-auto w-full max-w-[1312px] px-4 text-center">
          <h2 className="mb-8 text-[48px] font-semibold leading-[1.2] text-[#262626] max-[1024px]:text-[32px]">
            Ready to start your project?
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#262626] px-10 py-5 text-[18px] font-medium text-white transition-all hover:bg-[#404040]"
          >
            Get in touch
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M14.1237 5.81222L10.4549 2.14342L11.5155 1.08276L16.9956 6.56283L11.5155 12.0429L10.4549 10.9822L14.1249 7.31222L1.18762 7.31226L1.18762 5.81226L14.1237 5.81222Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
