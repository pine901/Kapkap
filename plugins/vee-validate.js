import { extend } from 'vee-validate'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'
import Vue from 'vue'

extend('email', { ...email, message: 'This email is invalid' })
extend('required', {
  ...required,
  message: 'This field is required',
})

const phoneNumber = {
  message: (field) => `This is not valid phone number`,
  validate: (value) => {
    let phoneno = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/

    if (value.match(phoneno)) {
      return true
    } else {
      return false
    }
  },
}

extend('phoneNumber', phoneNumber)

const zipCode = {
  message: (field) => `This is not valid zip code`,
  validate: (value) => {
    let zipno = /^\d{2}[-]?\d{3}$/g
    if (value.match(zipno)) {
      return true
    } else {
      return false
    }
  },
}

extend('zipCode', zipCode)

const userName = {
  message: (field) => `This is not valid name`,
  validate: (value) => {
    let userno = /^[A-Za-z]+(\s+[A-Za-z]+)+$/
    if (value.match(userno)) {
      return true
    } else {
      return false
    }
  },
}

extend('userName', userName)

const address = {
  message: (field) => `This is not valid address`,
  validate: (value) => {
    let addressno = /(^|\s+)[A-Za-z]+(\s+|$)/g
    if (value.match(addressno)) {
      return true
    } else {
      return false
    }
  },
}

extend('address', address)

const city = {
  message: (field) => `This is not valid city`,
  validate: (value) => {
    let cityno = /(^|\s+)[A-Za-z]+(\s+|$)/g
    if (value.match(cityno)) {
      return true
    } else {
      return false
    }
  },
}

extend('city', city)

const tax = {
  message: (field) => `This is not valid tax`,
  validate: (value) => {
    let taxno = /^[0-9- ]+$/
    if (value.match(taxno)) {
      return true
    } else {
      return false
    }
  },
}

extend('tax', tax)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
