<template>
  <section class="advantages advantages--home">
    <div class="container advantages__wrapper">
      <div class="advantages__box">
        <img v-lazy-load src="~/static/images/img/dostawa.svg" alt="darmowa dostawa" class="advantages__img">
        <p class="advantages__title">
          DARMOWA DOSTAWA
        </p>
        <div class="advantages__description">
          darmowa dostawa na terenie Polski
        </div>
      </div>
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
        <img v-lazy-load src="~/static/images/img/sluchamy.svg" alt="SŁUCHAMY, GDY MÓWISZ" class="advantages__img">
        <p class="advantages__title">
          SŁUCHAMY, GDY MÓWISZ
        </p>
        <div class="advantages__description">
          dostosowujemy się do twoich potrzeb
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHeaderBoxes'
}
</script>

<style scoped>

</style>
