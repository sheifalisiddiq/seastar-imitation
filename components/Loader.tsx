'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [done, setDone] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1800)
    const t2 = setTimeout(() => setRemoved(true), 2700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (removed) return null

  return (
    <div className={`loader${done ? ' done' : ''}`}>
      <div className="logo">
        <span className="star" />
        SEASTAR
      </div>
      <div className="bar" />
      <div className="tag">Adorned in Light</div>
    </div>
  )
}
