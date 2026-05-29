import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import CartDrawer from '@/components/CartDrawer'
import Cursor from '@/components/Cursor'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Seastar Imitation — Adorned in Light',
  description:
    'Modern heirlooms in 22K-gold-plated, oxidised, antique and 10K-gold inspired jewellery.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Loader />
          <Cursor />
          <Navbar />
          {children}
          <CartDrawer />
          <ScrollReveal />
        </CartProvider>
      </body>
    </html>
  )
}
