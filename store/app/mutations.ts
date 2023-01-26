import { Vue } from 'nuxt-property-decorator'
import { AppState } from '~/store/app/state'

export default {
  setIsMobile (state: AppState, value: boolean) : void {
    Vue.set(state, 'isMobile', value)
  },

  setEasyPackAsLoaded (state: AppState) : void {
    Vue.set(state, 'isEasyPackLoaded', true)
  },

  setFooterSeoText (state: AppState, value: string) : void {
    Vue.set(state, 'footerSeoText', value)
  },

  setFooterText (state: AppState, value: string) : void {
    Vue.set(state, 'footerText', value)
  },

  /**
   * token is set only when user puts the item to the basket
   */
  setToken (state: AppState, value: string): void {
    if (process.client) {
      localStorage.basketToken = value
    }
    Vue.set(state, 'token', value)
  },

  clearToken (state: AppState): void {
    if (process.client) {
      localStorage.basketToken = ''
    }
    Vue.set(state, 'token', '')
  },

  setPersonalInfo (state: AppState, value: string) : void {
    Vue.set(state, 'personalInfo', value)
  }
}
