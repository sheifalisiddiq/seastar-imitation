const images = [
  'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=400&q=70',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=70',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=70',
  'https://images.unsplash.com/photo-1620656798932-902f1f1b1bdc?auto=format&fit=crop&w=400&q=70',
  'https://images.unsplash.com/photo-1583937443566-6fe1a1c7e2ae?auto=format&fit=crop&w=400&q=70',
  'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=400&q=70',
]

function InstagramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function InstagramGrid() {
  return (
    <section className="section-tight">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }} data-reveal="">
          <span className="eyebrow center">Follow Along</span>
          <h2 style={{ marginTop: 20 }}>
            <em>@seastarimitation</em>
          </h2>
          <p style={{ color: 'var(--paper)', opacity: 0.75, marginTop: 12 }}>
            Tag us in your Seastar moments
          </p>
        </div>

        <div className="insta" data-reveal="stagger">
          {images.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-tile"
              aria-label={`Instagram post ${i + 1}`}
            >
              <div
                className="img"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="icn">
                <InstagramIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
