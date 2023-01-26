<template>
  <div class="mobile">
    <h1 class="order__subtitle">
      {{ $t('orderThanks.summary') }} zamówienia
    </h1>
    <br />
    <div v-if="order.orderId" class="mobile-order">
      <div class="personal_data">
        <div class="thanks_title">
          <h4>Dane zamawiającego</h4>
          <p>
            <NuxtLink to="/zamowienie">
              zmień
            </NuxtLink>
          </p>
        </div>
        <div class="mobile-type">
          <span v-if="!order.billing.isCompany">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1663 15.375V13.9583C14.1663 13.2069 13.8678 12.4862 13.3365 11.9549C12.8051 11.4235 12.0845 11.125 11.333 11.125H5.66634C4.91489 11.125 4.19422 11.4235 3.66287 11.9549C3.13152 12.4862 2.83301 13.2069 2.83301 13.9583V15.375" stroke="black" stroke-width="1.63462" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.50033 8.29167C10.0651 8.29167 11.3337 7.02314 11.3337 5.45833C11.3337 3.89353 10.0651 2.625 8.50033 2.625C6.93552 2.625 5.66699 3.89353 5.66699 5.45833C5.66699 7.02314 6.93552 8.29167 8.50033 8.29167Z" stroke="black" stroke-width="1.63462" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            OSOBA FIZYCZNA
          </span>
          <span v-else>
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
            NA FIRMĘ
          </span>
        </div>

        <ul class="order-detail">
          <li v-if="order.billing.isCompany">
            {{ order.billing.companyName }}
          </li>
          <li v-if="order.billing.isCompany">
            {{ order.billing.taxId }}
          </li>
          <li v-if="!order.billing.isCompany">
            <div>
              {{ order.billing.name }}
            </div>
          </li>
          <li>
            <div>
              {{ order.billing.email }}
            </div>
          </li>
          <li>
            <div>
              {{ order.billing.phone }}
            </div>
          </li>
          <li>
            <div />
          </li>
        </ul>

        <div>
          <h4>{{ $t('orderThanks.deliveryAddress') }}</h4>

          <ul class="order-detail">
            <li>{{ order.delivery.name }}</li>
            <li>{{ order.delivery.address }}</li>
            <li>{{ order.delivery.city }}, {{ order.delivery.zip }}</li>
          </ul>
        </div>
      </div>
      <div class="payment">
        <div class="thanks_title">
          <h4>Dostawa i płatność</h4>
          <p>
            <NuxtLink to="/zamowienie/transport-i-platnosc">
              zmień
            </NuxtLink>
          </p>
        </div>
        <div class="thanks_payment">
          <div class="thanks_payment_address">
            <p>{{ shippingDescription }}</p>
            <div />
          </div>
          <div>
            <p>{{ paymentDescription }}</p>
            <div />
          </div>
        </div>
      </div>
    </div>
    <div class="container-right">
      <div class="summary__cart">
        <h3 class="cart_title">
          Twój koszyk
        </h3>

        <div class="thanks-mobile--border">
          <table class="thanks-mobile thanks-mobile--col4">
            <tbody>
              <tr>
                <th>Nazwa kubka</th>
                <th>cena</th>
                <th>SZTUK</th>
                <th>Razem</th>
              </tr>
              <tr v-for="(item, index) in cartItemsStore" :key="index">
                <td>
                  <img :src="item.frontThumbnail" alt="thumbnail">
                  {{ item.title }}
                </td>

                <td>
                  <b>{{ item.price*item.number | currency }}</b>
                </td>

                <td>
                  <b>{{ item.number }}</b>
                </td>

                <td>
                  <b>{{ item.price*item.number | currency }}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="order.discount && order.discount.discountValue" class="mobile-order-cost">
          <p class="order-cost__title">
            kod rabatowy
          </p>
          <p class="order-cost__cost">
            {{ order.discount.discountValue | currency }}
          </p>
        </div>
        <div v-if="order.cost" class="mobile-order-shipping">
          <p class="order-shipping__title">
            Koszt dostawy
          </p>
          <p class="order-shipping__cost">
            {{ order.cost.shippingCosts | currency }}
          </p>
        </div>
        <div class="mobile-order-cost">
          <p class="order-cost__totaltitle">
            Do zapłaty
          </p>
          <p class="order-cost__totalcost">
            {{ order.totalPrice | currency }}
          </p>
        </div>

        <div class="ord-left">
          <button class="btn btn--green" style="width: 100%;" :disabled="paymentInProgress" @click="pay">
            ZAMÓW I ZAPŁAĆ
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <div v-if="false" class="mobile-checkbox">
          <div class="order-checkbox">
            <label>
              <input type="checkbox" name="">
              Akceptuję <a href="" target="_blank"> regulamin</a> sklepu*
            </label>
          </div>

          <p class="mobile-order-info">
            Pamiętaj, Twoje dane są u nas bezpieczne,
            a zgodę możesz wycofać w każdej chwili
          </p>
        </div>
      </div>
    </div>
    <div class="mobile-btn">
      <button class="btn btn--transparent" style="width: 70%;" @click="goBack">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        WRÓĆ DO ZAMÓWIENIA
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'

