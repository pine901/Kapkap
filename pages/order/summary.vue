<template>
  <OrderSummary />
</template>

<script lang="js">
export default {
  name: 'OrderSummaryPage',
  components: {
    OrderSummary: () => import(/* webpackChunkName: "OrderSummary" */ '~/components/Order/OrderSummary.vue')
  },
  head () {
    return {
      title: 'Podsumowanie zamówienia - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  },
  nuxtI18n: {
    paths: {
      pl: '/zamowienie/podsumowanie',
      en: '/order/summary'
    }
  }
}
</script>
