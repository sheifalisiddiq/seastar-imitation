import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { Product } from './types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01'

const isSanityConfigured = Boolean(projectId && /^[a-z0-9-]+$/.test(projectId))

export const client = isSanityConfigured
  ? createClient({ projectId: projectId!, dataset, apiVersion, useCdn: true })
  : null

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImageSource) {
  return builder!.image(source)
}

const PRODUCT_FIELDS = `
  "id": slug.current,
  name,
  "slug": slug.current,
  category,
  cat,
  price,
  oldPrice,
  "image": image.asset->url,
  "hoverImage": hoverImage.asset->url,
  "images": images[].asset->url,
  badge,
  badgeVariant,
  description,
  details,
  stock,
  rating,
  reviewCount,
  featured
`

function mapProduct(raw: Record<string, unknown>): Product {
  return {
    id: (raw.id as string) ?? '',
    name: (raw.name as string) ?? '',
    category: (raw.category as string) ?? '',
    cat: (raw.cat as string) ?? '',
    price: (raw.price as number) ?? 0,
    oldPrice: raw.oldPrice as number | undefined,
    image: (raw.image as string) ?? '',
    hoverImage: (raw.hoverImage as string) ?? (raw.image as string) ?? '',
    images: (raw.images as string[] | undefined)?.filter(Boolean) ?? [],
    badge: raw.badge as string | undefined,
    badgeVariant: raw.badgeVariant as 'default' | 'burgundy' | undefined,
    description: raw.description as string | undefined,
    details: raw.details as { label: string; value: string }[] | undefined,
    stock: raw.stock as number | undefined,
    rating: raw.rating as number | undefined,
    reviewCount: raw.reviewCount as number | undefined,
  }
}

export async function getAllProducts(): Promise<Product[]> {
  if (!client) return []
  const data = await client.fetch(
    `*[_type == "product"] | order(_createdAt desc) { ${PRODUCT_FIELDS} }`,
    {},
    { next: { revalidate: 60 } }
  )
  return (data as Record<string, unknown>[]).map(mapProduct)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  if (!client) return []
  const data = await client.fetch(
    `*[_type == "product" && featured == true] | order(_createdAt desc)[0...4] { ${PRODUCT_FIELDS} }`,
    {},
    { next: { revalidate: 60 } }
  )
  return (data as Record<string, unknown>[]).map(mapProduct)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!client) return null
  const data = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] { ${PRODUCT_FIELDS} }`,
    { slug },
    { next: { revalidate: 60 } }
  )
  if (!data) return null
  return mapProduct(data as Record<string, unknown>)
}
