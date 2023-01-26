<template>
  <div class="header">
    <span class="header-preview">Podgląd</span>
    <span class="header-name">Nazwa kubka</span>
    <span class="header-price">Cena</span>
    <span class="header-amount">Sztuk</span>
    <span class="header-total">Suma</span>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Header extends Vue {
}

</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-family: 'All Round Gothic';
  font-size: 16px;
  span {
    border-bottom-width: 1px;
    font-weight: 700;
    color: $dark-font;
    text-transform: uppercase;
    border-top: 0;
    text-align: center;
    padding: 0 0.75rem 0.75rem 0.75rem;
  }

  &-preview {
    width: 25%;
  }

  &-actions,
  &-amount,
  &-name,
  &-price {
    width: 15%;
  }

  &-total{
    flex: 1;
  }

}
</style>
