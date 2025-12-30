"use client";

import { useState } from "react";

export default function SubscribePage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement newsletter subscription API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        companyName: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="mx-auto w-full max-w-[800px] px-4 pt-16 pb-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h1 className="mb-8 text-center text-[92px] font-semibold leading-[1.1] tracking-[-0.2rem] text-[#262626] max-[1024px]:text-[48px] max-[640px]:text-[36px]">
              Join the inner circle
            </h1>

            {/* Description */}
            <p className="mb-10 max-w-[646px] text-[18px] leading-normal text-[#262626] max-[640px]:text-[16px] [hyphens:none] [-webkit-hyphens:none]">
              Sign up for our newsletter and be the first to receive exclusive
              insights, fresh case studies, and the latest updates — delivered
              straight to your inbox by the brand, product, and design teams at
              Ramotion.
            </p>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-8 w-full max-w-[500px] rounded-[10px] bg-[#68FFC9] px-6 py-4 text-[16px] text-[#262626]">
              Thank you for subscribing! You&apos;ll receive our newsletter soon.
            </div>
          )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[500px] space-y-4"
            >
            {/* Email Address */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="w-full rounded-[10px] border border-[#e5e5e5] bg-[#f5f5f5] px-6 py-4 text-[16px] text-[#262626] placeholder:text-[#737373] focus:border-[#262626] focus:bg-white focus:outline-none transition-colors"
            />

            {/* First Name */}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
              className="w-full rounded-[10px] border border-[#e5e5e5] bg-[#f5f5f5] px-6 py-4 text-[16px] text-[#262626] placeholder:text-[#737373] focus:border-[#262626] focus:bg-white focus:outline-none transition-colors"
            />

            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
              className="w-full rounded-[10px] border border-[#e5e5e5] bg-[#f5f5f5] px-6 py-4 text-[16px] text-[#262626] placeholder:text-[#737373] focus:border-[#262626] focus:bg-white focus:outline-none transition-colors"
            />

            {/* Company Name */}
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company name"
              className="w-full rounded-[10px] border border-[#e5e5e5] bg-[#f5f5f5] px-6 py-4 text-[16px] text-[#262626] placeholder:text-[#737373] focus:border-[#262626] focus:bg-white focus:outline-none transition-colors"
            />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full max-w-[320px] h-20 mx-auto my-12 rounded-[40px] bg-[#262626] px-4 py-[9px] text-[24px] font-normal leading-[36px] text-white transition-all duration-300 select-none hover:bg-[#404040] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

