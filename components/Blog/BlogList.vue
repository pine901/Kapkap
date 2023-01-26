<template>
  <div>
    <div class="blog__wrapper container">
      <div
        v-for="(blog, index) in items"
        :key="index"
        v-lazy-load
        style="cursor: pointer"
        class="swiper-slide blog-card"
        @click="$router.push(`/blog/${blog.id}`)"
      >
        <Picture :path="`${assets}${blog.imageURL}`" class-name="blog-card__img" :alt="blog.title" />
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
      </div>
    </div>

    <div v-if="pageSize > 1" class="pagination pagination--blog">
      <div
        class="pagination__nav"
        :class="{'pagination__disable': current <= 1}"
        @click="updatePaginate(current-1)"
      >
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1036 15.7589L7.86214 10.5174L13.1036 5.27588" stroke="#31A745" stroke-width="1.74717" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div
        v-for="(page_index, index) in pageSize"
        :key="index"
        class="pagination__element"
        :class="{'pagination__element--active': page_index == current}"
        @click="updatePaginate(page_index)"
      >
        {{ page_index }}
      </div>
      <div
        class="pagination__nav"
        :class="{'pagination__disable': current >= pageSize}"
        @click="updatePaginate(current+1)"
      >
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.89624 15.7589L13.1377 10.5174L7.89624 5.27588" stroke="#31A745" stroke-width="1.74717" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { Blog } from '~/store/blog/state'
import Paginator from '~/components/Common/Paginator.vue'
import PostSocial from '~/components/Blog/PostSocial.vue'
import Picture from '~/components/Common/Picture.vue'

@Component({
  components: { PostSocial, Paginator, Picture }
})
export default class BlogList extends Vue {
  @Getter('blog/blogs') blogs!: Blog[];

  items: any = []

  current: number = 1;
  paginate: number = 6;
  paginateRange: number = 3;
  pageSize: number = 0;
  paginates: number = 1;
  assets: string = <string>process.env.assetsURL

  created () {
    if (this.blogs && this.blogs.length > this.paginate) {
      this.items = []
      for (let i = 0; i < this.paginate; i++) {
        this.items.push(this.blogs[i])
      }
      this.pageSize = (this.blogs.length / this.paginate >> 0) + 1
    } else {
      this.items = this.blogs
    }
  }

  updatePaginate (position: number) {
    if (position <= 0 || position > this.pageSize) { return }
    this.current = position

    this.items = []
    for (let i = ((position - 1) * this.paginate); i < (position * this.paginate); i++) {
      if (this.blogs[i]) { this.items.push(this.blogs[i]) }
    }

    if (process.client) {
      window.scrollTo(0, 0)
    }
  }
}
</script>
