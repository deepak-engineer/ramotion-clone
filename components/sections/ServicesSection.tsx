"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const servicesRows = [
  {
    left: ["printing services"],
    center: [
      {
        id: "design-systems",
        title: "design systems",
        href: "/design-systems/",
        color: "#FDFF99",
        icon: "https://www.datocms-assets.com/22695/1720686091-polygon.svg",
        videos: [
          "https://www.datocms-assets.com/22695/1724732097-design-systems-01-salesforce.mp4",
          "https://www.datocms-assets.com/22695/1731318532-design-systems-02-opswat.mp4",
        ],
      },
    ],
    right: ["data science"],
  },
  {
    left: ["packaging design"],
    center: [
      {
        id: "branding",
        title: "branding",
        href: "/branding/",
        color: "#7ACFFF",
        icon: "https://www.datocms-assets.com/22695/1720686363-ellipse.svg",
        videos: [
          "https://www.datocms-assets.com/22695/1724732074-branding-02-firefox.mp4",
          "https://www.datocms-assets.com/22695/1724732054-branding-01-descript.mp4",
        ],
      },
      {
        id: "app-design",
        title: "app design",
        href: "/app-design/",
        color: "#C9BBFF",
        icon: "https://www.datocms-assets.com/22695/1720686534-rectangle.svg",
        videos: [
          "https://www.datocms-assets.com/22695/1724732017-app-design-01-turo.mp4",
          "https://www.datocms-assets.com/22695/1724731996-app-design-02-tile.mp4",
        ],
      },
    ],
    right: ["production planning"],
  },
  {
    left: ["pr campaigns"],
    center: [
      {
        id: "brand-strategy",
        title: "brand strategy",
        href: "/brand-strategy/",
        color: "#FF8BA0",
        icon: "https://www.datocms-assets.com/22695/1720686591-heart.svg",
        videos: [
          "https://www.datocms-assets.com/22695/1724731967-bp-video-strategy.mp4",
        ],
      },
      {
        id: "ui-ux-design",
        title: "ui/ux design",
        href: "/ui-ux-design/",
        color: "#68FFC9",
        icon: "https://www.datocms-assets.com/22695/1720686670-union.svg",
        videos: [
          "https://www.datocms-assets.com/22695/1724731941-ux-01-ninox.mp4",
          "https://www.datocms-assets.com/22695/1724731913-ux-02-nbcuniversal.mp4",
        ],
      },
    ],
    right: ["gtm strategy", "smm"],
  },
  {
    left: ["video productions"],
    center: [
      {
        id: "web-design",
        title: "web design",
        href: "/web-design/",
        color: "#A8FF92",
        icon: "https://www.datocms-assets.com/22695/1720686723-rectangle2.svg",
        videos: [
          "https://www.datocms-assets.com/22695/1724731888-web-01-mozilla-labs.mp4",
          "https://www.datocms-assets.com/22695/1724731867-web-02-clearbit.mp4",
        ],
      },
      {
        id: "web-app-development",
        title: "web app development",
        href: "/web-app-development/",
        color: "#F19DFF",
        icon: "https://www.datocms-assets.com/22695/1720686758-rectangle3.svg",
        videos: [
          "https://www.datocms-assets.com/22695/1724731847-web-app-dev-01-emi-health.mp4",
          "https://www.datocms-assets.com/22695/1724731817-web-app-dev-02-vela.mp4",
        ],
      },
    ],
    right: ["product writing"],
  },
];

function GrayService({ title }: { title: string }) {
  return (
    <div className="inline-block rounded-full border border-[#ccc] bg-[#fafafa] px-4 py-2">
      <span className="whitespace-nowrap text-[14px] font-medium text-[#ccc]">
        {title}
      </span>
    </div>
  );
}

