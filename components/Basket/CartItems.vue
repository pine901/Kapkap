<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
    >
      <span class="cup-name">{{ item.title }}</span>
      <Preview :item="item" />
      <SelectBox
        :range-from="1"
        :range-to="9"
        @change="$emit('changeItem', {index, count: $event})"
      />
      <div>{{ item.price | currency }}</div>
      <a
        href=""
        class="icon"
        @click="removeFromCart(index)"
      >
        <i class="icon-close" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Preview from '~/components/Basket/Preview.vue'
import QuantityBox from '~/components/Basket/EditButton.vue'
import SelectBox from '~/components/Common/SelectBox.vue'

@Component({
  components: {
    SelectBox,
    QuantityBox,
    Preview
  }
})
export default class CartItems extends Vue {
  @Prop() items!: Array<CartItem>
}
</script>
