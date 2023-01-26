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
            <template v-for="(item, index) in cartItems">
              <tr :key="index">
                <td>
                  <img :src="item.frontThumbnail" alt="" class="summary-desktop__img">
                </td>
                <td>
                  <img :src="item.middleThumbnail" alt="" class="summary-desktop__img">
                </td>
                <td>
                  <img :src="item.backThumbnail" alt="" class="summary-desktop__img">
                </td>
                <td>
                  <div class="item__number">
                    &times;&nbsp;{{ item.number }}
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

        <table class="summary-mobile">
          <tbody>
            <template v-for="(item, index) in cartItems">
              <tr :key="index">
                <td>
                  <img :src="item.frontThumbnail" alt="" class="summary-mobile__img">
                </td>
                <td>
                  <div class="item__number">
                    &times;&nbsp;{{ item.number }}
                  </div>
                </td>
              </tr>
              <tr :key="`${index}-0`">
                <td colspan="2" class="p-t-0">
                  <p class="summary-mobile__name p-t-0 left">
                    {{ item.title }}
                  </p>
                  <br />
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <div class="order__submit margin_set">
      <a class="btn btn--green form__btn checkout_button" style="width: 100%;" @click="nextStep">
        <span style="display: flex;">
          WYBIERZ DOSTAWĘ I PŁATNOŚĆ
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
import { Component, Getter, Vue } from 'nuxt-property-decorator'

import { Product } from '~/store/basket/state'

@Component
export default class OrderBasketDetails extends Vue {
  @Getter('basket/cartItems') cartItems!: Product[]

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
  .checkout_button {
    margin-bottom: 60px;
  }
}

</style>
