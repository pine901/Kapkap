import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import { Product as CartProduct } from '~/store/basket/state'
import { EditorState } from '~/store/cup/state'
import sessionStorageService from '~/services/sessionStorage'
import { RootState } from '~/types/store/root'

export default {
  loadCups: async ({ commit }: ActionContext<EditorState, RootState>) => {
    try {
      const res = await $axios.get('/v1/cups')
      if (res) {
        commit('setCups', res)
      }
    } catch {
    }
  },

  loadRabbits: async ({ commit }: ActionContext<EditorState, RootState>) => {
    try {
      const res = await $axios.get('/v1/rabbits')
      if (res?.data?.pets) {
        commit('setRabbits', res.data.pets)
      }
    } catch {
    }
  },

  loadDogs: async ({ commit }: ActionContext<EditorState, RootState>) => {
    try {
      const res = await $axios.get('/v1/dogs')
      if (res?.data?.pets) {
        commit('setDogs', res.data.pets)
      }
    } catch {
    }
  },

  loadCats: async ({ commit }: ActionContext<EditorState, RootState>) => {
    try {
      const res = await $axios.get('/v1/cats')
      if (res?.data?.pets) {
        commit('setCats', res.data.pets)
      }
    } catch {
    }
  },

  loadMen: async ({ commit }: ActionContext<EditorState, RootState>) => {
    try {
      const res = await $axios.get('/v1/gender/male')
      if (res?.data) {
        commit('setMen', res.data)
      }
    } catch {
    }
  },

  loadWomen: async ({ commit }: ActionContext<EditorState, RootState>) => {
    try {
      const res = await $axios.get('/v1/gender/female')
      if (res?.data) {
        commit('setWomen', res.data)
      }
    } catch {
    }
  },

  loadBoys: async ({ commit }: ActionContext<EditorState, RootState>) => {
    try {
      const res = await $axios.get('/v1/gender/boy')
      if (res?.data) {
        commit('setBoys', res.data)
      }
    } catch {
    }
  },

  loadGirls: async ({ commit }: ActionContext<EditorState, RootState>) => {
    try {
      const res = await $axios.get('/v1/gender/girl')
      if (res?.data) {
        commit('setGirls', res.data)
      }
    } catch {
    }
  },

  loadProduct: async (
    { commit, getters }: ActionContext<EditorState, RootState>,
    productId: string,
    forceLoading: boolean = false
  ) => {
    if (!forceLoading && getters.product?.productId === productId) {
      return
    }

    try {
      const res = await $axios.get('/v1/product/' + productId)
      if (res?.data) {
        commit('setProduct', res.data)
      }
    } catch {
    }
  },

  setQuantity: ({ commit }: ActionContext<EditorState, RootState>, quantity: number) => {
    commit('setQuantity', quantity)
    commit('recalculateTotal')
  },

  setCup: ({ commit, dispatch } : ActionContext<EditorState, RootState>, cupId: string) => {
    commit('setCup', cupId)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  setBackground: ({ commit, dispatch } : ActionContext<EditorState, RootState>, backgroundId: string) => {
    commit('setBackground', backgroundId)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  setQuote: ({ commit, dispatch } : ActionContext<EditorState, RootState>, quoteId: string) => {
    commit('setQuote', quoteId)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  moveItemUp: ({ commit, dispatch } : ActionContext<EditorState, RootState>, index: number) => {
    commit('moveItemUp', index)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  moveItemDown: ({ commit, dispatch } : ActionContext<EditorState, RootState>, index: number) => {
    commit('moveItemDown', index)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  removeItem: ({ commit, dispatch } : ActionContext<EditorState, RootState>, index: number) => {
    commit('removeItem', index)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  setItem: ({ commit, dispatch } : ActionContext<EditorState, RootState>, payload: any) => {
    commit('setItem', payload)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  loadProductFromCart: async ({ commit, dispatch, rootGetters } : ActionContext<EditorState, RootState>, cartItemId: string): Promise<string> => {
    await dispatch('basket/loadBasket', null, { root: true })
    const basket = rootGetters['basket/basket']
    if (basket) {
      const cartItem: CartProduct = basket.products.find((product: CartProduct) => product.cartItemId === cartItemId)
      commit('setWorkingObjectFromCart', cartItem)
      commit('setQuantity', cartItem.number)
      commit('preview/setPreviewId', cartItem.previewId, { root: true })

      return cartItem.productId
    }
    return ''
  },

  saveConfigurationForProduct: ({ state }: ActionContext<EditorState, RootState>, productId: string): void => {
    if (state?.product?.items) {
      const data = {
        items: state.product.items,
        workingObject: state.workingObject
      }
      sessionStorageService.setData(`workingProduct-${productId}`, data)
    }
  }
}
