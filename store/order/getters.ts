import { OrderContainer, OrderState } from '~/store/order/state'

export default {
  order: (state: OrderState): OrderContainer => state?.order || {},
  totalPrice: (state: OrderState): number => state?.order?.totalPrice || 0.00
}
