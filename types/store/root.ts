import { Category } from '~/types/store/categories/types'

export type RootState = {
  categories: {
    categories: Category[]
  }
}
