import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Collections from '@/components/Collections'
import Products from '@/components/Products'
import AboutSection from '@/components/AboutSection'
import EditorialBanner from '@/components/EditorialBanner'
import Testimonials from '@/components/Testimonials'
import InstagramGrid from '@/components/InstagramGrid'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import { getFeaturedProducts } from '@/lib/sanity'

export default async function HomePage() {
  const products = await getFeaturedProducts()

  return (
    <main>
      <Hero />
      <Marquee />
      <Collections />
      <Products products={products} />
      <AboutSection />
      <EditorialBanner />
      <Testimonials />
      <InstagramGrid />
      <Newsletter />
      <Footer />
    </main>
  )
}
