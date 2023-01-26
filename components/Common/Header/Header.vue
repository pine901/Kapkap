<template>
  <div>
    <nav class="nav">
      <div class="nav__green">
        <div class="container nav__green-wrapper">
          <div class="nav__green-left">
            {{ headerMessage || "KapKap" }}
          </div>
          <div class="nav__green-right">
            <a :href="`tel:${phone}`" class="nav__green-contact text-decoration-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 18H12.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ phoneFormatted }}</a>
            <a :href="`mailto:${companyMail}`" class="nav__green-contact text-decoration-none">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H5L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ companyMail }}</a>
          </div>
        </div>
      </div>
      <div class="nav__wrapper container">
        <NuxtLink to="/" class="nav__logo">
          <img src="~/assets/images/logo.svg" alt="kap kap">
        </NuxtLink>
        <div class="nav__right">
          <ul class="nav__menu">
            <li class="nav__menu-item btn-menu">
              <NuxtLink to="/" class="nav__menu-link active text-decoration-none">
                STRONA GŁÓWNA
              </NuxtLink>
            </li>
            <li class="nav__menu-item btn-menu">
              <NuxtLink to="/kubki" class="nav__menu-link active text-decoration-none">
                STWÓRZ KUBEK
              </NuxtLink>
            </li>
            <li class="nav__menu-item btn-menu">
              <NuxtLink to="/o-nas" class="nav__menu-link active text-decoration-none">
                O NAS
              </NuxtLink>
            </li>
            <li class="nav__menu-item btn-menu">
              <NuxtLink to="/blog" class="nav__menu-link active text-decoration-none">
                BLOG
              </NuxtLink>
            </li>
            <li class="nav__menu-item btn-menu">
              <NuxtLink to="/faq" class="nav__menu-link active text-decoration-none">
                FAQ
              </NuxtLink>
            </li>
            <li class="nav__menu-item btn-menu">
              <NuxtLink to="/kontakt" class="nav__menu-link active text-decoration-none">
                KONTAKT
              </NuxtLink>
            </li>
          </ul>
          <NuxtLink to="/koszyk" class="nav__cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div v-if="isLoaded && getBasketItemsNumber > 0" class="nav__cart-quantity">
              <span v-if="getBasketItemsNumber < 99">{{ getBasketItemsNumber }}</span>
              <span v-else>&#128065;</span>
            </div>
          </NuxtLink>
          <div id="burger-menu" class="nav__burger" :class="navBurgerActive && 'nav__burger--active'" @click="onNavbar()">
            <div class="nav__burger-line" />
            <div class="nav__burger-line" />
            <div class="nav__burger-line" />
          </div>
        </div>
      </div>
    </nav>

    <nav id="mobile-nav" class="mobile-nav" :class="navMobileActive && 'mobile-nav--active'">
      <ul class="mobile-nav__list">
        <li class="mobile-nav__element" @click="onNavbarClicked('home')">
          <NuxtLink to="/" class="mobile-nav__link text-decoration-none" :class="flag === 'home' && 'mobile-nav__link--active'">
            STRONA GŁÓWNA
          </NuxtLink>
        </li>
        <li class="mobile-nav__element" @click="onNavbarClicked('kubki')">
          <NuxtLink to="/kubki" class="mobile-nav__link text-decoration-none" :class="flag === 'kubki' && 'mobile-nav__link--active'">
            STWÓRZ KUBEK
          </NuxtLink>
        </li>
        <li class="mobile-nav__element" @click="onNavbarClicked('o-nas')">
          <NuxtLink to="/o-nas" class="mobile-nav__link text-decoration-none" :class="flag === 'o-nas' && 'mobile-nav__link--active'">
            O NAS
          </NuxtLink>
        </li>
        <li class="mobile-nav__element" @click="onNavbarClicked('blog')">
          <NuxtLink to="/blog" class="mobile-nav__link text-decoration-none" :class="flag === 'blog' && 'mobile-nav__link--active'">
            BLOG
          </NuxtLink>
        </li>
        <li class="mobile-nav__element" @click="onNavbarClicked('faq')">
          <NuxtLink to="/faq" class="mobile-nav__link text-decoration-none" :class="flag === 'faq' && 'mobile-nav__link--active'">
            FAQ
          </NuxtLink>
        </li>
        <li class="mobile-nav__element" @click="onNavbarClicked('kontakt')">
          <NuxtLink to="/kontakt" class="mobile-nav__link text-decoration-none" :class="flag === 'kontakt' && 'mobile-nav__link--active'">
            KONTAKT
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Watch } from 'nuxt-property-decorator'
import LogoImage from '../LogoImage.vue'
import CartWidget from './CartWidget.vue'
import NavBar from './NavBar.vue'
import TopBar from './TopBar.vue'
import { STATUS_LOADED } from '~/store/defaults/types'
import MobileSupport from '~/mixins/mobile'
import { BasketContainer } from '~/store/basket/state'

