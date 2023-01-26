<template>
  <Page404 />
</template>

<script lang="js">
export default {
  name: 'Page404NotFound',
  components: { Page404: () => import(/* webpackChunkName: "Page404" */ '~/components/Page404.vue') },
  head () {
    return {
      title: 'KapKap - najładniejsze kubki w Polsce',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  }
}
</script>
