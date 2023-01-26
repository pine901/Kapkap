<template>
  <div class="generator__tab-content">
    <p class="generator__title generator__title--hidden">
      Dodaj cytat
    </p>
    <SmallLoader v-if="!storeQuotes" />
    <div v-if="storeQuotes" class="generator__variants container">
      <template v-if="!isMobile">
        <div
          v-for="(item, index) in quotes.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)"
          :key="index"
          class="generator__quot"
          :class="{'generator__quot--active': item.quoteId === quoteId}"
          @click="onSetQuote(item.quoteId)"
        >
          <img
            :key="item.quoteImageUrlWithCup"
            :src="hover == index ? item.quoteImageUrl : item.quoteImageUrlWithCup"
            :alt="`Cytat: ${item.quoteTitle}`"
            height="116.13px"
            @mouseover="hoverEventStart(index)"
            @mouseleave="hoverEventEnd"
          >
        </div>
      </template>
      <template v-if="isMobile">
        <div
          v-for="(item, index) in quotes"
          :key="index"
          class="generator__variant"
          :class="{'generator__variant--active': item.quoteId === quoteId}"
          @click="onSetQuote(item.quoteId)"
        >
          <Picture
            :path="item.quoteImageUrlWithCup"
            :alt="`Cytat: ${item.quoteTitle}`"
          />
        </div>
      </template>
    </div>
    <div v-if="!isMobile" class="pagination pagination--quote">
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
        v-for="btnPage in Math.ceil(quotes.length / itemsPerPage)"
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
import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import { Quote, WorkingItem } from '~/store/cup/state'
import { EventBus } from '@/services/eventBus'
import Picture from '~/components/Common/Picture.vue'
import SmallLoader from '~/components/Common/SmallLoader.vue'

@Component({
  components: {
    Picture,
    SmallLoader
  }
})
export default class QuoteChoice extends Vue {
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('cup/quotes') storeQuotes!: Quote[]
  @Getter('cup/quoteId') quoteId!: string
  @Getter('cup/items') items!: WorkingItem[]

  @Action('cup/setQuote') setQuote!: Function

  itemsPerPage: number = 6
  page: number = 1

  hover: Number = -1

  get quotes () {
    const tagsFlags = {
      friends: false,
      cats: false,
      dogs: false,
      single: false,
      male: false,
      female: false
    }
    let itemsCounter: number = 0
    let peopleCounter: number = 0;
    (this.items || []).forEach((item: WorkingItem) => {
      itemsCounter++
      if (item.type === 'cat') {
        tagsFlags.cats = true
      } else if (item.type === 'dog') {
        tagsFlags.dogs = true
      } else if (item.type === 'man') {
        tagsFlags.male = true
        peopleCounter++
      } else if (item.type === 'woman') {
        tagsFlags.female = true
        peopleCounter++
      }
    })
    if (peopleCounter > 1 && itemsCounter === peopleCounter) {
      tagsFlags.friends = true
    } else if (peopleCounter === 1 && itemsCounter === 1) {
      tagsFlags.single = true
    }

    const tagsForSearch: string[] = []
    if (tagsFlags.friends) {
      tagsForSearch.push('friends')
    }
    if (tagsFlags.cats) {
      tagsForSearch.push('cat')
    }
    if (tagsFlags.dogs) {
      tagsForSearch.push('dog')
    }
    if (tagsFlags.single) {
      tagsForSearch.push('single')
    }
    if (tagsFlags.male) {
      tagsForSearch.push('male')
    }
    if (tagsFlags.female) {
      tagsForSearch.push('female')
    }
    const q = [...this.storeQuotes].reverse()
    return q.filter((quote: Quote) => {
      return (quote.quoteTags || []).findIndex((tag1: string) => {
        return tagsForSearch.findIndex((tag2: string) => {
          return tag1 === tag2
        }) !== -1
      }) !== -1
    })
  }

  mounted () {
    setTimeout(() => {
      EventBus.$emit('blink-preview')
    }, 2000)
  }

  goToPage (page: number) {
    const maxPage = Math.ceil(this.quotes.length / this.itemsPerPage)

    if (page > 0 && page <= maxPage) {
      this.page = page
    }
  }

  onSetQuote (id: string) {
    EventBus.$emit('blink-next')
    this.setQuote(id)
  }

  hoverEventStart (index) {
    this.hover = index
  }

  hoverEventEnd () {
    this.hover = -1
  }
}
</script>
