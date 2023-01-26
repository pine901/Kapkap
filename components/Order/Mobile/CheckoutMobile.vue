<template>
  <section class="order-section mobile">
    <div class="container">
      <div class="order__title-wrapper">
        <a href="" class="order__arrow">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 8L12 16L20 24"
              stroke="#0005"
              stroke-width="2.28571"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <div class="order__title title title--green">
          Zamówienie
        </div>
      </div>
      <form class="form order" method="POST" @submit.prevent="false">
        <div>
          <div class="payment__heading">
            Sposób dostawy
          </div>
          <div class="order-method">
            <div>
              <label
                v-for="(shippingType, key) in shippingTypes"
                :key="key"
                class="order__box  order__box--shipping"
              >
                <input
                  type="radio"
                  name="delivery"
                  :value="shippingType.id"
                  :checked="deliveryMethod === shippingType.id"
                  @click="handleChangeDeliveryMethod(shippingType.id)"
                >
                <span>
                  <img :src="shippingType.img.path" :alt="shippingType.img.alt">
                </span>
              </label>

              <div v-if="isParcelLock" class="mapbtn">
                <button type="button" class="btn btn--green" @click="showMap">
                  Wybierz paczkomat
                </button>
                <p v-if="shippingData.name" class="method_title">
                  Wybrałeś:
                </p>
                <p v-if="shippingData.name" class="method_text">
                  {{ shippingData.name }}
                  {{ shippingData.city }}
                  {{ shippingData.street }}
                  {{ shippingData.building_number }}
                  {{ shippingData.post_code }}
                </p>
              </div>
            </div>
          </div>
          <div class="payment__heading">
            Metoda płatności
          </div>
          <div class="order__payment">
            <div class="order__boxes-wrapper">
              <label
                v-for="(paymentType, key) in paymentTypes"
                :key="key"
                class="order__box order__box--payment"
              >
                <input
                  type="radio"
                  name="payment"
                  :value="paymentType.id"
                  :checked="paymentMethod === paymentType.id"
                  @click="handleChangePaymentMethod(paymentType.id)"
                >
                <span>
                  <img :src="paymentType.img.path" :alt="paymentType.img.alt">
                </span>
              </label>
            </div>
          </div>

          <CheckoutMobileBasketDetails @nextStep="goToOrderSummary" />
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'

import CheckoutMixin from '~/components/Order/Mixins/CheckoutMixin'
import CheckoutMobileBasketDetails from '~/components/Order/Mobile/CheckoutMobileBasketDetails.vue'

@Component({
  components: { CheckoutMobileBasketDetails }
})
export default class CheckoutMobile extends CheckoutMixin {
}
</script>

<style lang="scss" scoped>

.order__title {
  font-size: 20px;
}

.order__title-wrapper {
  margin-bottom: 0px;
}

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

.btn--green:hover {
  color: white;
}

.order__box--shipping {
  max-width: 100%;
}

.method_title {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  padding-top: 30px;
  padding-bottom: 15px;
}

.method_text {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
}

@media (min-width: 1000px) {
  .mobile {
    display: none;
  }
}

@media (max-width: 999px) {
  .mobile {
    display: block;
  }

  .order__title {
    font-size: 36px;
  }

  .payment__heading {
    padding-top: 28px;
    font-weight: 600;
  }

}
</style>
