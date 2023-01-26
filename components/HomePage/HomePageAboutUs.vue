<template>
  <section class="home-about">
    <div class="container home-about__wrapper">
      <h3 class="home-about__title title title--big home-about__title--mobile title--green">
        O nas
      </h3>
      <div class="home-about__img-wrapper">
        <img v-lazy-load src="~/static/images/img/o-nas.jpg" alt="O nas" class="home-about__img">
      </div>
      <div class="home-about__text-wrapper">
        <h3 class="home-about__title home-about__title--desktop title title--big title--green">
          O nas
        </h3>
        <p class="home-about__text text14">
          Założyliśmy tę rodzinną firmę, aby tworzyć rzeczy piękne i trwałe. Wiele chwil mija nas każdego dnia. Są wśród
          nich takie, które warto zachować.
        </p>
        <p class="home-about__text text14">
          Włożyliśmy ogromną pracę w stworzenie kolekcji praktycznie wszystkich ras psów, wraz z różnymi wariantami
          kolorystycznymi.
        </p>
        <p class="home-about__text text14">
          Po ponad roku planowania, rysowania i tworzenia tego sklepu, w końcu postanowiliśmy się z nim podzielić.
        </p>
        <p class="home-about__text text14">
          Mamy nadzieję, że spędzenie tych paru chwil na naszej stronie, a później cieszenie się codzienną kawą lub
          herbatą w specjalnie przez ciebie stworzonym kubku, sprawi ci jeszcze więcej przyjemności.
        </p>
        <NuxtLink to="/o-nas" class="btn btn--transparent">
          POZNAJ NAS
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HomePageAboutUs'
}
</script>

<style>
@media (max-width: 767px) {
}
</style>
