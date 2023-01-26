<template>
  <div>
    <section class="shop">
      <div class="shop__left" :class="show_nav && 'show_nav'">
        <div class="shop__categories shop__categories--hidden">
          <button id="shop__categories-close" class="shop__categories-close" @click="hideNav">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3">
                <path d="M22.5 7.5L7.5 22.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.5 7.5L22.5 22.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </button>
          <p class="shop__category-title">
            {{ $t('category.categories') }}
          </p>
          <ul v-if="categories" class="category-list">
            <li v-for="(category, index) in categories" :key="category.title + index">
              <NuxtLink v-if="category.path === pageURL" :to="category.path" class="shop__category shop__category--active text-decoration-none" @click.native="cancelVar">
                {{ category.title }}
              </NuxtLink>
              <NuxtLink v-else :to="category.path" class="shop__category text-decoration-none">
                {{ category.title }}
              </NuxtLink>
            </li>
          </ul>
          <template v-if="false">
            <p class="shop__category-title">
              Tło
            </p>
            <ul v-if="categories" class="category-list">
              <li v-for="(background, index) in backgrounds" :key="background.title + index">
                <NuxtLink v-if="background.path === pageURL" :to="background.path" class="shop__category shop__category--active text-decoration-none" @click.native="cancelVar">
                  {{ background.title }}
                </NuxtLink>
                <NuxtLink v-else :to="background.path" class="shop__category text-decoration-none">
                  {{ background.title }}
                </NuxtLink>
              </li>
            </ul>
          </template>
        </div>
      </div>
      <div class="shop__right">
        <div class="shop__seo">
          <TopBanner :title="title" :description="description" />
        </div>
        <div class="shop__menu">
          <button id="shop__menu-btn" class="shop__menu-btn" @click="showNav">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 5.48438C12.801 5.48438 12.2344 4.91774 12.2344 4.21875C12.2344 3.51976 12.801 2.95312 13.5 2.95312C14.199 2.95312 14.7656 3.51976 14.7656 4.21875C14.7656 4.91774 14.199 5.48438 13.5 5.48438Z" stroke="white" stroke-width="2.53125" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.5 14.7656C12.801 14.7656 12.2344 14.199 12.2344 13.5C12.2344 12.801 12.801 12.2344 13.5 12.2344C14.199 12.2344 14.7656 12.801 14.7656 13.5C14.7656 14.199 14.199 14.7656 13.5 14.7656Z" stroke="white" stroke-width="2.53125" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.5 24.0469C12.801 24.0469 12.2344 23.4802 12.2344 22.7812C12.2344 22.0823 12.801 21.5156 13.5 21.5156C14.199 21.5156 14.7656 22.0823 14.7656 22.7812C14.7656 23.4802 14.199 24.0469 13.5 24.0469Z" stroke="white" stroke-width="2.53125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <form class="shop__search-wrapper">
            <input type="text" class="shop__search" placeholder="Wyszukaj po nazwie">
            <button class="shop__search-btn" type="submit">
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M11 17.5383C15.4183 17.5383 19 14.2321 19 10.1537C19 6.07525 15.4183 2.76904 11 2.76904C6.58172 2.76904 3 6.07525 3 10.1537C3 14.2321 6.58172 17.5383 11 17.5383Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.9999 19.3845L16.6499 15.3691" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </button>
          </form>
        </div>
        <div class="shop__wrapper">
          <NuxtLink v-for="product in products" :key="product.productId" :to="getUrl(product)" class="product text-decoration-none">
            <img v-lazy-load :src="product.sampleImageURL" alt="" class="product__img">
            <div class="product__card">
              <div class="product__wrapper">
                <p class="product__name">
                  {{ product.title }}
                </p>
                <p class="product__old-price">
                  59,99zł
                </p>
                <p class="product__price">
                  {{ product.price | currency }}
                </p>
                <a class="product__btn btn btn--transparent">PERSONALIZUJ</a>
              </div>
            </div>
          </NuxtLink>
        </div>
        <!-- <ProductsList @addLastVisited="handleAddLastVisited" /> -->
      </div>
    </section>

    <Newsletter />
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Mutation, Vue, Watch } from 'nuxt-property-decorator'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import FilterBtn from '~/components/Category/FilterBtn.vue'
import ThemeCard from '~/components/Category/ThemeCard.vue'
import CategoryMenu from '~/components/Category/CategoryMenu.vue'
import ProductsList from '~/components/Category/ItemList.vue'
import TopBanner from '~/components/Category/TopBanner.vue'
import { Category as CategoryType } from '~/types/store/categories/types'
import { LastVisited, Product } from '~/types/store/products/types'
import Newsletter from '~/components/Common/Footer/Newsletter.vue'

