import { CategoriesState } from '~/types/store/categories/types'

export default {
  categories: (state: CategoriesState) => state.categories,
  success: (state: CategoriesState) => state.success
}
