<template>
  <Cup
    :product-id="productId"
    :edit-mode="false"
  />
</template>

<script lang="ts">
import { Action, Getter, Mutation, Component, Vue } from 'nuxt-property-decorator'
import { Product } from '~/store/basket/state'
import { $axios } from '~/utils/api'

@Component({
  components: {
    Cup: () => import(/* webpackChunkName: "Cup" */ '@/components/Cup/Cup.vue')
  },
  async asyncData ({ params }: any) {
    const res = await $axios.get('/v1/products')
    const products = (res.data?.products || []).map((p: Product) => ({ path: p.path, productId: p.productId }))
    const path = '/kubek/' + params.slug + '/' + params.productId

    // search by path
    let product: Product = products.find((p: Product) => p.path === path)
    if (product?.productId) {
      return { productId: product?.productId }
    }

    // search by id
    product = products.find((p: Product) => p.productId === params.slug || p.productId === params.productId)
    if (product?.productId) {
      return { productId: product?.productId }
    }

    return { productId: null }
  },
  nuxtI18n: {
    paths: {
      en: '/cup/:slug/:productId?',
      pl: '/kubek/:slug/:productId?'
    }
  }
})
export default class CupView extends Vue {
  @Getter('cup/product') product!: Product
  @Getter('app/isMobile') isMobile!: boolean

  @Action('cup/saveConfigurationForProduct') saveConfigurationForProduct!: Function
  @Action('cup/loadProduct') loadProduct!: Function

  @Mutation('app/setFooterSeoText') setFooterSeoText!: Function
  @Mutation('app/setFooterText') setFooterText!: Function

  productId: string = ''

  async created () {
    if (!this.productId) {
      this.$router.push('/404')
      return
    } else if (process.client) {
      const self = this
      window.addEventListener('beforeunload', function () {
        self.saveConfigurationForProduct(self.productId)
      })
    }

    await this.loadProduct(this.productId, true)
    if (this.product.description) {
      this.setFooterSeoText(this.product.description)
    } else {
      this.setFooterSeoText(null)
    }

    if (this.product.footerText) {
      this.setFooterText(this.product.footerText)
    } else {
      this.setFooterText(null)
    }
  }

  head () {
    return {
      title: this.product?.pageTitle,
      meta: [
        {
          keywords: this.product?.pageKeywords || ''
        },
        {
          hid: 'description',
          name: 'description',
          content: this.product?.pageDescription || ''
        }
      ]
    }
  }

  destroyed () {
    if (process.client) {
      document.getElementsByTagName('html')[0].classList.remove('no-scroll')
      this.saveConfigurationForProduct(this.productId)
    }
  }
}
</script>
