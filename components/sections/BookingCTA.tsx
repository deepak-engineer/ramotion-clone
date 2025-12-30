"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BookingCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null) as any;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: ""
  });

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

      // Form container animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Trust indicators animation
      gsap.fromTo(buttonsRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Form fields animation
      if (formRef.current) {
        gsap.fromTo("input, textarea, select",
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Buttons animation
      gsap.fromTo(buttonsRef.current?.children,
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    // Show success message or redirect
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#6d0900] via-[#8b1a1a] to-[#4a0600] py-[120px] max-[1024px]:py-[80px]" ref={containerRef}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-white opacity-10 blur-[80px]" />
        <div className="absolute right-[15%] bottom-[20%] h-[600px] w-[600px] rounded-full bg-[#FFD1F3] opacity-5 blur-[120px]" />
        <div className="absolute left-[50%] top-[50%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-5 blur-[150px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1312px] px-4">
        {/* Section Title */}
        <div className="mb-12 text-center max-[1024px]:mb-8">
          <h2 
            ref={titleRef}
            className="text-[48px] font-bold leading-[54px] tracking-[-0.85px] text-white max-[1024px]:text-[32px]"
          >
            Ready to transform your brand?
          </h2>
          <p className="mt-4 text-[20px] leading-[1.6] text-white/80 max-[1024px]:text-[18px]">
            Let's discuss how we can help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 max-[1024px]:grid-cols-1">
          {/* Quick Booking Form */}
        <div ref={formRef}>
          <h3 className="mb-8 text-[28px] font-semibold text-white max-[1024px]:text-[24px]">
            Start the conversation
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6" data-form>
              <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[14px] font-medium text-white/80">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[14px] font-medium text-white/80">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-[14px] font-medium text-white/80">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label htmlFor="project" className="mb-2 block text-[14px] font-medium text-white/80">
                  Tell us about your project
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={4}
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                  placeholder="                What challenges are you trying to solve? What&apos;s your timeline?"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-[20px] border border-[#6d0900] bg-white text-[18px] leading-[1.5] tracking-[-0.4px] text-[#6d0900] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-[1] flex w-full items-center justify-center px-8 py-4 transition-all duration-300">
                  Send message
                </span>
                <span className="absolute inset-0 z-[2] flex items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Send message
                </span>
                <span className="absolute inset-0 origin-right scale-x-0 rounded-[20px] bg-[#6d0900] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </button>
            </form>
          </div>

          {/* Alternative Contact Options */}
          <div>
            <h3 className="mb-8 text-[28px] font-semibold text-white max-[1024px]:text-[24px]">
              Other ways to connect
            </h3>
            
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
                <h4 className="mb-4 text-[20px] font-medium text-white">Direct contact</h4>
                <div className="space-y-3">
                  <a 
                    href="mailto:hello@ramotion.com" 
                    className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 5L10 10L17.5 5M3.33333 16.6667H16.6667C17.5871 16.6667 18.3333 15.9205 18.3333 15V5C18.3333 4.07953 17.5871 3.33333 16.6667 3.33333H3.33333C2.41286 3.33333 1.66667 4.07953 1.66667 5V15C1.66667 15.9205 2.41286 16.6667 3.33333 16.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    hello@ramotion.com
                  </a>
                  <a 
                    href="tel:+1-555-0123" 
                    className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 4.16667V15.8333L7.5 13.3333L10 16.6667L12.5 13.3333L15 15.8333V4.16667H5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    +1 (555) 0123
                  </a>
                </div>
              </div>

              {/* Schedule Call */}
              <div className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
                <h4 className="mb-4 text-[20px] font-medium text-white">Schedule a call</h4>
                <p className="mb-4 text-white/70">
                  Book a 30-minute discovery call to discuss your project in detail.
                </p>
              <Link
                href="/contact"
                className="group relative w-full overflow-hidden rounded-[20px] border border-white text-[16px] leading-[1.5] tracking-[-0.4px] text-white"
              >
                <span className="relative z-[1] flex w-full items-center justify-center px-6 py-3 transition-all duration-300">
                  Schedule meeting
                </span>
                <span className="absolute inset-0 z-[2] flex items-center justify-center text-[#6d0900] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Schedule meeting
                </span>
                <span className="absolute inset-0 origin-right scale-x-0 rounded-[20px] bg-white transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
              </div>

              {/* Office Locations */}
              <div className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
                <h4 className="mb-4 text-[20px] font-medium text-white">Our offices</h4>
                <div className="space-y-2 text-white/70">
                  <p>San Francisco, CA</p>
                  <p>New York, NY</p>
                  <p>London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div ref={buttonsRef} className="mt-16 text-center">
          <p className="mb-6 text-white/60">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Netflix", "Adobe", "Mozilla", "Salesforce", "Citrix"].map((company, index) => (
              <span key={index} className="text-white font-medium text-[14px]">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}