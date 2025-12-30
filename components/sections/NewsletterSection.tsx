"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement newsletter subscription API
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thank you for subscribing!");
    }, 1000);
  };

  return (
    <section className="bg-[#fafafa] border-t border-[#e5e5e5] py-[120px] max-[1024px]:py-14">
      <div className="mx-auto w-full max-w-[1312px] px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-[48px] font-semibold leading-[1.2] text-[#262626] max-[1024px]:text-[32px]">
            Sign up for our newsletter
          </h2>
          <p className="mb-10 max-w-[600px] text-[18px] leading-[1.5] text-[#262626]">
            Insights, case studies, and updates from the expert teams at Ramotion.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[500px] gap-3 max-[640px]:flex-col"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border border-[#262626] bg-white px-6 py-4 text-[16px] text-[#262626] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#262626] max-[640px]:w-full"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#262626] px-8 py-4 text-[16px] font-medium text-white transition-all hover:bg-[#404040] disabled:opacity-50 disabled:cursor-not-allowed max-[640px]:w-full max-[640px]:justify-center"
            >
              <span className="relative z-10">Subscribe</span>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M13.1237 4.81222L9.45487 1.14342L10.5155 0.0827573L15.9956 5.56283L10.5155 11.0429L9.45487 9.98225L13.1249 6.31222L0.187622 6.31226L0.187622 4.81226L13.1237 4.81222Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

