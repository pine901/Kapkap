<template>
  <div class="similar">
    <h3 class="styled-page-header">
      {{ $t('cup.RelatedProducts') }}
    </h3>
  </div>
</template>

<script  lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class RelatedProducts extends Vue {
  sliderSettings = {
    arrows: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    touchThreshold: 5,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    responsive: [{
      breakpoint: 4000,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 1500,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 1024,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }
}
</script>
