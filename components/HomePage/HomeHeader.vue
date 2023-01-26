<template>
  <header class="home-header">
    <img v-lazy-load src="~/static/images/img/home-baner-desktop.jpg" alt="Spersonalizowane kubki z pupilami" class="home-header__banner home-header__banner--desktop">
    <img v-lazy-load src="~/static/images/img/home-baner-mobile.jpg" alt="Spersonalizowane kubki z pupilami" class="home-header__banner home-header__banner--mobile">
    <div class="home-header__wrapper">
      <div class="container">
        <div class="home-header__text-wrapper">
          <h1 class="home-header__title title title--white">
            STWÓRZ SWÓJ KUBEK
          </h1>
          <p class="home-header__text home-header__text--desktop text16">
            Spersonalizowane kubki z pupilami  idealne na prezent i nie tylko.
          </p>
          <p class="home-header__text home-header__text--mobile text16">
            Spersonalizowane kubki z pupilami.
          </p>
          <NuxtLink to="/kubki" class="btn btn--green">
            STWÓRZ WŁASNY KUBEK
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>

</style>
