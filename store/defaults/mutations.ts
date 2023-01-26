import { STATUS_LOADED } from '~/store/defaults/types'
import { Defaults } from '~/store/defaults/state'

export default {
  setDefaults (state: Defaults, defaults: Defaults) {
    state.defaultPetImageUrl = defaults.defaultPetImageUrl
    state.headerMessages = defaults.headerMessages
    state.status = STATUS_LOADED
  }
}
