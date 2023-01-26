<template>
  <section class="faq faq--home">
    <div class="container">
      <h3 class="faq__title title title--big title--green">
        FAQ
      </h3>
      <div class="faq__wrapper">
        <button v-for="(item, index) in faqs" :key="index" class="accordion" @click="toggleFaq(index)">
          <div class="accordion__wrapper">
            <svg
              class="accordion__x"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.33979 20.373L10.8025 13.9131L17.2624 20.373L20.9791 16.6591L14.5164 10.1964L20.9791 3.73371L17.2624 0.0197384L10.8025 6.47966L4.33979 0.019739L0.623046 3.73371L7.08575 10.1964L0.623047 16.6591L4.33979 20.373Z"
                fill="#31A745"
              />
            </svg>
            <div class="accordion__text-wrapper">
              <p class="accordion__title">
                {{ item.question }}
              </p>
              <div
                v-if="openedFaq !== index"
                class="accordion__text accordion__text--short"
              >
                {{ item.answer.substring(0, 80) }}...
              </div>

              <div
                v-if="openedFaq === index"
                class="accordion__text accordion__text--long"
                v-html="item.answer"
              />
            </div>
          </div>
          <svg
            class="accordion__arrow"
            :class="{ 'accordion__arrow--active': openedFaq === index }"
            width="30"
            height="31"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                d="M4.98905 7.54224L9.97841 12.5316L14.9678 7.54224"
                stroke="black"
                stroke-width="2.09078"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
      <div class="faq__buttons">
        <NuxtLink to="/kontakt" class="btn btn--transparent">
          KONTAKT
        </NuxtLink>
        <NuxtLink to="/faq" class="btn btn--green">
          WIĘCEJ FAQ
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import faqJSON from '~/data/faq.json'

@Component
export default class HomePageFaq extends Vue {
  faqs: Array<any> = []
  openedFaq: number = -1

  created () {
    this.faqs = faqJSON
  }

  toggleFaq (faqIndex: number) {
    if (this.openedFaq === faqIndex) {
      this.openedFaq = -1
    } else {
      this.openedFaq = faqIndex
    }
  }
}
</script>

<style>
.btn--green:hover {
  color: white;
}

@media (max-width: 767px) {
}
</style>
