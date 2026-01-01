"use client"

import { useRef } from "react"
import Link from "next/link"

const caseStudies = [
  {
    title: "Upstream",
    href: "/upstream",
    poster:
      "https://www.datocms-assets.com/22695/1757092351-upstream-cover-still-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1757023931-upstream-cover-animation-1600-1200.mp4",
    description:
      "Turning a complex carbon platform into a clear, intuitive product through full cycle design and development."
  },
  {
    title: "Rizzle",
    href: "/rizzle-product-design",
    poster:
      "https://www.datocms-assets.com/22695/1743620148-rizzle-new-cover-animation-still-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1743620171-rizzle-new-cover-animation-1600-1200.mp4",
    description:
      "Comprehensive redesign of Rizzle's branding, website, and product UI/UX propelled the platform to over 34 million monthly active users."
  },
  {
    title: "Firefox",
    href: "/firefox-brand-redesign",
    poster: "https://www.datocms-assets.com/22695/1747936620-firefox.jpg",
    video:
      "https://www.datocms-assets.com/22695/1728323207-cover-render-1-3.mp4",
    description:
      "Firefox's identity system enhanced brand recognition and reinforced its user-centric identity."
  },
  {
    title: "Clearbit",
    href: "/clearbit-website-transformation",
    poster:
      "https://www.datocms-assets.com/22695/1729286827-clearbit-preview-still-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1729287088-clearbit-preview-animation-1600-1200-2.mp4",
    description:
      "Website redesign contributing to Clearbit’s $150M acquisition by HubSpot."
  },
  {
    title: "Turo",
    href: "/support-portal-redesign",
    poster:
      "https://www.datocms-assets.com/22695/1764783462-turo-first-frame-cover-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1764784166-turo-cover-1600-1200.mp4",
    description: "Support portal redesign improving findability by over 30%."
  },
  {
    title: "Island",
    href: "/island",
    poster:
      "https://www.datocms-assets.com/22695/1749226927-island-cover-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1750178411-island-cover-anim-1600-1200.mp4",
    description:
      "Enterprise browser brand identity supporting a $4.5B+ valuation."
  },
  {
    title: "Puzzle",
    href: "/puzzle",
    poster:
      "https://www.datocms-assets.com/22695/1765901801-puzzle-first-frame-cover-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1738084273-puzzle-cover-animation-1600-1200.mp4",
    description:
      "UX-focused redesign driving 15% MoM growth across 2,300+ businesses."
  },
  {
    title: "Holidu",
    href: "/holidu",
    poster:
      "https://www.datocms-assets.com/22695/1743522406-holidu-cover-static-alt-1600-1200.jpg",
    video:
      "https://www.datocms-assets.com/22695/1743524694-holidu-cover-animation-alt-1600-1200.mp4",
    description: "Rebrand and platform unification reaching 100M annual users."
  }
]

/* ---------- GRID POSITIONING ---------- */
const getGridArea = (index: number) => {
  const pos = (index % 8) + 1
  switch (pos) {
    case 1:
      return "span 3 / 1 / auto / span 5"
    case 2:
    case 3:
      return "span 2 / 6 / auto / span 3"
    case 4:
      return "span 2 / 1 / auto / span 4"
    case 5:
      return "span 2 / 5 / auto / span 4"
    case 6:
      return "span 2 / 1 / auto / span 3"
    case 7:
      return "span 3 / 4 / auto / span 5"
    case 8:
      return "span 2 / 1 / auto / span 3"
    default:
      return "span 2 / 1 / auto / span 4"
  }
}

function CaseStudyCard({
  study,
  index
}: {
  study: (typeof caseStudies)[0]
  index: number
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const play = () => videoRef.current?.play().catch(() => {})
  const stop = () => {
    if (!videoRef.current) return
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  return (
    <div
      className="group relative"
      style={{ gridArea: getGridArea(index) }}
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <Link href={study.href} className="absolute inset-0 z-10" />

      <div className="relative mb-5 overflow-hidden rounded-xl aspect-[4/3]">
        <img
          src={study.poster}
          alt={study.title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={study.video} type="video/mp4" />
        </video>
      </div>

      <h3 className="text-[32px] font-semibold text-[#262626]">
        {study.title}
      </h3>

      <p className="mt-2 max-w-[520px] translate-y-4 text-[16px] text-[#404040] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-[1024px]:opacity-100 max-[1024px]:translate-y-0">
        {study.description}
      </p>
    </div>
  )
}

export default function CaseStudiesGrid() {
  return (
    <section className="bg-[#fafafa] py-[120px] max-[1024px]:py-16">
      <div className="mx-auto max-w-[1312px] px-4">
        <div
          className="grid gap-[60px]"
          style={{ gridTemplateColumns: "repeat(8, 1fr)" }}
        >
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
