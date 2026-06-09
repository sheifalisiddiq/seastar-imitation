'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/types'
import Footer from '@/components/Footer'

const sorts = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest']

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  return (
    <Link href={`/shop/${product.id}`} className="product">
      <div className="product-media">
        {product.badge && (
          <span className={`badge${product.badgeVariant === 'burgundy' ? ' burgundy' : ''}`}>
            {product.badge}
          </span>
        )}
        <div className="img" style={{ backgroundImage: `url(${product.image})` }} />
        <div className="img-hover" style={{ backgroundImage: `url(${product.hoverImage})` }} />
        <div className="quick">
          <button
            className="qbtn"
            onClick={e => {
              e.preventDefault()
              addToCart({
                id: product.id,
                name: product.name,
                cat: product.cat,
                price: product.price,
                image: product.image,
              })
            }}
          >
            Add to Cart
          </button>
          <button className="qbtn icn" aria-label="Wishlist" onClick={e => e.preventDefault()}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="cat">{product.category}</div>
      <div className="name">{product.name}</div>
      <div className="price">
        AED {product.price.toLocaleString('en-AE')}
        {product.oldPrice && (
          <span className="old">AED {product.oldPrice.toLocaleString('en-AE')}</span>
        )}
      </div>
    </Link>
  )
}

export default function ShopClient({ products }: { products: Product[] }) {
  const [activeCat, setActiveCat] = useState('All')
  const [activeSort, setActiveSort] = useState('Featured')

  const categories = useMemo(() => {
    const counts: Record<string, number> = { All: products.length }
    products.forEach(p => {
      counts[p.category] = (counts[p.category] ?? 0) + 1
    })
    return Object.entries(counts).map(([label, count]) => ({ label, count }))
  }, [products])

  const filtered = activeCat === 'All'
    ? products
    : products.filter(p =>
        p.category.toLowerCase().includes(activeCat.toLowerCase()) ||
        p.cat.toLowerCase().includes(activeCat.toLowerCase())
      )

  const sorted = [...filtered].sort((a, b) => {
    if (activeSort === 'Price: Low to High') return a.price - b.price
    if (activeSort === 'Price: High to Low') return b.price - a.price
    return 0
  })

  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow center">All Jewellery</span>
          <h1>The Seastar <em>Edit</em></h1>
          <p>Every piece, every story — curated for the discerning collector.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">✦</span>
            <span>Shop</span>
          </div>
        </div>
      </div>

      <section className="section-tight">
        <div className="container">
          <div className="shop-layout">
            <aside className="filters">
              <div className="filter-group">
                <h4>Category</h4>
                <ul>
                  {categories.map(cat => (
                    <li
                      key={cat.label}
                      className={activeCat === cat.label ? 'active' : ''}
                      onClick={() => setActiveCat(cat.label)}
                    >
                      {cat.label}
                      <span className="count">{cat.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-group">
                <h4>Price Range</h4>
                <div className="price-range">
                  <div className="knob l" />
                  <div className="knob r" />
                </div>
                <div className="price-vals">
                  <span>AED 50</span>
                  <span>AED 5,000</span>
                </div>
              </div>

              <div className="filter-group">
                <h4>Finish</h4>
                <div className="swatches">
                  <div className="sw active" style={{ background: 'linear-gradient(135deg, #c9a35a, #e6cf95)' }} title="Gold" />
                  <div className="sw" style={{ background: '#6b6b6b' }} title="Oxidised" />
                  <div className="sw" style={{ background: '#8a6a2e' }} title="Antique" />
                  <div className="sw" style={{ background: '#c0a0b0' }} title="Pearl" />
                </div>
              </div>
            </aside>

            <div>
              <div className="shop-bar">
                <span className="count">{sorted.length} products</span>
                <div className="sort">
                  <span>Sort by</span>
                  <select value={activeSort} onChange={e => setActiveSort(e.target.value)}>
                    {sorts.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {sorted.length === 0 ? (
                <div style={{ padding: '80px 0', textAlign: 'center', color: 'var(--muted)' }}>
                  No products found in this category yet.
                </div>
              ) : (
                <div className="products" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  {sorted.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
