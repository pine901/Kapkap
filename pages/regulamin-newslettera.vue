<template>
  <RegulationsNewsletter />
</template>

<script lang="js">
export default {
  name: 'RegulaminNewsletteraPage',
  components: {
    RegulationsNewsletter: () => import(/* webpackChunkName: "RegulationsNewsletter" */ '~/components/Regulations/RegulationsNewsletter.vue')
  },
  head () {
    return {
      title: 'Regulamin newslettera - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  }
}
</script>
