"use client";

import { useRef } from "react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Upstream",
    href: "/upstream",
    poster:
      "https://www.datocms-assets.com/22695/1757092351-upstream-cover-still-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1757023931-upstream-cover-animation-1600-1200.mp4",
    description:
      "Turning a complex carbon platform into a clear, intuitive product through full cycle design and development.",
  },
  {
    title: "Rizzle",
    href: "/rizzle-product-design",
    poster:
      "https://www.datocms-assets.com/22695/1743620148-rizzle-new-cover-animation-still-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1743620171-rizzle-new-cover-animation-1600-1200.mp4",
    description:
      "Comprehensive redesign of Rizzle's branding, website, and product UI/UX propelled the platform to over 34 million monthly active users.",
  },
  {
    title: "Firefox",
    href: "/firefox-brand-redesign",
    poster: "https://www.datocms-assets.com/22695/1747936620-firefox.jpg",
    video:
      "https://www.datocms-assets.com/22695/1728323207-cover-render-1-3.mp4",
    description:
      "Firefox's identity system enhanced brand recognition, improved user engagement, and reinforced its fast, private, user-centric identity.",
  },
  {
    title: "Clearbit",
    href: "/clearbit-website-transformation",
    poster:
      "https://www.datocms-assets.com/22695/1729286827-clearbit-preview-still-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1729287088-clearbit-preview-animation-1600-1200-2.mp4",
    description:
      "We redesigned Clearbit's website, boosting engagement and contributing to their $150M acquisition by Hubspot.",
  },
  {
    title: "Turo",
    href: "/support-portal-redesign",
    poster:
      "https://www.datocms-assets.com/22695/1764783462-turo-first-frame-cover-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1764784166-turo-cover-1600-1200.mp4",
    description:
      "A strategic redesign of Turo's support portal by our agency led to a 30% improvement in users' ability to find the answers they need.",
  },
  {
    title: "Island",
    href: "/island",
    poster:
      "https://www.datocms-assets.com/22695/1749226927-island-cover-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1750178411-island-cover-anim-1600-1200.mp4",
    description:
      "Brand identity for the pioneering enterprise browser, supporting its growth to a $4.5B+ valuation and widespread adoption across the Fortune 50.",
  },
  {
    title: "Puzzle",
    href: "/puzzle",
    poster:
      "https://www.datocms-assets.com/22695/1765901801-puzzle-first-frame-cover-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1738084273-puzzle-cover-animation-1600-1200.mp4",
    description:
      "UX-focused website redesign helped Puzzle.io grow 15% MoM, boosting engagement across 2,300+ businesses.",
  },
  {
    title: "Holidu",
    href: "/holidu",
    poster:
      "https://www.datocms-assets.com/22695/1743522406-holidu-cover-static-alt-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1743524694-holidu-cover-animation-alt-1600-1200.mp4",
    description:
      "Rebrand and platform unification for Holidu, elevating brand clarity and reaching 100M annual users.",
  },
];

// Grid area definitions based on card index (1-indexed, repeats every 8)
// Format: row-span / col-start / auto / col-span
const getGridArea = (index: number): string => {
  const position = (index % 8) + 1;
  switch (position) {
    case 1:
      return "span 3 / 1 / auto / span 5"; // Large left card
    case 2:
    case 3:
      return "span 2 / 6 / auto / span 3"; // Small right cards (stacked)
    case 4:
      return "span 2 / 1 / auto / span 4"; // Medium left card
    case 5:
      return "span 2 / 5 / auto / span 4"; // Medium right card
    case 6:
      return "span 2 / 1 / auto / span 3"; // Small left card
    case 7:
      return "span 3 / 4 / auto / span 5"; // Large right card
    case 8:
      return "span 2 / 1 / auto / span 3"; // Small left card
    default:
      return "span 2 / 1 / auto / span 4";
  }
};

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="card group relative"
      style={{ gridArea: getGridArea(index) }}
      data-grid-index={index + 1}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="content">
        {/* Invisible link overlay for accessibility */}
        <Link
          href={study.href}
          className="absolute inset-0 z-[2] opacity-0"
          aria-label={study.title}
        >
          {study.title}
        </Link>

        {/* Video Container */}
        <div className="relative mb-5 h-0 overflow-hidden rounded-[12px] pb-[75%] md:mb-6 md:rounded-lg">
          {/* Poster Image */}
          <img
            src={`${study.poster}?auto=format`}
            alt={study.title}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-in group-hover:scale-110 group-hover:opacity-0"
          />
          {/* Video */}
          <video
            ref={videoRef}
            poster={`${study.poster}?auto=format`}
            muted
            playsInline
            loop
            preload="metadata"
            className="pointer-events-none absolute left-1/2 top-1/2 z-[-1] w-full -translate-x-1/2 -translate-y-1/2"
          >
            <source src={study.video} type="video/mp4" />
          </video>
        </div>

        {/* Title */}
        <span className="mb-1 inline-block text-[32px] font-semibold leading-[1.2] text-[#262626]">
          {study.title}
        </span>

        {/* Description - Hidden on desktop, visible on hover */}
        <p className="m-0 translate-y-5 text-[16px] leading-[1.5] text-[#262626] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-[1024px]:translate-y-0 max-[1024px]:text-[14px] max-[1024px]:opacity-100">
          {study.description}
        </p>
      </div>
    </div>
  );
}

export default function CaseStudiesGrid() {
  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto w-full max-w-[1312px] px-4">
        {/* Listboard grid: 8 columns with 60px gap */}
        <div
          className="listboard grid gap-[60px] max-[1580px]:mt-8"
          style={{ gridTemplateColumns: "repeat(8, 1fr)" }}
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
