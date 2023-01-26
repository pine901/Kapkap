<template>
  <div>
    <div class="container">
      <ul class="breadcrumbs">
        <li>
          <a href="/" class="breadcrumbs__element">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path
                  d="M2 20.2487V12.4227C1.99994 11.8782 2.11104 11.3395 2.3265 10.8394C2.54195 10.3394 2.85722 9.8886 3.253 9.51468L10.626 2.54669C10.9973 2.19561 11.489 2 12 2C12.511 2 13.0027 2.19561 13.374 2.54669L20.747 9.51468C21.1428 9.8886 21.458 10.3394 21.6735 10.8394C21.889 11.3395 22.0001 11.8782 22 12.4227V20.2487C22 20.7791 21.7893 21.2878 21.4142 21.6629C21.0391 22.038 20.5304 22.2487 20 22.2487H4C3.46957 22.2487 2.96086 22.038 2.58579 21.6629C2.21071 21.2878 2 20.7791 2 20.2487Z"
                  stroke="black"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </a>
        </li>
        <li><a href="" class="breadcrumbs__element">Personalizowane prezenty </a></li>
        <li class="breadcrumbs__last">
          Koszyk
        </li>
      </ul>
      <div class="order__title-wrapper">
        <a href="" class="order__arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8L12 16L20 24" stroke="#0005" stroke-width="2.28571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
        <h1 class="order__title title title--green order-title">Koszyk</h1>
      </div>
    </div>

    <div class="shopping-cart basket_container">
      <div class="loading">
        <div v-if="!isLoaded" class="load-spinner">
          <div class="small loader-wrapper">
            <div class="loader small" />
          </div>
        </div>
      </div>

      <div v-if="isLoaded">
        <section v-if="!isEmpty" class="cart-section section-b-space">
          <div class="container">
            <div class="basket-items padding-container">
              <BasketItemsDesktop
                class="desktop"
                :items="cartItems"
                @changeProductQuantity="changeProductQuantity"
                @removeFromCart="removeFromCart"
              />
              <BasketItemsMobile
                class="mobile"
                :items="cartItems"
                @changeProductQuantity="changeProductQuantity"
                @removeFromCart="removeFromCart"
              />
            </div>
            <div class="order-cost cost">
              <p class="order-cost__title">
                Wartość produktów
              </p>
              <p class="order-cost__cost">
                {{ totalPrice | currency }}
              </p>
<!--              <p class="darw">-->
<!--                darmowa przesyłka-->
<!--              </p>-->
            </div>

            <div class="shopping-cart__btns">
              <NuxtLink to="/zamowienie" class="btn btn--green">
                PRZEJDŹ DO ZAMÓWIENIA
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.5 18L15.5 12L9.5 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NuxtLink>
              <a href="/kubki" class="btn btn--transparent">
                KONTYNUUJ ZAKUPY
              </a>
            </div>
          </div>
        </section>
        <NoItems v-else />
      </div>
    </div>

    <section class="advantages advantages--cart">
      <div class="container advantages__wrapper">
        <div class="advantages__box">
          <img src="../../static/images/img/dostawa.svg" alt="darmowa dostawa" class="advantages__img">
          <p class="advantages__title">
            DARMOWA DOSTAWA
          </p>
          <div class="advantages__description">
            darmowa dostawa na terenie Polski
          </div>
        </div>
        <div class="advantages__box">
          <img src="../../static/images/img/dostepnosc.svg" alt="JESTEŚMY DOSTĘPNI 24/7" class="advantages__img">
          <p class="advantages__title">
            JESTEŚMY DOSTĘPNI 24/7
          </p>
          <div class="advantages__description">
            nasz sklep jest do twojej dyspozycji
          </div>
        </div>
        <div class="advantages__box">
          <img src="../../static/images/img/sluchamy.svg" alt="SŁUCHAMY, GDY MÓWISZ" class="advantages__img">
          <p class="advantages__title">
            SŁUCHAMY, GDY MÓWISZ
          </p>
          <div class="advantages__description">
            dostosowujemy się do twoich potrzeb
          </div>
        </div>
      </div>
    </section>

    <Newsletter />
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Mutation, Vue } from 'nuxt-property-decorator'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import SmallLoader from '~/components/Common/SmallLoader.vue'
import { BasketContainer, Product, ProductUpdateRequest } from '~/store/basket/state'
import Picture from '~/components/Common/Picture.vue'
import BasketItemsDesktop from '~/components/Basket/BasketItemsDesktop.vue'
import BasketItemsMobile from '~/components/Basket/BasketItemsMobile.vue'
import NoItems from '~/components/Basket/NoItems.vue'
import Newsletter from '~/components/Common/Footer/Newsletter.vue'

type menuItem = {
  link: string,
  title: string
}

@Component({
  components: {
    Newsletter,
    Picture,
    SmallLoader,
    Breadcrumb,
    BasketItemsDesktop,
    BasketItemsMobile,
    NoItems
  }
})
export default class Basket extends Vue {
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('basket/basket') basket!: BasketContainer
  @Getter('basket/cartItems') cartItems!: Product[]
  @Getter('app/token') token!: string

