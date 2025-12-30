import Link from "next/link";

const footerLinks = {
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/ramotion" },
    { label: "Instagram", href: "https://instagram.com/ramotion" },
    { label: "Bēhance", href: "https://behance.net/ramotion" },
    { label: "Dribbble", href: "https://dribbble.com/ramotion" },
    { label: "X (Twitter)", href: "https://twitter.com/ramotion" },
    { label: "Clutch", href: "https://clutch.co/profile/ramotion" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case studies", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "Services", href: "/services" },
    { label: "Awards", href: "/awards" },
  ],
  learn: [
    { label: "Reviews", href: "/reviews" },
    { label: "FAQs", href: "/faqs" },
    { label: "Articles", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  locations: [
    { label: "San Francisco, CA", href: "#" },
    { label: "Los Angeles, CA", href: "#" },
    { label: "New York, NY", href: "#" },
  ],
  branding: [
    { label: "Fintech branding", href: "/fintech-branding" },
    { label: "Cybersecurity branding", href: "/cybersecurity-branding" },
    { label: "Healthcare branding", href: "/healthcare-branding" },
  ],
  sf: [
    { label: "SF web design", href: "/sf-web-design" },
    { label: "SF branding", href: "/sf-branding" },
    { label: "SF UX design", href: "/sf-ux-design" },
  ],
  la: [
    { label: "LA branding", href: "/la-branding" },
    { label: "LA web design", href: "/la-web-design" },
    { label: "LA UX design", href: "/la-ux-design" },
  ],
  nyc: [
    { label: "NYC branding", href: "/nyc-branding" },
    { label: "NYC web design", href: "/nyc-web-design" },
    { label: "NYC UX design", href: "/nyc-ux-design" },
  ],
  startup: [
    { label: "Branding for startups", href: "/branding-for-startups" },
    { label: "Web design for startups", href: "/web-design-for-startups" },
    { label: "UX design for startups", href: "/ux-design-for-startups" },
  ],
  brandingServices: [
    { label: "Brand strategy", href: "/brand-strategy" },
    { label: "Brand identity", href: "/brand-identity" },
    { label: "Rebranding", href: "/rebranding" },
  ],
  b2b: [
    { label: "B2B branding", href: "/b2b-branding" },
    { label: "B2B web design", href: "/b2b-web-design" },
    { label: "B2B UX design", href: "/b2b-ux-design" },
  ],
  saas: [
    { label: "SaaS branding", href: "/saas-branding" },
    { label: "SaaS web design", href: "/saas-web-design" },
    { label: "SaaS UX design", href: "/saas-ux-design" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e5e5]">
      <div className="mx-auto w-full max-w-[1312px] px-4">
        <div className="py-[80px] max-[1024px]:py-12">
          {/* Newsletter Section - Top of Footer */}
          <div className="mb-16 rounded-[10px] bg-[#f5f5f5] p-8 max-[1024px]:mb-12 max-[640px]:p-6">
            <div className="flex items-center justify-between gap-8 max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:gap-6">
              <div className="flex-1">
                <h2 className="mb-2 text-[24px] font-semibold leading-[1.2] text-[#262626] max-[1024px]:text-[20px]">
                  Sign up for our newsletter
                </h2>
                <p className="text-[16px] leading-[1.5] text-[#737373]">
                  Insights, case studies, and updates from the expert teams at Ramotion.
                </p>
              </div>
              <Link
                href="/subscribe"
                className="group flex items-center justify-center rounded-[10px] border border-[#262626] bg-white px-6 py-3 text-[16px] font-medium text-[#262626] transition-all hover:bg-[#fafafa] whitespace-nowrap max-[1024px]:w-full"
              >
                Subscribe
              </Link>
            </div>
          </div>
          {/* Footer Links - 5 Columns */}
          <div className="grid grid-cols-5 gap-8 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wider text-[#262626]">
                Social
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#737373] transition-colors hover:text-[#262626]"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wider text-[#262626]">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#737373] transition-colors hover:text-[#262626]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wider text-[#262626]">
                Learn
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.learn.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#737373] transition-colors hover:text-[#262626]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wider text-[#262626]">
                Locations
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.locations.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#737373] transition-colors hover:text-[#262626]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in touch */}
            <div>
              <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wider text-[#262626]">
                Get in touch
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="tel:+18884108885"
                    className="text-[14px] text-[#737373] transition-colors hover:text-[#262626]"
                  >
                    +1 888 410 8885
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[14px] text-[#737373] transition-colors hover:text-[#262626]"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 border-t border-[#e5e5e5] pt-8 max-[1024px]:mt-8">
            <div className="flex flex-wrap items-center justify-between gap-4 max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:gap-6">
              <span className="text-[14px] text-[#737373]">
                © 2025 Ramotion Inc. All rights reserved
              </span>
              <a
                href="mailto:info@ramotion.com"
                className="text-[14px] text-[#737373] transition-colors hover:text-[#262626]"
              >
                info@ramotion.com
              </a>
              <div className="flex flex-wrap items-center gap-0 text-[14px] text-[#737373] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-4">
                <Link
                  href="/sitemap"
                  className="border-r border-[#e5e5e5] pr-4 transition-colors hover:text-[#262626] last:border-0 max-[640px]:border-0 max-[640px]:pr-0"
                >
                  Sitemap
                </Link>
                <Link
                  href="/privacy-policy"
                  className="border-r border-[#e5e5e5] px-4 transition-colors hover:text-[#262626] last:border-0 max-[640px]:border-0 max-[640px]:px-0"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-use"
                  className="border-r border-[#e5e5e5] px-4 transition-colors hover:text-[#262626] last:border-0 max-[640px]:border-0 max-[640px]:px-0"
                >
                  Terms of Use
                </Link>
                <Link
                  href="/cookie-policy"
                  className="border-r border-[#e5e5e5] px-4 transition-colors hover:text-[#262626] last:border-0 max-[640px]:border-0 max-[640px]:px-0"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/trust-portal"
                  className="pl-4 transition-colors hover:text-[#262626] max-[640px]:pl-0"
                >
                  Trust Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

