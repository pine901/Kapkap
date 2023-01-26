export type Category = {
  id: string
  productId: string
  path: string
  position: number
  title: string
  longTitle: string
  description: string
  seoDescription: string
  footerText: string
  metaDescription: string
  metaTitle: string
  metaTags: string
}

export type CategoriesState = {
  categories: Category[]
  success: boolean
}
