<template>
  <div v-if="formName">
    <div v-if="!formName.isCompany" class="form__group">
      <label class="form__label" for="name">Imię i nazwisko</label>
      <input v-model="formName.name" type="text" name="name" required>
    </div>
    <div v-else class="form__group">
      <label class="form__label" for="name">Imię i nazwisko odbiorcy zamówienia</label>
      <input v-model="formName.name" type="text" name="name" required>
    </div>
    <div v-if="formName.isCompany" class="form__group">
      <label class="form__label" for="name">Nazwa firmy</label>
      <input v-model="formName.companyName" type="text" name="companyName" required>
    </div>
    <div v-if="formName.isCompany" class="form__group">
      <label class="form__label" for="name">NIP</label>
      <input v-model="formName.taxId" type="text" name="taxId" required>
    </div>
    <div class="form__two-col">
      <div class="form__group">
        <label class="form__label" for="email">E-mail</label>
        <input v-model="formName.email" type="email" name="email" required>
      </div>
      <div class="form__group">
        <label class="form__label" for="phone">Numer telefonu</label>
        <input v-model="formName.phone" type="tel" name="phone" required>
      </div>
    </div>
    <div class="form__group">
      <label class="form__label" for="street">Adres</label>
      <input v-model="formName.address" type="text" name="street" required>
    </div>
    <div class="form__two-col">
      <div class="form__group">
        <label class="form__label" for="postalCode">Kod pocztowy</label>
        <input v-model="formName.zip" type="text" name="postalCode" required>
      </div>
      <div class="form__group">
        <label class="form__label" for="city">Miasto</label>
        <input v-model="formName.city" type="text" name="city" required>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync, Watch } from 'nuxt-property-decorator'

@Component
export default class AddressForm extends Vue {
  @PropSync('form', { type: Object }) formName!: Object

  @Watch('formName', { deep: true })
  onChange () {
    this.$emit('updated')
  }
}
</script>