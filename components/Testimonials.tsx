const testimonials = [
  {
    quote:
      'I wore the Mira Polki Choker to my sister\'s wedding and received so many compliments. People couldn\'t believe it wasn\'t real gold.',
    name: 'Priya Sharma',
    meta: 'Verified Buyer · Delhi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=70',
  },
  {
    quote:
      'The craftsmanship is extraordinary. Each piece feels substantial, meaningful — like wearing a piece of history. My Noor Haar is simply breathtaking.',
    name: 'Ananya Krishnan',
    meta: 'Verified Buyer · Bangalore',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=70',
  },
  {
    quote:
      'Seastar has become my go-to for every occasion. The Saanjh Jhumkas are on permanent rotation. Incredible quality at a price that makes sense.',
    name: 'Meera Patel',
    meta: 'Verified Buyer · Mumbai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=70',
  },
]

export default function Testimonials() {
  return (
    <section className="section-tight" style={{ background: 'linear-gradient(180deg, var(--bg), var(--bg-2))' }}>
      <div className="container">
        <div className="section-head" data-reveal="">
          <div>
            <span className="eyebrow center">Voices</span>
            <h2>
              What our <em>community</em> says
            </h2>
          </div>
        </div>

        <div className="testimonials" data-reveal="stagger">
          {testimonials.map((t, i) => (
            <div key={i} className="t-card">
              <div className="qmark">&ldquo;</div>
              <div className="stars">★★★★★</div>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="who">
                <div
                  className="avatar"
                  style={{ backgroundImage: `url(${t.avatar})` }}
                />
                <div>
                  <div className="name">{t.name}</div>
                  <div className="meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
