<template>
  <div class="generator-page">
    <client-only>
      <div v-if="!isMobile" class="generator__bottom">
        <client-only>
          <div class="quantity">
            <p v-if="false" class="generator__heading">
              Liczba
            </p>
            <div class="quantity__wrapper">
              <button class="quantity__btn quantity__btn--minus" @click="decreaseQuantity">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M3.94409 7.92847H12.8893"
                      stroke="black"
                      stroke-width="1.27789"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
              <div class="quantity__number">
                {{ count }}
              </div>
              <button class="quantity__btn quantity__btn--plus" @click="increaseQuantity">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M8.16724 3.45605V12.4013"
                      stroke="black"
                      stroke-width="1.27789"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.69482 7.92847H12.64"
                      stroke="black"
                      stroke-width="1.27789"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div class="sum">
            <p v-if="false" class="generator__heading">
              Wartość
            </p>
            <p class="sum__price">
              {{ total() | currency }}
            </p>
          </div>
          <div class="generator-nav">
            <template
              v-if="!isLastTab"
            >
              <button
                v-if="!editMode"
                class="btn btn--transparent"
                @click="openPrevEditor"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                COFNIJ
              </button>
              <button
                v-if="!editMode"
                class="btn btn--green"
                @click="openNextEditor"
              >
                DALEJ
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18L15.5 12L9.5 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </template>

            <template
              v-else-if="!editMode"
            >
              <button
                class="btn btn--transparent"
                :disabled="isLoaderVisible"
                @click="openPrevEditor"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                COFNIJ
              </button>
              <button
                class="btn btn--green"
                :disabled="isLoaderVisible"
                @click="addToCart()"
              >
                DO KOSZYKA
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </template>

            <template
              v-if="editMode"
            >
              <button
                class="btn btn--transparent"
                @click="backToCart()"
              >
                &lt;&lt;&nbsp;&nbsp;Wróć
              </button>
              <button
                :class="`btn btn--green ${nextGlowing ? 'glowing' : ''} ${isLoaderVisible ? 'grayed' : ''}`"
                :disabled="isLoaderVisible"
                @click="saveCartItem()"
              >
                Zapisz
              </button>
            </template>

            <button v-if="false" class="reset" @click="reset()">
              Resetuj i zacznij od nowa
            </button>
          </div>
        </client-only>
      </div>

      <div v-if="isMobile" id="bottom_navbar" class="generator__footer">
        <template v-if="!isLastTab">
          <button
            v-if="!editMode"
            class="btn btn--transparent"
            @click="openPrevEditor"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            COFNIJ
          </button>
          <button
            v-if="!editMode"
            class="btn btn--green"
            @click="openNextEditor"
          >
            DALEJ
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 18L15.5 12L9.5 6"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </template>

        <template
          v-else-if="!editMode"
        >
          <button
            class="btn btn--transparent"
            @click="openPrevEditor"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            COFNIJ
          </button>
          <button
            class="btn btn--green"
            @click="addToCart()"
          >
            DO&nbsp;KOSZYKA
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </template>

        <template
          v-if="editMode"
        >
          <button
            class="next fl"
            @click="backToCart()"
          >
            &lt;&lt;&nbsp;&nbsp;Wróć
          </button>
          <button
            :class="`next ${nextGlowing ? 'glowing' : ''} ${isLoaderVisible ? 'grayed' : ''}`"
            :disabled="isLoaderVisible"
            @click="saveCartItem()"
          >
            Zapisz
          </button>
        </template>

        <button v-if="false" class="reset" @click="reset()">
          Resetuj i zacznij od nowa
        </button>
      </div>
    </client-only>
  </div>
</template>

<script  lang="ts">
import { Action, Component, Getter, Mutation, Prop, Vue } from 'nuxt-property-decorator'
import { ProductObject } from '~/store/cup/getters'
import { ProductAddRequest, ProductUpdateRequest } from '~/store/basket/state'
import { EventBus } from '@/services/eventBus'
import { Tabs } from '~/store/cup/state'

