"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    name: "Netflix",
    logo: "https://www.datocms-assets.com/22695/1715843667-netflix-c.svg",
    description:
      "Series of visual concepts for improving the user experience",
  },
  {
    name: "Stripe",
    logo: "https://www.datocms-assets.com/22695/1715843686-stripe-c.svg",
    description:
      "We crafted Stripe's iconography, enhancing recognition and usability across millions of global transactions daily.",
  },
  {
    name: "Mozilla",
    logo: "https://www.datocms-assets.com/22695/1715843699-mozilla-c.svg",
    description:
      "Firefox's identity system enhanced brand recognition, improved user engagement, and reinforced its fast, private, user-centric identity.",
    href: "/firefox-brand-redesign",
  },
  {
    name: "Adobe",
    logo: "https://www.datocms-assets.com/22695/1715843712-adobe-c.svg",
    description: "Visual identity for Adobe-owned company products",
  },
  {
    name: "Opera",
    logo: "https://www.datocms-assets.com/22695/1715843733-opera-c.svg",
    description: "Designing a motion identity for Opera",
  },
  {
    name: "Okta",
    logo: "https://www.datocms-assets.com/22695/1715843747-okta-c.svg",
    description:
      "We applied Okta's brand identity digitally, developed key assets, enhancing UX and supporting revenue growth.",
  },
  {
    name: "Turo",
    logo: "https://www.datocms-assets.com/22695/1715843760-turo-c.svg",
    description:
      "A strategic redesign of Turo's support portal by our agency led to a 30% improvement in users' ability to find the answers they need.",
    href: "/support-portal-redesign",
  },
  {
    name: "Citrix",
    logo: "https://www.datocms-assets.com/22695/1715843777-citrix-c.svg",
    description:
      "Our iconography redesign for Citrix enhanced clarity and engagement, supporting 16M+ cloud users seamlessly.",
  },
  {
    name: "Descript",
    logo: "https://www.datocms-assets.com/22695/1715843789-descript-c.svg",
    description:
      "Our team collaborated with Descript to develop their brand identity and website, driving brand recognition, user engagement and reach.",
    href: "/descript-brand-identity-and-web-design",
  },
  {
    name: "Clearbit",
    logo: "https://www.datocms-assets.com/22695/1715843801-clearbit-c.svg",
    description:
      "We redesigned Clearbit's website, boosting engagement and contributing to their $150M acquisition by Hubspot.",
    href: "/clearbit-website-transformation",
  },
  {
    name: "Volusion",
    logo: "https://www.datocms-assets.com/22695/1715843813-volusion-c.svg",
    description:
      "Branding elevated Volusion's identity, boosting recognition, engagement, and driving $29B+ in global merchant sales.",
    href: "/volusion-brand-identity-redesign",
  },
  {
    name: "Xero",
    logo: "https://www.datocms-assets.com/22695/1715843826-xero-c.svg",
    description:
      "We delivered rapid UI prototyping for Xero, helping them scale to 4.2M+ global subscribers.",
  },
  {
    name: "Oppo",
    logo: "https://www.datocms-assets.com/22695/1715843839-oppo-c.svg",
    description:
      "Iconography design for ColorOS contributed to OPPO's growth, now reaching over 500 million users.",
    href: "/oppo-coloros-7-iconography-design",
  },
  {
    name: "Salesforce",
    logo: "https://www.datocms-assets.com/22695/1715843855-salesforce-c.svg",
    description:
      "Developing the Lightning Design System micro-interactions, boosting user engagement and efficiency, enhancing overall user satisfaction.",
  },
  {
    name: "Kyber Network",
    logo: "https://www.datocms-assets.com/22695/1715843866-kyber-network-c.svg",
    description:
      "We rebranded Kyber Network, enhancing visibility and engagement, contributing to its $10B+ trading volume milestone.",
    href: "/kyber-network-blockchain-company-brand-design",
  },
];

interface ClientsSectionProps {
  title?: React.ReactNode;
  description?: string;
  showCta?: boolean;
}

export default function ClientsSection({
  title = <>For companies with<br />tech leverage</>,
  description = "We specialize in working with digital products and brands, regardless of the size and lifecycle stage, from startups to established businesses striving to achieve significant tech leverage.",
  showCta = true
}: ClientsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!gridRef.current) return;

      const items = gridRef.current.children;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto w-full max-w-[1312px] px-4">
        <div
          ref={sectionRef}
          className="flex w-full flex-wrap py-[120px] max-[1580px]:py-14"
        >
          {/* Title Section */}
          <div className="mb-0 w-full">
            <div className="flex w-full flex-wrap">
              {/* Left Column - Title */}
              <div className="w-1/2 max-[1024px]:mb-8 max-[1024px]:w-full">
                <h2 className="mt-0 w-4/5 text-left text-[48px] font-semibold leading-[1.2] text-[#262626] max-[1024px]:text-[24px]">
                  {title}
                </h2>
                {showCta && (
                  <Link
                    href="/work"
                    className="group mt-4 inline-flex items-center gap-2 text-[16px] text-[#262626] transition-colors"
                  >
                    All works
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
                )}
              </div>

              {/* Right Column - Description */}
              <div className="w-1/2 max-[1024px]:w-full max-[1024px]:pl-16 max-[767px]:pl-0">
                <p className="m-0 p-0 text-[16px] leading-[1.5] text-[#262626] shadow-none">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* Logos Grid */}
          <div
            ref={gridRef}
            className="relative mt-14 grid w-full grid-cols-5 gap-x-[75px] gap-y-6 max-[767px]:grid-cols-3 max-[767px]:gap-4"
          >
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={`relative opacity-0 transition-opacity duration-300 ease-in ${hoveredIndex !== null && hoveredIndex !== index
                  ? "!opacity-[0.05] grayscale"
                  : ""
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="group relative flex justify-center shadow-none transition-all duration-500 ease-in-out">
                  {/* Logo */}
                  <div className="flex h-[108px] w-full max-w-[202px] items-center justify-center overflow-hidden max-[1024px]:h-auto max-[1024px]:max-w-[112px]">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={202}
                      height={108}
                      className="h-auto w-full"
                    />
                  </div>

                  {/* Description Tooltip */}
                  <div
                    className={`pointer-events-none absolute top-0 z-10 flex min-h-[108px] w-[220px] translate-y-10 items-center bg-[#fafafa] p-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 max-[1024px]:hidden ${(index + 1) % 5 === 0 ? "right-full" : "left-full"
                      }`}
                  >
                    <p className="relative m-0 block w-full text-[16px] leading-[1.5] text-[#262626]">
                      {client.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Custom Cursor */}
            <div className="pointer-events-none absolute hidden">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0727 7.75677L8.36558 1.04967L6.95137 2.46388L11.2855 6.79799L1.45258 6.98834L1.49129 8.98796L11.201 8.8L6.95137 13.0497L8.36558 14.4639L15.0727 7.75677Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
