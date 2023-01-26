<template>
  <div>
    <img src="~/static/images/img/contact.jpg" alt="kontakt" class="contact__banner">

    <ContactAddress />
    <ContactForm />

    <Newsletter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ContactAddress from '~/components/Contact/ContactAddress.vue'
import ContactForm from '~/components/Contact/ContactForm.vue'
import Newsletter from '~/components/Common/Footer/Newsletter.vue'

@Component({
  components: { Newsletter, ContactForm, ContactAddress }
})
export default class Contact extends Vue {
}
</script>

<style>
a:hover, a:focus {
  text-decoration: none;
  color: #000;
}
</style>
