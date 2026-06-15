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
import { getFeaturedProducts, getAllProducts } from '@/lib/sanity'

export default async function HomePage() {
  const [featured, allProducts] = await Promise.all([getFeaturedProducts(), getAllProducts()])

  return (
    <main>
      <Hero />
      <Marquee />
      <Collections products={allProducts} />
      <Products products={featured} />
      <AboutSection />
      <EditorialBanner />
      <Testimonials />
      <InstagramGrid />
      <Newsletter />
      <Footer />
    </main>
  )
}
