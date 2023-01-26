<template>
  <div class="order__right">
    <div v-if="cartItems.length === 1" class="order__title title title--green">
      Zamawiany kubek
    </div>
    <div v-if="cartItems.length > 1" class="order__title title title--green">
      Zamawiane kubki
    </div>
    <br>

    <div class="order__right-wrapper">
      <div class="order__group">
        <table class="summary-desktop summary-desktop--col3">
          <tbody>
            <tr>
              <th class="left">
                Kubek
              </th>
              <th>SZTUK</th>
              <th>cena</th>
            </tr>
            <template v-for="(item, index) in cartItems">
              <tr :key="index">
                <td>
                  <img :src="item.frontThumbnail" alt="" class="summary-desktop__img" />
                </td>
                <td>
                  <div class="item__number">
                    &times;&nbsp;{{ item.number }}
                  </div>
                </td>
                <td>
                  <div class="item__price">
                    {{ item.price | currency }}
                  </div>
                </td>
              </tr>
              <tr :key="`${index}-0`">
                <td colspan="3" class="p-t-0">
                  <p class="summary-desktop__name p-t-0 left">
                    {{ item.title }}
                  </p>
                </td>
              </tr>
            </template>
          </tbody>
        </table>

        <template>
          <div class="coupon">
            <div class="form__group">
              <label class="form__label" for="coupon">Kupon rabatowy</label>
              <input v-model="coupon" type="text" name="coupon">
            </div>
            <button type="button" class="btn btn--transparent" @click="addCoupon">
              Użyj kod
            </button>
          </div>

          <div v-if="discountValue" class="order-cost">
            <p class="order-cost__title">
              Upust
            </p>
            <p class="order-cost__cost">
              {{ discountValue | currency }}
            </p>
          </div>
          <div class="order-shipping">
            <p class="order-shipping__title">
              {{ $t('orderSummary.deliveryCost') }}
            </p>
            <p v-if="order.cost" class="order-shipping__cost">
              {{ shippingCost | currency }}
            </p>
          </div>
          <div class="order-cost">
            <p class="order-cost__title">
              {{ $t('orderSummary.toPay') }}
            </p>
            <p class="order-cost__totalcost">
              {{ totalPrice | currency }}
            </p>
          </div>
        </template>
      </div>
    </div>

    <div class="order__submit margin_set">
      <a class="btn btn--green form__btn" style="width: 100%;" @click="nextStep">
        <span style="display: flex;">
          PODSUMOWANIE ZAMÓWIENIA
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.5 18L15.5 12L9.5 6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import { Product } from '~/store/basket/state'
import { OrderContainer } from '~/store/order/state'

@Component
export default class CheckoutBasketDetails extends Vue {
  @Getter('basket/cartItems') cartItems!: Product[]
  @Getter('order/totalPrice') totalPrice!: number
  @Getter('order/order') order!: OrderContainer

  @Action('order/applyCoupon') applyCoupon!: Function

  coupon: string = ''

  get discountValue () {
    return this.order?.discount?.discountValue || 0
  }

  get shippingCost () {
    return this.order?.cost?.shippingCosts || 0
  }

  async addCoupon () {
    await this.applyCoupon(this.coupon)

    if (this.order?.discount?.discountValue === 0) {
      this.$nuxt.$emit('showMessage', {
        title: 'Przepraszamy',
        message: 'Ten kupon jest niepoprawny.'
      })
    } else {
      this.$nuxt.$emit('showMessage', {
        title: 'Dziękujemy',
        message: 'Kupon został zastosowany.'
      })
    }
  }

  nextStep () {
    this.$emit('nextStep')
  }
}
</script>

<style lang="scss">
.form__btn {
  margin-top: 46px !important;
  margin-left: auto;
  margin-right: auto;
}

.left {
  text-align: left;
}

.p-t-0 {
  padding-top: 0!important;
}

.summary-desktop__img {
  max-height: 80px;
}

@media (max-width: 1024px) {

}

.btn--green:hover {
  color: white;
}

.margin_set {
  margin-right: 0 !important;
}

.summary-desktop {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

@media (min-width: 1000px) {
}

@media (max-width: 999px) {

}

</style>
