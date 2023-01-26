<template>
  <div>
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
            v-model="newLetterEmail"
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Newsletter extends Vue {
  newLetterEmail: string = ''

  async addEmailToNewsletter (e: any) {
    e.preventDefault()
    try {
      await this.$axios.post('/v1/newsletter', { email: this.newLetterEmail })
      this.$nuxt.$emit('showMessage', {
        title: 'Dziękujemy',
        message: 'Aby korzystać z newslettera aktywuj go z poziomu wiadomości e-mail, którą właśnie do ciebie wysłaliśmy.'
      })
    } catch (err) {
      this.$nuxt.$emit('showMessage', {
        title: 'Przepraszamy',
        message: 'Napotkaliśmy problem podczas dodawania adresu e-mail do newslettera. Spróbuj raz jeszcze.'
      })
    }
    if (this.newLetterEmail.length !== 0) {
      this.$nuxt.$emit('showMessage', {
        message: 'Thank you!',
        title: 'Thank you!'
      })
    }
  }
}
</script>

<style scoped>

</style>
