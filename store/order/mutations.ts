import { Vue } from 'nuxt-property-decorator'
import { DeliveryMethod, OrderContainer, OrderState, PaymentMethod } from '~/store/order/state'

export default {
  setOrder (state: OrderState, order: OrderContainer) {
    Vue.set(state, 'order', order)
  },

  clearOrder (state: OrderState) {
    Vue.set(state, 'order', {
      additionalInfo: '',
      billing: { address: '', city: '', country: 'pl', email: '', isCompany: false, name: '', phone: '', zip: '' },
      cost: { additional: 0, productPrice: 0, shippingCosts: 0 },
      delivery: {
        additionalData: undefined,
        address: '',
        city: '',
        country: 'pl',
        date: '',
        email: '',
        isCompany: false,
        method: '',
        name: '',
        phone: '',
        zip: ''
      },
      discount: { beforeDiscount: 0, discountValue: 0 },
      orderId: '',
      payment: { method: undefined, paymentDetails: { amount: 0, currency: '', token: '' }, status: undefined },
      serverTime: '',
      status: undefined,
      token: '',
      totalPrice: 0
    })
  },

  setDeliveryMethod (state: OrderState, method: DeliveryMethod) {
    if (state.order) {
      state.order.delivery.method = method
    }
  },

  setPaymentMethod (state: OrderState, method: PaymentMethod) {
    if (state.order) {
      state.order.payment.method = method
    }
  },

  setBilling (state: OrderState, billing: any) {
    if (state.order && JSON.stringify(billing) !== JSON.stringify(state.order.billing)) {
      state.order.billing = { ...billing }
    }
  },

  setDelivery (state: OrderState, delivery: any) {
    if (state.order && JSON.stringify(delivery) !== JSON.stringify(state.order.delivery)) {
      state.order.delivery = { ...delivery }
    }
  },

  setAdditionalInfo (state: OrderState, additionalInfo: string) {
    if (state.order && additionalInfo !== state.order.additionalInfo) {
      state.order.additionalInfo = additionalInfo
    }
  },

  setToken (state: OrderState, token: string) {
    if (state.order) {
      state.order.token = token
    }
  }
}
