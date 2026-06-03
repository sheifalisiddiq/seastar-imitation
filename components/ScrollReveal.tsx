'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    let observer: IntersectionObserver

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
      )

      const els = document.querySelectorAll('[data-reveal]')
      els.forEach(el => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
    }
  }, [pathname])

  return null
}
