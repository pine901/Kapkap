<template>
  <div>
    <div v-if="!isMobile">
      <section class="seo" v-if="footerSeoText">
        <div class="container seo__columns">
          <p class="seo__text" v-html="footerSeoText"/>
        </div>
      </section>

      <footer class="footer">
        <div class="container footer__wrapper">
          <div class="footer__col">
            <a href="/" class="footer__logo">
              <img src="~/static/images/img/footer_logo.svg" alt="KAP KAP">
            </a>
            <div class="footer__social-media">
              <a href="https://www.facebook.com/kapkap.eu" class="footer__sm" target="_blank">
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.495 0H4.95659C2.21914 0 0 2.37218 0 5.29841V18.7015C0 21.6278 2.21914 24 4.95659 24H17.495C20.2325 24 22.4516 21.6278 22.4516 18.7015V5.29841C22.4516 2.37218 20.2325 0 17.495 0Z"
                    fill="black" fill-opacity="0.35"
                  />
                  <path
                    d="M15.7076 7.84702L17.4902 7.89628V4.42908L14.848 4.33008C13.6557 4.33008 12.5122 4.8364 11.6691 5.73765C10.826 6.63891 10.3523 7.86127 10.3523 9.13583V12.208H7.29315V15.9262H10.3523V24.0002H14.1993V15.9234H16.9342L17.4902 12.2052H14.1993V9.45885C14.1994 9.03132 14.3584 8.62135 14.6413 8.31908C14.9241 8.01682 15.3077 7.84702 15.7076 7.84702Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="" class="footer__sm" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.0981 0H5.12772C2.29576 0 0 2.37228 0 5.29865V18.7014C0 21.6277 2.29576 24 5.12772 24H18.0981C20.93 24 23.2258 21.6277 23.2258 18.7014V5.29865C23.2258 2.37228 20.93 0 18.0981 0Z"
                    fill="black" fill-opacity="0.35"
                  />
                  <path
                    d="M15.354 21.1629H7.86959C6.51083 21.1609 5.2083 20.6021 4.24765 19.6092C3.28699 18.6162 2.74663 17.2701 2.74506 15.8661V8.13223C2.74663 6.72798 3.28719 5.38172 4.24816 4.38881C5.20913 3.3959 6.512 2.83744 7.87095 2.83594H15.3553C16.7143 2.83744 18.0172 3.3959 18.9781 4.38881C19.9391 5.38172 20.4797 6.72798 20.4812 8.13223V15.8661C20.4797 17.2706 19.9389 18.6172 18.9777 19.6102C18.0164 20.6032 16.7132 21.1616 15.354 21.1629ZM7.86959 4.68075C6.98362 4.68175 6.13421 5.04584 5.50769 5.69315C4.88117 6.34046 4.52871 7.21814 4.52762 8.13364V15.8675C4.52859 16.7831 4.88101 17.6608 5.50756 18.3081C6.1341 18.9555 6.98358 19.3195 7.86959 19.3204H15.354C16.24 19.3195 17.0895 18.9555 17.716 18.3081C18.3426 17.6608 18.695 16.7831 18.6959 15.8675V8.13364C18.6949 7.21814 18.3424 6.34046 17.7159 5.69315C17.0894 5.04584 16.24 4.68175 15.354 4.68075H7.86959Z"
                    fill="white"
                  />
                  <path
                    d="M11.6127 16.6382C10.7248 16.6383 9.85692 16.3663 9.11866 15.8567C8.38041 15.347 7.805 14.6226 7.46519 13.775C7.12539 12.9275 7.03646 11.9948 7.20964 11.095C7.38283 10.1952 7.81036 9.36862 8.43816 8.7199C9.06596 8.07117 9.86583 7.62939 10.7366 7.45043C11.6074 7.27147 12.51 7.36337 13.3302 7.7145C14.1505 8.06563 14.8515 8.66022 15.3447 9.42308C15.8379 10.1859 16.1011 11.0828 16.101 12.0002C16.0997 13.2299 15.6264 14.4088 14.785 15.2783C13.9435 16.1477 12.8027 16.6368 11.6127 16.6382ZM11.6127 8.90433C11.0197 8.90433 10.44 9.08606 9.94697 9.42653C9.45393 9.76701 9.06969 10.2509 8.84284 10.8171C8.616 11.3832 8.55673 12.0062 8.67255 12.6072C8.78838 13.2081 9.07408 13.7601 9.49352 14.1933C9.91296 14.6264 10.4473 14.9213 11.0289 15.0406C11.6106 15.1599 12.2134 15.0983 12.7612 14.8636C13.3089 14.6288 13.777 14.2315 14.1062 13.7218C14.4354 13.2121 14.6109 12.613 14.6105 12.0002C14.6097 11.1789 14.2936 10.3915 13.7316 9.81073C13.1695 9.22997 12.4075 8.90332 11.6127 8.90245V8.90433Z"
                    fill="white"
                  />
                  <path
                    d="M16.5846 8.13504C17.1195 7.90978 17.3765 7.27903 17.1585 6.72623C16.9405 6.17342 16.3301 5.90789 15.7951 6.13315C15.2602 6.35841 15.0032 6.98915 15.2212 7.54196C15.4392 8.09477 16.0496 8.3603 16.5846 8.13504Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>

          </div>
          <div class="footer__col">
            <div class="footer__title">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.66667 8.66675H5.95833C4.46333 8.66675 3.25 9.79884 3.25 11.1942V13.7227C3.25 15.118 4.46333 16.2501 5.95833 16.2501H8.66667M21.5767 5.41675H9.83992C9.68627 5.41633 9.53404 5.44617 9.39193 5.50457C9.24981 5.56297 9.12059 5.6488 9.01165 5.75714C8.9027 5.86548 8.81616 5.99422 8.75697 6.13601C8.69778 6.2778 8.66709 6.42986 8.66667 6.5835V15.9164C8.66667 18.4948 10.7683 20.5834 13.3607 20.5834H18.0559C20.6483 20.5834 22.75 18.4937 22.75 15.9164V6.5835C22.7496 6.42986 22.7189 6.2778 22.6597 6.13601C22.6005 5.99422 22.514 5.86548 22.405 5.75714C22.2961 5.6488 22.1669 5.56297 22.0247 5.50457C21.8826 5.44617 21.7304 5.41633 21.5767 5.41675V5.41675Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              PRODUKTY
            </div>
            <ul>
              <li
                v-for="(option, key) in menuOptions"
              >
                <NuxtLink
                  :key="option.key"
                  :to="option.link"
                  @click="/* switchNav */"
                  class="text-decoration-none"
                >
                  {{ option.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <div class="footer__title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
                <path d="M12 16V12" stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8H12.01" stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              INFORMACJE
            </div>
            <ul>
              <li>
                <NuxtLink to="/o-nas" class="text-decoration-none">O nas</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="text-decoration-none"> Blog</NuxtLink>
              </li>
              <li>
                <NuxtLink rel="nofollow" to="/regulamin-infografika" class="text-decoration-none">Regulamin</NuxtLink>
              </li>
              <li>
                <NuxtLink rel="nofollow" to="/polityka-prywatnosci" class="text-decoration-none"> Polityka prywatności
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <div class="footer__title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
                <path d="M12 17H12.01" stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                  d="M9.09 8.99959C9.3251 8.33126 9.78915 7.7677 10.4 7.40873C11.0108 7.04975 11.7289 6.91853 12.4272 7.0383C13.1255 7.15808 13.7588 7.52112 14.2151 8.06312C14.6713 8.60512 14.9211 9.29112 14.92 9.99959C14.92 11.9996 11.92 12.9996 11.92 12.9996"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              POMOC
            </div>
            <ul>
              <li>
                <NuxtLink to="/faq" class="text-decoration-none"> FAQ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/kontakt" class="text-decoration-none"> Kontakt</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <div class="footer__title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 20.2487V12.4227C1.99994 11.8782 2.11104 11.3395 2.3265 10.8394C2.54195 10.3394 2.85722 9.8886 3.253 9.51468L10.626 2.54669C10.9973 2.19561 11.489 2 12 2C12.511 2 13.0027 2.19561 13.374 2.54669L20.747 9.51468C21.1428 9.8886 21.458 10.3394 21.6735 10.8394C21.889 11.3395 22.0001 11.8782 22 12.4227V20.2487C22 20.7791 21.7893 21.2878 21.4142 21.6629C21.0391 22.038 20.5304 22.2487 20 22.2487H4C3.46957 22.2487 2.96086 22.038 2.58579 21.6629C2.21071 21.2878 2 20.7791 2 20.2487Z"
                  stroke="#31A745" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              INFORMACJA O SKLEPIE
            </div>
            <div class="footer__icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              <div class="footer__shop">
                <p> {{ companyName }}</p>
                <p> {{ companyStreet }}</p>
                <p> {{ companyZip }} {{ companyCity }}</p>
              </div>
            </div>
            <div class="footer__icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
                <path d="M12 18H12.01" stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a :href="`tel:${phone}`" class="text-decoration-none">{{ phoneFormatted }}</a>
            </div>
            <div class="footer__icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              <a :href="`mailto:${companyMail}`" class="text-decoration-none">{{ companyMail }}</a>
            </div>
          </div>
        </div>
        <div v-if="!footerText" class="container footer__bottom">
          <span>{{ currentYear }}. Personalizowane kubki z psami, idealne na prezent | KapKap Sp. z o.o.</span>
        </div>
        <div v-if="footerText" class="container footer__bottom">
          {{ currentYear }}. {{ footerText }}
        </div>
      </footer>
    </div>
    <div v-if="isMobile">
      <section class="seo" v-if="footerSeoText && !editMode">
        <div class="container seo__columns">
          <p class="seo__text" v-html="footerSeoText"/>
        </div>
      </section>

      <footer v-if="!editMode" class="footer">
        <div class="container footer__wrapper">
          <div class="footer__col">
            <a href="/" class="footer__logo">
              <img src="~/static/images/img/footer_logo.svg" alt="KAP KAP">
            </a>
            <div class="footer__social-media">
              <a href="https://www.facebook.com/kapkap.eu" class="footer__sm" target="_blank">
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.495 0H4.95659C2.21914 0 0 2.37218 0 5.29841V18.7015C0 21.6278 2.21914 24 4.95659 24H17.495C20.2325 24 22.4516 21.6278 22.4516 18.7015V5.29841C22.4516 2.37218 20.2325 0 17.495 0Z"
                    fill="black" fill-opacity="0.35"
                  />
                  <path
                    d="M15.7076 7.84702L17.4902 7.89628V4.42908L14.848 4.33008C13.6557 4.33008 12.5122 4.8364 11.6691 5.73765C10.826 6.63891 10.3523 7.86127 10.3523 9.13583V12.208H7.29315V15.9262H10.3523V24.0002H14.1993V15.9234H16.9342L17.4902 12.2052H14.1993V9.45885C14.1994 9.03132 14.3584 8.62135 14.6413 8.31908C14.9241 8.01682 15.3077 7.84702 15.7076 7.84702Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="" class="footer__sm" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.0981 0H5.12772C2.29576 0 0 2.37228 0 5.29865V18.7014C0 21.6277 2.29576 24 5.12772 24H18.0981C20.93 24 23.2258 21.6277 23.2258 18.7014V5.29865C23.2258 2.37228 20.93 0 18.0981 0Z"
                    fill="black" fill-opacity="0.35"
                  />
                  <path
                    d="M15.354 21.1629H7.86959C6.51083 21.1609 5.2083 20.6021 4.24765 19.6092C3.28699 18.6162 2.74663 17.2701 2.74506 15.8661V8.13223C2.74663 6.72798 3.28719 5.38172 4.24816 4.38881C5.20913 3.3959 6.512 2.83744 7.87095 2.83594H15.3553C16.7143 2.83744 18.0172 3.3959 18.9781 4.38881C19.9391 5.38172 20.4797 6.72798 20.4812 8.13223V15.8661C20.4797 17.2706 19.9389 18.6172 18.9777 19.6102C18.0164 20.6032 16.7132 21.1616 15.354 21.1629ZM7.86959 4.68075C6.98362 4.68175 6.13421 5.04584 5.50769 5.69315C4.88117 6.34046 4.52871 7.21814 4.52762 8.13364V15.8675C4.52859 16.7831 4.88101 17.6608 5.50756 18.3081C6.1341 18.9555 6.98358 19.3195 7.86959 19.3204H15.354C16.24 19.3195 17.0895 18.9555 17.716 18.3081C18.3426 17.6608 18.695 16.7831 18.6959 15.8675V8.13364C18.6949 7.21814 18.3424 6.34046 17.7159 5.69315C17.0894 5.04584 16.24 4.68175 15.354 4.68075H7.86959Z"
                    fill="white"
                  />
                  <path
                    d="M11.6127 16.6382C10.7248 16.6383 9.85692 16.3663 9.11866 15.8567C8.38041 15.347 7.805 14.6226 7.46519 13.775C7.12539 12.9275 7.03646 11.9948 7.20964 11.095C7.38283 10.1952 7.81036 9.36862 8.43816 8.7199C9.06596 8.07117 9.86583 7.62939 10.7366 7.45043C11.6074 7.27147 12.51 7.36337 13.3302 7.7145C14.1505 8.06563 14.8515 8.66022 15.3447 9.42308C15.8379 10.1859 16.1011 11.0828 16.101 12.0002C16.0997 13.2299 15.6264 14.4088 14.785 15.2783C13.9435 16.1477 12.8027 16.6368 11.6127 16.6382ZM11.6127 8.90433C11.0197 8.90433 10.44 9.08606 9.94697 9.42653C9.45393 9.76701 9.06969 10.2509 8.84284 10.8171C8.616 11.3832 8.55673 12.0062 8.67255 12.6072C8.78838 13.2081 9.07408 13.7601 9.49352 14.1933C9.91296 14.6264 10.4473 14.9213 11.0289 15.0406C11.6106 15.1599 12.2134 15.0983 12.7612 14.8636C13.3089 14.6288 13.777 14.2315 14.1062 13.7218C14.4354 13.2121 14.6109 12.613 14.6105 12.0002C14.6097 11.1789 14.2936 10.3915 13.7316 9.81073C13.1695 9.22997 12.4075 8.90332 11.6127 8.90245V8.90433Z"
                    fill="white"
                  />
                  <path
                    d="M16.5846 8.13504C17.1195 7.90978 17.3765 7.27903 17.1585 6.72623C16.9405 6.17342 16.3301 5.90789 15.7951 6.13315C15.2602 6.35841 15.0032 6.98915 15.2212 7.54196C15.4392 8.09477 16.0496 8.3603 16.5846 8.13504Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>

          </div>
          <div class="footer__col">
            <div class="footer__title">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.66667 8.66675H5.95833C4.46333 8.66675 3.25 9.79884 3.25 11.1942V13.7227C3.25 15.118 4.46333 16.2501 5.95833 16.2501H8.66667M21.5767 5.41675H9.83992C9.68627 5.41633 9.53404 5.44617 9.39193 5.50457C9.24981 5.56297 9.12059 5.6488 9.01165 5.75714C8.9027 5.86548 8.81616 5.99422 8.75697 6.13601C8.69778 6.2778 8.66709 6.42986 8.66667 6.5835V15.9164C8.66667 18.4948 10.7683 20.5834 13.3607 20.5834H18.0559C20.6483 20.5834 22.75 18.4937 22.75 15.9164V6.5835C22.7496 6.42986 22.7189 6.2778 22.6597 6.13601C22.6005 5.99422 22.514 5.86548 22.405 5.75714C22.2961 5.6488 22.1669 5.56297 22.0247 5.50457C21.8826 5.44617 21.7304 5.41633 21.5767 5.41675V5.41675Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              PRODUKTY
            </div>
            <ul>
              <li
                v-for="(option, key) in menuOptions"
              >
                <NuxtLink
                  :key="option.key"
                  :to="option.link"
                  @click="/* switchNav */"
                  class="text-decoration-none"
                >
                  {{ option.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <div class="footer__title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
                <path d="M12 16V12" stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8H12.01" stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              INFORMACJE
            </div>
            <ul>
              <li>
                <NuxtLink to="/o-nas" class="text-decoration-none">O nas</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="text-decoration-none"> Blog</NuxtLink>
              </li>
              <li>
                <NuxtLink rel="nofollow" to="/regulamin-infografika" class="text-decoration-none">Regulamin</NuxtLink>
              </li>
              <li>
                <NuxtLink rel="nofollow" to="/polityka-prywatnosci" class="text-decoration-none"> Polityka prywatności
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <div class="footer__title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
                <path d="M12 17H12.01" stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                  d="M9.09 8.99959C9.3251 8.33126 9.78915 7.7677 10.4 7.40873C11.0108 7.04975 11.7289 6.91853 12.4272 7.0383C13.1255 7.15808 13.7588 7.52112 14.2151 8.06312C14.6713 8.60512 14.9211 9.29112 14.92 9.99959C14.92 11.9996 11.92 12.9996 11.92 12.9996"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              POMOC
            </div>
            <ul>
              <li>
                <NuxtLink to="/faq" class="text-decoration-none"> FAQ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/kontakt" class="text-decoration-none"> Kontakt</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer__col">
            <div class="footer__title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 20.2487V12.4227C1.99994 11.8782 2.11104 11.3395 2.3265 10.8394C2.54195 10.3394 2.85722 9.8886 3.253 9.51468L10.626 2.54669C10.9973 2.19561 11.489 2 12 2C12.511 2 13.0027 2.19561 13.374 2.54669L20.747 9.51468C21.1428 9.8886 21.458 10.3394 21.6735 10.8394C21.889 11.3395 22.0001 11.8782 22 12.4227V20.2487C22 20.7791 21.7893 21.2878 21.4142 21.6629C21.0391 22.038 20.5304 22.2487 20 22.2487H4C3.46957 22.2487 2.96086 22.038 2.58579 21.6629C2.21071 21.2878 2 20.7791 2 20.2487Z"
                  stroke="#31A745" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              INFORMACJA O SKLEPIE
            </div>
            <div class="footer__icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              <div class="footer__shop">
                <p> {{ companyName }}</p>
                <p> {{ companyStreet }}</p>
                <p> {{ companyZip }} {{ companyCity }}</p>
              </div>
            </div>
            <div class="footer__icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
                <path d="M12 18H12.01" stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a :href="`tel:${phone}`" class="text-decoration-none">{{ phoneFormatted }}</a>
            </div>
            <div class="footer__icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#31A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg>
              <a :href="`mailto:${companyMail}`" class="text-decoration-none">{{ companyMail }}</a>
            </div>
          </div>
        </div>
        <div v-if="!footerText" class="container footer__bottom">
          <span>{{ currentYear }}. Personalizowane kubki z psami, idealne na prezent | KapKap Sp. z o.o.</span>
        </div>
        <div v-if="footerText" class="container footer__bottom">
          <span>{{ currentYear }}. {{ footerText }}</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Getter } from 'nuxt-property-decorator'

import svgFreeShipping from '~/components/HomePage/icons/svgFreeShipping.vue'
import svgOffer from '~/components/HomePage/icons/svgOffer.vue'
import svgService from '~/components/HomePage/icons/svgService.vue'

import LogoImage from '~/components/Common/LogoImage.vue'

type menuItem = {
  link: string,
  title: string
}

@Component({
  components: {
    LogoImage,
    svgFreeShipping,
    svgOffer,
    svgService
  }
})
export default class Footer extends Vue {
  @Getter('app/footerSeoText') footerSeoText!: string
  @Getter('app/footerText') footerText!: string
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('cup/editMode') editMode!: boolean

  phone: string = <string>process.env.phone
  phoneFormatted: string = <string>process.env.phoneFormatted
  companyName: string = <string>process.env.companyName
  companyStreet: string = <string>process.env.companyStreet
  companyZip: string = <string>process.env.companyZip
  companyCity: string = <string>process.env.companyCity
  companyMail: string = <string>process.env.companyMail
  email: string = ''

  menuOptions: menuItem[] = [
    {
      link: '/kubki/z-psami',
      title: 'Kubki z psami'
    },
    {
      link: '/kubki/z-kotami',
      title: 'Kubki z kotami'
    },
    {
      link: '/kubki/dla-par',
      title: 'Kubki dla par'
    },
    {
      link: '/kubki/ze-znajomymi',
      title: 'Kubki ze znajomymi'
    },
    {
      link: '/kubki/na-swieta',
      title: 'Kubki na święta'
    },
    {
      link: '/kubki/caly-obwod-kubka',
      title: 'Kubki na cały obwód kubka'
    }
  ]

  get isHomePage () {
    return this.$route.path === '/'
  }

  get currentYear () {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    if (currentYear === 2020) {
      return currentYear
    }
    return `2020-${currentYear}`
  }

  async addEmailToNewsletter () {
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
  }

  async acceptNewsletterRegulations (hash: any) {
    try {
      const res = await this.$axios.post(`/v1/newsletter/${hash}`)
    } catch (err) {
      this.$root.$emit('popup', {
        title: 'Przepraszamy',
        message: 'Napotkaliśmy problem podczas aktywacji newslettera. Spróbuj odświeżyć stronę.'
      })
    }
  }
}
</script>
