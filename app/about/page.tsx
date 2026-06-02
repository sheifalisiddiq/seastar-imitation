import Link from 'next/link'
import Footer from '@/components/Footer'

const storyBlocks = [
  {
    num: '01',
    title: 'Born from a Love of',
    titleEm: 'Gold',
    body: [
      'Sea Star Jewels was born from a simple belief — that every woman deserves to wear gold without compromise. Rooted in the rich tradition of South Asian craftsmanship and brought to the heart of Karama, Dubai, we set out to make jewellery that is as beautiful as it is accessible.',
      'From necklaces to anklets, bangles to rings, every piece in our collection is crafted with care — 24K gold-plated, anti-tarnish, and built to last. Our 6-month guarantee is our promise that quality is never an afterthought.',
    ],
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
    reverse: false,
  },
  {
    num: '02',
    title: 'The Art of the',
    titleEm: 'Karigar',
    body: [
      'We work exclusively with master artisans — karigars — whose families have practised jewellery-making for three and four generations. Each piece passes through at least seven pairs of hands before it reaches you.',
      'From the initial wax casting to the final polish, every stage is done by hand, with tools passed down through lineages. No automated stamping, no shortcuts. The soul of the craft is intact in every clasp, every filigree curl.',
    ],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    reverse: true,
  },
  {
    num: '03',
    title: 'Jewellery as',
    titleEm: 'Language',
    body: [
      'We believe jewellery is never just decoration. It is the language of the body — speaking of ceremonies attended, loves remembered, ancestors honoured. A Seastar piece is meant to accumulate meaning over time.',
      'This is why we design for longevity: tarnish-resistant finishes, secure clasps, carefully chosen alloys that sit gently against skin. Our jewellery is made to be worn, lived in, and passed on.',
    ],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    reverse: false,
  },
]

const values = [
  {
    icon: '◈',
    title: 'Craft First',
    body: 'We never compromise on the quality of making. Every technique is traditional; every finish is hand-applied.',
  },
  {
    icon: '◇',
    title: 'Ethical Always',
    body: 'Fair wages for artisans, conflict-free materials, and sustainable packaging — non-negotiable from day one.',
  },
  {
    icon: '◆',
    title: 'Accessible Beauty',
    body: 'Luxury should never be exclusionary. We price with intention, so every woman can own a piece she loves.',
  },
  {
    icon: '✦',
    title: 'Living Heirlooms',
    body: 'Designed to endure. Each piece is a bridge between generations — made today to be treasured tomorrow.',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow center">Karama, Dubai</span>
          <h1>A quiet house <em>of craft</em></h1>
          <p>
            We make jewellery the way it has always been made — by hand, with care,
            for women who understand that beauty is more than appearance.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">✦</span>
            <span>Our Story</span>
          </div>
        </div>
      </div>

      {/* Story blocks */}
      <section className="section">
        <div className="container">
          {storyBlocks.map((block, i) => (
            <div key={i} className={`story-block${block.reverse ? ' reverse' : ''}`}>
              <div
                className="story-media"
                style={{ backgroundImage: `url(${block.image})` }}
              >
                <div className="frame" />
              </div>
              <div className="story-text">
                <div className="num">{block.num}</div>
                <h3>
                  {block.title} {block.titleEm && <em>{block.titleEm}</em>}
                </h3>
                {block.body.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-tight" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow center">What We Stand For</span>
            <h2 style={{ marginTop: 20 }}>
              Our <em>values</em>
            </h2>
          </div>

          <div className="values">
            {values.map((v, i) => (
              <div key={i} className="value">
                <div className="icn" style={{ fontSize: 28 }}>{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="section-tight">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 32,
              textAlign: 'center',
              borderTop: '1px solid var(--line)',
              paddingTop: 64,
            }}
          >
            {[
              { n: '12+', l: 'Years of Heritage' },
              { n: '80+', l: 'Master Artisans' },
              { n: '120+', l: 'Designs Annually' },
              { n: '50K+', l: 'Pieces Crafted' },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(42px, 5vw, 72px)',
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {stat.n}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
