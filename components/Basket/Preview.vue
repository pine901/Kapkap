<template>
  <div>
    <NuxtLink
      :to="`/edytuj-produkt/${item.cartItemId}`"
      class="shopping-cart__sides"
    >
      <div class="shopping-cart__side">
        <img :src="item.frontThumbnail" :alt="$t('cup.frontCup')" class="summary-desktop__img">
        <p>{{ $t('cup.front') }}</p>
      </div>
      <div class="shopping-cart__side">
        <img :src="item.backThumbnail" :alt="$t('cup.backCup')" class="summary-desktop__img">
        <p>{{ $t('cup.back') }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Picture from '~/components/Common/Picture.vue'

@Component({
  components: {
    Picture
  }
})
export default class Preview extends Vue {
  @Prop({ required: true }) item!: CartItem
}
</script>

<style scoped>
.cup-text {
  color:#a5a5a5;
  text-decoration: none;
  font-family: 'All Round Gothic'
}
.cup-preview {
  display: flex;
  align-items: center;
}
.cup-preview-text {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
