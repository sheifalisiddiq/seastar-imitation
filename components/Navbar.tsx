'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '@/lib/cart-context'

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { cartCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`nav${scrolled ? ' scrolled' : ''}`}
        style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}
      >
        {/* Logo — left column */}
        <Link href="/" className="brand" style={{ justifyContent: 'flex-start' }}>
          <img
            src="/logo.jpeg"
            alt="Sea Star Jewels"
            style={{ height: 56, width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
          />
        </Link>

        {/* All links — center column */}
        <ul className="nav-links" style={{ display: 'flex' }}>
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons — right column */}
        <div className="nav-actions" style={{ justifySelf: 'end' }}>
          {/* Search */}
          <button className="nav-icon" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          {/* Cart */}
          <button className="nav-icon" onClick={openCart} aria-label="Cart" style={{ position: 'relative' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
          {/* Hamburger */}
          <button
            className="nav-icon menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button
          onClick={() => setMobileOpen(false)}
          style={{ position: 'absolute', top: 24, right: 24, color: 'var(--muted)', fontSize: 28 }}
          aria-label="Close menu"
        >
          ×
        </button>
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className={pathname === l.href ? 'active' : ''}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
