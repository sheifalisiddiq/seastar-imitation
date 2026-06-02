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

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Collections />
      <Products />
      <AboutSection />
      <EditorialBanner />
      <Testimonials />
      <InstagramGrid />
      <Newsletter />
      <Footer />
    </main>
  )
}
