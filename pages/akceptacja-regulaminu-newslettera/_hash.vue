<template>
  <NewsletterSuccessPage
    :hash="hash"
  />
</template>

<script lang="js">
export default {
  name: 'HashPage',

  components: {
    NewsletterSuccessPage: () => import(/* webpackChunkName: "NewsletterSuccessPage" */ '~/components/NewsletterSuccessPage.vue')
  },

  asyncData ({ params }) {
    const hash = params.hash
    return { hash }
  },

  head () {
    return {
      title: 'Akceptacja regulaminu newslettera - Sklep KapKap.eu',
      meta: []
    }
  },

  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  }
}
</script>
