<template>
  <Cup
    :cart-item-id="cartItemId"
    :edit-mode="true"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: { Cup: () => import(/* webpackChunkName: "Cup" */ '@/components/Cup/Cup.vue') },
  asyncData ({ params }: any) {
    return { cartItemId: params.cartItemId }
  },
  nuxtI18n: {
    paths: {
      en: '/edit-product/:cartItemId',
      pl: '/edytuj-produkt/:cartItemId'
    }
  }
})
export default class CupEditView extends Vue {
  head () {
    return {
      title: 'Kubki klasy premium - Sklep KapKap.eu',
      meta: []
    }
  }

  beforeMount () {
    if (process.client) {
      if (window.innerWidth <= 1350) {
        document.getElementsByTagName('html')[0].classList.add('no-scroll')
      } else {
        document.getElementsByTagName('html')[0].classList.remove('no-scroll')
      }
    }
  }

  destroyed () {
    if (process.client) {
      document.getElementsByTagName('html')[0].classList.remove('no-scroll')
    }
  }
}
</script>
