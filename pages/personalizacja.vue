<template>
  <Personalization />
</template>

<script lang="js">
export default {
  name: 'PersonalizacjaPage',
  components: { Personalization: () => import(/* webpackChunkName: "Personalization" */ '~/components/Personalization/Personalization.vue') },
  head () {
    return {
      title: 'Personalizowane kubki - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  }
}
</script>
