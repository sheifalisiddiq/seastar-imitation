import { notFound } from 'next/navigation'
import { getAllProducts, getProductBySlug } from '@/lib/sanity'
import ProductDetail from '@/components/ProductDetail'

export async function generateStaticParams() {
  const products = await getAllProducts()
  return products.map(p => ({ id: p.id }))
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductBySlug(params.id)
  if (!product) notFound()

  const all = await getAllProducts()
  const related = all.filter(p => p.cat === product.cat && p.id !== product.id).slice(0, 4)

  return <ProductDetail product={product} related={related} />
}
