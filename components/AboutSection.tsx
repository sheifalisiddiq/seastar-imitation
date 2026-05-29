import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="section" style={{ background: 'linear-gradient(180deg, var(--bg-2), var(--bg))' }}>
      <div className="container">
        <div className="about">
          {/* Media */}
          <div className="about-media" data-reveal="">
            <div
              className="img"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80)',
              }}
            />
            <div className="frame" />
            <div className="about-stat bl">
              <span className="n">12+</span>
              <span className="l">Years of Craft Heritage</span>
            </div>
          </div>

          {/* Copy */}
          <div className="about-copy" data-reveal="">
            <span className="eyebrow">Our Story</span>
            <h2>
              Born from <em>tradition</em>,<br />worn by the modern soul
            </h2>
            <p>
              Seastar Imitation was founded with a single belief: that beauty should never
              come at the cost of your values. We craft jewellery that honours India&apos;s rich
              artisanal heritage while speaking to contemporary sensibilities.
            </p>
            <p>
              Every piece is conceived in our atelier in Rajasthan, where master karigars
              breathe life into gold-plated brass, oxidised silver, and antique-finish
              alloys — each one a quiet act of devotion.
            </p>

            <ul className="about-features">
              <li>
                <span className="v">
                  <span className="icn">✦</span>
                  22K Gold Plated
                </span>
                <span className="d">Tarnish-resistant, skin-safe alloys</span>
              </li>
              <li>
                <span className="v">
                  <span className="icn">✦</span>
                  Handcrafted
                </span>
                <span className="d">Each piece individually finished</span>
              </li>
              <li>
                <span className="v">
                  <span className="icn">✦</span>
                  Ethical Sourcing
                </span>
                <span className="d">Conflict-free materials throughout</span>
              </li>
              <li>
                <span className="v">
                  <span className="icn">✦</span>
                  Free Returns
                </span>
                <span className="d">30-day hassle-free policy</span>
              </li>
            </ul>

            <Link href="/about" className="link-u">
              Read our story <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
