import Link from 'next/link'
import type { Product } from '@/lib/types'

const cols = [
  { name: 'Necklaces', nameEm: '24K Gold Plated',    category: 'Necklace'   },
  { name: 'Bangles',   nameEm: 'Antique & Oxidized',  category: 'Bangles'    },
  { name: 'Rings',     nameEm: 'Gold Plated',          category: 'Rings'      },
  { name: 'Bracelets', nameEm: 'Waterproof',           category: 'Bracelets'  },
  { name: 'Anklets',   nameEm: 'Oxidized & Antique',   category: 'Anklets'    },
  { name: 'Earrings',  nameEm: 'Statement Pieces',     category: 'Earrings'   },
]

export default function Collections({ products }: { products: Product[] }) {
  const cards = cols.map(col => {
    const match = products.find(p => p.category === col.category)
    return { ...col, image: match?.image ?? null }
  }).filter(col => col.image !== null)

  if (cards.length === 0) return null

  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <span className="eyebrow">Curated</span>
            <h2>
              Our <em>Collections</em>
            </h2>
          </div>
          <Link href="/collections" className="link-u">
            View All <span className="arrow">→</span>
          </Link>
        </div>

        <div className="collections" data-reveal="stagger">
          {cards.map((col, i) => (
            <Link href={`/shop?cat=${col.category.toLowerCase()}`} key={i} className="col-card">
              {col.image && (
                <div
                  className="img"
                  style={{ backgroundImage: `url(${col.image})` }}
                />
              )}
              <div className="corners" />
              <div className="meta">
                <span className="count">Shop Now</span>
                <div className="name">
                  {col.name} <em>{col.nameEm}</em>
                </div>
                <div className="hover-cta">
                  Explore Collection <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
