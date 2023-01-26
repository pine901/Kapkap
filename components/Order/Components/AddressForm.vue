<template>
  <div v-if="formName">
    <div v-if="!formName.isCompany" class="form__group">
      <ValidationProvider rules="userName|required" v-slot="{errors}">
        <label class="form__label" for="name">Imię i nazwisko</label>
        <input v-model="formName.name" type="text" name="name" id = "username" required autofocus>
        <span class="span-error-message" id = "error_username1" >{{ errors[0] }}</span>
      </ValidationProvider>
    </div>
    <div v-else class="form__group">
      <ValidationProvider rules="required" v-slot="{errors}">
        <label class="form__label" for="name">Imię i nazwisko odbiorcy zamówienia</label>
        <input v-model="formName.name" type="text" name="name" id = "username" >
        <span class="span-error-message" id = "error_username2">{{ errors[0] }}</span>
      </ValidationProvider>
    </div>
    <div v-if="formName.isCompany" class="form__group">
      <ValidationProvider rules="required" v-slot="{errors}">
        <label class="form__label" for="name">Nazwa firmy</label>
        <input v-model="formName.companyName" type="text" name="companyName" >
        <span class="span-error-message" id = "error_companyName">{{ errors[0] }}</span>
      </ValidationProvider>
    </div>
    <div v-if="formName.isCompany" class="form__group">
      <ValidationProvider rules="tax|required" v-slot="{errors}">
        <label class="form__label" for="name">NIP</label>
        <input v-model="formName.taxId" type="text" name="taxId" >
        <span class="span-error-message" id = "error_tax">{{ errors[0] }}</span>
      </ValidationProvider>
    </div>
    <div class="form__two-col">
      <div class="form__group">
        <ValidationProvider rules="email|required" v-slot="{errors}">
        <label class="form__label" for="email">E-mail</label>
        <input v-model="formName.email" type="text" name = "email" >
        <span class="span-error-message" id = "error_email">{{ errors[0] }}</span>
      </ValidationProvider>
      </div>
      <div class="form__group">
        <ValidationProvider rules = "phoneNumber|required" v-slot="{errors}">
        <label class="form__label" for="phone">Numer telefonu</label>
        <input v-model="formName.phone" type="text"  >
        <span class="span-error-message" id = "error_phone">{{ errors[0] }}</span>
      </ValidationProvider>
      </div>
    </div>
    <div class="form__group">
      <ValidationProvider rules="address|required" v-slot="{errors}">
      <label class="form__label" for="street">Adres</label>
      <input v-model="formName.address" type="text" >
      <span class="span-error-message" id = "error_address">{{ errors[0] }}</span>
    </ValidationProvider>
    </div>
    <div class="form__two-col">
      <div class="form__group">
          <ValidationProvider rules="zipCode|required" v-slot="{errors}">
          <label class="form__label" for="postalCode">Kod pocztowy</label>
          <input v-model="formName.zip" type="text" name="postalCode" >
          <span class="span-error-message" id = "error_zip">{{ errors[0] }}</span>
        </ValidationProvider>
        </div>
        <div class="form__group">
            <ValidationProvider rules="city|required" v-slot="{errors}">
            <label class="form__label" for="city">Miasto</label>
            <input v-model="formName.city" type="text" name="city">
            <span class="span-error-message" id = "error_city">{{ errors[0] }}</span>
          </ValidationProvider>
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
  onChange() {
    this.$emit('updated')
  }
}
</script>