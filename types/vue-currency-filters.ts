import { CurrencyFilterMethodInstance } from 'vue-currency-filter/dist/types'

declare module 'vue/types/vue' {
  interface Vue {
    $currency: CurrencyFilterMethodInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $currency: CurrencyFilterMethodInstance
  }
}
