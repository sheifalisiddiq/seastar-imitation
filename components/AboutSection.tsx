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
              Sea Star Jewels was founded with a single belief: that beauty should never come
              at the cost of your values. We craft jewellery that celebrates South Asian heritage
              while speaking to the modern woman&apos;s everyday life.
            </p>
            <p>
              Based in Karama, Dubai, our store brings you 24K gold-plated, antique, oxidized,
              and anti-tarnish waterproof jewellery — each piece backed by a 6-month guarantee
              and made to be worn, loved, and passed on.
            </p>

            <ul className="about-features">
              <li>
                <span className="v">
                  <span className="icn">✦</span>
                  24K Gold Plated
                </span>
                <span className="d">6-month guarantee on every piece</span>
              </li>
              <li>
                <span className="v">
                  <span className="icn">✦</span>
                  Anti-Tarnish &amp; Waterproof
                </span>
                <span className="d">Wear it daily, worry-free</span>
              </li>
              <li>
                <span className="v">
                  <span className="icn">✦</span>
                  Antique Jewellery
                </span>
                <span className="d">Heritage finish, timeless appeal</span>
              </li>
              <li>
                <span className="v">
                  <span className="icn">✦</span>
                  Oxidized Jewellery
                </span>
                <span className="d">Bold, artistic, handcrafted pieces</span>
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
