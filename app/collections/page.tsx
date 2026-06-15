import Link from 'next/link'
import Footer from '@/components/Footer'
import { getAllProducts } from '@/lib/sanity'

export default async function CollectionsPage() {
  const products = await getAllProducts()

  const categoryOrder = ['Necklace', 'Earrings', 'Rings', 'Bangles', 'Bracelets', 'Anklets']

  const grouped = categoryOrder
    .map(cat => ({
      category: cat,
      products: products.filter(p => p.category === cat),
    }))
    .filter(g => g.products.length > 0)

  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow center">Curated</span>
          <h1>Our <em>Collections</em></h1>
          <p>Every category, every craft — curated for the modern woman.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">✦</span>
            <span>Collections</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {grouped.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)' }}>
              Collections coming soon.
            </div>
          ) : (
            <div className="collections" data-reveal="stagger">
              {grouped.map((g, i) => (
                <Link
                  key={i}
                  href={`/shop`}
                  className="col-card"
                >
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${g.products[0].image})` }}
                  />
                  <div className="corners" />
                  <div className="meta">
                    <span className="count">{g.products.length} {g.products.length === 1 ? 'Piece' : 'Pieces'}</span>
                    <div className="name">{g.category}</div>
                    <div className="hover-cta">
                      Shop Now <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
