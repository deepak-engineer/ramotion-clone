"use client";

import { useState } from "react";
import Link from "next/link";

const testimonials = [
  {
    company: "Turo",
    logo: "https://www.datocms-assets.com/22695/1715843760-turo-c.svg",
    quote:
      "I have impossibly high expectations, and the talented team at Ramotion didn't disappoint. They delivered thoughtful, polished designs, and code that made an outsized, positive business impact by dramatically increasing our customers' ability to find and understand support site content.",
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
      "The Ramotion team is highly creative, responsive and collaborative. Over the years they have become an extension of our Product Design and Research team. Thank you for consistently delivering high quality Design under tight deadlines.",
    author: {
      name: "Malini Leveque",
      title: "Vice President, Product Design and Research at Citrix",
      avatar:
        "https://www.datocms-assets.com/22695/1721807837-malinileveque.jpg",
    },
  },
  {
    company: "Mozilla",
    logo: "https://www.datocms-assets.com/22695/1715843699-mozilla-c.svg",
    quote:
      "Ramotion was fast and efficient without sacrificing quality. Their team of designers and developers brought our vision to life and we are thankful for their expertise.",
    author: {
      name: "Dan Brown",
      title: "Senior Marketing Manager at Mozilla",
      avatar:
        "https://www.datocms-assets.com/22695/1582121058-danbrown.jpg",
    },
  },
  {
    company: "Oppo",
    logo: "https://www.datocms-assets.com/22695/1715843839-oppo-c.svg",
    quote:
      "We greatly enjoyed collaborating with Ramotion to create an innovative icon set for our ColorOS design system.",
    author: {
      name: "Chris Chen",
      title: "Head of ColorOS Design Department at Oppo",
      avatar:
        "https://www.datocms-assets.com/22695/1721892111-chris-chen.webp",
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
    company: "Descript",
    logo: "https://www.datocms-assets.com/22695/1715843789-descript-c.svg",
    quote:
      "They're very responsive and go above and beyond to meet our needs. We continue working with them, which is the best sign of our satisfaction.",
    author: {
      name: "Andrew Mason",
      title: "CEO at Descript",
      avatar:
        "https://www.datocms-assets.com/22695/1721807925-andrewmason.jpg",
    },
  },
  {
    company: "Xero",
    logo: "https://www.datocms-assets.com/22695/1715843826-xero-c.svg",
    quote:
      "We reached out to Ramotion for support on a significant update to our product. The team provided an expert that perfectly matched our needs and the resulting collaboration was a huge success. I definitely plan on working with them again.",
    author: {
      name: "Mark Opland",
      title: "Product Design Director at Xero",
      avatar:
        "https://www.datocms-assets.com/22695/1721807985-markopland.jpg",
    },
  },
  {
    company: "Adobe",
    logo: "https://www.datocms-assets.com/22695/1715843712-adobe-c.svg",
    quote:
      "Ramotion is a rock solid team. They combine an innate instinct for good design with a keen understanding for real world business challenges.",
    author: {
      name: "Khoi Vinh",
      title: "Senior Director of Product Design at Adobe",
      avatar:
        "https://www.datocms-assets.com/22695/1721808003-khoivinh.jpg",
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
    company: "Clearbit",
    logo: "https://www.datocms-assets.com/22695/1715843801-clearbit-c.svg",
    quote:
      "We partnered with Ramotion to redesign our entire marketing site from the ground up—new pages, messaging, graphics, and visual identity. Operating under an extremely tight timeline, they seamlessly integrated into our team and delivered at every phase of the project. The end result was a beautiful, functional, and high-converting website.",
    author: {
      name: "Nick Wentz",
      title: "VP Marketing at Clearbit",
      avatar:
        "https://www.datocms-assets.com/22695/1700235573-nick-wentz.jpeg",
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
            <h2 className="mb-4 text-[48px] font-semibold leading-[1.2] text-[#262626] max-[1024px]:text-[32px]">
              What our
              <br />
              partners say
            </h2>
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 text-[16px] text-[#262626] transition-colors"
            >
              Reviews
              <span className="inline-block transition-transform group-hover:translate-x-1">
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1237 4.81222L9.45487 1.14342L10.5155 0.0827573L15.9956 5.56283L10.5155 11.0429L9.45487 9.98225L13.1249 6.31222L0.187622 6.31226L0.187622 4.81226L13.1237 4.81222Z"
                    fill="#262626"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Right Column - Testimonial Slider */}
          <div className="w-2/3 max-[1024px]:w-full">
            <div className="testimonials-slider relative">
              {/* Slider Controls - Positioned at top right */}
              <div className="controls absolute right-0 top-0 flex items-center gap-2 max-[1024px]:relative max-[1024px]:mb-6 max-[1024px]:justify-end">
                <button
                  onClick={goToPrevious}
                  className="flex h-12 w-12 items-center justify-center text-[#262626] transition-opacity hover:opacity-60"
                  aria-label="Previous testimonial"
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65527 1.34412L1.99842 7.00097L7.65527 12.6578"
                      stroke="#262626"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2.71093 6.9994L15.3665 7.00067"
                      stroke="#262626"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
                <div className="slides text-[14px] text-[#262626]">
                  <span className="current">{currentIndex + 1}</span>
                  {" / "}
                  <span className="all">{testimonials.length}</span>
                </div>
                <button
                  onClick={goToNext}
                  className="flex h-12 w-12 items-center justify-center text-[#262626] transition-opacity hover:opacity-60"
                  aria-label="Next testimonial"
                >
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70996 1.34412L13.3668 7.00097L7.70996 12.6578"
                      stroke="#262626"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12.6543 6.9994L-0.00127831 7.00067"
                      stroke="#262626"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Testimonial Content */}
              <div className="testimonials mt-[54px] max-[1024px]:mt-0">
                <div className="testimonials-item" key={currentIndex}>
                  {/* Company Logo */}
                  <div className="testimonials-logo mb-12 flex h-12 max-w-[180px] items-center max-[1024px]:mb-6 max-[1024px]:h-8 max-[1024px]:max-w-[120px]">
                    <img
                      src={currentTestimonial.logo}
                      alt={currentTestimonial.company}
                      className="h-full w-auto max-w-full"
                    />
                  </div>

                  {/* Quote */}
                  <blockquote className="testimonials-quote mb-8 text-[24px] font-normal leading-[1.55] text-[#262626] max-[1024px]:text-[16px] max-[1024px]:leading-[1.5]">
                    <p>{currentTestimonial.quote}</p>
                  </blockquote>

                  {/* Author */}
                  <div className="testimonials-author flex flex-wrap items-start gap-4">
                    <div className="avatar h-20 w-20 overflow-hidden rounded-full max-[1024px]:h-12 max-[1024px]:w-12">
                      <img
                        src={currentTestimonial.author.avatar}
                        alt={currentTestimonial.author.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div className="caption pt-2 text-[18px] leading-[1.55] max-[1024px]:pt-0 max-[1024px]:text-[16px]">
                      <h3 className="m-0 p-0 text-[24px] font-medium leading-[1.4] text-[#262626] max-[1024px]:text-[18px]">
                        {currentTestimonial.author.name}
                      </h3>
                      <span className="block text-[#262626]">
                        {currentTestimonial.author.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Let's Talk Button */}
        <div className="mt-24 flex justify-center max-[1024px]:mt-14">
          <Link
            href="/contact"
            className="contact-us group relative inline-flex items-center gap-8 overflow-hidden rounded-full bg-[#262626] px-10 py-5 text-[18px] font-medium text-white transition-all hover:bg-[#404040]"
          >
            <span className="relative z-10">Let's talk</span>
            <span className="arrow relative z-10">
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M20.0625 6.57812L27.4871 14.0027L20.0625 21.4274"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M27.4853 14.0009H0.514719"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
