<template>
  <section class="order-section desktop">
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

      <h3 class="order-sub__title">
        Dane zamawiającego i adres
      </h3>
    <ValidationObserver ref="observer">
      <form class="form order" method="POST" @submit.prevent="false">
        <div class="order__left">
          <div class="order__type">
            <label @click="setPrivateAddress">
              <input type="radio" name="addressType" value="private" :checked="!billing.isCompany">
              <span>OSOBA PRYWATNA
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.1663 15.375V13.9583C14.1663 13.2069 13.8678 12.4862 13.3365 11.9549C12.8051 11.4235 12.0845 11.125 11.333 11.125H5.66634C4.91489 11.125 4.19422 11.4235 3.66287 11.9549C3.13152 12.4862 2.83301 13.2069 2.83301 13.9583V15.375"
                    stroke="white"
                    stroke-width="1.63462"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.50033 8.29167C10.0651 8.29167 11.3337 7.02314 11.3337 5.45833C11.3337 3.89353 10.0651 2.625 8.50033 2.625C6.93552 2.625 5.66699 3.89353 5.66699 5.45833C5.66699 7.02314 6.93552 8.29167 8.50033 8.29167Z"
                    stroke="white"
                    stroke-width="1.63462"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </label>
            <label @click="setBusinessAddress">
              <input type="radio" name="addressType" value="company" :checked="billing.isCompany">
              <span>NA FIRMĘ
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.167 5.45834H2.83366C2.05126 5.45834 1.41699 6.09261 1.41699 6.87501V13.9583C1.41699 14.7407 2.05126 15.375 2.83366 15.375H14.167C14.9494 15.375 15.5837 14.7407 15.5837 13.9583V6.87501C15.5837 6.09261 14.9494 5.45834 14.167 5.45834Z"
                    stroke="black"
                    stroke-width="1.63462"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3337 15.375V4.04167C11.3337 3.66594 11.1844 3.30561 10.9187 3.03993C10.653 2.77426 10.2927 2.625 9.91699 2.625H7.08366C6.70794 2.625 6.3476 2.77426 6.08192 3.03993C5.81625 3.30561 5.66699 3.66594 5.66699 4.04167V15.375"
                    stroke="black"
                    stroke-width="1.63462"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </label>
          </div>
          <p class="order__heading order__heading--info">
            Dane odbiorcy
          </p>
          <AddressForm :form.sync="billing" @updated="onChange" />

          <div class="form__group">
            <label class="form__label" for="message">Wiadomość do sprzedawcy</label>
            <textarea v-model="additionalInfo" name="message" @change="onChange" />
          </div>

          <div class="form__checkbox">
            <label>
              <input id="order__show-fields" v-model="otherDeliveryAddress" type="checkbox" value="1">
              Chcę podać inne dane dostawy
            </label>
          </div>
          <AddressForm v-if="otherDeliveryAddress" :form.sync="delivery" @updated="onChange" />
        </div>

        <OrderBasketDetails @nextStep="goToCheckout" />
      </form>
    </ValidationObserver>
    </div>
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'

import AddressForm from '../Components/AddressForm.vue'
import OrderBasketDetails from '../Components/OrderBasketDetails.vue'
import OrderMixin from '~/components/Order/Mixins/OrderMixin'

@Component({
  components: { AddressForm, OrderBasketDetails }
})
export default class OrderDesktop extends OrderMixin {

}
</script>

<style lang="scss">
.order__title {
  font-size: 20px;
}

.order__title-wrapper {
  margin-bottom: 0;
}

.order-sub__title {
  font-family: "All Round Gothic";
  font-style: normal;
  font-size: 34px;
  font-weight: 400;
  line-height: 40.8px;
  letter-spacing: 0.15px;
  padding-bottom: 30px;
}

.form__checkbox {
  margin-bottom: 0px;
}

@media (min-width: 1000px) {
  .desktop {
    display: block;
  }
}

@media (max-width: 999px) {
  .desktop {
    display: none;
  }

  .order__title {
    font-size: 36px;
  }

  .order-sub__title {
    font-size: 22px;
    font-weight: 600;
    line-height: 26.4px;
    padding-top: 20px;
    padding-bottom: 0;
  }
}
</style>
