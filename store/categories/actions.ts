import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import { CategoriesState } from '~/types/store/categories/types'

export const loadCategories = async ({ commit }: ActionContext<CategoriesState, CategoriesState>) => {
  const res = await $axios.get<CategoriesState>('/v1/categories')

  if (res?.data?.success) {
    commit('setStateForCategories', res.data)
  }
}
