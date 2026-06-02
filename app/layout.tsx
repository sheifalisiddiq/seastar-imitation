import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import CartDrawer from '@/components/CartDrawer'
import Cursor from '@/components/Cursor'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Sea Star Jewels — Adorned in Light',
  description:
    '24K gold-plated, antique, oxidized &amp; anti-tarnish waterproof jewellery. Necklaces, bangles, rings, bracelets &amp; anklets. Shop No. 47, Karama Centre, Dubai.',
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
