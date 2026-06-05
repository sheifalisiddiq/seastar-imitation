'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const innerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      const y = window.scrollY
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${y * 0.28}px) scale(1.1)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Particles
    if (particlesRef.current) {
      const container = particlesRef.current
      const count = 28
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div')
        p.className = 'particle'
        p.style.left = Math.random() * 100 + '%'
        p.style.top = Math.random() * 100 + '%'
        p.style.animationDuration = (8 + Math.random() * 14) + 's'
        p.style.animationDelay = (Math.random() * 8) + 's'
        p.style.width = (1 + Math.random() * 2) + 'px'
        p.style.height = p.style.width
        container.appendChild(p)
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (particlesRef.current) {
        particlesRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <section className="hero">
      {/* Video */}
      <video
        ref={videoRef}
        className="hero-video"
        src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ transform: 'scale(1.1)' }}
      />
      {/* Fallback */}
      <div className="hero-fallback" style={{ zIndex: -1 }} />

      <div className="hero-vignette" />
      <div className="hero-streaks" />
      <div className="particles" ref={particlesRef} />

      <div className="hero-inner" ref={innerRef}>
        <div className="hero-eyebrow">
          <span className="dot" />
          New Collection 2025
          <span className="dot" />
        </div>

        <h1>
          <span className="line"><span>Where Gold</span></span>
          <span className="line"><span><em>Meets</em> Soul</span></span>
          <span className="line"><span>Crafted Heirlooms</span></span>
        </h1>

        <p className="hero-sub">
          Adorned in light — each piece a quiet story of artisanship, heritage, and the
          modern woman who wears it. Luxury imitation jewellery, reimagined.
        </p>

        <div className="hero-cta">
          <Link href="/shop" className="btn btn-solid">
            Explore Collection <span className="arrow">→</span>
          </Link>
          <Link href="/about" className="btn">
            Our Story <span className="arrow">→</span>
          </Link>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  )
}
