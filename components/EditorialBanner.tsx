import Link from 'next/link'

export default function EditorialBanner() {
  return (
    <section className="editorial-banner">
      <div
        className="bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1583937443566-6fe1a1c7e2ae?auto=format&fit=crop&w=1600&q=85)',
        }}
      />
      <div className="content">
        <span className="eyebrow">Limited Edition</span>
        <h2>
          The <em>Saanjh</em><br />Bridal Edit
        </h2>
        <p>
          An ode to twilight ceremonies. Hand-selected pieces for the modern bride —
          each heirloom crafted to become part of your story, worn from the mandap
          to every moment that follows.
        </p>
        <Link href="/collections" className="btn btn-solid">
          Explore Bridal <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}
