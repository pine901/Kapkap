<template>
  <picture>
    <template
      v-if="!lazyload"
    >
      <source
        :data-srcset="path.replace(/\.[^.]{3}$/, '.webp')"
        :data-src="path"
        :data-alt="alt"
        type="image/webp"
      >
      <img
        :src="path"
        v-bind="$attrs"
        :class="className"
        :alt="alt"
      >
    </template>
    <template
      v-else
    >
      <source
        v-lazy-image="threshold"
        :data-srcset="path.replace(/\.[^.]{3}$/, '.webp')"
        :data-src="path"
        :data-alt="alt"
        type="image/webp"
      >
      <img
        src=""
        v-bind="$attrs"
        :class="className"
        alt=""
      >
    </template>
  </picture>
</template>

<script lang="ts">
export default {
  name: 'Picture',
  props: {
    path: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    className: {
      type: String,
      required: false,
      default: 'img-fluid'
    },
    threshold: {
      type: String,
      default: ''
    },
    lazyload: {
      type: Boolean,
      default: true
    }
  }
}
</script>
