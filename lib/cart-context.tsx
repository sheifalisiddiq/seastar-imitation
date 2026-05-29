'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { CartItem } from './types'

interface CartContextValue {
  cart: CartItem[]
  isOpen: boolean
  addToCart: (item: Omit<CartItem, 'qty'>) => void
  removeFromCart: (id: string) => void
  setQty: (id: string, qty: number) => void
  openCart: () => void
  closeCart: () => void
  cartCount: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'seastar-cart-v1'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setCart(JSON.parse(stored))
      }
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch {
      // ignore
    }
  }, [cart])

  const addToCart = useCallback((item: Omit<CartItem, 'qty'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...item, qty: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }, [])

  const setQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(i => i.id !== id))
    } else {
      setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
    }
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ cart, isOpen, addToCart, removeFromCart, setQty, openCart, closeCart, cartCount, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
