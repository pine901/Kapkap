<template>
  <div class="orderPreview">
    <div v-if="order.orderId" class="container">
      <h2 class="order-number">
        {{ $t('orderPreview.order') }}: {{ order.orderId }}
      </h2>

      <div v-for="(item, index) in cartItems" :key="index" class="orderPreview--item">
        <div class="orderPreview--images">
          <img :src="item.frontThumbnail" :alt="$t('cup.frontCup')">
          <img :src="item.backThumbnail" :alt="$t('cup.backCup')">
        </div>
        <div class="orderPreview--details">
          <p>Nazwa kubka: {{ item.title }}</p>
          <p>{{ $t('orderPreview.pricePerItem') }}: {{ item.price|currency }}</p>
          <p>{{ $t('orderPreview.sum') }}: {{ (item.price*item.number)|currency }}</p>
          <p>{{ $t('orderPreview.quantity') }}: {{ item.number }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Action } from 'nuxt-property-decorator'
import { Product } from '~/store/basket/state'
import { OrderContainer } from '~/store/order/state'

@Component
export default class OrderPreview extends Vue {
  @Prop(String) readonly orderId!: string

  @Action('order/getOrderPreview') getOrderPreview!: Function
  @Action('basket/loadBasket') loadBasket!: Function

  order: OrderContainer = {
    orderId: '',
    token: '',
    billing: {
      isCompany: false,
      name: '',
      companyName: '',
      phone: '',
      email: '',
      address: '',
      zip: '',
      city: '',
      country: 'pl',
      taxId: ''
    },
    delivery: {
      name: '',
      phone: '',
      email: '',
      address: '',
      zip: '',
      city: '',
      country: 'pl',
      method: 0,
      date: '',
      additionalData: undefined
    },
    payment: {
      method: 0,
      status: 0,
      paymentDetails: {
        token: '',
        amount: 0,
        currency: ''
      }
    },
    cost: {
      shippingCosts: 0,
      additional: 0,
      productPrice: 0
    },
    discount: {
      beforeDiscount: 0,
      discountValue: 0
    },
    totalPrice: 0,
    additionalInfo: '',
    serverTime: '',
    clientTime: '',
    status: 0
  }

  cartItems: Product[] = []

  shippingTypes: Record<any, any> = {
    INPOST_COURIER: this.$t('orderSummary.deliveryCourier'),
    INPOST_PARCEL_LOCKER: this.$t('orderSummary.deliveryParcelLocker'),
    PACZKOMATY: this.$t('orderSummary.deliveryParcelLocker')
  }

  paymentTypes: Record<any, any> = {
    ONLINE: this.$t('orderSummary.paymentOnline'),
    CASH_ON_DELIVERY: this.$t('orderSummary.paymentCash'),
    TRANSFER: this.$t('orderSummary.paymentWireTransfer')
  }

  async created () {
    this.order = await this.getOrderPreview(this.orderId)
    this.cartItems = await this.loadBasket(this.order.token)
  }
}
</script>
