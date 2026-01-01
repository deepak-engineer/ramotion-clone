interface Service {
  id: number
  title: string
  description: string
  href: string
  theme: "green" | "blue" | "purple"
  features?: string[]
  icon?: string
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web App Development",
    description: "Ramotion is a global web app development company crafting scalable, secure, and user-centric web applications with seamless API integration and responsive design.",
    href: "/contact",
    theme: "green",
    features: ["Scalable", "Secure", "User-centric", "API Integration"],
    icon: "🌐"
  },
  {
    id: 2,
    title: "Branding",
    description: "Ramotion is a global branding agency that creates impactful branding strategies, supports rebranding, and guides client growth through strategic advertising support.",
    href: "/contact",
    theme: "blue",
    features: ["Brand Strategy", "Rebranding", "Advertising", "Growth"],
    icon: "🎨"
  },
  {
    id: 3,
    title: "UX Design",
    description: "Ramotion delivers research-driven UX design, combining usability, interaction, and visual design to craft engaging, accessible digital experiences that users love.",
    href: "/contact",
    theme: "purple",
    features: ["Research-driven", "Usability", "Interaction", "Visual Design"],
    icon: "✨"
  },
]