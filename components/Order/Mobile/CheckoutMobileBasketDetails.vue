<template>
  <div>
    <div class="payment__heading">
      Zamówienie
    </div>
    <div class="order__group">
      <div class="summary-mobile">
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="summary-mobile__element"
          :class="index !== 0 && 'element-border'"
        >
          <div class="summary-mobile__row">
            <div class="summary-mobile__imgs">
              <img :src="item.frontThumbnail" alt="" class="summary-mobile__img">
              <img :src="item.backThumbnail" alt="" class="summary-mobile__img">
            </div>
            <div class="summary-mobile__quantity">
              &times; {{ item.number }}
            </div>
          </div>
          <div class="summary-mobile__row">
            <div>
              <p class="summary-mobile__name2">
                {{ item.title }}
              </p>
              <p class="summary-mobile__name">
                ŚWIĘTA 1
              </p>
            </div>
            <div>
              <p class="summary-mobile__price">
                CENA
              </p>
              <p class="summary-mobile__price2">
                {{ item.price | currency }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="coupon">
        <div class="form__group">
          <label class="form__label" for="coupon">Kupon rabatowy</label>
          <input v-model="coupon" type="text" name="coupon">
        </div>
        <button type="button" class="btn btn--transparent" @click="addCoupon">
          Użyj kod
        </button>
      </div>
      <div v-if="discountValue" class="order-cost-mobile">
        <p class="order-cost-mobile_title">
          Kod rabatowy
        </p>
        <p class="order-cost-mobile__cost">
          -{{ discountValue | currency }}
        </p>
      </div>
      <div class="order-shipping-mobile">
        <p class="order-shipping-mobile__title">
          {{ $t('orderSummary.deliveryCost') }}
        </p>
        <p class="order-shipping-mobile__cost">
          {{ shippingCost | currency }}
        </p>
      </div>
      <div class="order-cost-mobile">
        <p class="order-cost-mobile__title">
          {{ $t('orderSummary.toPay') }}
        </p>
        <p class="order-cost-mobile__totalcost">
          {{ totalPrice | currency }}
        </p>
      </div>
    </div>
    <div class="order__submit margin_set">
      <a class="btn btn--green form__btn" @click="nextStep">
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
export default class CheckoutMobileBasketDetails extends Vue {
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

.payment__heading {
  font-family: "Poppins";
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: black;
  padding-top: 40px;
  display: flex;
  align-items: center;
}

.form__checkbox {
  margin-bottom: 0px;
}

.form__btn {
  margin-top: 46px !important;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1024px) {

}

.btn--green:hover {
  color: white;
}

.margin_set {
  margin-right: 0 !important;
}

.check_link {
  color: #31a045;
  text-decoration-line: underline;
}

@media (min-width: 1000px) {

}

@media (max-width: 999px) {

  .payment__heading {
    padding-top: 28px;
    font-weight: 600;
  }

}

.summary-mobile__price2 {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
}

.summary-mobile__imgs {
  display: flex;
}
</style>
