import { Vue } from 'nuxt-property-decorator'
import { BasketContainer, BasketState, Product } from '~/store/basket/state'

export default {
  // @todo check if it is working properly
  removeItem (state: BasketState, index: any) {
    let tempStorage: BasketContainer = JSON.parse(localStorage.cup);
    if (localStorage.cup) {
      tempStorage = JSON.parse(localStorage.cup)
    }
    tempStorage.products.splice(index, 1)
    localStorage.cup = JSON.stringify(tempStorage)
    Vue.set(state, 'basket', tempStorage)
  },

  setBasket (state: BasketState, basket: BasketContainer) {
    Vue.set(state, 'basket', basket)
  },

  // @todo
  setBasketItemCount (state: BasketState, basket: any) {
    state.basket.products[basket.index].number = basket.count
  },

  // @todo
  setEditBasket (state: BasketState, index: any) {
    state.edit = index
  },

  setPreviewImage (state: BasketState, { cartItemId, frontImageUrl, middleImageUrl, backImageUrl, previewId }: any) {
    state.basket.products.forEach(function (item: Product) {
      if (item.cartItemId === cartItemId) {
        item.frontThumbnail = frontImageUrl
        item.middleThumbnail = middleImageUrl
        item.backThumbnail = backImageUrl
        item.previewId = previewId
      }
    })
  },

  clearBasket (state: BasketState) {
    Vue.set(state, 'basket', <BasketContainer>{
      beforeDiscount: 0, discountValue: 0, products: [], totalPrice: 0
    })
  }
}