function ColoredService({
  service,
}: {
  service: {
    id: string;
    title: string;
    href: string;
    color: string;
    icon: string;
    videos?: string[];
  };
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredCard(null);
    if (video1Ref.current) {
      video1Ref.current.pause();
      video1Ref.current.currentTime = 0;
    }
    if (video2Ref.current) {
      video2Ref.current.pause();
      video2Ref.current.currentTime = 0;
    }
  };

  const handleCard1Enter = () => {
    setHoveredCard(1);
    video1Ref.current?.play().catch(() => {});
  };

  const handleCard1Leave = () => {
    setHoveredCard(null);
    if (video1Ref.current) {
      video1Ref.current.pause();
      video1Ref.current.currentTime = 0;
    }
  };

  const handleCard2Enter = () => {
    setHoveredCard(2);
    video2Ref.current?.play().catch(() => {});
  };

  const handleCard2Leave = () => {
    setHoveredCard(null);
    if (video2Ref.current) {
      video2Ref.current.pause();
      video2Ref.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative z-[1] hover:z-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Cards on Hover - Upper Right */}
      {service.videos && service.videos.length > 0 && (
        <div
          className={`absolute bottom-[80%] left-[60%] transition-all duration-300 ${isHovered ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <div className="relative h-[180px] w-[300px]">
            {/* First video card */}
            <div
              className={`absolute overflow-hidden rounded-lg shadow-xl transition-all duration-300 ${
                isHovered ? "rotate-[-8deg] scale-100" : "rotate-0 scale-75"
              } ${hoveredCard === 2 ? "z-10" : "z-20"}`}
              style={{
                left: 0,
                top: 20,
                width: 180,
                height: 120,
              }}
              onMouseEnter={handleCard1Enter}
              onMouseLeave={handleCard1Leave}
            >
              <video
                ref={video1Ref}
                preload="metadata"
                playsInline
                loop
                muted
                className="h-full w-full object-cover"
              >
                <source src={service.videos[0]} type="video/mp4" />
              </video>
            </div>
            {/* Second video card */}
            {service.videos[1] && (
              <div
                className={`absolute overflow-hidden rounded-lg shadow-xl transition-all duration-300 ${
                  isHovered ? "rotate-[12deg] scale-100 opacity-100" : "rotate-0 scale-75 opacity-0"
                } ${hoveredCard === 2 ? "z-20" : "z-10"}`}
                style={{
                  right: 0,
                  top: 0,
                  width: 150,
                  height: 100,
                }}
                onMouseEnter={handleCard2Enter}
                onMouseLeave={handleCard2Leave}
              >
                <video
                  ref={video2Ref}
                  preload="metadata"
                  playsInline
                  loop
                  muted
                  className="h-full w-full object-cover"
                >
                  <source src={service.videos[1]} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Service Button */}
      <Link
        href={service.href}
        className="group relative inline-flex items-center gap-2 rounded-full bg-[#262626] px-4 py-2 transition-all"
      >
        <span className="icon flex h-4 w-4 items-center justify-center">
          <img src={service.icon} alt="" className="h-auto w-3" />
        </span>
        <strong
          className="whitespace-nowrap text-[14px] font-semibold"
          style={{ color: service.color }}
        >
          {service.title}
        </strong>
        {/* Arrow on hover */}
        <span
          className={`transition-all duration-200 ${isHovered ? "w-4 opacity-100" : "w-0 opacity-0"}`}
        >
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69093 4.81223L4.02213 1.14342L5.08279 0.0827637L10.5629 5.56284L5.08279 11.0429L4.02213 9.98226L7.69215 6.31223H0.187805L0.187805 4.81223H7.69093Z"
              fill={service.color}
            />
          </svg>
        </span>
      </Link>

      {/* Label below on hover */}
      <div
        className={`absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2 py-1 text-[11px] text-[#262626] shadow-sm transition-all duration-200 ${isHovered ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        {service.title}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#fafafa] py-[120px] max-[1024px]:py-14">
      <div className="mx-auto w-full max-w-[1312px] px-4">
        {/* Title Section */}
        <div className="mb-16">
          <div className="flex w-full flex-wrap">
            {/* Left Column - Title */}
            <div className="w-1/2 max-[1024px]:mb-8 max-[1024px]:w-full">
              <h2 className="mt-0 text-left text-[48px] font-semibold leading-[1.2] text-[#262626] max-[1024px]:text-[24px]">
                Services that drive
                <br />
                <span className="text-[#6d0900]">real results</span>
              </h2>
            </div>

            {/* Right Column - Description & CTA */}
            <div className="w-1/2 max-[1024px]:w-full">
              <p className="m-0 mb-6 p-0 text-[16px] leading-[1.5] text-[#262626]">
                With over 15 years of experience, our services complement each other to create cohesive experiences that drive growth and engagement.
              </p>
              <Link
                href="/contact"
                className="group relative flex items-center overflow-hidden rounded-[20px] border border-[#6d0900] text-[16px] leading-[1.5] tracking-[-0.4px] text-[#6d0900]"
              >
                <span className="relative z-[1] flex w-full items-center justify-center px-6 py-1.5 transition-all duration-300">
                  Get started
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M13.1237 4.81222L9.45487 1.14342L10.5155 0.0827573L15.9956 5.56283L10.5155 11.0429L9.45487 9.98225L13.1249 6.31222L0.187622 6.31226L0.187622 4.81226L13.1237 4.81222Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 z-[2] flex items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Get started
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M13.1237 4.81222L9.45487 1.14342L10.5155 0.0827573L15.9956 5.56283L10.5155 11.0429L9.45487 9.98225L13.1249 6.31222L0.187622 6.31226L0.187622 4.81226L13.1237 4.81222Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 origin-right scale-x-0 rounded-[20px] bg-[#6d0900] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Venn Diagram */}
        <div
          ref={sectionRef}
          className="relative mx-auto flex min-h-[600px] w-full max-w-[1100px] items-center justify-center"
        >
          {/* Dashed Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left Circle */}
            <div
              className={`absolute h-[500px] w-[500px] rounded-full border border-dashed border-[#d0d0d0] transition-all duration-1000 max-[1024px]:h-[300px] max-[1024px]:w-[300px] ${isAnimated ? "opacity-100" : "opacity-0"}`}
              style={{ left: "10%", top: "50%", transform: "translateY(-50%)" }}
            />
            {/* Right Circle */}
            <div
              className={`absolute h-[500px] w-[500px] rounded-full border border-dashed border-[#d0d0d0] transition-all duration-1000 max-[1024px]:h-[300px] max-[1024px]:w-[300px] ${isAnimated ? "opacity-100" : "opacity-0"}`}
              style={{
                right: "10%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>

          {/* Labels */}
          <div
            className={`absolute left-[5%] top-1/2 flex -translate-y-1/2 items-center gap-2 text-[16px] font-medium text-[#262626] transition-all duration-700 max-[1024px]:left-0 ${isAnimated ? "opacity-100" : "opacity-0"}`}
          >
            Brand
            <span className="h-2 w-2 rounded-full bg-[#262626]" />
          </div>
          <div
            className={`absolute right-[5%] top-1/2 flex -translate-y-1/2 items-center gap-2 text-[16px] font-medium text-[#262626] transition-all duration-700 max-[1024px]:right-0 ${isAnimated ? "opacity-100" : "opacity-0"}`}
          >
            <span className="h-2 w-2 rounded-full bg-[#262626]" />
            Product
          </div>

          {/* Mastery Area Label */}
          <div
            className={`absolute left-1/2 top-[5%] -translate-x-1/2 text-center text-[16px] font-semibold text-[#262626] transition-all duration-700 ${isAnimated ? "opacity-100" : "opacity-0"}`}
          >
            Mastery
            <br />
            Area
          </div>

          {/* Services Grid */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            {servicesRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex items-center gap-3 transition-all duration-500 max-[768px]:flex-wrap max-[768px]:justify-center ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: `${rowIndex * 100}ms` }}
              >
                {/* Left services (gray) */}
                <div className="flex gap-3">
                  {row.left.map((service) => (
                    <GrayService key={service} title={service} />
                  ))}
                </div>

                {/* Center services (colored) */}
                <div className="flex gap-3">
                  {row.center.map((service) => (
                    <ColoredService key={service.id} service={service} />
                  ))}
                </div>

                {/* Right services (gray) */}
                <div className="flex gap-3">
                  {row.right.map((service) => (
                    <GrayService key={service} title={service} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}