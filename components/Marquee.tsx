const items = [
  { text: 'Gold Plated', em: true },
  { text: 'Oxidised Silver', em: false },
  { text: 'Antique Finish', em: true },
  { text: 'Handcrafted', em: false },
  { text: 'Saanjh Edition', em: true },
  { text: 'Modern Heirlooms', em: false },
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
