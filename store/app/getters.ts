import { AppState } from '~/store/app/state'

export default {
  isMobile: (state: AppState) => state.isMobile,
  isEasyPackLoaded: (state: AppState) => state.isEasyPackLoaded,
  footerSeoText: (state: AppState) => state.footerSeoText || '',
  footerText: (state: AppState) => state.footerText || '',
  token: (state: AppState) => {
    if (process.client) {
      return state.token || localStorage.basketToken || ''
    }
    return state.token || ''
  },
  personalInfo: (state: AppState) => state.personalInfo
}
