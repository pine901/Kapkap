<template>
  <NuxtLink
    :to="`/edytuj-produkt/${item.cartItemId}`"
  >
    <button
      class="btn quantity-right-plus separated"
    >
      <i class="fa fa-pencil" />
    </button>
  </NuxtLink>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class EditButton extends Vue {
  @Prop({ required: true }) item!: CartItem
}
</script>
