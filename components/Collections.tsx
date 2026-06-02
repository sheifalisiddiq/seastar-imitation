import Link from 'next/link'

const cols = [
  {
    name: 'Necklaces',
    nameEm: '24K Gold Plated',
    count: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Bangles',
    nameEm: 'Antique & Oxidized',
    count: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Rings',
    nameEm: 'Gold Plated',
    count: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Bracelets',
    nameEm: 'Waterproof',
    count: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1620656798932-902f1f1b1bdc?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Anklets',
    nameEm: 'Oxidized & Antique',
    count: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Collections() {
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
          {cols.map((col, i) => (
            <Link href="/collections" key={i} className="col-card">
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
