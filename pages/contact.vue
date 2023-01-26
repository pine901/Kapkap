<template>
  <Contact />
</template>

<script lang="js">
export default {
  name: 'ContactPage',
  components: {
    Contact: () => import(/* webpackChunkName: "Contact" */ '~/components/Contact/Contact.vue')
  },
  head () {
    return {
      title: 'Kontakt - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  },
  nuxtI18n: {
    paths: {
      pl: '/kontakt',
      en: '/contact'
    }
  }
}
</script>
