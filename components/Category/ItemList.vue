<template>
  <div class="row">
    <div v-for="product in products" :key="product.productId" class="col-grid-box col-lg-3">
      <NuxtLink
        :to="getUrl(product)"
        class="nuxt-link-exact-active nuxt-link-active"
      >
        <div class="product-box" @click="handleItemClick(product)">
          <div>
            <div class="img-wrapper">
              <div class="lable-block">
                <span class="lable3">new</span>
                <span class="lable4">nowość</span>
              </div>
              <div class="front">
                <Picture
                  :path="product.sampleImageURL"
                  threshold="250px"
                  :alt="product.title"
                  class="bg-img"
                  width="1106"
                  height="884"
                />
              </div>
            </div>
            <div class="product-detail">
              <!--              <RatingStars active="5" />-->
              <p class="product-detail--title">{{ product.title }}</p>
              <p class="product-detail--price">
                {{ product.price | currency }}
                <del>{{ 59.99 | currency }}</del>
              </p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import RatingStars from '~/components/Common/RatingStars.vue'
import { Product } from '~/types/store/products/types'
import Picture from '~/components/Common/Picture.vue'
@Component({
  components: { RatingStars, Picture }
})
export default class ProductsList extends Vue {
  @Getter('products/products') products!: Product[]

  getUrl (product: Product): string {
    return `${product.path}`
  }

  handleItemClick (product: Product) {
    this.$emit('addLastVisited', { addDate: new Date(), product })
  }
}
</script>
<style scoped>
.product-box {
  min-height: 160px;
}
.front img {
  min-height: 150px;
  height: 150px;
}
</style>
