import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand block */}
          <div className="brand-block">
            <div className="logo">
              <img src="/logo.jpeg" alt="Sea Star Jewels" style={{ height: 52, width: 'auto', objectFit: 'contain' }} />
            </div>
            <p>
              24K gold-plated, oxidised, antique &amp; anti-tarnish waterproof jewellery.
              Based in Karama, Dubai — worn everywhere.
            </p>
            <div className="socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.37 1.27-5.37s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.53 0 .93-.6 2.33-.9 3.62-.26 1.08.53 1.96 1.59 1.96 1.91 0 3.18-2.44 3.18-5.32 0-2.19-1.48-3.83-4.17-3.83-3.04 0-4.93 2.27-4.93 4.8 0 .87.26 1.48.66 1.95.18.21.21.3.14.55-.05.18-.16.61-.2.78-.06.25-.26.34-.47.25-1.39-.57-2.04-2.1-2.04-3.82 0-2.84 2.39-6.24 7.14-6.24 3.82 0 6.33 2.76 6.33 5.74 0 3.92-2.17 6.85-5.38 6.85-1.08 0-2.09-.58-2.44-1.24l-.68 2.6c-.24.92-.72 1.84-1.13 2.56.85.26 1.75.4 2.68.4 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h5>Shop</h5>
            <ul>
              <li><Link href="/shop">All Jewellery</Link></li>
              <li><Link href="/collections">Necklaces</Link></li>
              <li><Link href="/collections">Bangles</Link></li>
              <li><Link href="/collections">Rings</Link></li>
              <li><Link href="/collections">Bracelets</Link></li>
              <li><Link href="/collections">Anklets</Link></li>
            </ul>
          </div>

          {/* House */}
          <div>
            <h5>Seastar House</h5>
            <ul>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/about">Craftsmanship</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact">Wholesale</Link></li>
              <li><Link href="/about">Press</Link></li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h5>Visit</h5>
            <div className="contact-item" style={{ marginBottom: 18 }}>
              <strong>Address</strong>
              Shop No. 47, Karama Centre<br />
              Sea Star Textile, Near Mallu Cafe<br />
              Karama, Dubai
            </div>
            <div className="contact-item" style={{ marginBottom: 18 }}>
              <strong>Hours</strong>
              Mon – Sat: 10am – 7pm<br />
              Sunday: Closed
            </div>
            <div className="contact-item">
              <strong>Contact</strong>
              hello@seastarimitation.in<br />
              +91 98765 43210
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>© 2025 Sea Star Jewels. All rights reserved.</div>
          <div className="legal">
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Terms of Service</Link>
            <Link href="/contact">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
