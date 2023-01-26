<template>
  <ThankYou />
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: { ThankYou: () => import(/* webpackChunkName: "ThankYou" */ '~/components/Order/ThankYou.vue') },
  nuxtI18n: {
    paths: {
      pl: '/zamowienie/dziekujemy',
      en: '/order/thank-you'
    }
  }
})
export default class ThankYouForTheOrder extends Vue {
  head () {
    return {
      title: 'Dziękujemy za zamówienie - Sklep KapKap.eu',
      meta: []
    }
  }

  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  }
}
</script>
