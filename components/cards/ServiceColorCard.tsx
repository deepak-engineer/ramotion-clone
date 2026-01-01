"use client"

import Link from "next/link"

interface Service {
  id: number
  title: string
  description: string
  href: string
  theme: "green" | "blue" | "purple"
  features?: string[]
  icon?: string
}

interface ServiceColorCardProps {
  service: Service
  index?: number
}

export default function ServiceColorCard({
  service,
  index = 0
}: ServiceColorCardProps) {
  return (
    <div
      className={`
        service-card
        gradient-${service.theme}
        group
        relative
        h-[420px]
        rounded-3xl
        p-10
        text-white
        overflow-hidden
        shadow-lg
        transition-all
        duration-700
        cursor-pointer
        hover:scale-[1.03]
        hover:shadow-2xl
        hover:-translate-y-2
      `}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/20 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="content relative z-10 flex h-full flex-col">
        {/* Service icon with gradient background */}
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
          <span className="text-2xl">⚡</span>
        </div>

        <h3 className="mb-4 text-[32px] font-semibold leading-[1.2] transition-colors duration-300 group-hover:text-white">
          {service.title}
        </h3>

        <p className="mb-6 flex-grow text-[16px] leading-[1.6] text-white/90 transition-opacity duration-300 group-hover:opacity-100">
          {service.description}
        </p>

        {/* Features pills */}
        {service.features && (
          <div className="mb-8 flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Enhanced CTA link */}
        <div className="mt-auto pt-4">
          <Link 
            href={service.href} 
            className="letstalk-link inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg hover:scale-105"
          >
            <span>Let&apos;s talk</span>
            <svg 
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-[2px] rounded-3xl border border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      {/* Decorative gradient orb */}
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full opacity-30 blur-3xl transition-all duration-500 group-hover:scale-125"></div>
    </div>
  )
}