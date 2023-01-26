import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import { BasketState, ProductUpdateRequest } from '~/store/basket/state'
import { ProductObject } from '~/store/cup/getters'
import { RootState } from '~/types/store/root'

export default {
  addToBasket: async ({ commit }: ActionContext<BasketState, RootState>, apiData: ProductObject) => {
    const res = await $axios.post('/v1/basket', apiData)
    if (res?.data?.basket) {
      commit('setBasket', res.data.basket)

      // token is set only when user puts the item to the basket
      commit('app/setToken', res.data.token, { root: true })
    }
  },

  editBasket: async ({ commit }: ActionContext<BasketState, RootState>, apiData: ProductUpdateRequest) => {
    const res = await $axios.patch('/v1/basket', apiData)
    if (res?.data?.basket) {
      commit('setBasket', res.data.basket)
    }
  },

  loadBasket: async ({ commit, rootGetters }: ActionContext<BasketState, RootState>, basketToken: string = '') => {
    try {
      const token = basketToken || rootGetters['app/token']
      if (token) {
        const res = await $axios.get('/v1/basket/' + token)
        if (res?.data?.basket) {
          if (basketToken) {
            return res.data.basket.products
          }
          commit('setBasket', res.data.basket)
        }
      }
    } catch {
    }
  }
}
