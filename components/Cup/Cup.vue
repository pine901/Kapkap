<template>
  <div class="generator-page">
    <div
      v-if="showConf || !isMobile"
      class="generator-page__wrapper"
    >
      <client-only>
        <Preview
          :class="{'open': preview}"
          @togglePreview="togglePreview"
        />
      </client-only>
      <EditArea
        :edit-mode="editMode"
        :cart-item-id="cartItemId"
        :menu="defaultMenu"
        :loading="loading"
        @togglePreview="togglePreview"
        @closeConfigurator="closeConfigurator"
      />
    </div>
  </div>
</template>

<script  lang="ts">
import { Component, Action, Vue, Prop, Mutation, Getter, Watch } from 'nuxt-property-decorator'

import EditArea from '~/components/Cup/EditArea.vue'
import Preview from '~/components/Cup/Preview.vue'
import RelatedProducts from '~/components/Cup/RelatedProducts.vue'
import { BasketContainer } from '~/store/basket/state'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import SmallLoader from '~/components/Common/SmallLoader.vue'
import { Tabs } from '~/store/cup/state'

@Component({
  components: {
    EditArea, Preview, RelatedProducts, Breadcrumb, SmallLoader
  },
  asyncData ({ payload, store }): void {
    if (payload) {
      store.commit('setDogs', payload.dogs)
      store.commit('setCats', payload.cats)
      store.commit('setMen', payload.male)
      store.commit('setWomen', payload.female)
    }
  }
})
export default class Cup extends Vue {
  @Prop(String) readonly productId!: string
  @Prop(String) readonly cartItemId!: string
  @Prop(Boolean) readonly editMode!: boolean

  @Getter('cup/title') title!: string
  @Getter('cup/productId') productIdFromBasket!: string
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('basket/basket') basket!: BasketContainer

  @Mutation('cup/prepareProductForCup') prepareProductForCup!: Function
  @Mutation('cup/resetWorkingObject') resetWorkingObject!: Function
  @Mutation('cup/setEditMode') setEditMode!: Function
  @Mutation('cup/editWorkingObject') editWorkingObject!: Function

  @Action('cup/setQuantity') setQuantity!: Function
  @Action('cup/loadRabbits') loadRabbits!: any
  @Action('cup/loadDogs') loadDogs!: any
  @Action('cup/loadCats') loadCats!: any
  @Action('cup/loadMen') loadMen!: any
  @Action('cup/loadWomen') loadWomen!: any
  @Action('cup/loadBoys') loadBoys!: any
  @Action('cup/loadGirls') loadGirls!: any
  @Action('cup/loadProduct') loadProduct!: Function
  @Action('preview/getProductPreview') getProductPreview!: Function
  @Action('cup/loadProductFromCart') loadProductFromCart!: Function
  @Action('cup/saveConfigurationForProduct') saveConfigurationForProduct!: Function

  @Watch('isMobile')
  onChange () {
    if (process.client) {
      if (this.isMobile) {
        document.getElementsByTagName('html')[0].classList.add('no-scroll')
      } else {
        document.getElementsByTagName('html')[0].classList.remove('no-scroll')
      }
    }
  }

  tabs = Tabs
  defaultMenu = Tabs.cups
  // old
  showConf = true
  preview = false
  loading = true

  async created () {
    this.setEditMode(this.editMode)
    let productId
    if (process.client) {
      if (this.isMobile) {
        document.getElementsByTagName('html')[0].classList.add('no-scroll')
      } else {
        document.getElementsByTagName('html')[0].classList.remove('no-scroll')
      }
    }

    await Promise.allSettled([
      this.loadRabbits(),
      this.loadDogs(),
      this.loadCats(),
      this.loadMen(),
      this.loadWomen(),
      this.loadGirls(),
      this.loadBoys()
    ])

    if (this.editMode) {
      this.defaultMenu = Tabs.items
      productId = await this.loadProductFromCart(this.cartItemId)
    } else {
      productId = this.productId
      this.resetWorkingObject()
      this.setQuantity(1)
    }

    if (productId) {
      await this.loadProduct(productId)

      if (!this.editMode) {
        this.prepareProductForCup()
        this.saveConfigurationForProduct(this.productId)
      }
    }
    this.loading = false
    await this.getProductPreview()
  }

  closeConfigurator () {
    this.showConf = false
  }

  togglePreview () {
    this.preview = !this.preview
  }
}
</script>
