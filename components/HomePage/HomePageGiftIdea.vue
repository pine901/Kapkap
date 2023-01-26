<template>
  <section class="gift">
    <div class="gift__img-wrapper">
      <img v-lazy-load :src="`${assets}/photos/best-gift-idea.png`" class="gift__img" alt="Najlepszy pomysł na prezent">
    </div>
    <div class="gift__bg">
      <svg
        class="gift__x"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.3748 10.1031L45.2641 -4.41952e-07L27.6836 17.5729L10.1107 -1.97856e-06L-4.41622e-07 10.1031L17.5805 27.6836L-1.97823e-06 45.2565L10.1107 55.3672L27.6836 37.7867L45.2641 55.3672L55.3748 45.2565L37.7942 27.6836L55.3748 10.1031Z"
          fill="white"
        />
      </svg>
      <div class="gift__text-wrapper">
        <h3 class="gift__title title title--big title--white">
          Najlepszy pomysł na prezent
        </h3>
        <div class="gift__text text12">
          Nie wiesz, co podarować bliskiej Ci osobie na prezent? Duży kubek to świetna opcja, zarówno praktyczna,
          jak i estetyczna. Podarunek dla faceta lub dla przyjaciółki w postaci spersonalizowanego przedmiotu pozwoli
          na wyrażenie swoich uczuć, a także pokazanie, że pamięta się o drobnych szczegółach, związanych z
          konkretną osobą. Jedna sztuka to za mało? Wybierz zestaw kubków na prezent, dzięki czemu obdarowana osoba
          będzie mogła posiadać niepowtarzalną kolekcję naczyń do picia z oryginalną grafiką. Postaw na nasze
          spersonalizowane kubki i zagwarantuj sobie oraz najbliższym najwyższą jakość produktów!
        </div>

        <NuxtLink to="/kubki" class="btn btn--transparent font-color">
          STWÓRZ KUBEK
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

@Component
export default class HomePageGiftIdea extends Vue {
  assets: string = <string>process.env.assetsURL
}
</script>

<style>
@media (max-width: 767px) {
  .font-color {
    color: white;
  }
}
</style>