@Component({
  components: {
    Newsletter,
    FilterBtn,
    ThemeCard,
    CategoryMenu,
    ProductsList,
    Breadcrumb,
    TopBanner
  }
})
export default class Category extends Vue {
  @Getter('categories/categories') categories!: CategoryType[]
  @Getter('products/lastVisited') lastVisited!: Product[]
  @Getter('products/products') products!: Product[]

  @Mutation('products/setPath') setPath!: Function
  @Mutation('app/setFooterSeoText') setFooterSeoText!: Function
  @Mutation('app/setFooterText') setFooterText!: Function

  @Action('products/addLastVisited') addLastVisited!: Function
  @Action('products/loadProducts') loadProductsInStore!: Function
  @Action('categories/loadCategories') loadCategories!: Function
  @Action('products/loadLastVisited') loadLastVisited!: Function

  staticDescription = 'Prezenty mają w sobie jakąś nieuchwytną magię, którą ciężko porównać do czegokolwiek innego. To wyraz naszych uczuć i potwierdzenie, że obdarowywana osoba zajmuje ważne miejsce w naszym życiu i że po prostu o niej pamiętamy. Czasami trudno jednak znaleźć upominek, który będzie tym idealnym: oryginalnym i dopasowanym do konkretnej okoliczności. Z pomocą sklepu KapKap jest to dużo prostsze. Wybierz nasze przeurocze personalizowane kubki z nadrukiem i zaskocz jubilata lub solenizanta. Pamiętaj – to nie okazja jest ważna. Liczy się radość i uśmiech na twarzy kogoś bliskiego po otrzymaniu tak wyjątkowego prezentu!'

  staticTitle = 'Wyjątkowy kubek personalizowany z grafiką lub napisem'

  flagCategory : Array<boolean> = new Array<boolean>(12).fill(false)
  pageURL : string = ''

  backgrounds: Array<any> = [
    {
      title: 'NATURA',
      path: ''
    },
    {
      title: 'MIESZKANIE',
      path: ''
    },
    {
      title: 'ZIMA',
      path: ''
    },
    {
      title: 'NAD WODĄ',
      path: ''
    },
    {
      title: 'DZIEŃ',
      path: ''
    },
    {
      title: 'NOC',
      path: ''
    }
  ]

  show_nav : boolean = false

  async created () {
    if (!this.categories?.length) {
      await this.loadCategories()
    }
    await this.loadProducts()
  }

