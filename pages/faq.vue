<template>
  <Faq />
</template>

<script lang="js">
export default {
  name: 'FaqPage',
  components: { Faq: () => import(/* webpackChunkName: "Faq" */ '~/components/Faq/Faq.vue') },
  head () {
    return {
      title: 'O nas - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  },
  nuxtI18n: {
    paths: {
      pl: '/faq',
      en: '/faq'
    }
  }
}
</script>
