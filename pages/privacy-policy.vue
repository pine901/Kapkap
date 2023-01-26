<template>
  <Privacy />
</template>

<script lang="js">
export default {
  name: 'PrivacyPolicyPage',
  components: {
    Privacy: () => import(/* webpackChunkName: "Privacy" */ '~/components/Privacy/Privacy.vue')
  },
  head () {
    return {
      title: 'Polityka prywatności - Sklep KapKap.eu',
      meta: [
        {
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  },
  nuxtI18n: {
    paths: {
      pl: '/polityka-prywatnosci',
      en: '/privacy-policy'
    }
  }
}
</script>
