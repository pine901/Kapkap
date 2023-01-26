<template>
  <div>Przekierowywanie do bramki płatności...</div>
</template>

<script lang="js">
import { $axios } from '@/utils/api'

export default {
  layout: 'empty',
  asyncData ({ params }) {
    return { token: params.token || '' }
  },
  data () {
    return {
      token: ''
    }
  },
  head () {
    return {
      title: 'Przekierowywanie do bramki płatności - Sklep KapKap.eu',
      meta: []
    }
  },
  async created () {
    if (process.client) {
      const res = await $axios.get(`/v1/pay/${this.token}`)
      if (res.data?.success) {
        if (res.data?.redirectUrl) {
          // eslint-disable-next-line nuxt/no-globals-in-created
          window.location.href = res.data.redirectUrl
        } else {
          this.$router.push('/')
        }
      }
    }
  }
}
</script>
