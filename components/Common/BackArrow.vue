<template>
  <div class="back-arrow">
    <span class="back" @click="$emit('backClick' )">
      <i class="fa fa-angle-left" aria-hidden="true" /> wróć
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BackArrow extends Vue {
}
</script>

<style scoped lang="scss">
.back-arrow {
  padding: 15px 0;
  display: none;

  span {
    text-transform: uppercase;
    font-size: 14px;
    color: #000;
    cursor: pointer;

    i {
      font-size: 20px;
      font-weight: bold;
      margin-right: 5px;
    }

  }
}
</style>
