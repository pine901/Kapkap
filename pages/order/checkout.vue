<template>
  <Checkout />
</template>

<script lang="js">
export default {
  name: 'CheckoutPage',

  components: {
    Checkout: () => import(/* webpackChunkName: "Checkout" */ '~/components/Order/Checkout.vue')
  },

  head () {
    return {
      title: 'Wybór płatności i transportu - Sklep KapKap.eu',
      meta: [],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://geowidget.easypack24.net/css/easypack.css'
        }
      ],
      script: [
        {
          src: 'https://geowidget.easypack24.net/js/sdk-for-javascript.js',
          async: true
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
      pl: '/zamowienie/transport-i-platnosc',
      en: '/order/checkout'
    }
  }
}
</script>
