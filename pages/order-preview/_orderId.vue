<template>
  <OrderPreview :order-id="orderId" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: { OrderPreview: () => import(/* webpackChunkName: "Cup" */ '~/components/OrderPreview/OrderPreview.vue') },
  asyncData ({ params }: any) {
    return { orderId: params.orderId || '' }
  },
  nuxtI18n: {
    paths: {
      en: '/order-preview/:orderId',
      pl: '/podglad-zamowienia/:orderId'
    }
  }
})

export default class OrderPreviewPage extends Vue {
  head () {
    return {
      title: 'Kubki klasy premium - Sklep KapKap.eu',
      meta: []
    }
  }
}
</script>
