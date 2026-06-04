import { getAllProducts } from '@/lib/sanity'
import ShopClient from '@/components/ShopClient'

export default async function ShopPage() {
  const products = await getAllProducts()
  return <ShopClient products={products} />
}
