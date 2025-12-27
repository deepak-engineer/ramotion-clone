"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay was prevented, user interaction required
      });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!reelRef.current) return;
    const rect = reelRef.current.getBoundingClientRect();
    setButtonPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsButtonVisible(true);
  const handleMouseLeave = () => setIsButtonVisible(false);

  return (
    <section className="bg-[#fafafa]">
      {/* Page Title Section */}
      <div className="mx-auto w-full max-w-[1312px] px-4">
        <div className="flex w-full flex-col items-center justify-center px-4 py-[184px] max-[1580px]:py-[140px] max-[1024px]:py-[128px] max-[1024px]:pb-16">
          <h1 className="mb-8 text-center text-[92px] font-semibold leading-[1.1] tracking-[-0.2rem] text-[#262626] max-[1024px]:text-[48px] max-[1024px]:tracking-[-0.1rem]">
            Product & brand
            <br className="max-[1580px]:hidden" />
            <span className="max-[1580px]:inline"> </span>
            design agency
          </h1>
          <p className="m-0 max-w-[980px] text-center text-[18px] leading-[1.55] text-[#262626]">
            We help marketing & product executives build impactful brands,
            engage users, and drive growth
          </p>
        </div>
      </div>

      {/* Video Reel Section */}
      <div className="mx-auto w-full max-w-[1312px] px-4">
        <div
          ref={reelRef}
          className="relative mb-[120px] flex w-full cursor-none flex-wrap justify-center rounded-[10px] max-[1580px]:mb-14"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/work" className="block w-full" aria-label="All works">
            <video
              ref={videoRef}
              className="w-full cursor-none rounded-[10px]"
              poster="https://www.datocms-assets.com/22695/1735563933-main-reel-1920.jpg"
              src="https://cdn.ramotion.com/1715091338-30fps.mp4"
              playsInline
              preload="auto"
              muted
              loop
              autoPlay
            />
          </Link>

          {/* Custom Cursor Button */}
          <div
            className={`pointer-events-none absolute z-10 flex items-center gap-2 rounded-full bg-[#262626] px-6 py-3 text-[15px] font-medium text-white transition-opacity duration-200 ${
              isButtonVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: buttonPosition.x,
              top: buttonPosition.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            All works
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.29048 4.81223L4.62168 1.14342L5.68234 0.0827637L11.1624 5.56284L5.68234 11.0429L4.62168 9.98226L8.2917 6.31223H0.787354L0.787354 4.81223H8.29048Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
