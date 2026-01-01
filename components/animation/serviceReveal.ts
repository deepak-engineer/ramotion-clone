export function servicesReveal(container: HTMLElement) {
  const cards = container.querySelectorAll<HTMLElement>(".service-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement
        if (entry.isIntersecting) {
          // Make card visible
          target.classList.add("visible")
          
          // Entrance animation
          target.style.transform = "translateY(0) scale(1)"
          target.style.opacity = "1"
          
          // Subtle bounce effect
          setTimeout(() => {
            target.style.transform = "translateY(-5px) scale(1.02)"
            setTimeout(() => {
              target.style.transform = "translateY(0) scale(1)"
            }, 150)
          }, 400)
          
          // Trigger shimmer
          const shimmer = target.querySelector('.shimmer-effect') as HTMLElement
          if (shimmer) {
            shimmer.style.animation = 'shimmer 0.8s ease-out'
            setTimeout(() => {
              shimmer.style.animation = ''
            }, 800)
          }
          
          observer.unobserve(target)
        }
      })
    },
    { threshold: 0.15, rootMargin: "50px" }
  )

  cards.forEach((card, i) => {
    // Initial state
    card.style.opacity = "0"
    card.style.transform = "translateY(40px) scale(0.96)"
    card.style.transition = `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 150}ms`
    
    observer.observe(card)
  })
}

export function addShimmerAnimation() {
  if (document.querySelector('#shimmer-style')) return
  
  const style = document.createElement('style')
  style.id = 'shimmer-style'
  style.textContent = `
    @keyframes shimmer {
      0% { 
        transform: translateX(-100%) skewX(-15deg); 
        opacity: 0.3;
      }
      50% { 
        opacity: 0.6;
      }
      100% { 
        transform: translateX(100%) skewX(-15deg);
        opacity: 0;
      }
    }
    
    .shimmer-effect {
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.4) 50%,
        transparent 100%
      );
    }
  `
  document.head.appendChild(style)
}