<template>
  <Regulations />
</template>

<script lang="js">
export default {
  name: 'TermsAndConditionsPage',
  components: {
    Regulations: () => import(/* webpackChunkName: "Regulations" */ '~/components/Regulations/Regulations.vue')
  },
  head () {
    return {
      title: 'Regulamin - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  },
  nuxtI18n: {
    paths: {
      pl: '/regulamin',
      en: '/terms-and-conditions'
    }
  }
}
</script>
