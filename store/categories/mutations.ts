import { CategoriesState } from '~/types/store/categories/types'
import { Vue } from 'nuxt-property-decorator'

export default {
  setStateForCategories (state: CategoriesState, categories: CategoriesState) {
    Vue.set(state, 'categories', categories.categories)
    Vue.set(state, 'success', categories.success)
  }
}
