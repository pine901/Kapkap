<template>
  <section class="home-slider">
    <div class="home-slider__wrapper">
      <h2 class="home-slider__title title title--green">
        Przykładowe realizacje
      </h2>
      <client-only>
        <VueSlickCarousel
          v-if="news && news.length"
          v-bind="sliderSettings"
          ref="homeSlider"
        >
          <template
            v-for="(image, id) in news"
          >
            <div :key="id" class="swiper-slide home-slider__card bestseller-item">
              <NuxtLink
                v-lazy-load
                :to="image.url"
                class="nuxt-link-exact-active nuxt-link-active"
              >
                <img
                  :src="`/images/main-page/news/${image.filename}`"
                  :alt="image.alt"
                  class="home-slider__img"
                >
              </NuxtLink>
              <p class="home-slider__text">
                {{ image.title }}
              </p>
              <NuxtLink
                class="btn btn--transparent"
                :to="image.url"
              >
                {{ $t('home.personalize') }}
              </NuxtLink>
            </div>
          </template>
        </VueSlickCarousel>
      </client-only>
      <div class="swiper-button-prev" @click="prevArrow($refs.homeSlider)">
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.25 49.5L24.75 33L41.25 16.5" stroke="black" stroke-width="3.14286" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="swiper-button-next" @click="nextArrow($refs.homeSlider)">
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.75 49.5L41.25 33L24.75 16.5" stroke="black" stroke-width="3.14286" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="swiper-pagination" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VueSlickCarousel from 'vue-slick-carousel'

import newsJSON from '~/data/news.json'

@Component({
  components: {
    VueSlickCarousel
  }
})
export default class HomePageNewProducts extends Vue {
  news: Array<any> = []

  sliderSettings = {
    centerMargin: '30px',
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 1,
    speed: 500,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }

  created () {
    this.news = newsJSON
  }

  nextArrow (ref: { next: () => void }) {
    ref.next()
  }

  prevArrow (ref: { prev: () => void }) {
    ref.prev()
  }
}

</script>

<style scoped>

</style>
