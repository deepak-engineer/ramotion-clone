"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/* ===================== TYPES ===================== */

type FormData = {
  name: string
  email: string
  company: string
  project: string
}

/* ===================== MAIN COMPONENT ===================== */

export default function BookingCTA() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const formRef = useRef<HTMLDivElement | null>(null)
  const buttonsRef = useRef<HTMLDivElement | null>(null)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    project: ""
  })

  /* ===================== ANIMATIONS ===================== */

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
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%"
            }
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
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%"
            }
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
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%"
            }
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
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 85%"
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  /* ===================== HANDLERS ===================== */

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  /* ===================== JSX ===================== */

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#6d0900] via-[#8b1a1a] to-[#4a0600] py-[120px]"
    >
      <div className="relative mx-auto max-w-[1312px] px-4">
        <div className="mb-12 text-center">
          <h2 ref={titleRef} className="text-[48px] font-bold text-white">
            Ready to transform your brand?
          </h2>
          <p className="mt-4 text-white/80">
            Let's discuss how we can help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1">
          <div ref={formRef}>
            <h3 className="mb-8 text-[28px] font-semibold text-white">
              Start the conversation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <InputField
                  label="Your Name *"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <InputField
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <InputField
                label="Company Name"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
              />

              <TextareaField
                label="Tell us about your project"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-white py-4 text-[#6d0900] text-lg font-medium"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===================== HELPER COMPONENTS ===================== */

type InputProps = {
  label: string
  name: string
  type: React.HTMLInputTypeAttribute
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

function InputField({ label, name, type, value, onChange }: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/80">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white"
      />
    </div>
  )
}

type TextareaProps = {
  label: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

function TextareaField({ label, name, value, onChange }: TextareaProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/80">{label}</label>
      <textarea
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white"
      />
    </div>
  )
}
