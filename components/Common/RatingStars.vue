<template>
  <div class="stars">
    <i v-for="s in [0,1,2, 3,4]" :key="s" class="fa fa-star" :class="{'active': s < active}" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class RatingStars extends Vue {
  @Prop({ default: 0 }) readonly active!: number
}
</script>

<style scoped lang="scss">
.stars {
  padding: 10px 0;
}
.active {
  color: $star-yellow;
}
</style>
