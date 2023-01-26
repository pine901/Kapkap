<template>
  <div>
    <p v-if="products.length" class="last-visited-text">
      {{ $t('category.lastWatched') }}
    </p>
    <div
      v-for="product in products"
      :key="product.productId"
      class="theme-card"
    >
      <div class="title-border" />
      <div class="offer-slider slide-1">
        <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active">
              <div>
                <NuxtLink :to="product.path.split('/').length <= 3 ? product.path + '/' + product.productId : product.path">
                  <div class="item">
                    <div>
                      <Picture :path="product.sampleImageURL" :alt="product.title" class="item-image" />
                    </div>
                    <div class="item-content">
                      <!--                      <RatingStars :active="5" />-->
                      <h6>{{ product.title }}</h6>
                      <h4>
                        {{ product.price | currency }}
                        <del>{{ 59.99 | currency }}</del>
                      </h4>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import RatingStars from '~/components/Common/RatingStars.vue'
import { Product } from '~/types/store/products/types'
import Picture from '~/components/Common/Picture.vue'
@Component({
  components: { RatingStars, Picture }
})
export default class ThemeCard extends Vue {
  @Prop() readonly lastVisited!: Product[]

  get products (): Product[] {
    return this.lastVisited.slice(0, 4)
  }
}
</script>

<style scoped lang="scss">
.last-visited-text {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
}

.item {
  display: flex;

  .item-image {
    width: auto;
  }

  .item-content {
    width: 60%;
    padding-top: 20px;
  }
}
.swiper-wrapper {
  transform: translate3d(0px, 0px, 0px)
}

.title-border {
  border-bottom: 1px solid $round-border;
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .item-content {
    margin-left: -30px
  }
}
</style>
