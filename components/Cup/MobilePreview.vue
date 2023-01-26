<template>
  <div v-if="isMobile" class="generator__tab-content">
    <div class="preview__wrapper">
      <div class="preview__left" />
      <p class="preview__title">
        Podgląd kubka
      </p>
    </div>
    <div class="preview__btns">
      <button
        class="preview__btn"
        :class="{'preview__btn--active': activePreview === frontImage}"
        @click="setActivePreview('front')"
      >
        Przód
      </button>
      <button
        class="preview__btn"
        :class="{'preview__btn--active': activePreview === middleImage}"
        @click="setActivePreview('middle')"
      >
        Środek
      </button>
      <button
        class="preview__btn"
        :class="{'preview__btn--active': activePreview === backImage}"
        @click="setActivePreview('back')"
      >
        Tył
      </button>
    </div>
    <div class="mobile-box">
      <SmallMobileLoader v-if="loader" class="mobile" />
      <img
        v-if="activePreview"
        class="preview__img"
        :src="`${activePreview}`"
        :class="{'loading': loader}"
        alt="Podgląd kubka"
        @load="onImageLoad"
      >
    </div>

    <div class="preview__bottom">
      <div class="quantity">
        <p class="generator__heading">
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
        <p class="generator__heading">
          Wartość
        </p>
        <p class="sum__price">
          {{ total() | currency }}
        </p>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Action, Component, Getter, Mutation, Prop, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import SmallMobileLoader from '~/components/Common/SmallMobileLoader.vue'
import { ProductObject } from '~/store/cup/getters'
import { ProductAddRequest } from '~/store/basket/state'

  @Component({
    components: { SmallMobileLoader }
  })
export default class Preview extends Vue {
    @Prop(Boolean) readonly preview!: boolean

    @Getter('preview/frontImage') frontImage!: string
    @Getter('preview/middleImage') middleImage!: string
    @Getter('preview/backImage') backImage!: string
    @Getter('preview/unactivePreview') unactivePreview!: string
    @Getter('preview/activePreview') activePreview!: string
    @Getter('preview/loaderVisible') loader!: boolean
    @Getter('app/isMobile') isMobile!: boolean
    @Getter('cup/count') count!: number
    @Getter('preview/previewId') previewId!: string
    @Getter('cup/productObject') productObject!: ProductObject

    @Mutation('preview/setUnactivePreview') setUnactivePreview!: Function
    @Mutation('preview/setActivePreview') setActivePreview!: Function
    @Mutation('preview/setLoader') setLoader!: Function

    @Action('cup/setQuantity') setQuantity!: Function
    @Action('basket/addToBasket') addToBasket!: Function

    onImageLoad () {
      this.setLoader(false)
    }

    total () {
      return this.$store.state.cup.total
    }

    increaseQuantity () {
      this.setQuantity(this.count + 1)
    }

    decreaseQuantity () {
      this.setQuantity(this.count - 1)
    }
}
</script>

  <style>
    .btn--green:hover {
      color: white;
    }
    .mobile-box {
      height: 320px;
      padding-top: 20px;
      display: flex;
      justify-content: center;
    }
    @media (max-width: 598px) {
      .mobile-box {
        height: 55vw;
      }
    }
  </style>
