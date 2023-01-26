<template>
  <div class="quantity_wrapper">
    <button class="quantity__btn quantity__btn--minus" @click="decreaseItem">
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M3.94409 7.92847H12.8893" stroke="black" stroke-width="1.27789" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
    </button>
    <div class="quantity__number">
      {{ selectedItem }}
    </div>
    <button class="quantity__btn quantity__btn--plus" @click="increaseItem">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M8.16724 3.45605V12.4013" stroke="black" stroke-width="1.27789" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3.69482 7.92847H12.64" stroke="black" stroke-width="1.27789" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
    </button>
  </div>
  <!-- <select v-model="selectedItem" class="select-box" :name="name" @change="handleChangeOption">
    <template v-if="options">
      <option v-for="o in options" :key="o.name">
        {{ o.name }}
      </option>
    </template>
    <template v-else>
      <option v-for="(o, index) in range" :key="index + o">
        {{ o }}
      </option>
    </template>
  </select> -->
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'

export type RangeList = {
  name: string
  value: string | number
}

@Component({})
export default class SelectBox extends Vue {
  @Prop({
    type: String,
    default: 'select-box'
  }) name!: string

  @Prop({ type: Object }) options!: RangeList[]
  @Prop({ type: Number }) rangeFrom!: number
  @Prop({ type: Number }) rangeTo!: number
  @Prop({ type: Number, required: true }) selected!: number

  @Watch('selected')
  onChange (curr: number) {
    this.selectedItem = curr
  }

  selectedItem: number = 1

  get range (): number[] {
    return [...Array(this.rangeTo).keys()].map(i => i + this.rangeFrom)
  }

  mounted () {
    this.selectedItem = +this.selected
  }

  handleChangeOption (): void {
    this.$emit('change', +this.selectedItem)
  }

  decreaseItem () {
    if (this.selectedItem == 1) {
      this.selectedItem = 1
    } else {
      this.selectedItem = this.selectedItem - 1
    }
    this.$emit('change', +this.selectedItem)
  }

  increaseItem () {
    this.selectedItem = this.selectedItem + 1
    this.$emit('change', +this.selectedItem)
  }
}
</script>

<style scoped lang="scss">
.select-box {
  width: 50px;
  outline: none;
  background: transparent;
  padding: 8px;
  border: 1px solid $grey-light;
  height: 40px;
  color: $black;
}
</style>
