import Link from 'next/link'

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
