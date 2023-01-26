import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import { RootState } from '~/types/store/root'
import { Defaults } from '~/store/defaults/state'

export default {
  load: async ({ commit, rootGetters }: ActionContext<Defaults, RootState>) => {
    try {
      const result = await $axios.$get('/v1/defaults', {
        headers: {
          token: rootGetters['app/token']
        }
      })
      commit('setDefaults', result)
      if (result.basket) {
        commit('basket/setBasket', result.basket, { root: true })
      }
    } catch {}
  }
}
