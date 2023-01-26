<template>
  <div v-if="items && items.length > paginate" class="product-pagination border-cls-blog mb-0">
    <div class="theme-paggination-block">
      <div class="row">
        <div class="col-sm-12">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current-1)">
                  <span aria-hidden="true">
                    <i class="fa fa-chevron-left" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li
                v-for="(page_index, index) in pages"
                :key="index"
                class="page-item"
                :class="{'active': page_index == current}"
              >
                <a
                  class="page-link"
                  href="javascrip:void(0)"
                  @click.prevent="updatePaginate(page_index)"
                >{{ page_index }}</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current+1)">
                  <span aria-hidden="true">
                    <i class="fa fa-chevron-right" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'nuxt-property-decorator'

export default class Paginator extends Vue {
  @Prop() readonly items: [] = []

  current = 1;
  paginate = 6;
  paginateRange = 3;
  pages: number[] = [];
  paginates = 1;

  mounted () {
    this.getPaginate()
    this.updatePaginate(1)
  }

  getPaginate () {
    this.paginates = Math.round(this.items.length / this.paginate)
    this.pages = []
    for (let i = 0; i < this.paginates; i++) {
      this.pages.push(i + 1)
    }
  }

  setPaginate (i: number): boolean {
    if (this.current === 1) {
      return i < this.paginate
    } else {
      return (
        i >= this.paginate * (this.current - 1) &&
        i < this.current * this.paginate
      )
    }
  }

  updatePaginate (i: number): number[] {
    this.current = i
    let start = 0
    let end = 0
    if (this.current < this.paginateRange - 1) {
      start = 1
      end = start + this.paginateRange - 1
    } else {
      start = this.current - 1
      end = this.current + 1
    }
    if (start < 1) {
      start = 1
    }
    if (end > this.paginates) {
      end = this.paginates
    }
    this.pages = []
    for (let i = start; i <= end; i++) {
      this.pages.push(i)
    }
    return this.pages
  }
}
</script>

<style scoped>

</style>
