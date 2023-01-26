import { STATUS_PENDING } from '~/store/defaults/types'

export type Defaults = {
  status: string,
  defaultPetImageUrl: string,
  headerMessages: string[]
}

export default () => (<Defaults>{
  status: STATUS_PENDING,
  defaultPetImageUrl: '',
  headerMessages: []
})
