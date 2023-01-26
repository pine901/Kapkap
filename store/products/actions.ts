import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import localStorageService from '~/services/localStorageService'
import { LastVisited, ProductsState } from '~/types/store/products/types'
import { Category } from '~/types/store/categories/types'
import { RootState } from '~/types/store/root'

const MAX_STORAGE_ITEMS = 4

export const loadProducts = async ({
  commit,
  rootState
}: ActionContext<ProductsState, RootState>, payload: string) => {
  const { categories } = rootState.categories
  const category = categories.find((c: Category) => c.path === payload)

  if (category && typeof category !== 'undefined') {
    const res = await $axios.get<ProductsState>(`/v1/products/${category.id}`)
    if (res?.data?.success) {
      commit('setStateForProducts', res.data)
    }
  } else {
    const res = await $axios.get<ProductsState>('/v1/products')
    if (res?.data?.success) {
      commit('setStateForProducts', res.data)
    }
  }
}

export const loadLastVisited = async ({ commit }: ActionContext<ProductsState, RootState>) => {
  const res = await localStorageService.getData('lastVisited') ?? []
  if (!Array.isArray(res)) {
    localStorageService.setData('lastVisited', [])
  } else {
    res.forEach((i: LastVisited) => commit('setLastVisited', i))
  }
}

export const addLastVisited = (
  { commit }: ActionContext<ProductsState, RootState>,
  { product, addDate }: LastVisited
) => {
  const item = {
    addDate,
    product
  }
  const storageItems = localStorageService.getData('lastVisited') ?? []
  const productIndex = storageItems.findIndex((i: LastVisited) => i.product.productId === item.product.productId)
  const items = [...storageItems]
  if (productIndex > -1) {
    items[productIndex].addDate = addDate
  } else {
    items.push(item)
  }

  // @ts-ignore
  const sorted = items.sort((a, b) => new Date(b.addDate) - new Date(a.addDate))
  localStorageService.setData('lastVisited', sorted.slice(0, MAX_STORAGE_ITEMS))
  commit('setLastVisited', item)
}
