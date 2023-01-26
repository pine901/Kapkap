import { Action, Component, Getter, Mutation, Prop, Vue, Watch } from 'nuxt-property-decorator'

import { DeliveryMethod, OrderContainer, PaymentMethod } from '~/store/order/state'

export type ParcelLock = {
  // eslint-disable-next-line camelcase
  building_number?: any,
  city?: any,
  // eslint-disable-next-line camelcase
  post_code?: any,
  province?: any,
  street?: any,
  functions?: any,
  location?: any,
  latitude?: any,
  longitude?: any,
  // eslint-disable-next-line camelcase
  location_247?: any,
  // eslint-disable-next-line camelcase
  location_date?: any,
  name?: any,
  // eslint-disable-next-line camelcase
  opening_hours?: any,
  type?: any
}

@Component
export default class CheckoutMixin extends Vue {
  @Prop() shippingData!: ParcelLock

  @Getter('order/order') order!: OrderContainer

  @Mutation('order/setOrder') setOrder!: Function
  @Mutation('order/setDelivery') setDelivery!: Function
  @Mutation('order/setDeliveryMethod') setDeliveryMethod!: Function
  @Mutation('order/setPaymentMethod') setPaymentMethod!: Function

  @Action('order/updateOrder') updateOrder!: Function

  shippingTypes: any = [
    {
      id: DeliveryMethod.InPostParcelLocker,
      label: 'Paczkomaty',
      img: {
        path: '/images/img/paczkomaty.jpg',
        alt: 'Paczkomaty'
      },
      checked: 'checked'
    },
    {
      id: DeliveryMethod.InPostCourier,
      label: 'Kurier',
      img: {
        path: '/images/img/kurier.jpg',
        alt: 'Kurier'
      },
      checked: ''
    }
  ];

  paymentTypes: any = [
    {
      id: PaymentMethod.Online,
      label: 'Płatność on-line',
      img: {
        path: '/images/img/platnosc-online.jpg',
        alt: 'payment online'
      },
      checked: true
    },
    {
      id: PaymentMethod.CashOnDelivery,
      label: 'Płatność za pobraniem',
      img: {
        path: '/images/img/platnosc-za-pobraniem.jpg',
        alt: 'cash on delivery'
      },
      checked: false
    },
    {
      id: PaymentMethod.Transfer,
      label: 'Przelew na konto',
      img: {
        path: '/images/img/przelew-na-konto.jpg',
        alt: 'manual transfer'
      },
      checked: false
    }
  ];

  deliveryMethod: DeliveryMethod = DeliveryMethod.InPostParcelLocker
  paymentMethod: PaymentMethod = PaymentMethod.Online

  @Watch('order', { deep: true })
  onOrderChange () {
    if (this.order.delivery && this.order.payment) {
      this.deliveryMethod = this.order.delivery.method
      this.paymentMethod = this.order.payment.method
    }
  }

  @Watch('shippingData', { deep: true })
  async onShippingDataChange () {
    const newDelivery = { ...this.order.delivery, additionalData: this.shippingData }
    if (this.order && JSON.stringify(this.order.delivery) !== JSON.stringify(newDelivery)) {
      this.setDelivery(newDelivery)
      await this.updateOrder()
    }
  }

  get isParcelLock () {
    return this.deliveryMethod === DeliveryMethod.InPostParcelLocker
  }

  mounted () {
    this.onOrderChange()
  }

  async handleChangeDeliveryMethod (method: DeliveryMethod) {
    this.deliveryMethod = method
    this.setDeliveryMethod(method)
    await this.updateOrder()
  }

  async handleChangePaymentMethod (method: PaymentMethod) {
    this.paymentMethod = method
    this.setPaymentMethod(method)
    await this.updateOrder()
  }

  showMap () {
    this.$emit('showMap')
  }

  goToOrderSummary () {
    if (this.isParcelLock && !this.shippingData?.name?.trim()) {
      this.$nuxt.$emit('showMessage', {
        title: 'Paczkomat',
        message: 'Wydaje nam się, że nie został wybrany paczkomat, do którego mamy dostarczyć paczkę.'
      })
    } else {
      this.$router.push('/zamowienie/podsumowanie')
    }
  }
}
