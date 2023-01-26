import { Action, Component, Getter, Mutation, Vue } from 'nuxt-property-decorator'
import { Product } from '~/store/basket/state'
import { DeliveryMethod, OrderContainer, PaymentMethod } from '~/store/order/state'

@Component
export default class OrderSummaryMixin extends Vue {
  @Getter('basket/cartItems') cartItemsStore!: Product[]
  @Getter('order/order') order!: OrderContainer

  @Action('order/makeOrder') makeOrder!: Function

  @Mutation('order/clearOrder') clearOrder!: Function
  @Mutation('basket/clearBasket') clearBasket!: Function
  @Mutation('app/clearToken') clearToken!: Function
  @Mutation('cup/resetWorkingObject') resetWorkingObject!: Function

  paymentInProgress: boolean = false

  get shippingDescription () {
    switch (this.order.delivery.method) {
      case DeliveryMethod.InPostParcelLocker:
        return `Dostawa: Inpost Paczkomat (${this.order.delivery.additionalData.name})`
      case DeliveryMethod.InPostCourier:
        return 'Dostawa: Inpost Kurier'
      default:
        return 'Nieznana forma dostawy'
    }
  }

  get paymentDescription () {
    switch (this.order.payment.method) {
      case PaymentMethod.Online:
        return this.$t('orderThanks.paymentOnline')
      case PaymentMethod.CashOnDelivery:
        return this.$t('orderThanks.paymentDelivery')
      case PaymentMethod.Transfer:
        return this.$t('orderThanks.paymentTransfer')
      default:
        return this.$t('orderThanks.paymentUnknown')
    }
  }

  goBack () {
    this.$router.push('/zamowienie')
  }

  clear () {
    this.resetWorkingObject()
    this.clearOrder()
    this.clearBasket()
    this.clearToken()
  }

  async pay () {
    this.paymentInProgress = true
    const res = await this.makeOrder()
    if (!res) {
      this.$emit('showMessage', {
        title: 'Płatność nie powiodła się',
        message: 'Spróbuj zapłacić za zamówienie ponownie. Możesz również skorzystać z wiadomości e-mail, ' +
          'w której znajdziesz link do płatności online. Jeżeli to nie jest możliwe, wybierz inną formę płatności.'
      })
      this.paymentInProgress = false
      return
    }

    if (this.order.payment.method === PaymentMethod.Online) {
      this.clear()
      if (res.redirectUrl) {
        location.href = res.redirectUrl
      } else {
        this.$emit('showMessage', {
          title: 'Przejście do płatności nie powiodło się',
          message: 'Spróbuj zapłacić za zamówienie ponownie. Możesz również skorzystać z wiadomości e-mail, ' +
            'w której znajdziesz link do płatności online. Jeżeli to nie jest możliwe, wybierz inną formę płatności.'
        })
        this.paymentInProgress = false
      }
    } else {
      this.clear()
      await this.$router.push('/zamowienie/dziekujemy')
    }
  }
}
