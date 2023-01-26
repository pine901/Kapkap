<template>
  <section class="blog-slider">
    <div class="blog-slider__wrapper">
      <h2 class="blog-slider__title title title--big title--green">
        Blog
      </h2>
      <div class="swiper">
        <VueSlickCarousel
            v-if="blogs && blogs.length"
            v-bind="sliderBlogSettings"
            ref="onasBlogSlider"
            class="swiper-wrapper"
        >
          <div
              v-for="(blog, index) in blogs"
              :key="index"
              v-lazy-load
              class="swiper-slide blog-card"
              @click="$router.push(`/blog/${blog.id}`)"
          >
            <img :src="`${assets}${blog.imageURL}`" class="blog-card__img" :alt="blog.title">
            <div class="blog-card__wrapper">
              <p class="blog-card__title">
                {{ blog.title }}
              </p>
              <p class="blog-card__description">
                {{ blog.description.substring(0, 400) }}....
              </p>
              <button class="blog-card__btn btn btn--transparent">
                <span style="color:#A8A8A8;text-decoration: none!important">WIĘCEJ</span>
              </button>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="blog-swiper-button-prev" @click="prevArrow($refs.onasBlogSlider)">
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.25 49.5L24.75 33L41.25 16.5" stroke="black" stroke-width="3.14286" stroke-linecap="round"
                stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="blog-swiper-button-next" @click="nextArrow($refs.onasBlogSlider)">
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.75 49.5L41.25 33L24.75 16.5" stroke="black" stroke-width="3.14286" stroke-linecap="round"
                stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <NuxtLink to="/blog" class="btn btn--green" style="color:#fff;">
      ZOBACZ BLOG
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </NuxtLink>
  </section>
</template>

<script lang="ts">
import VueSlickCarousel from 'vue-slick-carousel'
import { Component, Getter, Vue } from 'nuxt-property-decorator'

import { Blog } from '~/store/blog/state'

@Component({
  components: { VueSlickCarousel }
})
export default class AboutUsBlog extends Vue {

  sliderBlogSettings: any = {
    centerMargin: '15px',
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    touchThreshold: 1,
    speed: 500,
    responsive: [{
      breakpoint: 800,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }

  assets: string = <string>process.env.assetsURL

  @Getter('blog/blogs') blogs!: Blog[]

  nextArrow (ref: any) {
    ref.next()
  }

  prevArrow (ref: any) {
    ref.prev()
  }
}
</script>
