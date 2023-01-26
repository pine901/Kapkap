<template>
  <AboutUs />
</template>

<script lang="js">
export default {
  name: 'AboutUsPage',
  components: {
    AboutUs: () => import(/* webpackChunkName: "AboutUs" */ '~/components/AboutUs/AboutUs.vue')
  },
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
      pl: '/o-nas',
      en: '/about-us'
    }
  }
}
</script>
