<template>
  <div>
    <div class="product-info__description">
      <h2 class="product-info__title title title--small">
        Cechy produktu
      </h2>
      <ul>
        <li>Pojemność 330 ml</li>
        <li>Materiał: ceramika</li>
        <li>Wskazane mycie ręczne, aby rysunek nie wyblakł</li>
        <li>Można myć w zmywarce, jednak rysunek może wówczas blaknąć</li>
        <li>Unikać długotrwałej ekspozycję na słońce</li>
      </ul>
      <template v-if="false">
        <h2 class="product-info__title title title--small">
          Opis
        </h2>
        <div>
          {{ description }}
        </div>
      </template>
    </div>
    <div class="advantages__wrapper advantages__wrapper--">
      <div class="advantages__box">
        <img src="~/static/images/img/dostepnosc.svg" alt="JESTEŚMY DOSTĘPNI 24/7" class="advantages__img">
        <p class="advantages__title">
          JESTEŚMY DOSTĘPNI 24/7
        </p>
        <div class="advantages__description">
          nasz sklep jest do twojej dyspozycji
        </div>
      </div>
      <div class="advantages__box">
        <img src="~/static/images/img/sluchamy.svg" alt="SŁUCHAMY, GDY MÓWISZ" class="advantages__img">
        <p class="advantages__title">
          SŁUCHAMY, GDY MÓWISZ
        </p>
        <div class="advantages__description">
          dostosowujemy się do twoich potrzeb
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Getter, Vue } from 'nuxt-property-decorator'

export default class CupInfo extends Vue {
  @Getter('app/footerSeoText') footerSeoText!: string

  get description () {
    return this.footerSeoText || ''
  }
}
</script>
