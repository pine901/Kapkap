<template>
  <section class="about-us">
    <h3 class="about-us__title">
      Każdy dzień jest ważny!
    </h3>
    <div class="about-us__wrapper about-us__wrapper--top">
      <div class="about-us__img-wrapper">
        <img v-lazy-load :src="`${assets}/photos/about-us-1.png`" alt="" class="about-us__img">
      </div>
      <div class="about-us__text-wrapper">
        <p class="about-us__subtitle">
          Utrwal piękne chwile
        </p>
        <p class="about-us__text">
          Założyliśmy tę rodzinną firmę, aby tworzyć rzeczy piękne i trwałe. Wiele chwil mija nas każdego dnia. Są wśród
          nich takie, które warto zachować.
        </p>
        <p class="about-us__text">
          Jesteśmy dumnymi posiadaczami psiny o wdzięcznym imieniu "Success", która jest wspaniałym miksem miłości i
          odrobiny nieposłuszeństwa. Tworząc ten projekt, chcieliśmy aby chwile z naszymi psami można było zachować na
          dłużej.
        </p>
      </div>
    </div>
    <div class="about-us__wrapper about-us__wrapper--bottom">
      <div class="about-us__row">
        <div class="about-us__img-wrapper2">
          <img v-lazy-load :src="`${assets}/photos/about-us-2.png`" alt="" class="about-us__img">
        </div>
        <div class="about-us__text-wrapper">
          <p class="about-us__subtitle">
            Praca popłaca
          </p>
          <p class="about-us__text">
            Włożyliśmy ogromną pracę w stworzenie kolekcji praktycznie wszystkich ras psów, wraz z różnymi wariantami
            kolorystycznymi.
            Po ponad roku planowania, rysowania i tworzenia tego sklepu, w końcu postanowiliśmy się z nim podzielić.
          </p>
        </div>
      </div>
      <p class="about-us__text about-us__text--bottom">
        Mamy nadzieję, że spędzenie tych paru chwil na naszej stronie, a później cieszenie się codzienną kawą lub
        herbatą w specjalnie przez ciebie stworzonym kubku, sprawi ci jeszcze więcej przyjemności.
      </p>
      <svg
        class="about-us__arrow"
        width="20"
        height="31"
        viewBox="0 0 20 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3494 23.7608L4.13098 17.5441L0.698747 20.9763L10.3494 30.627L20 20.9763L16.5678 17.5441L10.3494 23.7608Z"
          fill="white"
        />
        <path
          d="M20 3.93216L16.5678 0.499929L10.3494 6.7183L4.13098 0.49993L0.698747 3.93217L10.3494 13.5845L20 3.93216Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AboutUsMiddle extends Vue {
  assets: string = <string>process.env.assetsURL
}
</script>
