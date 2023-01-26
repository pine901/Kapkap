<template>
  <img
    v-lazy-image
    class="img-fluid"
    :data-src="src"
    :alt="alt"
  >
</template>

<script lang="ts">
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
