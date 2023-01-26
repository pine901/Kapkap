<template>
  <div
    class="quantity__wrapper"
  >
    <button
      type="button"
      class="quantity__btn quantity__btn--minus"
      :disabled="total < 2"
      @click="decrease"
    >
      <svg width="17" height="16" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M3.94409 7.92847H12.8893"
            stroke="currentColor"
            stroke-width="1.27789"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </button>

    <span class="quantity__number">{{ total }}</span>

    <button
      class="quantity__btn quantity__btn--plus"
      @click="increase"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M8.16724 3.45605V12.4013" stroke="currentColor" stroke-width="1.27789" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3.69482 7.92847H12.64" stroke="currentColor" stroke-width="1.27789" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'

@Component({})
export default class InputGroup extends Vue {
  @Prop({ required: true }) amount!: number
  total: number = 0

  @Watch('amount')
  onChange (curr: number) {
    this.total = curr
  }

  get totalAmount (): number {
    return this.total
  }

  mounted () {
    this.total = this.amount
  }

  increase () {
    this.total += 1
    this.$emit('input', this.total)
  }

  decrease () {
    this.total -= 1
    this.$emit('input', this.total)
  }
}
</script>

<style lang="scss" scoped>
.qty-box {
  .input-group {
    width: 100px;
    position: absolute;

    .form-control {
      width: 100%;
      background: white;

      &:focus {
        border-color: #efefef;
        box-shadow: none;
      }
    }

    button {
      background: $grey3 !important;
      position: absolute;
      height: 100%;
      z-index: 9;

      &.quantity-left-minus {
        left: 0;
      }

      &.quantity-right-plus {
        right: 0;
      }
    }

    button {
      i {
        color: $black;
      }
    }
  }
}

.kapkap-button {
  background: #c8cdd3;
  opacity: 0.2;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#000;
}

.kapkap-button:hover {
  opacity: 1;
  background: #31A745;
  color:white;
}

.main{
  display:flex;
  gap:12px;
  align-items: center;
  justify-content: center;
  margin:0 0;
  height: 6px;
}
</style>
