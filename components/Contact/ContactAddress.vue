<template>
  <section class="contact">
    <div class="container">
      <div class="contact__wrapper">
        <div class="contact__info">
          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_46_2866)">
              <path
                  d="M31.5 15.5851C31.5 26.0851 18 35.0851 18 35.0851C18 35.0851 4.5 26.0851 4.5 15.5851C4.5 12.0047 5.92232 8.57091 8.45406 6.03917C10.9858 3.50743 14.4196 2.08511 18 2.08511C21.5804 2.08511 25.0142 3.50743 27.5459 6.03917C30.0777 8.57091 31.5 12.0047 31.5 15.5851Z"
                  stroke="#31A745" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
              />
              <path
                  d="M18 20.0851C20.4853 20.0851 22.5 18.0704 22.5 15.5851C22.5 13.0998 20.4853 11.0851 18 11.0851C15.5147 11.0851 13.5 13.0998 13.5 15.5851C13.5 18.0704 15.5147 20.0851 18 20.0851Z"
                  stroke="#31A745" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_46_2866">
                <rect width="36" height="36" fill="white" transform="translate(0 0.585114)"/>
              </clipPath>
            </defs>
          </svg>
          <address>
            <b>{{ companyName }}</b>
            <p>{{ companyStreet }}, {{ companyZip }} {{ companyCity }}</p>
          </address>
        </div>
        <div class="contact__info">
          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M28.5 20.0851C28.5 20.8808 28.1839 21.6438 27.6213 22.2064C27.0587 22.769 26.2956 23.0851 25.5 23.0851H7.5L1.5 29.0851V5.08511C1.5 4.28946 1.81607 3.5264 2.37868 2.96379C2.94129 2.40118 3.70435 2.08511 4.5 2.08511H25.5C26.2956 2.08511 27.0587 2.40118 27.6213 2.96379C28.1839 3.5264 28.5 4.28946 28.5 5.08511V20.0851Z"
                stroke="#31A745" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            />
          </svg>
          <b> <a :href="`mailto:${companyMail}`">{{ companyMail }}</a></b>
        </div>
        <div class="contact__info">
          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_46_2868)">
              <path
                  d="M22.5751 8.08508C24.0402 8.37093 25.3867 9.08747 26.4422 10.143C27.4978 11.1985 28.2143 12.545 28.5001 14.0101M22.5751 2.08508C25.6191 2.42324 28.4575 3.78635 30.6245 5.95059C32.7915 8.11484 34.1582 10.9516 34.5001 13.9951M33.0001 25.9651V30.4651C33.0018 30.8828 32.9163 31.2963 32.7489 31.6791C32.5816 32.0619 32.3361 32.4055 32.0283 32.6879C31.7204 32.9703 31.357 33.1853 30.9613 33.3191C30.5655 33.453 30.1462 33.5027 29.7301 33.4651C25.1144 32.9635 20.6806 31.3863 16.7851 28.8601C13.1609 26.5571 10.0881 23.4843 7.78514 19.8601C5.25011 15.9469 3.67251 11.4916 3.18014 6.85508C3.14266 6.44028 3.19196 6.02222 3.32489 5.62752C3.45783 5.23282 3.6715 4.87012 3.95229 4.56251C4.23309 4.25491 4.57485 4.00915 4.95583 3.84087C5.33681 3.67258 5.74865 3.58548 6.16514 3.58508H10.6651C11.3931 3.57792 12.0988 3.8357 12.6508 4.31038C13.2027 4.78506 13.5633 5.44425 13.6651 6.16508C13.8551 7.60518 14.2073 9.01917 14.7151 10.3801C14.917 10.917 14.9606 11.5005 14.841 12.0614C14.7214 12.6224 14.4434 13.1372 14.0401 13.5451L12.1351 15.4501C14.2705 19.2054 17.3798 22.3147 21.1351 24.4501L23.0401 22.5451C23.448 22.1418 23.9629 21.8639 24.5238 21.7442C25.0848 21.6246 25.6683 21.6683 26.2051 21.8701C27.5661 22.3779 28.98 22.7301 30.4201 22.9201C31.1488 23.0229 31.8142 23.3899 32.2899 23.9513C32.7656 24.5128 33.0184 25.2294 33.0001 25.9651Z"
                  stroke="#31A745" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_46_2868">
                <rect width="36" height="36" fill="white" transform="translate(0 0.585083)"/>
              </clipPath>
            </defs>
          </svg>
          <div>
            <b> <a :href="`tel:${phone}`">{{ phoneFormatted }}</a> </b>
            <img class="contact__qr" src="~/static/images/img/qr.jpg" alt="kod QR">
          </div>
        </div>
      </div>
      <iframe class="contact__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.7811997155623!2d18.950794515725097!3d50.27734387945174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cd085ac5962b%3A0x882062bbb1808c91!2sKapKap%20-%20Personalizowane%20gad%C5%BCety%20i%20prezenty!5e0!3m2!1spl!2spl!4v1657695059677!5m2!1spl!2spl"
              style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ContactAddress extends Vue {
  phone: string = <string>process.env.phone
  phoneFormatted: string = <string>process.env.phoneFormatted
  companyName: string = <string>process.env.companyName
  companyStreet: string = <string>process.env.companyStreet
  companyZip: string = <string>process.env.companyZip
  companyCity: string = <string>process.env.companyCity
  companyMail: string = <string>process.env.companyMail
}
</script>

<style>
a:hover, a:focus {
  text-decoration: none;
  color: #000;
}
</style>
