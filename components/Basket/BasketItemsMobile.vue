<template>
  <div>
    <div class="summary-mobile">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="summary-mobile__element"
      >
        <div v-if="item.frontThumbnail && item.backThumbnail" class="summary-mobile__row">
          <img :src="item.frontThumbnail" alt="" class="summary-mobile__img">
          <div class="shopping-cart__right">
            <div class="quantity">
              <SelectBox
                class="quantity_wrapper"
                :selected="cartItems[index].number"
                @change="$emit('changeProductQuantity', item.cartItemId, $event)"
              />
            </div>
            <button class="shopping-cart__delete" @click="removeFromCart(item.cartItemId)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 6L18 18" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div class="summary-mobile__row summary-mobile__row--start">
          <div>
            <p class="summary-mobile__name">
              {{ item.title }}
            </p>
          </div>
          <div>
            <p class="summary-mobile__price">
              CENA
            </p>
            <p class="summary-mobile__price2">
              {{ (item.price * item.number) | currency }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="nuxtmodal-overlay" @click="showModal = false">
      <div class="nuxtmodal " @click.stop>
        <div class="close full_width" @click="showModal = false">
          <h6>Zatem wyrzucamy ten produkt z koszyka?</h6>
          <a class="close-img">&#x2715;</a>
        </div>
        <div class="popup-buttons">
          <a class="btn btn--green" @click="showModal = false, canDelete = true">
            Wyrzucamy
          </a>
          <a class="btn btn--transparent" @click="showModal = false">
            Zostawmy w koszyku
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Prop, Action, Watch, Vue } from 'nuxt-property-decorator'
import SelectBox from '~/components/Common/SelectBox.vue'
import EditButton from '~/components/Basket/EditButton.vue'
import Preview from '~/components/Basket//Preview.vue'
import { Product, ProductUpdateRequest } from '~/store/basket/state'

@Component({
  components: {
    Preview,
    EditButton,
    SelectBox
  }
})
export default class BasketItemsMobile extends Vue {
  @Prop({ required: true }) items!: Product[]
  @Getter('basket/cartItems') cartItems!: any
  @Getter('app/token') token!: string
  @Action('basket/editBasket') editBasket!: Function
  showModal: boolean = false
  canDelete: boolean = false
  deleteItemId: string = ''

  @Watch('canDelete')
  onChange (val: boolean) {
    if (val === true) {
      this.remove()
    }
  }

  removeFromCart (cartItemId: string) {
    this.showModal = true
    this.deleteItemId = cartItemId
  }

  remove () {
    const product = this.cartItems.find(c => c.cartItemId === this.deleteItemId) as Product

    const basket: ProductUpdateRequest = {
      token: this.token,
      number: 0,
      previewId: product?.previewId ?? '',
      cartItemId: product?.cartItemId ?? '',
      product
    }

    this.editBasket(basket)
    this.canDelete = false
    this.deleteItemId = ''
  }
}

</script>

<style scoped lang="scss">
.price {
  font-size: 20px;
  color: $green;
}
.popup-buttons {
  display: flex;
  justify-content: space-around;
}
.cart-item:not(:last-child) {
  margin-bottom: 14px;
  border-bottom: 1px solid $border;
}

.select-box {
  margin: auto 0;
  transform: translateY(-50%);
}
.summary-mobile__img {
  max-width: 50% !important;
}
</style>
