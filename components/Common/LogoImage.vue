<template>
  <div>
    <NuxtLink to="/">
      <img
        :src="logoPath"
        alt="personalizowane prezenty KapKap"
        class="img-fluid logo"
        width="113"
        height="99"
      />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'
import { useBrowserLocation } from '@vueuse/core'
import Picture from '~/components/Common/Picture.vue'

@Jsonld
@Component({
  components: { Picture }
})
export default class LogoImage extends Vue {
  @Prop({ type: Boolean, default: false, required: false }) enableJsonLd!: boolean
  @Prop({ type: Boolean, default: false, required: false }) isFooter!: boolean

  logo1 = '/images/logo/kapkap-logo.svg'
  logo2 = '/images/logo/kapkap-logo-white.svg'
  logoPath = ''

  get petUrl () {
    return this.$store.state.defaults.defaultPetImageUrl
  }

  created () {
    if (this.isFooter) {
      this.logoPath = this.logo2
    } else {
      this.logoPath = this.logo1
    }
  }

  jsonld () {
    if (this.enableJsonLd) {
      const location = useBrowserLocation()
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: 'https://www.kapkap.eu',
        logo: `${location.value.origin}${this.logoPath}`
      }
    }

    return {}
  }
}
</script>
