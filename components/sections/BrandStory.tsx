"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function BrandStory() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Title */
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%"
        }
      })

      /* Content columns */
      gsap.from(contentRef.current?.children || [], {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%"
        }
      })

      /* Stats */
      gsap.from(statsRef.current?.children || [], {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%"
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { number: "15+", label: "Years in business" },
    { number: "70+", label: "Team members" },
    { number: "200+", label: "Projects delivered" },
    { number: "4.9", label: "Client rating" }
  ]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-[120px] max-[1024px]:py-20"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#FFEDBB] opacity-20 blur-[120px]" />
        <div className="absolute right-[10%] bottom-[20%] h-[520px] w-[520px] rounded-full bg-[#FF6B4A] opacity-15 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1312px] px-4">
        {/* Title */}
        <div className="mb-20 text-center">
          <h2
            ref={titleRef}
            className="text-[48px] font-semibold leading-[1.2] tracking-[-0.8px] text-[#262626] max-[1024px]:text-[32px]"
          >
            Our story is about
            <br className="max-[640px]:hidden" />
            <span className="text-[#6d0900]"> transformation</span>
          </h2>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="mb-24 grid grid-cols-2 gap-16 max-[1024px]:grid-cols-1"
        >
          <div>
            <h3 className="mb-6 text-[32px] font-semibold text-[#262626]">
              From pixels to purpose
            </h3>
            <div className="space-y-4 text-[18px] leading-[1.6] text-[#404040]">
              <p>
                We started as a small team of designers who believed that great
                design could transform businesses.
              </p>
              <p>
                Today, we help brands build meaningful digital experiences that
                drive growth, engagement, and long-term value.
              </p>
              <p>
                Every project is a partnership — strategy, design, and
                development working together as one.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-[32px] font-semibold text-[#262626]">
              What drives us
            </h3>
            <div className="space-y-6">
              {[
                [
                  "Excellence in craft",
                  "Pixel-perfect execution and thoughtful UX."
                ],
                [
                  "Partnership mindset",
                  "We work as an extension of your team."
                ],
                ["Results-driven", "Design that delivers measurable impact."]
              ].map(([title, desc]) => (
                <div key={title}>
                  <h4 className="mb-1 text-[20px] font-medium text-[#262626]">
                    {title}
                  </h4>
                  <p className="text-[16px] text-[#404040]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-4 gap-8 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[56px] font-bold text-[#6d0900]">
                {stat.number}
              </div>
              <div className="text-[16px] font-medium text-[#404040]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/about"
            className="group relative overflow-hidden rounded-[20px] border border-[#262626] px-6 py-2 text-[18px] text-[#262626]"
          >
            <span className="relative z-10">Learn more about us</span>
            <span className="absolute inset-0 origin-right scale-x-0 bg-[#262626] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Learn more about us
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
