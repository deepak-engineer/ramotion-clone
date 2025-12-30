"use client";

import { useState } from "react";
import Link from "next/link";

const testimonials = [
  {
    company: "Volusion",
    logo: "https://www.datocms-assets.com/22695/1715843813-volusion-c.svg",
    quote:
      "Thankful for the Ramotion team for helping us take the Volusion brand to the next level. Couldn't have done it without them.",
    author: {
      name: "Kevin Sproles",
      title: "CEO at Volusion",
      avatar:
        "https://www.datocms-assets.com/22695/1721808040-kevinsproles.jpg",
    },
  },
  {
    company: "Mobingi",
    logo: "https://www.datocms-assets.com/22695/1715859187-mobingi-c.svg",
    quote:
      "Within 3 months, our new brand was launched. Among industry and potential users, it increased our brand identity and recognition by roughly 66%.",
    author: {
      name: "Wayland Zhang",
      title: "Founder at Mobingi",
      avatar:
        "https://www.datocms-assets.com/22695/1721808061-wayland-zhang.jpg",
    },
  },
  {
    company: "Open Colony",
    logo: "https://www.datocms-assets.com/22695/1715859210-open-colony-c.svg",
    quote:
      "As a result of a year of strategy, we hired Ramotion to help us relaunch our company brand, grow our audience, and introduce new services. They are extremely effective despite a largely remote team. I'd highlight their bang for the buck and their communication strengths.",
    author: {
      name: "Caitlin Pulleyblank",
      title: "CEO at Open Colony",
      avatar:
        "https://www.datocms-assets.com/22695/1721808082-caitlin-pulleyblank.jpg",
    },
  },
  {
    company: "Okta",
    logo: "https://www.datocms-assets.com/22695/1715843747-okta-c.svg",
    quote:
      "Ramotion has been a highly talented, adaptive and collaborative design partner ranging from an entire site re-brand to highly responsive and extensible page, component, graphic and icon designs as we evolved our site.",
    author: {
      name: "Chris Bank",
      title: "Sr. Manager of Customer Online Experience at Okta",
      avatar:
        "https://www.datocms-assets.com/22695/1666359862-chris-bank.jpeg",
    },
  },
  {
    company: "Redis",
    logo: "https://www.datocms-assets.com/22695/1715859220-redis-c.svg",
    quote:
      "It's not easy to stand out in the B2B tech space but with Ramotion's creativity, research-based, and system-design approach, we elevated our brand and design to new levels.",
    author: {
      name: "Edu Carneiro",
      title: "Head of Web Marketing, Brand & SEO at Redis",
      avatar:
        "https://www.datocms-assets.com/22695/1721808022-edu-carneiro.jpeg",
    },
  },
  {
    company: "Turo",
    logo: "https://www.datocms-assets.com/22695/1715843760-turo-c.svg",
    quote:
      "I have impossibly high expectations, and the talented team at Ramotion didn't disappoint. They delivered thoughtful, polished designs, and code that made an outsized, positive business impact.",
    author: {
      name: "Brian Beaver",
      title: "VP of Design at Turo",
      avatar:
        "https://www.datocms-assets.com/22695/1721911570-brianbeaver.webp",
    },
  },
  {
    company: "Citrix",
    logo: "https://www.datocms-assets.com/22695/1715843777-citrix-c.svg",
    quote:
      "The Ramotion team is highly creative, responsive and collaborative. Over the years they have become an extension of our Product Design and Research team.",
    author: {
      name: "Malini Leveque",
      title: "Vice President, Product Design and Research at Citrix",
      avatar:
        "https://www.datocms-assets.com/22695/1721807837-malinileveque.jpg",
    },
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-wrapper bg-[#fafafa] py-[120px] max-[1024px]:py-14">
      <div className="mx-auto w-full max-w-[1312px] px-4">
        <div className="flex flex-wrap">
          {/* Left Column - Title */}
          <div className="w-1/3 max-[1024px]:mb-10 max-[1024px]:w-full">
            <h2 className="mb-4 text-[32px] font-semibold leading-[1.2] text-[#262626] max-[1024px]:text-[28px]">
              What our
              <br />
              partners say
            </h2>
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 text-[16px] font-medium text-[#262626]/60 transition-colors hover:text-[#262626]"
            >
              Reviews
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right Column - Testimonial Slider */}
          <div className="w-2/3 max-[1024px]:w-full">
            <div className="testimonials-slider relative">
              {/* Slider Controls - Positioned at top right */}
              <div className="controls absolute right-0 top-0 flex items-center gap-4 max-[1024px]:relative max-[1024px]:mb-6 max-[1024px]:justify-end">
                <button
                  onClick={goToPrevious}
                  className="flex items-center justify-center text-[#262626] transition-opacity hover:opacity-60"
                  aria-label="Previous testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="slides text-[14px] font-medium text-[#262626]/60">
                  <span className="current text-[#262626]">{currentIndex + 1}</span>
                  {" / "}
                  <span className="all">{testimonials.length}</span>
                </div>
                <button
                  onClick={goToNext}
                  className="flex items-center justify-center text-[#262626] transition-opacity hover:opacity-60"
                  aria-label="Next testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Testimonial Content */}
              <div className="testimonials mt-[54px] max-[1024px]:mt-0">
                <div className="testimonials-item" key={currentIndex}>
                  {/* Company Logo */}
                  <div className="testimonials-logo mb-12 flex h-8 items-center max-[1024px]:mb-6">
                    <img
                      src={currentTestimonial.logo}
                      alt={currentTestimonial.company}
                      className="h-full w-auto object-contain"
                    />
                    <span className="ml-3 text-[32px] font-bold text-[#262626]">
                      {currentTestimonial.company.toLowerCase()}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="testimonials-quote mb-12 text-[28px] font-normal leading-[1.5] text-[#262626] max-[1024px]:text-[18px]">
                    <p>“{currentTestimonial.quote}”</p>
                  </blockquote>

                  {/* Author */}
                  <div className="testimonials-author flex flex-wrap items-center gap-6">
                    <div className="avatar h-16 w-16 overflow-hidden rounded-full">
                      <img
                        src={currentTestimonial.author.avatar}
                        alt={currentTestimonial.author.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="caption">
                      <h3 className="text-[20px] font-bold text-[#262626]">
                        {currentTestimonial.author.name}
                      </h3>
                      <span className="text-[16px] text-[#262626]/60">
                        {currentTestimonial.author.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Let's Talk Button - Oval with down arrow and premium animation */}
        <div className="mt-32 flex justify-center max-[1024px]:mt-16">
          <Link
            href="/contact"
            className="group/btn relative flex min-w-[320px] items-center justify-center overflow-hidden rounded-full border border-gray-900 bg-white px-12 py-6 transition-all"
          >
            {/* Initial State */}
            <span className="relative z-[1] flex items-center gap-12 text-[20px] font-medium text-[#262626] transition-all duration-300">
              Let&apos;s talk
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-y-1">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </span>

            {/* Hover State (Overlay) */}
            <span className="absolute inset-0 z-[2] flex items-center justify-center gap-12 text-[20px] font-medium text-white opacity-0 transition-all duration-300 group-hover/btn:opacity-100">
              Let&apos;s talk
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-y-1">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </span>

            {/* Sliding Background */}
            <span className="absolute inset-0 origin-right scale-x-0 bg-[#262626] transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover/btn:origin-left group-hover/btn:scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
