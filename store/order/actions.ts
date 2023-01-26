import { ActionContext } from 'vuex/types'
import { OrderContainer, OrderState } from './state'
import { $axios } from '~/utils/api'
import { RootState } from '~/types/store/root'

export default {
  getOrder: async ({ commit, rootGetters }: ActionContext<OrderState, RootState>, orderToken: string = '') => {
    try {
      const token = orderToken || rootGetters['app/token']
      if (token) {
        const res = await $axios.get('/v1/order/' + token)
        if (res?.data) {
          if (orderToken) {
            return res.data
          }
          commit('setOrder', res.data)
        }
      }
    } catch {
    }
  },

  getOrderPreview: async ({ _ }: any, orderId: string) => {
    try {
      if (orderId) {
        const res = await $axios.get('/v1/order/preview/' + orderId)
        return res.data
      }
    } catch {
    }
  },

  makeOrder: async ({ getters, rootGetters }: ActionContext<OrderState, RootState>): Promise<any> => {
    const clientTime = new Date()
    const formattedClientTime = clientTime.toISOString()
    let res: any
    try {
      res = await $axios.post('/v1/order', <OrderContainer>{
        ...getters.order,
        clientTime: formattedClientTime,
        token: rootGetters['app/token']
      })

      if (res.data) {
        return res.data
      }
    } catch (error) {}

    window.$nuxt.$sentry.captureException(new Error('New order with online payment failed'), res)
    return false
  },

  applyCoupon: async ({ commit, rootGetters }: ActionContext<OrderState, RootState>, coupon: string) => {
    const res = await $axios.post('/v1/coupon', {
      token: rootGetters['app/token'],
      coupon
    })
    if (res?.data) {
      commit('setOrder', res.data)
    }
  },

  updateOrder: async ({ commit, getters }: ActionContext<OrderState, RootState>) => {
    if (getters.order.token) {
      const res = await $axios.patch('/v1/order', { ...getters.order })
      if (res?.data) {
        commit('setOrder', res.data)
      }
    }
  }
}
