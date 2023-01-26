<template>
  <RegulationsAccounts />
</template>

<script lang="js">
export default {
  name: 'RegulaminKontPage',
  components: {
    RegulationsAccounts: () => import(/* webpackChunkName: "RegulationsAccounts" */ '~/components/Regulations/RegulationsAccounts.vue')
  },
  head () {
    return {
      title: 'Regulamin kont - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  }
}
</script>
