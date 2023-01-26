import { ProductsState } from '~/types/store/products/types'

const productsState: ProductsState = {
  success: false,
  products: [],
  lastVisited: [],
  path: ''
}

export default () => productsState
