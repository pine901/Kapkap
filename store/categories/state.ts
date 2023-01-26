import { CategoriesState } from '~/types/store/categories/types'

const categoriesState: CategoriesState = {
  success: false,
  categories: []
}

export default () => categoriesState
