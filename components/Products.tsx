'use client'

import Link from 'next/link'
import { products } from '@/lib/products-data'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/types'

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: product.id,
      name: product.name,
      cat: product.cat,
      price: product.price,
      image: product.image,
    })
  }

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
          <button className="qbtn" onClick={handleAdd}>Add to Cart</button>
          <button className="qbtn icn" aria-label="Wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="cat">{product.category}</div>
      <div className="name">{product.name}</div>
      <div className="price">
        ₹{product.price.toLocaleString('en-IN')}
        {product.oldPrice && (
          <span className="old">₹{product.oldPrice.toLocaleString('en-IN')}</span>
        )}
      </div>
    </Link>
  )
}

export default function Products() {
  const display = products.slice(0, 4)

  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <span className="eyebrow">Featured</span>
            <h2>
              The Seastar <em>Edit</em>
            </h2>
          </div>
        </div>

        <div className="products" data-reveal="stagger">
          {display.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="products-cta" data-reveal="">
          <Link href="/shop" className="btn btn-solid">
            Explore All Pieces <span style={{ marginLeft: 8 }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
