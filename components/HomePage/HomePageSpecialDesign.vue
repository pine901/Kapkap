<template>
  <section class="home-banner">
    <div class="container home-banner__wrapper">
      <div class="home-banner__text-wrapper">
        <h3 class="home-banner__title title title--white">
          Wyjątkowa grafika
        </h3>
        <p class="home-banner__text text12">
          Każdy z naszych kubków na zamówienie otrzymuje unikalny projekt graficzny, dzięki możliwości
          błyskawicznego personalizowania. Użytkownik nie musi tworzyć, czy też pozycjonować poszczególnych
          elementów na kubku – wszystko realizowane jest w tle przez aplikację, która pozwala uzyskać jak najlepszy
          możliwy efekt. Położyliśmy nacisk na jakość grafiki, dlatego też zaprojektowaliśmy od nowa każde tło,
          każdą z ras psów, wiele różnych postaci, które również można personalizować oraz każdy cytat.
        </p>
      </div>
      <img v-lazy-load src="~/static/images/img/mug1.png" alt="kubek" class="home-banner__img">
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HomePageSpecialDesign'
}
</script>

<style>
@media (max-width: 767px) {
}
</style>
