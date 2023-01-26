<template>
  <div class="collection-filter-block">
    <div class="collection-collapse-block open">
      <p
        class="collapse-block-title"
      >
        {{ $t('category.categories') }}
      </p>
      <div id="category" class="collapse show" role="tabpanel">
        <div class="collection-collapse-block-content">
          <div class="collection-brand-filter">
            <ul v-if="categories" class="category-list">
              <li v-for="(category, index) in categories" :key="category.title + index">
                <NuxtLink :to="category.path" class="nuxt-link-exact-active nuxt-link-active">
                  {{ category.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Category } from '~/types/store/categories/types'

@Component
export default class CategoryMenu extends Vue {
  @Prop() readonly categories!: Category[]
}
</script>

<style scoped lang="scss">
.collapse-block-title {
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0 0 0;
}
</style>
