'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import Footer from '@/components/Footer'

const cols = [
  {
    name: 'Gold Plated',
    nameEm: 'Royale',
    count: '24 Pieces',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Oxidised',
    nameEm: 'Antiqua',
    count: '18 Pieces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Antique',
    nameEm: 'Heritage',
    count: '31 Pieces',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Bridal',
    nameEm: 'Saanjh',
    count: '12 Pieces',
    image: 'https://images.unsplash.com/photo-1583937443566-6fe1a1c7e2ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Everyday',
    nameEm: 'Mira',
    count: '28 Pieces',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fine',
    nameEm: 'Velvet',
    count: '9 Pieces',
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=800&q=80',
  },
]

const saanjhImages = [
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=600&q=80',
]

export default function CollectionsPage() {
  const { addToCart } = useCart()
  const [activeThumb, setActiveThumb] = useState(0)

  const handleAdd = () => {
    addToCart({
      id: 'p2',
      name: 'Saanjh Jhumka',
      cat: 'oxidised',
      price: 1290,
      image: saanjhImages[0],
    })
  }

  return (
    <main>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow center">Curated</span>
          <h1>Our <em>Collections</em></h1>
          <p>Six worlds of jewellery — each a distinct expression of Indian craft.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">✦</span>
            <span>Collections</span>
          </div>
        </div>
      </div>

      {/* Collections grid */}
      <section className="section">
        <div className="container">
          <div className="collections">
            {cols.map((col, i) => (
              <div key={i} className="col-card">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${col.image})` }}
                />
                <div className="corners" />
                <div className="meta">
                  <span className="count">{col.count}</span>
                  <div className="name">
                    {col.name} <em>{col.nameEm}</em>
                  </div>
                  <div className="hover-cta">
                    Explore <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDP Feature — Saanjh Jhumka */}
      <section className="section-tight" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow center">Featured Piece</span>
            <h2 style={{ marginTop: 20 }}>
              The <em>Saanjh</em> Jhumka
            </h2>
          </div>

          <div className="pdp">
            {/* Gallery */}
            <div className="pdp-gallery">
              <div className="pdp-thumbs">
                {saanjhImages.map((img, i) => (
                  <div
                    key={i}
                    className={`t${activeThumb === i ? ' active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                    onClick={() => setActiveThumb(i)}
                  />
                ))}
              </div>
              <div
                className="pdp-main"
                style={{ backgroundImage: `url(${saanjhImages[activeThumb]})` }}
              >
                <div className="frame" />
              </div>
            </div>

            {/* Info */}
            <div className="pdp-info">
              <div className="cat">Oxidised Silver · Bestseller</div>
              <h1>Saanjh Jhumka</h1>
              <div className="pdp-price">
                <span className="now">₹1,290</span>
                <span className="badge">Bestseller</span>
              </div>
              <p style={{ color: 'var(--paper)', opacity: 0.82, lineHeight: 1.8, marginBottom: 28 }}>
                The Saanjh Jhumka takes its name from the golden hour — that twilight moment
                when the world blushes amber. Handcrafted in oxidised silver with intricate
                filigree work, each pair is a meditation on time, tradition, and beauty.
              </p>
              <p style={{ color: 'var(--paper)', opacity: 0.7, fontSize: 13, marginBottom: 32, lineHeight: 1.7 }}>
                Material: Oxidised German Silver · Weight: 18g · Dimensions: 6cm drop · Ear hook closure
              </p>
              <div className="pdp-actions">
                <div className="qty">
                  <button>−</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <button className="btn btn-solid" onClick={handleAdd}>
                  Add to Bag <span className="arrow">→</span>
                </button>
              </div>
              <div style={{ display: 'flex', gap: 24, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                <span style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  ✦ Free shipping above ₹999
                </span>
                <span style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  ✦ 30-day returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