import OrderSummaryMixin from '~/components/Order/Mixins/OrderSummaryMixin'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import Picture from '~/components/Common/Picture.vue'

@Component({
  components: { Breadcrumb, Picture }
})
export default class OrderSummaryMobile extends OrderSummaryMixin {
}
</script>

<style scoped>
.mobile {
  display: none;
}

.mobile-order {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.personal_data {
  width: 350px;
}

.thanks_payment {
  width: 350px;
}

.mobile-type {
  padding-top: 20px;
}

.mobile-btn {
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-checkbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobile-order-info {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  opacity: 0.3;
  text-align: center;
  margin: 0;
}

@media (max-width: 450px) {
  .order__subtitle {
    padding-left: 24px;
  }
}

@media (max-width: 1050px) {
  .mobile {
    display: block;
  }

  .order__subtitle {
    padding-top: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'All Round Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: #31A745;
  }

  .container-right {
    width: 100% !important;
    display: flex;
    justify-content: center;
  }

  .cart_title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.container-right {
  width: 50%;
}

.order__subtitle {
  font-family: "All Round Gothic";
  font-size: 34px;
  font-weight: 400;
  font-style: normal;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
}

p {
  font-family: Poppins, 'sans-serif';
  font-weight: 400;
}

h4 {
  font-family: 'All Round Gothic';
  font-weight: 600;
  margin-top: 38px;
}

.mobile-order-cost {
  display: flex;
  justify-content: space-between;
}

.mobile-order-shipping {
  display: flex;
  justify-content: space-between;
}

.order-shipping__cost {
  color: #31a745;
}

.summary__cart {
  margin-left: -30px;
  margin-right: -30px;
  padding: 40px 75px;
  border: 2px solid #31a745;
  filter: drop-shadow(0px 22px 30px rgba(0, 0, 0, 0.05)) drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.05));
  border-radius: 24px;
  margin-bottom: 50px;
}

@media screen and (min-width: 1000px) {
  .summary__cart {
    padding: 40px 75px;
  }
}

.ord-left {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}

/* .order-cost{
  align-items: end;
  display: flex;
  flex-direction: column;
} */

.order-cost__title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
}

.order-cost__totaltitle {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
}

.order-cost__totalcost {
  font-family: 'All Round Gothic';
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
  color: #31A745;
}

.order-cost__cost {
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
}

section {
  margin-bottom: 100px;
}

.thanks_title {
  display: flex;
}

.thanks_title > h4 {
  display: flex;
  align-items: center;
  font-size: 24px;
}

.thanks_title > p > a {
  margin-top: 38px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #31a745;
}

.thanks_subtitle > p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
}

.thanks_payment {
  padding-bottom: 75px;
}

.thanks_payment_address > p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
}

.cart_title {
  font-family: 'All Round Gothic';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #31A745;
  padding-bottom: 40px;
}
</style>
