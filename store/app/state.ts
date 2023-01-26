export type AppState = {
  isMobile: boolean,
  isEasyPackLoaded: boolean,
  footerSeoText: string,
  footerText: string
  token: string,
  personalInfo: string
}

export default () => (<AppState>{
  isEasyPackLoaded: false
})
