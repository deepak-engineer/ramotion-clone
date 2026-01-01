"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function BookingCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: ""
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: { trigger: titleRef.current, start: "top 85%" }
          }
        )
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: { trigger: formRef.current, start: "top 85%" }
          }
        )

        gsap.fromTo(
          formRef.current.querySelectorAll("input, textarea"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: formRef.current, start: "top 85%" }
          }
        )
      }

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: buttonsRef.current, start: "top 85%" }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#6d0900] via-[#8b1a1a] to-[#4a0600] py-[120px] max-[1024px]:py-[80px]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-white opacity-10 blur-[80px]" />
        <div className="absolute right-[15%] bottom-[20%] h-[600px] w-[600px] rounded-full bg-[#FFD1F3] opacity-5 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-5 blur-[150px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1312px] px-4">
        {/* Title */}
        <div className="mb-12 text-center max-[1024px]:mb-8">
          <h2
            ref={titleRef}
            className="text-[48px] font-bold leading-[54px] text-white max-[1024px]:text-[32px]"
          >
            Ready to transform your brand?
          </h2>
          <p className="mt-4 text-[20px] text-white/80 max-[1024px]:text-[18px]">
            Let's discuss how we can help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 max-[1024px]:grid-cols-1">
          {/* Form */}
          <div ref={formRef}>
            <h3 className="mb-8 text-[28px] font-semibold text-white max-[1024px]:text-[24px]">
              Start the conversation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                <inputField
                  label="Your Name *"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
                <inputField
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                />
              </div>
              <inputField
                label="Company Name"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Acme Inc."
              />
              <textareaField
                label="Tell us about your project"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                placeholder="What challenges are you trying to solve? What's your timeline?"
              />
              <button
                type="submit"
                className="group relative w-full rounded-[20px] border border-[#6d0900] bg-white text-[#6d0900] text-[18px] py-4 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Send message</span>
                <span className="absolute inset-0 bg-[#6d0900] rounded-[20px] scale-x-0 origin-right transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Send message
                </span>
              </button>
            </form>
          </div>

          {/* Contact Options */}
          <div>
            <h3 className="mb-8 text-[28px] font-semibold text-white max-[1024px]:text-[24px]">
              Other ways to connect
            </h3>
            <div className="space-y-8">
              {["Direct Contact", "Schedule Call", "Our Offices"].map(
                (section, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <h4 className="mb-4 text-[20px] font-medium text-white">
                      {section}
                    </h4>
                    <p className="text-white/70">
                      {/* Placeholder text */}
                      {section === "Direct Contact" &&
                        "Email: hello@ramotion.com, Phone: +1-555-0123"}
                      {section === "Schedule Call" &&
                        "Book a 30-minute discovery call."}
                      {section === "Our Offices" &&
                        "San Francisco, CA | New York, NY | London, UK"}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div ref={buttonsRef} className="mt-16 text-center">
          <p className="mb-6 text-white/60">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Netflix", "Adobe", "Mozilla", "Salesforce", "Citrix"].map(
              (company, idx) => (
                <span key={idx} className="text-white font-medium text-[14px]">
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper input component
function inputField({ label, name, type, value, onChange, placeholder }: any) {
  return (
    <div>
      <label className="mb-2 block text-[14px] font-medium text-white/80">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
      />
    </div>
  )
}

// Helper textarea component
function textareaField({ label, name, value, onChange, placeholder }: any) {
  return (
    <div>
      <label className="mb-2 block text-[14px] font-medium text-white/80">
        {label}
      </label>
      <textarea
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
      />
    </div>
  )
}
