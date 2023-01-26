import { Product, ProductsState } from '~/types/store/products/types'

export default {
  products: (state: ProductsState) => state.products,
  success: (state: ProductsState) => state.success,
  lastVisited: (state: ProductsState): Product[] => {
    const { lastVisited } = state
    return lastVisited.map(i => i.product)
  },
  path: (state: ProductsState) => state.path
}
