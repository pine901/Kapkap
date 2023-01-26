<template>
  <ul>
    <li
      v-for="(element, index) in items"
      :key="`${index}-${element}`"
      @click="goToSection(element.id)"
    >
      <span>§ {{ index + 1 }}.</span> {{ element.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { scrollToElement } from '~/utils/helpers'

@Component
export default class ItemsList extends Vue {
  @Prop() items!: any

  goToSection (section: string) {
    scrollToElement(section, 110)
  }
}
</script>
