<template>
  <div>
    <div class="container">
      <ul class="breadcrumbs">
        <li>
          <a href="/" class="breadcrumbs__element">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M2 20.2487V12.4227C1.99994 11.8782 2.11104 11.3395 2.3265 10.8394C2.54195 10.3394 2.85722 9.8886 3.253 9.51468L10.626 2.54669C10.9973 2.19561 11.489 2 12 2C12.511 2 13.0027 2.19561 13.374 2.54669L20.747 9.51468C21.1428 9.8886 21.458 10.3394 21.6735 10.8394C21.889 11.3395 22.0001 11.8782 22 12.4227V20.2487C22 20.7791 21.7893 21.2878 21.4142 21.6629C21.0391 22.038 20.5304 22.2487 20 22.2487H4C3.46957 22.2487 2.96086 22.038 2.58579 21.6629C2.21071 21.2878 2 20.7791 2 20.2487Z" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <NuxtLink to="/kubki" class="breadcrumbs__element">
            Personalizowane prezenty
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/zamowienie" class="breadcrumbs__element">
            Zamówienie
          </NuxtLink>
        </li>
        <li class="breadcrumbs__last">
          Dane zamawiającego i adres
        </li>
      </ul>
    </div>

    <OrderDesktop />
    <OrderMobile />
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue, Action } from 'nuxt-property-decorator'

import OrderBasketDetails from './Components/OrderBasketDetails.vue'
import AddressForm from './Components/AddressForm.vue'
import OrderDesktop from '~/components/Order/Desktop/OrderDesktop.vue'
import OrderMobile from '~/components/Order/Mobile/OrderMobile.vue'

@Component({
  components: { OrderMobile, OrderDesktop, OrderBasketDetails, AddressForm }
})
export default class Order extends Vue {
  @Getter('app/token') token!: string | null

  @Action('order/getOrder') loadOrder!: Function

  async created () {
    if (!this.token) {
      await this.$router.push('/koszyk')
      return
    }

    // we cannot be sure the order is loaded, so better to load the order again
    await this.loadOrder()
  }
}
</script>

<style lang="scss">
.form__btn {
  margin-top: 46px !important;
  margin-left: auto;
  margin-right: auto;
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
</style>
