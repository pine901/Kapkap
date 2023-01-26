import { STATUS_LOADED } from '~/store/defaults/types'
import { Defaults } from '~/store/defaults/state'

export default {
  headerMessages: (state: Defaults) => state.headerMessages,

  isLoaded: (state: Defaults) => state.status === STATUS_LOADED
}
