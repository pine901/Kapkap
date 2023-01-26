<template>
  <div>
    <OrderSummaryDesktop />
    <OrderSummaryMobile />
  </div>
</template>

<script lang="ts">
import {Component, Getter, Vue} from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'
import OrderSummaryDesktop from '~/components/Order/Desktop/OrderSummaryDesktop.vue'
import OrderSummaryMobile from '~/components/Order/Mobile/OrderSummaryMobile.vue'

@Jsonld
@Component({
  components: { OrderSummaryDesktop, OrderSummaryMobile }
})
export default class OrderSummary extends Vue {
  @Getter('app/token') token!: string | null

  async created () {
    if (!this.token) {
      await this.$router.push('/koszyk')
    }
  }
}
</script>

<style scoped>
.order__title-wrapper {
  margin-bottom: 0px;
  margin-top: 0px;
  padding-left: 30px;
}

p{
  font-family: Poppins, 'sans-serif';
  font-weight: 400;
}

h4{
  font-family: 'All Round Gothic';
  font-weight: 600;
  margin-top: 38px;
}

@media screen and (min-width: 1000px){
}

/* .order-cost{
  align-items: end;
  display: flex;
  flex-direction: column;
} */

section{
  margin-bottom: 100px;
}

.thanks_title > h4 {
  display: flex;
  align-items: center;
  font-size: 24px;
}
.thanks_title > p > a {
  margin-top: 38px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #31a745;
}
.thanks_subtitle > p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
}

.thanks_payment_address > p {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
}
</style>