  head () {
    const category = this.findCategoryItem()

    if (!category?.metaTitle) {
      return
    }

    return {
      title: category.metaTitle || 'Kubki na każdą okazję | KapKap',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: category.metaDescription || ''
        },
        {
          keywords: category.metaTags || ''
        }
      ]
    }
  }

  async mounted () {
    this.pageURL = window.location.pathname

    this.setPath(this.$route)
    await this.loadLastVisited()
    this.setSEO()
  }

  @Watch('$route')
  async handleRouterChange () {
    await this.loadProducts()
    this.setSEO()
  }

  setSEO () {
    const category = this.findCategoryItem()

    if (category?.seoDescription) {
      this.setFooterSeoText(category.seoDescription)
    } else {
      this.setFooterSeoText('<h2>Spersonalizowane kubki na prezent – wybierz kolorową grafikę</h2><p>Jedyne w swoim rodzaju kubki z grafiką to świetny sposób, by zachwycić, rozbawić i uszczęśliwić obdarowaną osobę. Wszystkie nasze kubki otrzymują określony projekt graficzny, który wybierasz Ty. Zrobisz to z użyciem banalnego w obsłudze, ale jednocześnie rozbudowanego kreatora, który znajdziesz na naszej stronie. Dzięki niemu możliwe jest dobieranie grafiki w czasie rzeczywistym, z opcją podglądania. Zapomnij o konieczności tworzenia kolejnych elementów nadruku i ustawiania ich w optymalnej pozycji na kubku. Nie musisz być doświadczonym grafikiem, by stworzyć dzieło sztuki! Nasz kreator wyręczy Cię w żmudnym projektowaniu kubka personalizowanego – wystarczy kilka kliknięć i idealny prezent będzie gotowy!</p><p><br></p><p>Chętnie chwalimy się 2 rzeczami. Pierwsza z nich jest taka, że każdy z naszych kubków na prezent jest mega starannie wykonany. Ponad wszystko stawiamy na jakość nadruku, który znajdzie się na zaprojektowanym przez Ciebie naczyniu. Grafika najpierw zostaje nadrukowana na specjalistyczny papier, który zostaje przyklejony na kubek. Ląduje on później w urządzeniu, które zostaje nagrzane do temperatury 180°C. Po upływie kilku minut papier jest następnie odrywany i voilà! Kubek personalizowany z super odpornym nadrukiem jest gotowy. Można go bez obaw wkładać do zmywarki.</p><p><br></p><p>A jaki jest nasz drugi powód do dumy? W naszym sklepie zamówisz personalizowane kubki na prezent, na których możesz dodać podobiznę psa lub kota. Ale nie przypadkowego Azora czy pierwszego lepszego dachowca – w kreatorze masz do wyboru kilkadziesiąt ras naszych czworonożnych przyjaciół! Dokładnie przeanalizowaliśmy najpopularniejsze odmiany w Polsce, ale nie zapomnieliśmy także o tych bardziej egzotycznych. Border collie, buldog angielski, francuski, a może długowłosy owczarek niemiecki? Kochamy psy, dlatego jako jedyni w Polsce dajemy Ci tak potężny wybór. Warto z niego skorzystać!</p><h2>Kubek z napisem – wspaniały pomysł na prezent</h2><p>Opcja personalizacji w KapKap nie ogranicza się wyłącznie do wybrania kolorowej grafiki. Warto sprawdzić także naszą inną opcję, czyli personalizowane kubki z napisami. Jeśli szukasz kubka z zabawnym cytatem, to jesteś w dobrym miejscu! Przykład? Proszę bardzo: "Najlepszy przyjaciel, do którego nic nie musisz mówić, a i tak Cie rozumie". Coś innego? Co powiesz na " Kto rano wstaje, ten wychodzi z psem"? Jesteśmy przekonani, że kubeczki z takim tekstami będą idealne na prezent dla każdego fana czworonogów. </p><p><br></p><p>Jeśli jednak zależy Ci na tym, by spersonalizować kubek w jeszcze inny sposób, wystarczy, że dasz nam o tym znać telefonicznie lub za pośrednictwem e-maila. Dodaj zdjęcie, unikalny, stworzony przez siebie tekst czy imię obdarowanej osoby. Kubek z imieniem to zresztą idealny pomysł na prezent, który możesz podarować bliskiej Ci osobie – to zawsze strzał w dziesiątkę!</p><h2>Piękny kubek to wspaniały prezent na każdą okazję</h2><p>Spraw wyjątkowy prezent najbliższym w postaci pięknego kubka. Dzięki takiemu kubeczkowi każdy łyk ulubionej kawy czy herbaty będzie smakował jeszcze lepiej. To też super efektowny gadżet, który dzięki możliwości personalizacji daje Ci szansę zaprojektowania małego dzieła sztuki. Dobierz drugi kubek i stwórz niesamowity zestaw, który zachwyci niejedną osobę. To idealny pomysł na prezent z okazji Walentynek, urodzin, imienin, Dnia Kobiet czy świąt Bożego Narodzenia. Tutaj nie ma żadnych ograniczeń – ciesz się darmową dostawą i już teraz zamów wyjątkowy kubek na kapkap.eu!</p>')
    }

    if (category?.footerText) {
      this.setFooterText(category.footerText)
    } else {
      this.setFooterText('Kubek na urodziny, dzień babci i dziadka, prezent na dzień ojca | KapKap Sp. z o.o.')
    }
  }

  async loadProducts () {
    const { path } = this.$route
    await this.loadProductsInStore(path)
  }

  get title (): string {
    const category = this.findCategoryItem()
    return category?.longTitle || category?.title || this.staticTitle
  }

  get description (): string {
    const category = this.findCategoryItem()

    return category?.description ?? this.staticDescription
  }

  findCategoryItem (): CategoryType {
    const path = this.$route.path
    return this.categories.find((c: CategoryType) => c.path === path) || {} as CategoryType
  }

  handleAddLastVisited (item: LastVisited) {
    this.addLastVisited(item)
  }

  changeActive (index) {
    this.flagCategory[index] = !this.flagCategory[index]
  }

  getUrl (product: Product): string {
    return `${product.path}`
  }

  cancelVar () {
    window.location.href = '/kubki'
  }

  showNav () {
    this.show_nav = true
    const shop_categories = document.getElementsByClassName('shop__categories')[0]
    shop_categories.classList.remove('shop__categories--hidden')
  }

  hideNav () {
    this.show_nav = false
  }
}
</script>

<style>
  a:hover {
    color: #31A745;
  }

  .show_nav {
    display: block;
  }
</style>
