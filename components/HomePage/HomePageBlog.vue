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
            ref="homeBlogSlider"
          class="swiper-wrapper"
        >
          <nuxt-link
            v-for="(blog, index) in blogs"
            :key="index"
            v-lazy-load
            :to="{ path: `/blog/${blog.id}` }"
            class="swiper-slide blog-card blog-active text-decoration-none"
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
                WIĘCEJ
              </button>
            </div>
          </nuxt-link>
        </VueSlickCarousel>
        <!-- <VueSlickCarousel
          v-if="blogs && blogs.length"
          v-bind="sliderBlogSettings"
          ref="homeBlogSlider"
          class="swiper-wrapper"
        >
          <nuxt-link
            v-for="(blog, index) in blogs"
            :key="index"
            :to="{ path: `/blog/${blog.id}` }"
            class="swiper-slide blog-card blog-active text-decoration-none"
            v-lazy-load
          >
            <Picture :path="blog.imageURL" class-name="blog-card__img" :alt="blog.title" />
            <div class="blog-card__wrapper">
              <p class="blog-card__title">
                {{ blog.title }}
              </p>
              <p class="blog-card__description">
                {{ blog.description.substring(0, 400) }}....
              </p>
              <button class="blog-card__btn btn btn--transparent">
                WIĘCEJ
              </button>
            </div>
          </nuxt-link>
        </VueSlickCarousel> -->
      </div>
      <div class="blog-swiper-button-prev" @click="prevArrow($refs.homeBlogSlider)">
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.25 49.5L24.75 33L41.25 16.5" stroke="black" stroke-width="3.14286" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="blog-swiper-button-next" @click="nextArrow($refs.homeBlogSlider)">
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.75 49.5L41.25 33L24.75 16.5" stroke="black" stroke-width="3.14286" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      </div>
    </div>

    <NuxtLink to="/blog" class="btn btn--green">
      ZOBACZ BLOG
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </NuxtLink>
  </section>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import VueSlickCarousel from 'vue-slick-carousel'

import { Blog } from '~/store/blog/state'

@Component({
  components: {
    VueSlickCarousel
  }
})
export default class HomePageBlog extends Vue {
  @Getter('blog/blogs') blogs!: Blog[]

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

  nextArrow (ref: { next: () => void }) {
    ref.next()
  }

  prevArrow (ref: { prev: () => void }) {
    ref.prev()
  }
}
</script>

<style>
.btn--green:hover {
  color: white;
}

.blog-active {
  color: black !important;
  text-decoration: none;
}

.blog-menu {
  background-color: white;
  color: black;
  cursor: pointer;
}

.slick-track {
  display: flex;
}
.slick-list {
  overflow: hidden;
  margin: 0 12%;
}
.slick-slide {
  padding: 30px;
}

@media (max-width: 767px) {
}
</style>
