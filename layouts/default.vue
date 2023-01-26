<template>
  <div>
    <Header />
    <div class="nav_gap"></div>
    <Nuxt @showMessage="showMessage" />
    <Popup ref="popup" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Common/Header/Header'
import Footer from '@/components/Common/Footer/Footer'
import Popup from '@/components/Common/Popup'

export default {
  components: { Footer, Header, Popup },

  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://kapkap.eu' + (this.$route.path !== '/' ? this.$route.path : '')
        }
      ]
    }
  },

  async created () {
    await this.$store.dispatch('basket/loadBasket')
    await Promise.allSettled([
      this.$store.dispatch('defaults/load'),
      this.$store.dispatch('order/getOrder')
    ])

    this.$nuxt.$on('showMessage', this.showMessage)
  },

  methods: {
    showMessage (event) {
      this.$refs.popup.showMessage(event)
    }
  }
}
</script>

<style>
  .nav_gap {
    height: 165px;
  }
  @media (max-width: 1199px) {
    .nav_gap {
      height: 135px;
    }
  }
</style>
