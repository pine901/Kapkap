<template>
  <li class="onhover-div mobile-cart">
    <div class="cart-qty-cls">
      {{ cartItems.length }}
    </div>
    <NuxtLink rel="nofollow" to="/koszyk">
      <Picture path="/images/icon/cart.png" class="img-fluid" alt="" />
    </NuxtLink>
    <div class="show-div">
      <ul class="shopping-cart">
        <span class="cart-title">KOSZYK</span>
        <template
          v-for="(item, index) in cartItems"
        >
          <CartSmallItem
            :key="index"
            :index="index"
            :item="item"
          />
        </template>
        <li
          v-if="cartItems.length > 0"
          class="total"
        >
          <div>
            SUMA:
          </div>
          <div>
            {{ totalPrice | currency }}
          </div>
        </li>
        <li
          v-else
        >
          <p>Masz pusty koszyk.</p>
        </li>
      </ul>
      <div class="buttons">
        <NuxtLink rel="nofollow" to="/koszyk" class="view-cart">
          KOSZYK
        </NuxtLink>
        <NuxtLink rel="nofollow" to="/kasa" class="checkout">
          ZAMÓW
        </NuxtLink>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import CartSmallItem from '~/components/Common/Header/CartSmallItem.vue'
import { BasketContainer, Product } from '~/store/basket/state'
import Picture from '~/components/Common/Picture.vue'

@Component({
  components: { CartSmallItem, Picture }
})
export default class CartWidget extends Vue {
  @Getter('basket/cartItems') cartItems!: Product[]
  @Getter('basket/basket') basket!: BasketContainer

  get totalPrice (): number {
    return this.cartItems.reduce((sum, product) => sum + product.price * product.number, 0)
  }
}
</script>
