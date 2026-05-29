'use client'

import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      document.body.classList.add('no-cursor')
      return
    }

    const dot = document.createElement('div')
    dot.className = 'cursor-dot'
    const ring = document.createElement('div')
    ring.className = 'cursor-ring'
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    const onDown = () => ring.classList.add('click')
    const onUp = () => ring.classList.remove('click')

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.col-card') ||
        target.closest('.product') ||
        target.closest('.insta-tile')
      ) {
        ring.classList.add('hover')
      }
    }

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.col-card') ||
        target.closest('.product') ||
        target.closest('.insta-tile')
      ) {
        ring.classList.remove('hover')
      }
    }

    const lerp = 0.18
    const animate = () => {
      ringX += (mouseX - ringX) * lerp
      ringY += (mouseY - ringY) * lerp
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(rafId)
      if (dot.parentNode) dot.parentNode.removeChild(dot)
      if (ring.parentNode) ring.parentNode.removeChild(ring)
    }
  }, [])

  return null
}