@Component({
  components: {
  }
})
export default class Summary extends Vue {
  @Prop(Number) readonly confMenu!: number
  @Prop(Boolean) readonly editMode!: boolean
  @Prop(String) readonly cartItemId!: string

  @Getter('cup/price') price!: number
  @Getter('preview/loaderVisible') isLoaderVisible!: number
  @Getter('cup/productObject') productObject!: ProductObject
  @Getter('preview/previewId') previewId!: string
  @Getter('cup/count') count!: number
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('app/token') token!: string

  @Mutation('cup/setTotal') setTotal!: Function
  @Mutation('cup/recalculateTotal') recalculateTotal!: Function
  @Mutation('cup/resetWorkingObject') resetWorkingObject!: Function

  @Action('cup/setQuantity') setQuantity!: Function
  @Action('basket/addToBasket') addToBasket!: Function
  @Action('basket/editBasket') editBasket!: Function
  @Action('cup/removeConfigurationForProduct') removeConfigurationForProduct!: Function

  nextGlowing: boolean = false
  previewGlowing: boolean = false
  nextGlowingTimer!: any
  previewGlowingTimer!: any

  get isLastTab () {
    return (this.isMobile && this.confMenu === Tabs.preview) || (!this.isMobile && this.confMenu === Tabs.quotes)
  }

  created () {
    EventBus.$on('blink-next', this.blinkNext)
    EventBus.$on('blink-preview', this.blinkPreview)
  }

  destroyed () {
    EventBus.$off('blink-next', this.blinkNext)
    EventBus.$off('blink-preview', this.blinkPreview)
  }

  blinkNext () {
    this.nextGlowing = false
    clearTimeout(this.nextGlowingTimer)
    this.$nextTick(() => {
      this.nextGlowing = true
      this.nextGlowingTimer = setTimeout(() => {
        this.nextGlowing = false
      }, 2000)
    })
  }

  blinkPreview () {
    this.previewGlowing = false
    clearTimeout(this.previewGlowingTimer)
    this.$nextTick(() => {
      this.previewGlowing = true
      this.previewGlowingTimer = setTimeout(() => {
        this.previewGlowing = false
      }, 2000)
    })
  }

  total () {
    return this.$store.state.cup.total
  }

  openPrevEditor () {
    if (this.confMenu > 1) {
      this.$emit('prevEditor')
    } else {
      this.$emit('closeConfigurator')
      this.$router.push('/kubki')
    }
  }

  openNextEditor () {
    if (!this.isLastTab) {
      this.$emit('nextEditor')
    }
  }

  increaseQuantity () {
    this.setQuantity(this.count + 1)
  }

  decreaseQuantity () {
    this.setQuantity(this.count - 1)
  }

  async buyNow () {
    const basket: ProductAddRequest = {
      product: this.productObject,
      previewId: this.previewId,
      number: this.count,
      token: this.token
    }

    await this.addToBasket(basket)
    this.reset()
    await this.$router.push('/kasa')
  }

  async addToCart () {
    const basket: ProductAddRequest = {
      product: this.productObject,
      previewId: this.previewId,
      number: this.count,
      token: this.token
    }

    await this.addToBasket(basket)
    this.reset()
    await this.$router.push('/koszyk')
  }

  async saveCartItem () {
    const basket: ProductUpdateRequest = {
      product: this.productObject,
      previewId: this.previewId,
      number: this.count,
      token: this.token,
      cartItemId: this.cartItemId
    }

    await this.editBasket(basket)
    this.reset()
    await this.$router.push('/koszyk')
  }

  async backToCart () {
    await this.$router.push('/koszyk')
  }

  reset () {
    this.resetWorkingObject()
    this.removeConfigurationForProduct(this.productObject.productId)
  }
}
</script>

<style scoped>
@keyframes glowing {
  0% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
  50% {
    background-color: #49e819;
    box-shadow: 0 0 20px #49e819;
  }
  100% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
}
.glowing {
  animation: glowing 1000ms;
  animation-iteration-count: 2;
}

#__nuxt {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.grayed {
  filter: grayscale(1);
}

.btn--gray {
  background-color: gray;
  color: black;
  border: 2px solid #31a745;
}
</style>
