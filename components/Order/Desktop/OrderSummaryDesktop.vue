<template>
  <div class="desktop">
    <div class="container">
      <ul class="breadcrumbs">
        <li>
          <a href="/static" class="breadcrumbs__element">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path
                  d="M2 20.2487V12.4227C1.99994 11.8782 2.11104 11.3395 2.3265 10.8394C2.54195 10.3394 2.85722 9.8886 3.253 9.51468L10.626 2.54669C10.9973 2.19561 11.489 2 12 2C12.511 2 13.0027 2.19561 13.374 2.54669L20.747 9.51468C21.1428 9.8886 21.458 10.3394 21.6735 10.8394C21.889 11.3395 22.0001 11.8782 22 12.4227V20.2487C22 20.7791 21.7893 21.2878 21.4142 21.6629C21.0391 22.038 20.5304 22.2487 20 22.2487H4C3.46957 22.2487 2.96086 22.038 2.58579 21.6629C2.21071 21.2878 2 20.7791 2 20.2487Z"
                  stroke="black"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <NuxtLink to="/" class="breadcrumbs__element">
            Personalizowane prezenty
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/zamowienie" class="breadcrumbs__element">
            Zamówienie
          </NuxtLink>
        </li>
        <li class="breadcrumbs__last">
          Podsumowanie
        </li>
      </ul>
    </div>

    <div v-if="order.orderId">
      <section class="section-b-space">
        <div class="container">
          <div class="container-left">
            <div class="order__title title title--green">
              Zamówienie nr {{ order.orderId }}
            </div>
            <h3 class="order__subtitle">
              {{ $t('orderThanks.summary') }} zamówienia
            </h3>
            <div>
              <div class="order-success-sec">
                <div>
                  <div class="thanks_title">
                    <h4>Dane zamawiającego</h4>
                    <p>
                      <NuxtLink to="/zamowienie">
                        zmień
                      </NuxtLink>
                    </p>
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
                  <div />

                  <div>
                    <div class="thanks_title">
                      <h4>{{ $t('orderThanks.deliveryAddress') }}</h4>
                    </div>

                    <ul class="order-detail">
                      <li>{{ order.delivery.name }}</li>
                      <li>{{ order.delivery.address }}</li>
                      <li>{{ order.delivery.city }}, {{ order.delivery.zip }}</li>
                    </ul>
                  </div>
                </div>
                <div>
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
                    </div>
                    <p>
                      {{ paymentDescription }}
                    </p>
                  </div>
                </div>

                <!-- <div class="payment-mode">
                  <h4>{{ $t('orderThanks.paymentMethod') }}</h4>
                  <p>{{ getPaymentDescription(order.payment.method) }}</p>
                </div> -->
                <div v-if="false">
                  <button class="btn btn--transparent" @click="goBack">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    WRÓĆ DO ZAMÓWIENIA
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="container-right">
            <div class="summary__cart">
              <h3 class="cart_title">
                Twój koszyk
              </h3>

              <div class="summary-desktop--border">
                <table class="summary-desktop summary-desktop--col4">
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

              <!-- <div class="coupon ord-left thank">
                <div class="form__group">
                  <label class="form__label">Kupon rabatowy</label>
                  <input type="text" name="coupon">
                </div>
                <button class="btn btn--green">
                  Użyj kupon
                </button>
              </div> -->
              <!-- <div class="order-cost">
                <p class="order-cost__title">
                  Suma do zapłaty
                </p>
                <p class="order-cost__shipping">
                  darmowa dostawa
                </p>
                <p class="order-cost__cost">
                  {{ order.totalPrice | currency }}
                </p>
              </div> -->

              <div v-if="order.discount && order.discount.discountValue" class="order-cost">
                <p class="order-cost__title">
                  kod rabatowy
                </p>
                <p class="order-cost__cost">
                  {{ order.discount.discountValue | currency }}
                </p>
              </div>
              <div v-if="order.cost" class="order-shipping">
                <p class="order-shipping__title">
                  Koszt dostawy
                </p>
                <p class="order-shipping__cost">
                  {{ order.cost.shippingCosts | currency }}
                </p>
              </div>
              <div class="order-cost">
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

              <!-- <div class="order-checkbox">
                  <label>
                    <input type="checkbox" name="">
                    Akceptuję <a href="" target="_blank"> regulamin</a> sklepu*
                  </label>
                </div>

                <p class="mobile-order-info">
                  Pamiętaj, Twoje dane są u nas bezpieczne,
                  a zgodę możesz wycofać w każdej chwili
                </p> -->
            </div>
          </div>
        </div>
      </section>
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
export default class OrderSummaryDesktop extends OrderSummaryMixin {
}
</script>

<style scoped>
.desktop {
  display: block;
}

.thanks_payment {
  width: 350px;
}

@media (max-width: 450px) {
  .order__subtitle {
    padding-left: 24px;
  }
}

@media (max-width: 1050px) {
  .desktop {
    display: none;
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

.container {
  display: flex;
  width: auto;
  margin: auto;
  padding: 0px;
}

.container-left {
  width: 50%;
}

.container-right {
  width: 50%;
}

.order__title {
  font-size: 20px;
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

.section-b-space {
  padding-top: 0px;
}

.breadcrumbs {
  margin-top: 50px;
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
