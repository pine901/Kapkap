<template>
  <section
    class="cart-section section-b-space"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div>
            <div
              class="col-sm-12 empty-cart-cls text-center cnt"
              style=""
            >
              <Picture
                id="no-items"
                path="/images/cart/icon-empty-cart.png"
                class="img-fluid logo cart-icon"
                :alt="$t('basket.basketIsEmpty')"
                :style="{opacity: isLoaded}"
              />
              <h3>{{ $t('basket.basketIsEmpty') }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Picture from '~/components/Common/Picture.vue'

export default defineComponent({
  components: {
    Picture
  },
  data () {
    return {
      isLoaded: 0
    }
  },
  mounted () {
    this.isLoaded = 1
  }
})
</script>
<style scoped>
.cart-icon ::v-deep img {
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
}

.cnt{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap:12px;
}
</style>
