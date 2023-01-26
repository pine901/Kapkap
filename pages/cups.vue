<template>
  <Category />
</template>

<script lang="js">
export default {
  name: 'CupsPage',
  components: {
    Category: () => import(/* webpackChunkName: "Category" */ '~/components/Category/Category.vue')
  },
  head () {
    return {
      title: 'Eleganckie kubki na prezent. Stwórz swój ładny kubek | KapKap.eu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Personalizowane i eleganckie kubki na prezent. Stwórz w mniej niż 2 minuty swój ładny kubek, który dostarczymy do Ciebie za darmo. Zapraszamy'
        },
        {
          keywords: 'kubek na urodziny, kubek dla mamy na urodziny, kubek dla taty na urodziny, kubek na 18 dla chłopaka, kubek na 40 urodziny dla niej, kubek na urodziny dla chłopaka, kubek na urodziny dla koleżanki, kubek na urodziny dla mamy, kubek na dzień chłopaka, kubek na dzień nauczyciela, kubek na dzień mamy, kubek dla babci i dziadka, kubek na 40 urodziny, kubek na 30 urodziny, kubek na dzień babci i dziadka, kubek dzień nauczyciela, kubek dla nauczyciela matematyki, kubek dla nauczyciela angielskiego, dzień nauczyciela kubek, kubek na urodziny dla faceta, kubek z napisem dla chłopaka, kubek na urodziny dla przyjaciółki, prezent na dzień ojca kubek, kubek na 40 urodziny dla mężczyzny, kubek na 18 urodziny dla dziewczyny, kubek na 30 urodziny dla niej, kubek na 50 urodziny dla faceta, kubek na 18 urodziny dla chłopaka, śmieszne kubki na urodziny, kubki urodzinowe z nadrukiem, kubek jesień'
        }
      ]
    }
  },
  nuxtI18n: {
    paths: {
      pl: '/kubki*',
      en: '/cups*'
    }
  }
}
</script>
