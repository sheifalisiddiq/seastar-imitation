export interface CartItem {
  id: string
  name: string
  cat: string
  price: number
  image: string
  qty: number
}

export interface Product {
  id: string
  name: string
  category: string
  cat: string
  price: number
  oldPrice?: number
  image: string
  hoverImage: string
  badge?: string
  badgeVariant?: 'default' | 'burgundy'
  description?: string
  details?: { label: string; value: string }[]
  images?: string[]
  stock?: number
  rating?: number
  reviewCount?: number
}
