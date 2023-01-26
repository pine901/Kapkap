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
          Dostawa i płatność
        </li>
      </ul>
    </div>

    <CheckoutDesktop :shipping-data="shippingData" @showMap="showMap" />
    <CheckoutMobile :shipping-data="shippingData" @showMap="showMap" />

    <client-only>
      <InpostMap v-show="isMapVisible" @close="closeMap" />
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue, Watch } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'

import CheckoutDesktop from '~/components/Order/Desktop/CheckoutDesktop.vue'
import CheckoutMobile from '~/components/Order/Mobile/CheckoutMobile.vue'
import InpostMap from '~/components/Order/Components/InpostMap.vue'
import { ParcelLock } from '~/components/Order/Mixins/CheckoutMixin'
import { OrderContainer } from '~/store/order/state'

@Jsonld
@Component({
  components: { CheckoutMobile, CheckoutDesktop, InpostMap }
})
export default class Checkout extends Vue {
  @Getter('order/order') order!: OrderContainer

  shippingData: ParcelLock = {
    building_number: null,
    city: null,
    post_code: null,
    province: null,
    street: null,
    functions: null,
    location: null,
    latitude: null,
    longitude: null,
    location_247: null,
    location_date: null,
    name: null,
    opening_hours: null,
    type: null
  }

  isMapVisible: boolean = false

  @Getter('app/token') token!: string | null

  @Watch('order', { deep: true })
  onOrderChange () {
    if (this.order?.delivery?.additionalData) {
      this.shippingData = this.order.delivery.additionalData
    }
  }

  async created () {
    if (!this.token) {
      await this.$router.push('/koszyk')
    }

    this.onOrderChange()
  }

  showMap () {
    this.isMapVisible = true
    if (document.getElementsByClassName('easypack-widget').length < 1) {
      const self = this
      if ((window as any).easyPack) {
        (window as any).easyPack.init({
          defaultLocale: 'pl',
          mapType: 'osm',
          searchType: 'osm',
          points: {
            types: ['parcel_locker']
          },
          map: {
            useGeolocation: true,
            initialTypes: ['parcel_locker']
          }
        });

        (window as any).easyPack.mapWidget('easypack-map', function (point: any) {
          self.shippingData = {
            building_number: point.address_details.building_number,
            city: point.address_details.city,
            post_code: point.address_details.post_code,
            province: point.address_details.province,
            street: point.address_details.street,
            functions: point.functions,
            location: point.location,
            latitude: point.latitude,
            longitude: point.longitude,
            location_247: point.location_247,
            location_date: point.location_date,
            name: point.name,
            opening_hours: point.opening_hours,
            type: point.type
          }
          self.closeMap()
        })
      }
    }
  }

  closeMap () {
    this.isMapVisible = false
  }
}
</script>

<style lang="scss" scoped>
  .payment-section {
    padding-bottom: 500px;
  }

  .back-btn {
    margin-left: 0px !important;
  }

  .search-group-btn {
    vertical-align: bottom !important;
  }

  .search-input {
    height: 68px !important;
  }

  .image-wrapper {
    align-items: center;
  }

  .list-widget {
    visibility: visible !important;
  }

  .search-group:not(.with-filters) {
    width: 90% !important;
  }

  .total {
    border-bottom: 1px solid $round-border;
    padding-bottom: 30px;
  }

  .data {
    font-size: 20px !important;
    line-height: 25px !important;
  }

  .element-border {
  border-top: 2px solid rgba(0,0,0,0.1);
  padding-top: 10px;
}

@media (max-width: 999px) {
  .search-input {
    height: 83px !important;
  }
}
</style>
