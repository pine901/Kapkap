<template>
  <section class="thank-you">
    <h1 class="thank-you__title title title--green">
      Błąd 404
    </h1>
    <p class="thank-you__text">
      Niestety nie znaleźliśmy poszukiwanej strony.
    </p>

    <NuxtLink to="/" class="thank-you__btn btn btn--green">
      STRONA GŁÓWNA
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </NuxtLink>

    <img
      src="~/static/images/img/dziekujemy-mobile.jpg"
      alt="Dziękujemy za złożenie zamówienia."
      class="thank-you__img"
    >
    <img
      src="~/static/images/img/dziekujemy-desktop.jpg"
      alt="Dziękujemy za złożenie zamówienia."
      class="thank-you__img-desktop"
    >
  </section>
</template>

<script lang="ts">
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

export default {
  name: 'Page404',
  components: { Breadcrumb }
}
</script>
