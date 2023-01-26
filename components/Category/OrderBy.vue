<template>
  <select @change="handleChange">
    <option value="all">
      Sorting Items
    </option>
    <option value="a-z">
      Alphabetically, A-Z
    </option>
    <option value="z-a">
      Alphabetically, Z-A
    </option>
    <option value="low">
      price, low to high
    </option>
    <option value="high">
      price, high to low
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class OrderBy extends Vue {
  handleChange (event: Event): void {
    const { value } = event.target as HTMLSelectElement
    this.$emit('change', value)
  }
}
</script>
