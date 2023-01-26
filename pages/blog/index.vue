<template>
  <div>
    <section class="blog">
      <h1 class="blog__title title title--green title--big">Blog</h1>
      <BlogList />
    </section>

    <section class="newsletter">
        <div class="newsletter__img-wrapper">
            <img src="~/static/images/img/newsletter.jpg" alt="newsletter" class="newsletter__img">
        </div>
        <div class="newsletter__wrapper">
            <h3 class="newsletter__title title title--white">Zapisz się do newslettera</h3>
            <p class="newsletter__text text14">I łap wartościowe treści o swoim pupilu!</p>
            <form action="#" class="newsletter__form" @submit="addEmailToNewsletter">
                <input
                    v-model="email"
                    type="email"
                    class="newsletter__input"
                    placeholder="podaj adres e-mail..."
                >
                <button type="submit" class="btn btn--white">ZAPISUJE SIĘ
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    </section>

    <div v-if="showModal" class="nuxtmodal-overlay" @click="showModal = false">
      <div class="nuxtmodal" @click.stop>
        <div class="close" @click="showModal = false">
          <a class="close-img">&#x2715</a>
        </div>
        <h6>{{ mTitle }}</h6>
        <p v-html="mMessage"></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    Breadcrumb: () => import(/* webpackChunkName: "Breadcrumb" */ '~/components/Common/Breadcrumb.vue'),
    BlogList: () => import(/* webpackChunkName: "BlogList" */ '../../components/Blog/BlogList.vue')
  }
})
export default class Blog extends Vue {
  email: string = ''

  showModal: any = false
  mMessage: any = ''
  mTitle: any = ''

  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  }

  async addEmailToNewsletter (e: any) {
    e.preventDefault()
    try {
      const res = await this.$axios.post('/v1/newsletter', { email: this.email })
      this.$root.$emit('popup', {
        title: 'Dziękujemy',
        message: 'Aby korzystać z newslettera aktywuj go z poziomu wiadomości e-mail, którą właśnie do ciebie wysłaliśmy.'
      })
    } catch (err) {
      this.$root.$emit('popup', {
        title: 'Przepraszamy',
        message: 'Napotkaliśmy problem podczas dodawania adresu e-mail do newslettera. Spróbuj raz jeszcze.'
      })
    }

    if (this.email.length !== 0) {
      this.showModal = true
      this.mTitle = 'Thanks you!'
      this.mMessage = 'true'
    }
  }
}
</script>
<style scoped lang="scss">
.blog-page .container{
  margin-top: 60px
}
</style>
