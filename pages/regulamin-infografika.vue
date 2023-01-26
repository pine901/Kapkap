<template>
  <div class="policy">
    <RegulationsInfographics />
  </div>
</template>

<script lang="js">
import { useBrowserLocation } from '@vueuse/core'

export default {
  name: 'RegulaminInfografikaPage',
  components: {
    RegulationsInfographics: () => import(/* webpackChunkName: "RegulationsInfographics" */ '~/components/Regulations/RegulationsInfographics.vue')
  },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Regulamin - infografika - Sklep KapKap.eu',
      meta: [
        {
          name: 'robots',
          content: 'noindex'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: location.value.href
        },
        {
          hid: 'shortcut icon',
          rel: 'shortcut icon',
          href: '/favicon.ico',
          type: 'image/x-icon'
        }
      ]
    }
  },
  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  }
}
</script>

<style>
  .policy {
    padding: clamp(50px, 4vw, 120px) 30px;
  }
</style>
