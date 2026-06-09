'use client'

import { useCart } from '@/lib/cart-context'

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeFromCart, setQty, subtotal } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`drawer-backdrop${isOpen ? ' open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`drawer${isOpen ? ' open' : ''}`}>
        {/* Head */}
        <div className="drawer-head">
          <h4>Your Bag</h4>
          <button className="close" onClick={closeCart} aria-label="Close cart">×</button>
        </div>

        {/* Body */}
        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="drawer-empty">
              <div className="icn">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <p style={{ marginTop: 16, fontSize: 14, letterSpacing: '0.08em' }}>Your bag is empty</p>
              <button
                onClick={closeCart}
                className="btn"
                style={{ marginTop: 24, fontSize: 10 }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="drawer-item">
                <div
                  className="thumb"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div>
                  <div className="name">{item.name}</div>
                  <div className="cat">{item.cat}</div>
                  <div className="qty">
                    <button onClick={() => setQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => setQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <button className="remove" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
                <div className="price">
                  AED {(item.price * item.qty).toLocaleString('en-AE')}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="drawer-foot">
            <div className="row">
              <span>Subtotal</span>
              <span>AED {subtotal.toLocaleString('en-AE')}</span>
            </div>
            <div className="row">
              <span>Shipping</span>
              <span style={{ color: 'var(--gold)' }}>Free</span>
            </div>
            <div className="row total">
              <span>Total</span>
              <span>AED {subtotal.toLocaleString('en-AE')}</span>
            </div>
            <button className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', marginTop: 18 }}>
              Checkout <span className="arrow">→</span>
            </button>
            <button
              onClick={closeCart}
              className="link-u"
              style={{ display: 'flex', justifyContent: 'center', marginTop: 16, width: '100%' }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
