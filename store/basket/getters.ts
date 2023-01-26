import { BasketContainer, BasketState, Product } from '~/store/basket/state'

export default {
  basket: (state: BasketState): BasketContainer => state.basket,
  cartItems: (state: BasketState): Product[] => state.basket?.products || [],
  totalPrice: (state: BasketState): number => state.basket?.totalPrice || 0.00,

  // @todo
  editb: (state: BasketState) => state.edit
}
