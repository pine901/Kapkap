
type ItemData = {
  id: string
  variantId?: string
  name?: string
}

type Items = {
  type: string
  data: ItemData
}

type CartItem = {
  cartItemId: string
  productId: string
  title: string
  price: number
  number: number
  previewId: string
  frontThumbnail: string
  backThumbnail: string
  cupId: string
  items: Items[]
}
