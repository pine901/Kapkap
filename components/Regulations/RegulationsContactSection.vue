<template>
  <section id="contact">
    <h4>§ 2 KONTAKT ZE SPRZEDAWCĄ</h4>
    <div class="boxes">
      <div>
        <h5>Adres pocztowy</h5>
        {{ companyStreet }}
      </div>
      <div>
        <h5>Adres e-mail</h5>
        {{ companyMail }}
      </div>
      <div>
        <h5>Telefon</h5>
        {{ phoneFormatted }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RegulationsInfographics extends Vue {
  phoneFormatted: string = <string>process.env.phoneFormatted
  companyStreet: string = <string>process.env.companyStreet
  companyMail: string = <string>process.env.companyMail
}
</script>
