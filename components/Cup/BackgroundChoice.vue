<template>
  <div class="generator__tab-content">
    <p class="generator__title generator__title--hidden">
      Zmień tło
    </p>
    <SmallLoader v-if="!backgrounds" />
    <div v-if="false" class="generator__options generator__options--bgs container">
      <div class="generator__options-text">
        TŁO NA
      </div>
      <select name="" class="generator__options-select">
        <option value="">
          CAŁYM KUBKU
        </option>
      </select>
    </div>
    <div v-if="!isMobile" class="generator__variants gap__variants container" />
    <div v-if="backgrounds" class="generator__variants container box_background_variants">
      <template v-if="!isMobile">
        <div
          v-for="(item, index) in backgrounds.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)"
          :key="index"
          class="generator__variant"
          :class="{'generator__variant--active': item.backgroundId === backgroundId}"
          @click="onSetBackground(item.backgroundId)"
        >
          <Picture
            :key="item.backgroundURL"
            class="generator__variant-img"
            :path="item.backgroundURL"
            :alt="`Tło: ${item.backgroundTitle}`"
          />
        </div>
      </template>
      <template v-if="isMobile">
        <div
          v-for="(item, index) in backgrounds"
          :key="index"
          class="generator__variant"
          :class="{'generator__variant--active': item.backgroundId === backgroundId}"
          @click="onSetBackground(item.backgroundId)"
        >
          <Picture
            class="generator__variant-img"
            :path="item.backgroundURL"
            :alt="`Tło: ${item.backgroundTitle}`"
          />
        </div>
      </template>
    </div>
    <div v-if="!isMobile" class="pagination pagination--generator">
      <button
        class="pagination__nav"
        @click="goToPage(page - 1)"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1036 15.7589L7.86214 10.5174L13.1036 5.27588"
            stroke="#31A745"
            stroke-width="1.74717"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        v-for="btnPage in Math.ceil(backgrounds.length / itemsPerPage)"
        :key="btnPage"
        class="pagination__element"
        :class="{'pagination__element--active': btnPage === page}"
        @click="goToPage(btnPage)"
      >
        {{ btnPage }}
      </div>
      <button
        class="pagination__nav"
        @click="goToPage(page + 1)"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.89624 15.7589L13.1377 10.5174L7.89624 5.27588"
            stroke="#31A745"
            stroke-width="1.74717"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">

import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import { Background } from '~/store/cup/state'
import { EventBus } from '@/services/eventBus'
import Picture from '~/components/Common/Picture.vue'
import SmallLoader from '~/components/Common/SmallLoader.vue'

@Component({
  components: {
    Picture,
    SmallLoader
  }
})
export default class BackgroundChoice extends Vue {
  @Getter('cup/backgrounds') bgs!: Background[]
  @Getter('cup/availableBackgrounds') availableBackgrounds!: string[]
  @Getter('cup/backgroundId') backgroundId!: string
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('cup/onlyFullWidthProduct') onlyFullWidthProduct!: boolean
  @Getter('preview/loaderVisible') loader!: boolean

  @Action('cup/setBackground') setBackground!: Function

  itemsPerPage: number = 6
  page: number = 1

  get backgrounds () {
    if (this.onlyFullWidthProduct) {
      return this.bgs.filter((bg: Background) => {
        return (bg.backgroundTags || []).includes('full width')
      })
    }
    return this.bgs.filter((bg: Background) => {
      return !(bg.backgroundTags || []).includes('full width')
    })
  }

  mounted () {
    setTimeout(() => { EventBus.$emit('blink-next') }, 2000)
  }

  goToPage (page: number) {
    const maxPage = Math.ceil(this.backgrounds.length / this.itemsPerPage)

    if (page > 0 && page <= maxPage) {
      this.page = page
    }
  }

  onSetBackground (id: string) {
    EventBus.$emit('blink-next')
    this.setBackground(id)
  }
}
</script>

<style>
.gap__variants {
  background-color: white;
  height: 300px;
  width: 100%;
  opacity: 0;
}

@media (min-width: 1200px) {
  .box_background_variants {
    position: absolute;
    top: 100px;
    width: 100%;
  }
}
</style>
