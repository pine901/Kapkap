<template>
  <HomePage />
</template>

<script lang="js">
export default {
  components: {
    HomePage: () => import(/* webpackChunkName: "HomePage" */ '@/components/HomePage/HomePage.vue')
  },

  head () {
    return {
      title: 'Kubki personalizowane - na prezent, dla przyjaciela | KapKap',
      meta: [
        {
          keywords: 'duży kubek personalizowany, kubek na zamówienie, kubek personalizowany, kubek prezent, kubek z cytatem, kubek z grafiką, kubek z napisem na zamówienie, kubek z personalizacją, kubek z psem, kubek ze śmiesznym napisem, kubki na zamówienie, kubki personalizowane, kubki spersonalizowane, kubki z cytatami, kubki z napisami śmieszne, kub- ki z personalizacją, kubki z psami, personalizowane kubki, personalizowany kubek, kubki psy, spersonalizowane kubki, kubek na prezent, zestaw kubków na prezent, kubek na prezent dla faceta, kubek na prezent dla przyjaciółki'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Postaw na oryginalne rozwiązania na prezent. Nasze spersonalizowane kubki przypadną do gustu każdej obdarowanej osobie!'
        }
      ]
    }
  },

  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', 'duży kubek personalizowany, kubek na zamówienie, kubek personalizowany, kubek prezent, ' +
      'kubek z cytatem, kubek z grafiką, kubek z napisem na zamówienie, kubek z personalizacją, kubek z psem, ' +
      'kubek ze śmiesznym napisem, kubki na zamówienie, kubki personalizowane, kubki spersonalizowane, ' +
      'kubki z cytatami, kubki z napisami śmieszne, kub- ki z personalizacją, kubki z psami, personalizowane kubki, ' +
      'personalizowany kubek, kubki psy, spersonalizowane kubki, kubek na prezent, zestaw kubków na prezent, ' +
      'kubek na prezent dla faceta, kubek na prezent dla przyjaciółki')
  }
}
</script>
