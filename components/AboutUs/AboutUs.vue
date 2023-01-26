<template>
  <div>
    <AboutUsTop />
    <AboutUsMiddle />
    <AboutUsBlog />
    <Newsletter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Picture from '@/components/Common/Picture.vue'

import AboutUsTop from '~/components/AboutUs/AboutUsTop.vue'
import AboutUsMiddle from '~/components/AboutUs/AboutUsMiddle.vue'
import AboutUsBlog from '~/components/AboutUs/AboutUsBlog.vue'
import Newsletter from '~/components/Common/Footer/Newsletter.vue'

@Component({
  components: {
    Newsletter,
    AboutUsTop,
    AboutUsMiddle,
    AboutUsBlog,
    Picture
  }
})
export default class AboutUs extends Vue {
}
</script>
<style>
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
</style>
