import { Vue } from 'nuxt-property-decorator'
import { LastVisited, ProductsState } from '~/types/store/products/types'

export default {
  setStateForProducts (state: ProductsState, products: ProductsState) {
    Vue.set(state, 'success', products.success)
    Vue.set(state, 'products', products.products)
  },
  setLastVisited (state: ProductsState, item: LastVisited) {
    const productIndex = state.lastVisited.findIndex((i: LastVisited) => i.product.productId === item.product.productId)
    if (productIndex > -1) {
      state.lastVisited[productIndex].addDate = item.addDate
    } else {
      state.lastVisited = [...state.lastVisited, item]
    }
    // @ts-ignore
    state.lastVisited = state.lastVisited.sort((a, b) => new Date(b.addDate) - new Date(a.addDate))
  },
  setPath (state: ProductsState, path: string) {
    Vue.set(state, 'path', path)
  }
}
