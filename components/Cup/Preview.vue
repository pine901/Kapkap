<template>
  <div class="product-info">
    <div v-if="!isMobile" class="product-info__container">
      <h1 class="product-info__name title title--small">
        {{ title }}
      </h1>
      <div class="box">
        <SmallLoader v-if="loader" class="mobile" />
        <img
          v-if="activePreview"
          class="mobile"
          :src="`${activePreview}`"
          :class="{'loading': loader}"
          alt="Podgląd kubka"
          @load="onImageLoad"
        >
      </div>
      <div class="product-info__btns">
        <button
          class="btn"
          :class="activePreview === frontImage ? 'btn--green' : 'btn--transparent'"
          @click="setActivePreview('front')"
        >
          Przód kubka
        </button>
        <button
          class="btn"
          :class="activePreview === middleImage ? 'btn--green' : 'btn--transparent'"
          @click="setActivePreview('middle')"
        >
          Środek kubka
        </button>
        <button
          class="btn"
          :class="activePreview === backImage ? 'btn--green' : 'btn--transparent'"
          @click="setActivePreview('back')"
        >
          Tył kubka
        </button>
      </div>

      <p class="product-info__caption">
        Przedstawione zdjęcia mają jedynie charakter poglądowy.
        Docelowy kubek może różnić się kolorystycznie.
      </p>

      <div v-if="false" class="shareBox">
        <button class="share" />
      </div>

      <CupInfo />
    </div>
  </div>
</template>

<script  lang="ts">
import { Component, Getter, Mutation, Prop, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import SmallLoader from '~/components/Common/SmallLoader.vue'
import CupInfo from '~/components/Cup/CupInfo.vue'

@Component({
  components: { CupInfo, SmallLoader }
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
  @Getter('cup/title') title!: string

  @Mutation('preview/setUnactivePreview') setUnactivePreview!: Function
  @Mutation('preview/setActivePreview') setActivePreview!: Function
  @Mutation('preview/setLoader') setLoader!: Function

  onImageLoad () {
    this.setLoader(false)
  }
}
</script>

<style>
  .btn--green:hover {
    color: white;
  }
  .box {
    width: 520px;
    height: 320px;
  }
</style>
