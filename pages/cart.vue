<template>
  <Basket />
</template>

<script lang="js">
export default {
  name: 'CartPage',
  components: {
    Basket: () => import(/* webpackChunkName: "Basket" */ '~/components/Basket/Basket.vue')
  },
  head () {
    return {
      title: 'Koszyk - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  },
  nuxtI18n: {
    paths: {
      pl: '/koszyk',
      en: '/cart'
    }
  }
}
</script>
