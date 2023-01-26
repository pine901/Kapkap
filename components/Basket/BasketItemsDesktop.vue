<template>
  <div>
    <table class="summary-desktop summary-desktop--col5">
      <tbody>
        <tr>
          <th>Podgląd</th>
          <th>Nazwa kubka</th>
          <th>cena</th>
          <th>SZTUK</th>
          <th>suma</th>
          <th>usuń</th>
        </tr>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <Preview :item="item" />
          </td>
          <td class="shopping-cart__item-name">
            {{ item.title }}
          </td>
          <td><b>{{ item.price | currency }}</b></td>
          <td>
            <InputGroup
              class="quantity"
              :amount="cartItems[index].number"
              @input="$emit('changeProductQuantity', item.cartItemId, Number($event))"
            />
          </td>
          <td class="shopping-cart__sum">
            {{ (item.price * item.number) | currency }}
          </td>
          <td class="shopping-cart__sum">
            <button @click="removeFromCart(item.cartItemId)" class="btn btn--transparent">Usuń</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="showModal" class="nuxtmodal-overlay" @click="showModal = false">
      <div class="nuxtmodal " @click.stop>
        <div class="close full_width" @click="showModal = false">
          <h6>Zatem wyrzucamy ten produkt z koszyka?</h6>
          <a class="close-img">&#x2715;</a>
        </div>
        <div class="popup-buttons">
          <a class="btn btn--transparent" @click="showModal = false; canDelete = true">
            Wyrzucamy
          </a>
          <a class="btn btn--green" @click="showModal = false">
            Zostawmy w koszyku
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Prop, Action, Watch, Vue } from 'nuxt-property-decorator'
import EditButton from '~/components/Basket/EditButton.vue'
import InputGroup from '~/components/Basket/InputGroup.vue'
import Preview from '~/components/Basket/Preview.vue'
import Header from '~/components/Basket/Header.vue'
import {Product, ProductUpdateRequest} from "~/store/basket/state";

@Component({
  components: {
    Header,
    Preview,
    EditButton,
    InputGroup
  }
})
export default class BasketItemsDesktop extends Vue {
  @Prop({ required: true }) items!: Product[]
  @Action('basket/editBasket') editBasket!: Function
  @Getter('basket/cartItems') cartItems!: any
  @Getter('app/token') token!: string
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
.popup-buttons {
  display: flex;
  justify-content: space-around;
}
.price {
  font-weight: 300;
  font-family: 'All Round Gothic';
  font-size: 34px;
}

.cup-price{
  font-weight: 600;
  font-family: 'All Round Gothic';
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.close {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.cart-item:not(:last-child) {
  margin-bottom: 0.5rem;
  border-bottom: 1px solid $border;
}

.basket-preview {
  width: 25%;
}

.cup-name {
  width: 15%;
}

.cup-price {
  width: 15%;
  font-size: 24px;
  font-weight: 400;

  @include media('<992px') {
    font-size: 22px;
  }
}

.cart-item-flex {
  display: flex;
}

.icon-close {
  color: $black;
  font-size: 16px;
}

.select-box {
  width: 15%;
  align-self: center;
  justify-self: center;
  transform: translateY(-50%);
  margin: auto 0;
}

.action-items {
  width: 15%;
}

.price {
  width: 15%;
}

.total-item-price {
  color: $green;
  @include media('<992px') {
    font-size: 22px;
  }
}
</style>
