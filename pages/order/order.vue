<template>
  <Order />
</template>

<script lang="js">
export default {
  name: 'OrderPage',
  components: {
    Order: () => import(/* webpackChunkName: "Order" */ '~/components/Order/Order.vue')
  },
  head () {
    return {
      title: 'Dane zamawiającego i adres - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  },
  nuxtI18n: {
    paths: {
      pl: '/zamowienie',
      en: '/order'
    }
  }
}
</script>
