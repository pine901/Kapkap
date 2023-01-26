<template>
  <li v-if="item">
    <div class="media">
      <div class="media-body">
        <h5>{{ item.title }}</h5>
        <div class="details">
          <span>{{ item.number }} x {{ item.price | currency }}</span>
        </div>
      </div>
    </div>
    <div class="close-circle">
      <i class="fa fa-times" aria-hidden="true" @click="onRemoveFromCart(index)" />
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Mutation, Prop, Action, Getter, Vue } from 'nuxt-property-decorator'
import { Product, ProductUpdateRequest } from '~/store/basket/state'
import { ProductObject } from '~/store/cup/getters'
@Component
export default class CartSmallItem extends Vue {
  @Prop({ required: true }) item!: any
  @Prop({ required: true }) index!: number

  @Getter('app/token') token!: string

  @Mutation('basket/removeItem') removeItem!: any

  @Action('basket/editBasket') editBasket!: Function
  @Getter('basket/cartItems') cartItems!: Product[]

  onRemoveFromCart (index: number) {
    const product: ProductObject = {
      cupId: this.cartItems[index].cupId,
      items: this.cartItems[index].items,
      productId: this.cartItems[index].productId
    }

    const basket: ProductUpdateRequest = {
      token: this.token,
      number: 0,
      previewId: this.cartItems[index].previewId,
      cartItemId: this.cartItems[index].cartItemId,
      product
    }

    this.editBasket(basket)
  }
}
</script>
