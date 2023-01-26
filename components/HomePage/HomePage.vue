<template>
  <div>
    <HomeHeader />
    <HomeHeaderBoxes />
<!--    <HomePageNewProducts />-->
    <HomePageSpecialDesign />
    <HomePageAboutUs />
    <HomePageFaq />
    <HomePageGiftIdea />
    <HomePageBlog />

    <section class="mugs">
      <div class="container mugs__wrapper">
        <div class="mugs__img-wrapper">
          <img v-lazy-load src="~/static/images/img/Free_Mug_Mockup_2.png" alt="Kubki personalizowane" class="mugs__img">
        </div>
        <div class="mugs__text-wrapper">
          <h3 class="mugs__title title title--green">
            Kubki personalizowane
          </h3>
          <div class="mugs__text text14">
            Wiemy, jak istotną rolę pełnią niewielkie prezenty wręczane bliskim, dlatego w naszej ofercie znaleźć można personalizowane kubki, które są świetnym pomysłem prezentowym dla ważnej osoby. Kubek wykonywany na zamówienie to nie tylko gwarancja najlepszej jakości, ale także oryginalne i nietuzinkowe rozwiązanie. Oferujemy kubek z cytatem, z grafiką lub całkowicie spersonalizowane kubki według własnych preferencji. Niezwykłą popularnością cieszą się nasze kubki ze śmiesznym napisem, jak również ciekawie wyglądające kubki z psami, które mogą być spersonalizowane np. pod kątem ulubionej pory roku.
          </div>
        </div>
      </div>
    </section>

    <Newsletter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'

// import topSliderJSON from '~/data/topSlider.json'
// import quotesJSON from '~/data/quotes.json'
import faqJSON from '~/data/faq.json'
import HomeHeader from '~/components/HomePage/HomeHeader.vue'
import HomeHeaderBoxes from '~/components/HomePage/HomeHeaderBoxes.vue'
import HomePageNewProducts from '~/components/HomePage/HomePageNewProducts.vue'
import HomePageSpecialDesign from '~/components/HomePage/HomePageSpecialDesign.vue'
import HomePageAboutUs from '~/components/HomePage/HomePageAboutUs.vue'
import HomePageFaq from '~/components/HomePage/HomePageFaq.vue'
import HomePageGiftIdea from '~/components/HomePage/HomePageGiftIdea.vue'
import HomePageBlog from '~/components/HomePage/HomePageBlog.vue'
import Newsletter from '~/components/Common/Footer/Newsletter.vue'

@Jsonld
@Component({
  components: {
    Newsletter,
    HomePageBlog,
    HomePageGiftIdea,
    HomePageFaq,
    HomeHeader,
    HomeHeaderBoxes,
    HomePageNewProducts,
    HomePageAboutUs,
    HomePageSpecialDesign
  }
})
export default class HomePage extends Vue {
  // topSlider: Array<any> = []
  // quotes: Array<any> = []

  created () {
    // this.topSlider = ((arr) => {
    //   const newArr = arr.slice()
    //   for (let i = newArr.length - 1; i > 0; i--) {
    //     const rand = Math.floor(Math.random() * (i + 1));
    //     [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
    //   }
    //   return newArr
    // })(topSliderJSON)
    //
    // this.quotes = quotesJSON
  }

  jsonld () {
    return [this.structuredData, this.faqStructuredData, this.localStructuredData]
  }

  get structuredData () {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: 'https://kapkap.eu',
      logo: 'https://kapkap.eu/assets/images/logos/kapkap-logo-114x100.png'
    }
  }

  get faqStructuredData () {
    const mainEntity: Array<any> = []
    faqJSON.forEach((value) => {
      if (value.question) {
        mainEntity.push({
          '@type': 'Question',
          name: value.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: value.answer
          }
        })
      }
    })

    return {
      '@context': 'http://schema.org',
      '@type': 'FAQPage',
      mainEntity
    }
  }

  get localStructuredData () {
    return {
      '@context': 'https://schema.org',
      '@type': 'Store',
      image: [
        'https://kapkap.eu/assets/adv/K_1P_swieta_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/K_1P_zima_1200x628.png',
        'https://kapkap.eu/assets/adv/K_1P_zima_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/K_2P_zima_1200x628.png',
        'https://kapkap.eu/assets/adv/K_2P_zima_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/K_3P_morze_1200x628.png',
        'https://kapkap.eu/assets/adv/K_3P_morze_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/M_1P_jezioro_1200x628.png',
        'https://kapkap.eu/assets/adv/M_1P_jezioro_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/M_1P_las_1200x628.png',
        'https://kapkap.eu/assets/adv/M_1P_las_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/M_2P_miasto_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/M_2P_swieta_1200x628kolor.png'
      ],
      '@id': 'https://kapkap.eu',
      name: 'KapKap - Personalizowane gadżety i prezenty',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Długa 43',
        addressLocality: 'Chorzów',
        postalCode: '41-506',
        addressCountry: 'PL'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.2773439,
        longitude: 18.9529832
      },
      url: 'https://kapkap.eu',
      telephone: '+48694051344',
      priceRange: '59.99',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          opens: '10:00',
          closes: '18:00'
        }
      ]
    }
  }
}
</script>

<style>
    .btn--white:hover {
      color: #31a745;
    }
    @media (max-width: 767px) {
    }
</style>
