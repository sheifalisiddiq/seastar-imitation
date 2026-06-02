const items = [
  { text: '24K Gold Plated', em: true },
  { text: 'Antique Jewellery', em: false },
  { text: 'Oxidized Jewellery', em: true },
  { text: 'Anti-Tarnish Waterproof', em: false },
  { text: 'Necklaces & Bangles', em: true },
  { text: '6-Month Guarantee', em: false },
]

function MarqueeContent() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="marquee-item">
          {item.em ? <em>{item.text}</em> : item.text}
          <span className="sep" />
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  )
}
