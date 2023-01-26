<template>
  <div class="breadcrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul>
            <!-- <li class="bc-main">
              <NuxtLink to="/">{{ $t('common.personalizedGifts') }}</NuxtLink>
            </li>

            <Text v-if="breadcrumbFirst">
              <li>
                <NuxtLink to="">{{ breadcrumbFirst }}</NuxtLink>
              </li>
            </Text>

            <Text v-if="breadcrumbSecond">
              <li>
                <NuxtLink to="" >{{ breadcrumbSecond }}</NuxtLink>
              </li>
            </Text> -->

            <!-- <li><NuxtLink :to="path" class="title title--green text-decoration-none font">{{ title }}</NuxtLink></li> -->
            <li><NuxtLink :to="path" class="title title--green text-decoration-none font">{{ title }}</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Jsonld } from 'nuxt-jsonld'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { useBrowserLocation } from '@vueuse/core'

@Jsonld
@Component
export default class Breadcrumb extends Vue {
  @Prop({ type: String, required: true }) title!: string
  @Prop({ type: String, required: false, default: '' }) breadcrumbFirst!: string
  @Prop({ type: String, required: false, default: '' }) breadcrumbSecond!: string

  path: string = ''

  jsonld () {
    const itemListElement: Array<any> = []
    const location = useBrowserLocation()
    const url: string = <string>location.value.href
    this.path = <string>location.value.pathname

    if (this.title) {
      itemListElement.push({
        '@type': 'ListItem',
        position: 1,
        name: this.$t('common.personalizedGifts'),
        item: '/'
      })
    }
    if (this.breadcrumbFirst) {
      itemListElement.push({
        '@type': 'ListItem',
        position: 2,
        name: this.breadcrumbFirst,
        item: url
      })
    }
    if (this.breadcrumbSecond) {
      itemListElement.push({
        '@type': 'ListItem',
        position: 3,
        name: this.breadcrumbSecond,
        item: url
      })
    }

    return {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement
    }
  }
}
</script>

<style>
    .font {
      font-family: "All Round Gothic";
    }
    .title:hover{
      color:#31A745;
    }
</style>
