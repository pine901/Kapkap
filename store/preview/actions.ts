import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import { Product } from '~/store/basket/state'
import { PreviewState } from '~/store/preview/state'
import { ProductObject } from '~/store/cup/getters'

function basketItemToProduct (item: Product): ProductObject {
  return <ProductObject>{
    productId: item.productId,
    cupId: item.cupId,
    items: item.items,
    previewId: item.previewId
  }
}

async function changeItemPreview (commit: any, cartItem: Product) {
  const result = await $axios.post('/v1/preview', basketItemToProduct(cartItem))

  commit('basket/setPreviewImage', {
    cartItemId: cartItem.cartItemId,
    frontImageUrl: result.data.frontImageUrl,
    middleImageUrl: result.data.middleImageUrl,
    backImageUrl: result.data.backImageUrl,
    previewId: result.data.previewId
  }, { root: true })
}

export default {
  getProductPreview: async ({
    commit,
    rootGetters,
    getters
  }: any) => {
    const apiData = {
      ...rootGetters['cup/productObject'],
      previewId: getters.previewId
    }
    commit('setLoader', true)
    commit('incLoadCounter')
    commit('incPreviewRequestNumber')
    const currentPreviewRequestNumber = getters.previewRequestNumber

    let result: any
    try {
      result = await $axios.post('/v1/preview', apiData)
    } catch {
      commit('setLoader', false)
      commit('setLoadCounter', 0)
      result = false
    }

    if (result?.data && currentPreviewRequestNumber === getters.previewRequestNumber) {
      commit('setLoader', getters.frontImage !== result.data.frontImageUrl)
      commit('setLoadCounter', 0)
      commit('setPreviewId', result.data.previewId)
      commit('setPreviewImages', {
        frontImageUrl: result.data.frontImageUrl,
        middleImageUrl: result.data.middleImageUrl,
        backImageUrl: result.data.backImageUrl
      })
      commit('setUnactivePreview', getters.invisibleSide)
      commit('setActivePreview', getters.currentSide)
    }
    commit('decLoadCounter')
  },

  fetchCartPreviews: ({ commit, rootGetters }: ActionContext<PreviewState, PreviewState>) => {
    rootGetters['basket/basket']?.products?.forEach(async (cartItem: Product) => {
      await changeItemPreview(commit, cartItem)
    })
  }
}