@Component({
  components: { TopBar, NavBar, CartWidget, LogoImage }
})
export default class Header extends MobileSupport {
  @Getter('defaults/headerMessages') headerMessages!: string[]
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('basket/basket') basket!: BasketContainer

  phone: string = <string>process.env.phone
  phoneFormatted: string = <string>process.env.phoneFormatted
  companyMail: string = <string>process.env.companyMail

  headerMessage: string = ''
  showMessage: boolean = true
  messageIndex: number = 0
  showOverlay: boolean = false
  navBurgerActive: boolean = false
  navMobileActive: boolean = false

  navList: Array<String> = ['home', 'kubki', 'o-nas', 'blog', 'faq', 'kontakt']
  flag: String = ''

  url: string = ''

  @Watch('isMobile')
  @Watch('$route')
  onChange () {
    this.showMessage = !(this.$route.fullPath.match(/^\/(?:kubek|edytuj-produkt)/) && this.isMobile)
  }

  created () {
    if (this.isLoaded) {
      this.processMessages()
    } else {
      this.$store.watch(state => state.defaults.status, (newValue: string) => {
        if (newValue === STATUS_LOADED) {
          this.processMessages()
        }
      })
    }
  }

  mounted () {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
    if (process.browser) {
      this.url = window.location.pathname
    }
    const href = this.url.slice(1, this.url.length)
    if (href !== '') {
      this.onNavbarClicked(href)
    } else {
      this.onNavbarClicked('home')
    }
  }

  get getBasketItemsNumber () {
    if (this.basket) { return this.basket.products.length }
  }

  processMessages () {
    if (this.headerMessages) {
      this.headerMessage = this.headerMessages[0]
      setInterval(() => {
        if (this.messageIndex >= this.headerMessages.length) {
          this.messageIndex = 0
        }
        this.headerMessage = this.headerMessages[this.messageIndex++]
      }, 5000)
    }
  }

  handleScroll () {
    if (process.client) {
      const header = document.querySelector('#sticky > .container')
      const headerHeight = 51

      if (header) {
        if (window.scrollY > headerHeight && !header.className.includes('scrolled')) {
          header.classList.add('scrolled')
        } else if (window.scrollY < headerHeight) {
          header.classList.remove('scrolled')
        }
      }
    }
  }

  onCloseBox () {
    this.showMessage = false
  }

  onNavbar () {
    this.navBurgerActive = !this.navBurgerActive
    this.navMobileActive = !this.navMobileActive
  }

  onNavbarClicked (selected) {
    this.flag = selected
    this.navBurgerActive = false
    this.navMobileActive = false
  }
}
</script>

<style>
    .active {
      color: black !important;
      text-decoration: none;
    }
    .btn-menu {
      background-color: white;
      color: black;
      cursor: pointer;
    }
    .nav__green-contact:after, .nav__green-contact:hover {
      color: white !important;
    }
</style>
