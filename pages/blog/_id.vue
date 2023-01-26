<template>
  <div>
    <section class="post">
      <div v-if="blog" class="container">
        <div class="row">
          <div>
            <h1 class="post__title title title--big" style="color:#000;">
              {{ blog.title }}
            </h1>
            <div :style="`background: url(${assets}${blog.bannerImageURL}) no-repeat`" class="post__banner"></div>
            <PostSocial :blog="blog" />
            <div class="post__content content text14" v-html="blog.content" />

            <div class="post__two-col">
              <img :src="`${assets}/photos/post-img.png`" alt="Twój pies jest ciągle głodny?" class="post__two-col-img">
              <div class="post__two-col-text" style="color:#808080">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quaerat veniam error minus, sunt nulla provident numquam excepturi molestiae distinctio accusamus cum corrupti placeat asperiores, ullam rem! Necessitatibus delectus voluptatibus, reprehenderit ducimus consequuntur itaque, quia modi aut aspernatur eum autem?</p>
                <ol style="margin-top:25px;">
                  <li>tincidunt adipiscing enim consectetur tempor, nunc vitae justo. </li>
                  <li>tincidunt adipiscing enim consectetur tempor, nunc vitae justo. Sapien id eu mattis amet tortor nulla nunc ultricies</li>
                  <li>tincidunt adipiscing enim consectetur tempor, nunc vitae justo.</li>
                </ol>
              </div>
            </div>
            <h2 class="post__heading" style="color:#000;">
              Lorem ipsum dolor sit amet, consectetur.
            </h2>
            <p class="post__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quaerat veniam error minus, sunt nulla provident numquam excepturi molestiae distinctio accusamus cum corrupti placeat asperiores, ullam rem! Necessitatibus delectus voluptatibus, reprehenderit ducimus consequuntur itaque, quia modi aut aspernatur eum autem?
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <p class="cta__title">
          Wesprzyj naszą organizację i zamów kubek już dziś
        </p>
        <div class="cta__buttons">
          <a href="/kubki" class="btn btn--green" style="color:#fff">STWÓRZ WŁASNY KUBEK
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 18L15.5 12L9.5 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a href="/blog" class="btn btn--transparent">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            WRÓĆ DO BLOGA
          </a>
        </div>
      </div>
    </section>

    <div style="margin-top: 200px;">
      <section class="newsletter">
        <div class="newsletter__img-wrapper">
          <img src="~/static/images/img/newsletter.jpg" alt="newsletter" class="newsletter__img">
        </div>
        <div class="newsletter__wrapper">
          <h3 class="newsletter__title title title--white">
            Zapisz się do newslettera
          </h3>
          <p class="newsletter__text text14">
            I łap wartościowe treści o swoim pupilu!
          </p>
          <form action="#" class="newsletter__form" @submit="addEmailToNewsletter">
            <input
              v-model="email"
              type="email"
              class="newsletter__input"
              placeholder="podaj adres e-mail..."
            >
            <button type="submit" class="btn btn--white">
              ZAPISUJE SIĘ
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#31A745"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
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
          <p v-html="mMessage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import PostSocial from '~/components/Blog/PostSocial.vue'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import Picture from '~/components/Common/Picture.vue'

@Component({
  components: {
    Breadcrumb,
    PostSocial,
    Picture
  },
  asyncData ({ params }: Context) {
    return { id: +params.id }
  }
})

export default class Detail extends Vue {
  @Getter('blog/blogById') blogById!: Function

  id!: number

  email: string = ''

  showModal: any = false
  mMessage: any = ''
  mTitle: any = ''

  assets: string = <string>process.env.assetsURL

  get blog () {
    return this.blogById(this.id)
  }

  async created () {
    await this.$store.commit('app/setFooterText', null)
    await this.$store.commit('app/setFooterSeoText', null)
  }

  mounted () {
    if (process.client) {
      document.addEventListener('scroll', this.scroll)
    }
  }

  destroyed () {
    document.removeEventListener('scroll', this.scroll)
  }

  scroll () {
    const banner = document.querySelector('.post__banner')! as HTMLElement
    const rect = banner.getBoundingClientRect();
    let y = window.scrollY * 100 / (rect.top + rect.height * 2)
    if (y > 100) {
      y = 100
    }

    banner.style.backgroundPosition = `0 ${y}%`
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

.title {
  font-weight: 400;
  font-size: 29px;
  line-height: 35px;
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 42px;
    line-height: 54px;
  }
}

@media screen and (min-width: 1200px) {
  .title {
    font-size: 60px;
    line-height: 72px;
  }
}

.breadcrumb {
  margin-bottom: 40px;
}

.blog-detail-page {
  padding: 0 30px;

  img {
    margin-bottom: 40px;
  }
}

.post {
  position: relative;
  &__banner-wrapper {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

  &__title {
    margin: 20px 0;
  }

  &__heading {
    font-weight: 400;
    margin: 26px 0 12px;
  }

  &__content {
    p,
    ol {
      margin-bottom: 20px !important;
      letter-spacing: 0.15px;
      color: gray;
      color: rgb(128, 128, 128);
    }

    li {
      margin-bottom: 4px;
    }
  }

  &__two-col-img {
    margin-bottom: 20px;
    margin-top: 24px;
    margin-left: -30px;
    margin-right: -30px;
    max-width: calc(100% + 60px);
  }

  &::after {
    display: block;
    content: "";
    width: 97px;
    height: 151px;
    background-image:  url(/images/img/arrows-psot.svg);
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .container {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1200px) {
  .post {
    &__two-col {
      display: flex;
      gap: 40px;
      align-items: center;
      margin-top: 120px;
    }

    &__two-col-img {
      margin: unset;
      max-width: 50%;
    }

    .container {
      max-width: 1470px;
    }

    &__heading {
      margin-bottom: 27px;
      margin-top: 70px;
      font-size: 34px;
      line-height: 41px;
    }

    &__title {
      margin-bottom: 37px;
      margin-top: 40px;
    }

    .text14 {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

//sekcja Wesprzyj naszą organizację i zamów kubek już dziś

.cta {
  margin-top: 78px;
  margin-bottom: 95px;

  &__title {
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.15px;
    margin-bottom: 58px;
    font-family: "All Round Gothic";
  }

  &__buttons {
    display: flex;
    gap: 18px;
    align-items: center;
    flex-direction: column;
  }
}

@media (min-width: 768px) {
  .cta {
    &__buttons {
      flex-direction: row-reverse;
      justify-content: center;
    }
  }
}

@media (min-width: 1200px) {
  .cta {
    margin-top: 163px;
    margin-bottom: 193px;

    &__title {
      margin-bottom: 48px;
      font-size: 34px;
      line-height: 41px;
    }
  }
}

.content {
  ::v-deep {
    color: $grey;

    h2 {
      font-family: Poppins, sans-serif;
      margin-block:25px;
      color: #000;
      @apply post__heading;
      font-weight: 400;
    }

    p {
      @apply post__content text14;
      margin-bottom: 20px !important;
      letter-spacing: 0.15px;
      color: gray;
      font-size:  1rem;
      font-family: Poppins, 'sans-serif';
    }
  }
}

.post__text {
  margin-bottom: 20px;
  letter-spacing: 0.15px;
  color: rgb(128, 128, 128);
}

.post__banner {
  margin-bottom: 30px;
  height: 200px;
  width: 100%;
  border-radius: 20px;
  background-size: cover!important;
  background-position: 0 50%;
}
</style>