  @Getter('app/footerSeoText') footerSeoText!: string
  @Getter('app/footerText') footerText!: string
  @Getter('app/isMobile') isMobile!: boolean

  @Mutation('basket/removeItem') removeItem!: any
  @Mutation('basket/setBasketItemCount') setBasketItemCount!: any

  @Action('preview/fetchCartPreviews') fetchCartPreviews!: Function
  @Action('basket/setBasket') setBasket!: Function
  @Action('basket/editBasket') editBasket!: Function
  @Action('preview/getProductPreview') getProductPreview!: Function

  phone: string = <string>process.env.phone
  phoneFormatted: string = <string>process.env.phoneFormatted
  companyName: string = <string>process.env.companyName
  companyStreet: string = <string>process.env.companyStreet
  companyZip: string = <string>process.env.companyZip
  companyCity: string = <string>process.env.companyCity
  companyMail: string = <string>process.env.companyMail

  menuOptions: menuItem[] = [
    {
      link: '/kubki/z-psami',
      title: 'Kubki z psami'
    },
    {
      link: '/kubki/z-kotami',
      title: 'Kubki z kotami'
    },
    {
      link: '/kubki/dla-par',
      title: 'Kubki dla par'
    },
    {
      link: '/kubki/ze-znajomymi',
      title: 'Kubki ze znajomymi'
    },
    {
      link: '/kubki/na-swieta',
      title: 'Kubki na święta'
    },
    {
      link: '/kubki/caly-obwod-kubka',
      title: 'Kubki na cały obwód kubka'
    }
  ]

  get isEmpty (): boolean {
    return !this.cartItems.length
  }

  get totalPrice (): number {
    return this.cartItems.reduce((sum, product) => sum + product.price * product.number, 0)
  }

  get currentYear () {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    if (currentYear === 2020) {
      return currentYear
    }
    return `2020-${currentYear}`
  }

  removeFromCart (cartItemId: string) {
    const product = this.cartItems.find(c => c.cartItemId === cartItemId) as Product

    const basket: ProductUpdateRequest = {
      token: this.token,
      number: 0,
      previewId: product?.previewId ?? '',
      cartItemId: product?.cartItemId ?? '',
      product
    }

    this.editBasket(basket)
  }

  changeProductQuantity (cartItemId: string, count: number) {
    const product = this.cartItems.find(c => c.cartItemId === cartItemId) as Product

    const basket: ProductUpdateRequest = {
      token: this.token,
      number: count,
      previewId: product.previewId,
      cartItemId: product.cartItemId,
      product
    }

    this.editBasket(basket)
  }
}
</script>

<style scoped lang="scss">
.basket-items {
  .desktop {
      display: block;
  }
  .mobile {
      display: none;
  }
  @media (max-width: 999px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
}

.order-cost__title {
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}

@media screen and (min-width: 1000px) {
  .order-cost__title {
    font-family: "All Round Gothic";
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.15px;
  }
}

.shopping-cart {
  background: #ffffff;
  border-radius: 24px;
  margin-bottom: 50px;
  width: 100%;
}

@media (min-width: 1000px) {
  .shopping-cart {
    background: #ffffff;
    -webkit-box-shadow: 0px 22px 30px rgb(0 0 0 / 5%), 0px 4px 5px rgb(0 0 0 / 5%);
    box-shadow: 0px 22px 30px rgb(0 0 0 / 5%), 0px 4px 5px rgb(0 0 0 / 5%);
    border-radius: 24px;
    margin-bottom: 50px;
    width: 100% !important;
  }
}

.cost{
  display: flex;
  align-items: flex-end;
  justify-content:center;
  flex-direction: column
}

.btn-green{
  color:#fff;
}

.shopping-cart__btns{
  display:flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  gap:12px;
  margin-top: 42px;
  padding-bottom: 36px;

  @media (min-width: 1000px) {
    justify-content: space-between;
  }
}

.padding-container {
  padding-top: 20px;
}

@media (max-width: 999px) {
  .padding-container {
    padding-top: 0;
  }
}

@media (max-width: 999px) {
  .cost {
    align-items: center;
  }

  .shopping-cart__btns {
    justify-content: center;
  }
}

.darw{
  color: #888888;
  font-size: 18px;
  text-transform: lowercase;
  font-family: 'All Round Gothic';
}

.ttl{
  font-size: 34px;
  line-height: 41px;
  margin-bottom: 20px;
  color:#31a745 !important
}

.main{
  display: flex;
  align-items: center;
  flex-direction: column
}

.order-title {
}
@media (max-width: 999px) {
  .order-title {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    width: 100%;
  }
}

.padding-bottom {
}

@media (max-width: 1199px) {
  .padding-bottom {
    margin-top: 92px;
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.load-spinner {
  position: absolute;
  top: 250px;
}
@media (max-width: 1199px) {
  .load-spinner {
    top: 220px;
  }
}

@media (max-width: 999px) {
  .load-spinner {
    top: 140px;
  }
}

@media (max-width: 767px) {
  .load-spinner {
    top: 80px;
  }
}

.basket_container {
  margin-left: auto;
  margin-right: auto;
}
</style>
