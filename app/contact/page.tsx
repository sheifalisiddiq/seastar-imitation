'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const infoItems = [
  {
    label: 'Visit Us',
    icon: '◈',
    lines: ['B-24, Jewellers Lane', 'Johari Bazaar, Jaipur', 'Rajasthan — 302001'],
  },
  {
    label: 'Hours',
    icon: '◇',
    lines: ['Monday – Saturday', '10:00am – 7:00pm', 'Sunday: Closed'],
  },
  {
    label: 'Reach Out',
    icon: '◆',
    lines: ['hello@seastarimitation.in', '+91 98765 43210', 'WhatsApp available'],
  },
  {
    label: 'Wholesale',
    icon: '✦',
    lines: ['wholesale@seastarimitation.in', 'Min. order ₹50,000', 'Trade enquiries welcome'],
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <main>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow center">Get In Touch</span>
          <h1>Let&apos;s <em>talk</em></h1>
          <p>
            Whether you have a question, a custom request, or simply want to say hello —
            we&apos;d love to hear from you.
          </p>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">✦</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Contact content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div>
              <span className="eyebrow">Our Details</span>
              <h2 style={{ marginTop: 24, marginBottom: 48, fontSize: 'clamp(32px, 3.6vw, 52px)' }}>
                We&apos;re always <em>here</em>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                {infoItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        fontSize: 22,
                        color: 'var(--gold)',
                        width: 36,
                        flexShrink: 0,
                        paddingTop: 4,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          letterSpacing: '0.3em',
                          textTransform: 'uppercase',
                          color: 'var(--muted)',
                          marginBottom: 10,
                          fontWeight: 500,
                        }}
                      >
                        {item.label}
                      </div>
                      {item.lines.map((line, j) => (
                        <div
                          key={j}
                          style={{ color: 'var(--paper)', opacity: 0.85, fontSize: 14, lineHeight: 1.7 }}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                style={{
                  marginTop: 48,
                  aspectRatio: '16/9',
                  background: 'var(--bg-3)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted)',
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                Johari Bazaar · Jaipur
              </div>
            </div>

            {/* Form */}
            <div className="contact-form">
              <h3>Send a Message</h3>
              {sent && (
                <div
                  style={{
                    background: 'rgba(201,163,90,0.12)',
                    border: '1px solid var(--gold)',
                    padding: '14px 20px',
                    marginBottom: 28,
                    fontSize: 13,
                    color: 'var(--gold)',
                    letterSpacing: '0.08em',
                  }}
                >
                  ✦ Your message has been received. We&apos;ll be in touch soon.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="priya@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Enquiry</option>
                    <option value="custom">Custom Request</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="press">Press & Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={{ minHeight: 140 }}
                  />
                </div>

                <button type="submit" className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                  Send Message <span className="arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
