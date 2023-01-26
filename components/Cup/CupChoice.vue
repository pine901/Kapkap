<template>
  <div class="generator__tab-content">
    <p class="generator__title generator__title--hidden">
      Wybierz kubek
    </p>
    <div v-if="!isMobile" class="generator__variants gap__variants" />
    <div class="generator__variants box__variants">
      <template v-if="!isMobile && cups">
        <div
          v-for="(item, index) in cups.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)"
          :key="index"
          class="generator__variant generator__material"
          :class="{'generator__variant--active': item.id === cupId}"
          @click="onSetCup(item.id)"
        >
          <img v-if="item" :src="item.imageURL" :alt="`Kubek: ${item.name}`" class="generator__variant-img">
          <p class="generator__material-name">
            {{ item.name }}
          </p>
          <p class="generator__material-capacity">
            {{ item.capacity }} ml
          </p>
        </div>
      </template>
      <template v-if="isMobile">
        <div
          v-for="(item, index) in cups"
          :key="index"
          class="generator__variant generator__material"
          :class="{'generator__variant--active': item.id === cupId}"
          @click="onSetCup(item.id)"
        >
          <img v-if="item" :src="item.imageURL" :alt="`Kubek: ${item.name}`" class="generator__variant-img">
          <p class="generator__material-name">
            {{ item.name }}
          </p>
          <p class="generator__material-capacity">
            250ml
          </p>
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
        v-for="btnPage in Math.ceil(cups.length / itemsPerPage)"
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

<script  lang="ts">
import { Action, Component, Getter, Vue, Prop } from 'nuxt-property-decorator'
import { Cup } from '~/store/cup/state'
import { EventBus } from '@/services/eventBus'
import SmallLoader from '~/components/Common/SmallLoader.vue'

@Component({
  components: {
    SmallLoader
  }
})
export default class CupChoice extends Vue {
  @Getter('cup/cups') cups!: Cup[]
  @Getter('cup/cupId') cupId!: string
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('preview/loaderVisible') loader!: boolean

  @Prop(Boolean) readonly loading!: boolean

  @Action('cup/setCup') setCup!: Function

  itemsPerPage: number = 6
  page: number = 1

  mounted () {
    setTimeout(() => { EventBus.$emit('blink-next') }, 2000)
  }

  goToPage (page: number) {
    const maxPage = Math.ceil(this.cups.length / this.itemsPerPage)

    if (page > 0 && page <= maxPage) {
      this.page = page
    }
  }

  onSetCup (id: string) {
    EventBus.$emit('blink-next')
    this.setCup(id)
  }

  showPreview () {
    this.$emit('togglePreview')
  }
}
</script>

<style>
.gap__variants {
  background-color: white;
  height: 368px;
  width: 100%;
  opacity: 0;
}
@media (min-width: 1200px) {
  .box__variants {
    position: absolute;
    top: 100px;
  }
}
</style>
