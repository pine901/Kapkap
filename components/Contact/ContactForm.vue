<template>
  <section class="contact-us">
    <div class="container">
      <h2 class="contact-us__title title title--green">
        Napisz do nas!
      </h2>
      <div class="form">
        <div class="form__left">
          <div class="form__group">
            <label class="form__label" for="name">
              {{ $t('contact.firstName') }} i {{ $t('contact.lastName').toLowerCase() }}
            </label>
            <input
              id="name"
              v-model="fullName"
              type="text"
              :placeholder="$t('contact.enterName')"
            >
          </div>
          <div class="form__group">
            <label class="form__label" for="phone">{{ $t('contact.number') }}</label>
            <input
              v-model="phoneNumber"
              type="text"
              :placeholder="$t('contact.enterNumber')"
            >
          </div>
          <div class="form__group">
            <label class="form__label" for="email">{{ $t('contact.email') }}</label>
            <input
              v-model="email"
              type="email"
              :placeholder="$t('contact.enterEmail')"
            >
          </div>
        </div>
        <div class="form__right">
          <div class="form__group">
            <label class="form__label form__label--textarea" for="message">{{ $t('contact.enterMessage') }}</label>
            <textarea
              v-model="message"
              :placeholder="$t('contact.message')"
              rows="10"
              cols="30"
            />
          </div>
          <button type="submit" class="btn btn--green" @click="sendMessage">
            {{ $t('contact.send') }}
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.5 18L15.5 12L9.5 6"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ContactForm extends Vue {
  fullName: string = ''
  phoneNumber: string = ''
  email: string = ''
  message: string = ''

  async sendMessage () {
    try {
      await this.$axios.post('/v1/contact/mail', {
        firstName: this.fullName.split(' ')[0].replace(',', ''),
        lastName: this.fullName.split(' ').length > 0 && this.fullName.split(' ')[1] ? this.fullName.split(' ')[1] : this.fullName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        message: this.message
      })

      this.$nuxt.$emit('showMessage', {
        message: 'Odpowiemy na tę wiadomość w ciągu paru godzin.<br/> Wysłaliśmy również potwierdzenie ' +
          'wysłania tej wiadomości na twój adres e-mail.',
        title: 'Dziękujemy za kontakt'
      })

      this.fullName = ''
      this.phoneNumber = ''
      this.email = ''
      this.message = ''
    } catch (err: any) {
      this.$nuxt.$emit('showMessage', {
        message: 'Wystąpił błąd: ' + err.message,
        title: 'Przepraszamy'
      })
    }

    return false
  }
}
</script>

<style>
a:hover, a:focus {
  text-decoration: none;
  color: #000;
}
</style>
