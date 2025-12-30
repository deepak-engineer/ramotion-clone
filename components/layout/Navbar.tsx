"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  {
    href: "/services",
    label: "Services",
    hasDropdown: true,
    dropdownItems: [
      { href: "/brand-strategy", label: "Brand strategy" },
      { href: "/startup-branding", label: "Startup branding" },
      { href: "/branding", label: "Branding" },
      { href: "/web-design", label: "Web design" },
      { href: "/app-design", label: "App design" },
      { href: "/ui-ux-design", label: "UX design" },
      { href: "/design-systems", label: "Design systems" },
      { href: "/web-app-development", label: "Web app development" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1001] transition-all duration-300 ${scrolled
        ? "bg-[#fafafa]/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      {/* Background */}
      <div className="py-5 max-md:py-2.5">
        <div className="mx-auto flex w-full max-w-[1312px] items-center justify-between gap-4 px-4 md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <div className="logo inline-block relative">
            <Link href="/" className="block">
              <svg
                width="117"
                height="16"
                viewBox="0 0 117 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-md:w-[100px] max-md:h-auto"
              >
                <path
                  d="M63.5835 8.07595C63.5756 9.49825 63.1466 10.8863 62.3506 12.0651C61.5547 13.2438 60.4275 14.1605 59.1112 14.6993C57.7949 15.2381 56.3485 15.375 54.9545 15.0927C53.5604 14.8104 52.2813 14.1215 51.2783 13.113C50.2754 12.1045 49.5936 10.8215 49.319 9.42595C49.0445 8.03039 49.1893 6.58476 49.7355 5.27146C50.2816 3.95816 51.2044 2.83605 52.3876 2.04666C53.5707 1.25726 54.9611 0.835959 56.3835 0.835938C57.3323 0.835923 58.2719 1.02348 59.1481 1.38782C60.0242 1.75215 60.8197 2.28609 61.4888 2.95891C62.1579 3.63174 62.6875 4.43018 63.0469 5.30835C63.4064 6.18652 63.5887 7.12707 63.5835 8.07595ZM56.3835 2.97996C55.3749 2.97679 54.3881 3.27295 53.548 3.83098C52.7078 4.38901 52.0521 5.18378 51.664 6.11467C51.2758 7.04556 51.1726 8.0707 51.3674 9.06028C51.5623 10.0499 52.0464 10.9594 52.7584 11.6737C53.4705 12.388 54.3784 12.8749 55.3674 13.0728C56.3564 13.2708 57.3818 13.1708 58.3139 12.7855C59.246 12.4003 60.0429 11.7472 60.6035 10.9088C61.1642 10.0704 61.4635 9.08453 61.4635 8.07595C61.4645 7.40711 61.3337 6.74462 61.0785 6.12639C60.8232 5.50816 60.4487 4.94633 59.9761 4.47302C59.5035 3.99971 58.9422 3.62421 58.3244 3.36802C57.7066 3.11182 57.0443 2.97996 56.3755 2.97996H56.3835Z"
                  fill="#262626"
                />
                <path
                  d="M100.787 8.07595C100.779 9.49825 100.35 10.8863 99.5538 12.0651C98.7578 13.2438 97.6306 14.1605 96.3143 14.6993C94.998 15.2381 93.5516 15.375 92.1576 15.0927C90.7636 14.8104 89.4844 14.1215 88.4815 13.113C87.4785 12.1045 86.7968 10.8215 86.5222 9.42595C86.2476 8.03039 86.3925 6.58476 86.9386 5.27146C87.4847 3.95816 88.4075 2.83605 89.5907 2.04666C90.7738 1.25726 92.1643 0.835959 93.5866 0.835938C94.5355 0.835923 95.475 1.02348 96.3512 1.38782C97.2273 1.75215 98.0228 2.28609 98.692 2.95891C99.3611 3.63174 99.8906 4.43018 100.25 5.30835C100.61 6.18652 100.792 7.12707 100.787 8.07595ZM93.5866 2.97996C92.578 2.97679 91.5912 3.27295 90.7511 3.83098C89.9109 4.38901 89.2553 5.18378 88.8671 6.11467C88.4789 7.04556 88.3757 8.0707 88.5706 9.06028C88.7654 10.0499 89.2495 10.9594 89.9615 11.6737C90.6736 12.388 91.5816 12.8749 92.5705 13.0728C93.5595 13.2708 94.5849 13.1708 95.517 12.7855C96.4492 12.4003 97.246 11.7472 97.8066 10.9088C98.3673 10.0704 98.6666 9.08453 98.6666 8.07595C98.6687 7.40614 98.5383 6.74252 98.283 6.12329C98.0276 5.50406 97.6523 4.94145 97.1787 4.46782C96.7051 3.99419 96.1425 3.6189 95.5232 3.36355C94.904 3.1082 94.2404 2.97784 93.5706 2.97996H93.5866Z"
                  fill="#262626"
                />
                <path
                  d="M76.9557 1.22656H65.0117V3.36255H69.9157V14.9226H72.0517V3.36255H76.9557V1.22656Z"
                  fill="#262626"
                />
                <path
                  d="M82.6397 1.22656H80.5117V14.9226H82.6397V1.22656Z"
                  fill="#262626"
                />
                <path
                  d="M8.92451 9.86655C9.88 9.46447 10.6672 8.74457 11.1528 7.82871C11.6384 6.91285 11.7926 5.85731 11.5893 4.8408C11.386 3.82428 10.8377 2.90924 10.0372 2.25061C9.23664 1.59198 8.23312 1.23022 7.19649 1.22656H0.980469V14.9226H3.1165V10.2105H6.55649L9.46851 14.9226H12.0605L8.92451 9.86655ZM3.1165 8.07456V3.36255H7.19649C7.7976 3.39759 8.36258 3.66108 8.77578 4.09907C9.18898 4.53706 9.41914 5.11642 9.41914 5.71855C9.41914 6.32069 9.18898 6.90005 8.77578 7.33804C8.36258 7.77603 7.7976 8.03952 7.19649 8.07456H3.1165Z"
                  fill="#262626"
                />
                <path
                  d="M43.5916 1.22656L38.4556 10.1946L33.3196 1.22656H31.1836V14.9226H33.3196V5.51456L38.4556 14.4906L43.5916 5.51456V14.9226H45.7356V1.22656H43.5916Z"
                  fill="#262626"
                />
                <path
                  d="M114.864 1.22887V10.5089L104.168 0.796875V14.9249H106.312V5.66087L117.008 15.3489V1.22887H114.864Z"
                  fill="#262626"
                />
                <path
                  d="M21.2526 0.796875L13.9727 14.9249H16.3727L17.9167 11.9329H24.6046L26.1486 14.9249H28.5486L21.2526 0.796875ZM19.0046 9.78887L21.2287 5.46887L23.4606 9.78887H19.0046Z"
                  fill="#262626"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-stack hidden items-center gap-0 md:flex">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className={`nav-item relative whitespace-nowrap ${link.hasDropdown ? "group static" : ""
                  }`}
              >
                {link.hasDropdown ? (
                  <>
                    <span className="relative cursor-pointer select-none px-4 py-2 text-[16px] text-[#262626] transition-colors duration-300 hover:font-medium">
                      {link.label}
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative -left-[3px] top-[3px] ml-0.5 inline-block transition-transform duration-100 ease-out group-hover:rotate-180"
                      >
                        <path
                          d="M8.80077 11L5.33667 5L12.2649 5L8.80077 11Z"
                          fill="#262626"
                        />
                      </svg>
                    </span>
                    {/* Dropdown */}
                    <div className="absolute left-1/2 top-[62px] z-50 hidden -translate-x-1/2 rounded-xl border border-[#1414141f] bg-[#fafafa] p-8 group-hover:flex">
                      <ul className="flex min-w-[240px] flex-col gap-0">
                        {link.dropdownItems?.map((item) => (
                          <li
                            key={item.href}
                            className="group/item relative flex items-center justify-between border-b border-[#26262614] py-3 pr-6 transition-colors duration-200 last:border-0 hover:text-[#262626]"
                          >
                            <Link
                              href={item.href}
                              className="text-[16px] text-[#262626] transition-colors duration-200"
                            >
                              {item.label}
                            </Link>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute right-0 opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100"
                            >
                              <path
                                d="M8.29048 4.81248L4.62168 1.14367L5.68234 0.0830078L11.1624 5.56309L5.68234 11.0432L4.62168 9.9825L8.2917 6.31248H0.787354L0.787354 4.81248H8.29048Z"
                                fill="black"
                              />
                            </svg>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="group/link relative block px-4 py-2 text-[16px] text-[#262626] transition-colors duration-300"
                  >
                    <span className={pathname === link.href ? "font-medium" : ""}>
                      {link.label}
                    </span>
                    {/* Active/Underline animation */}
                    <span
                      className={`absolute bottom-1 left-4 h-[1px] bg-black transition-all duration-300 ease-out 
                        ${pathname === link.href ? "w-[calc(100%-32px)]" : "w-0 group-hover/link:w-[calc(100%-32px)]"}`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="nav-cta hidden items-center justify-end gap-4 md:flex">
            {/* Subscribe Button */}
            <Link
              href="/subscribe"
              className="group/btn relative flex items-center overflow-hidden rounded-[20px] border border-[#262626] text-[16px] leading-[1.5] tracking-[-0.4px] text-[#262626]"
            >
              <span className="relative z-[1] flex w-full items-center justify-center px-6 py-1.5 transition-all duration-300">
                Subscribe
              </span>
              <span className="absolute inset-0 z-[2] flex items-center justify-center bg-[#262626] text-[#fafafa] opacity-0 transition-all duration-300 group-hover/btn:opacity-100">
                Subscribe
              </span>
              <span className="absolute inset-0 origin-right scale-x-0 rounded-[20px] bg-[#262626] transition-transform duration-300 group-hover/btn:origin-left group-hover/btn:scale-x-100" />
            </Link>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="group/btn relative flex items-center overflow-hidden rounded-[20px] border border-[#262626] bg-[#262626] text-[16px] leading-[1.5] tracking-[-0.4px] text-white"
            >
              <span className="relative z-[1] flex w-full items-center justify-center gap-1 px-6 py-1.5 transition-all duration-300">
                Contact
                <span className="relative top-[2px] inline-block w-[18px] overflow-hidden">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover/btn:translate-x-0"
                  >
                    <path
                      d="M13.1237 4.81222L9.45487 1.14342L10.5155 0.0827573L15.9956 5.56283L10.5155 11.0429L9.45487 9.98225L13.1249 6.31222L0.187622 6.31226L0.187622 4.81226L13.1237 4.81222Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </span>
              <span className="absolute inset-0 z-[2] flex items-center justify-center gap-1 text-[#262626] opacity-0 transition-all duration-300 group-hover/btn:opacity-100">
                Contact
                <span className="relative top-[2px] inline-block w-[18px] overflow-hidden">
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
              </span>
              <span className="absolute inset-0 origin-right scale-x-0 rounded-[20px] bg-[#fafafa] transition-transform duration-300 group-hover/btn:origin-left group-hover/btn:scale-x-100" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="nav-stack open-navigation cursor-pointer md:hidden">
            <button
              type="button"
              className="p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mobile Nav"
            >
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="36"
                  height="36"
                  rx="18"
                  stroke="#262626"
                />
                {mobileMenuOpen ? (
                  <>
                    <path
                      d="M13 13L24 24"
                      stroke="#262626"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M24 13L13 24"
                      stroke="#262626"
                      strokeWidth="1.5"
                    />
                  </>
                ) : (
                  <>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 15.25H12.5V13.75H24V15.25Z"
                      fill="#262626"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 19.25H12.5V17.75H24V19.25Z"
                      fill="#262626"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 23.25H12.5V21.75H24V23.25Z"
                      fill="#262626"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[2000] bg-white transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex h-full flex-col p-8 pt-[120px]">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="overflow-hidden">
                <Link
                  href={link.href}
                  className="group flex items-center gap-4 py-2 text-[48px] font-bold tracking-tight text-[#262626] transition-transform duration-300 active:scale-95"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative top-[4px]"
                    >
                      <path
                        d="M26.2905 12.8122L11.6217 27.481L13.743 29.6023L31.1824 12.1629L13.743 4.72351L11.6217 6.84483L26.293 21.5149H0.787354V24.5149L26.2905 12.8122Z"
                        fill="black"
                        className="scale-[0.5] origin-center"
                      />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <Link
              href="/subscribe"
              className="text-[32px] font-bold tracking-tight text-[#262626]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscribe
            </Link>
            <Link
              href="/contact"
              className="text-[32px] font-bold tracking-tight text-[#262626]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Close Button at bottom right */}
          <button
            type="button"
            className="absolute bottom-12 right-8 flex h-20 w-20 items-center justify-center rounded-full border border-black transition-transform active:scale-90"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Mobile Nav"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
