'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '@/lib/products-data'
import { useCart } from '@/lib/cart-context'
import Footer from '@/components/Footer'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="pdp-stars">
      {[1, 2, 3, 4, 5].map(i => {
        const fill = i <= Math.floor(rating) ? 1 : i - 1 < rating ? rating - Math.floor(rating) : 0
        return (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" style={{ display: 'inline-block' }}>
            <defs>
              <linearGradient id={`star-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="var(--gold)" />
                <stop offset={`${fill * 100}%`} stopColor="var(--muted-2)" />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={`url(#star-${i})`}
              stroke="var(--gold)"
              strokeWidth="1"
            />
          </svg>
        )
      })}
    </div>
  )
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params
  const product = products.find(p => p.id === id)
  if (!product) notFound()

  const { addToCart, openCart } = useCart()
  const gallery = product.images ?? [product.image, product.hoverImage]
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [openDetail, setOpenDetail] = useState<string | null>(null)
  const [added, setAdded] = useState(false)

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null

  const related = products
    .filter(p => p.cat === product.cat && p.id !== product.id)
    .slice(0, 4)

  const handleAddToBag = () => {
    for (let i = 0; i < qty; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        cat: product.cat,
        price: product.price,
        image: product.image,
      })
    }
    setAdded(true)
    openCart()
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main>
      <div style={{ paddingTop: 100 }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb" style={{ marginBottom: 48 }}>
            <Link href="/">Home</Link>
            <span className="sep">✦</span>
            <Link href="/shop">Shop</Link>
            <span className="sep">✦</span>
            <span>{product.name}</span>
          </nav>

          {/* PDP Layout */}
          <div className="pdp">
            {/* Gallery */}
            <div className="pdp-gallery">
              <div className="pdp-main-img" style={{ backgroundImage: `url(${gallery[activeImg]})` }} />
              <div className="pdp-thumb-strip">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`pdp-thumb${activeImg === i ? ' active' : ''}`}
                    onClick={() => setActiveImg(i)}
                    style={{ backgroundImage: `url(${img})` }}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="pdp-info">
              <span className="eyebrow">{product.category}</span>
              <h1 className="pdp-name">{product.name}</h1>

              {/* Rating */}
              {product.rating && (
                <div className="pdp-rating">
                  <StarRating rating={product.rating} />
                  <span className="pdp-rating-text">{product.rating} · {product.reviewCount} reviews</span>
                </div>
              )}

              {/* Price */}
              <div className="pdp-price-block">
                <span className="pdp-price">₹{product.price.toLocaleString('en-IN')}</span>
                {product.oldPrice && (
                  <span className="pdp-old-price">₹{product.oldPrice.toLocaleString('en-IN')}</span>
                )}
                {discount && (
                  <span className="pdp-discount-badge">{discount}% OFF</span>
                )}
              </div>

              {/* Stock */}
              {product.stock !== undefined && (
                <div className={`pdp-stock${product.stock <= 5 ? ' low' : ''}`}>
                  {product.stock <= 5
                    ? `⚠ Only ${product.stock} left in stock`
                    : `✓ In Stock (${product.stock} available)`}
                </div>
              )}

              <div className="pdp-divider" />

              {/* Description */}
              {product.description && (
                <p className="pdp-desc">{product.description}</p>
              )}

              <div className="pdp-divider" />

              {/* Details accordion */}
              {product.details && product.details.length > 0 && (
                <div className="pdp-accordion">
                  <div className="pdp-accordion-title">Product Details</div>
                  {product.details.map(d => (
                    <div key={d.label} className="pdp-accordion-row">
                      <button
                        className={`pdp-accordion-btn${openDetail === d.label ? ' open' : ''}`}
                        onClick={() => setOpenDetail(openDetail === d.label ? null : d.label)}
                      >
                        <span>{d.label}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points={openDetail === d.label ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
                        </svg>
                      </button>
                      {openDetail === d.label && (
                        <div className="pdp-accordion-value">{d.value}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="pdp-divider" />

              {/* Qty + Add to bag */}
              <div className="pdp-actions">
                <div className="qty-stepper">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty(q => q + 1)}>+</button>
                </div>
                <button className="btn btn-solid pdp-add-btn" onClick={handleAddToBag}>
                  {added ? '✓ Added to Bag' : 'Add to Bag'}
                </button>
                <button className="pdp-wish-btn" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              <div className="pdp-divider" />

              {/* Trust badges */}
              <div className="pdp-trust">
                <div className="pdp-trust-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 6v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  <span>Free Shipping over ₹999</span>
                </div>
                <div className="pdp-trust-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>
                  <span>Easy 7-Day Returns</span>
                </div>
                <div className="pdp-trust-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>Hallmarked & Certified</span>
                </div>
                <div className="pdp-trust-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span>Secure Checkout</span>
                </div>
              </div>

              <p className="pdp-ships-note">Usually ships in {product.details?.find(d => d.label === 'Ships In')?.value ?? '2–4 business days'}</p>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="pdp-related">
              <div className="section-head" style={{ marginBottom: 48 }}>
                <div>
                  <span className="eyebrow">More Like This</span>
                  <h2>You May <em>Also Like</em></h2>
                </div>
              </div>
              <div className="products" style={{ gridTemplateColumns: `repeat(${Math.min(related.length, 4)}, 1fr)` }}>
                {related.map(p => (
                  <Link key={p.id} href={`/shop/${p.id}`} className="product">
                    <div className="product-media">
                      {p.badge && (
                        <span className={`badge${p.badgeVariant === 'burgundy' ? ' burgundy' : ''}`}>{p.badge}</span>
                      )}
                      <div className="img" style={{ backgroundImage: `url(${p.image})` }} />
                      <div className="img-hover" style={{ backgroundImage: `url(${p.hoverImage})` }} />
                    </div>
                    <div className="cat">{p.category}</div>
                    <div className="name">{p.name}</div>
                    <div className="price">
                      ₹{p.price.toLocaleString('en-IN')}
                      {p.oldPrice && <span className="old">₹{p.oldPrice.toLocaleString('en-IN')}</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: 96 }}>
        <Footer />
      </div>
    </main>
  )
}
