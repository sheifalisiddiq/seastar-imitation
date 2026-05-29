'use client'

import { useState, useRef } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [showToast, setShowToast] = useState(false)
  const toastRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setEmail('')
    setShowToast(true)
    if (toastRef.current) clearTimeout(toastRef.current)
    toastRef.current = setTimeout(() => setShowToast(false), 3500)
  }

  return (
    <>
      <div className="newsletter">
        <div className="newsletter-inner" data-reveal="">
          <span className="eyebrow center">Stay Close</span>
          <h3>
            Join the <em>Inner Circle</em>
          </h3>
          <p>
            New arrivals, exclusive offers, and stories from our atelier — delivered
            gently to your inbox.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={`toast${showToast ? ' show' : ''}`}>
        <span className="icn">✦</span>
        Welcome to the Seastar inner circle
      </div>
    </>
  )
}
