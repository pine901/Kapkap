<template>
  <div
    :class="isMobile ? 'person-desktop' : 'person-mobile'"
  >
    <div class="person-desktop__wrapper">
      <div v-if="!isMobile" class="person__top">
        <h3 class="person-desktop__title">
          <span>{{ title }}</span>
        </h3>
        <input
          ref="name"
          v-model="tempObject.name"
          class="person-input w100"
          placeholder="Imię"
          type="text"
        >
      </div>

      <div v-if="!isMobile" class="person">
        <div class="person__container">
          <p v-if="human.bodies" class="person__title">
            Sylwetka
          </p>
          <div v-if="human.bodies" class="person__wrapper">
            <div
              v-for="(item, index) in human.bodies"
              :key="index"
              class="person__bodybox"
              :class="[item.bodyId === tempObject.bodyId ? 'person__bodybox--active' : '']"
              @click="setFigure(item)"
            >
              <img
                alt="product body icon"
                :src="item.bodyImageUrl"
                class="person__img"
              >
            </div>
          </div>
          <p v-if="human.hairstyles" class="person__title">
            Kolor włosów
          </p>
          <div v-if="human.hairstyles" class="person__wrapper">
            <div
              v-for="(item, index) in human.hairstyles"
              :key="index"
              class="hairstyle__box"
              :class="index === tempObject.hairColor ? 'hairstyle__box--active' : ''"
              @click="setHairColor(index)"
            >
              <div class="colorItem" :class="index" />
            </div>
          </div>
          <p v-if="human.hairstyles && human.hairstyles[tempObject.hairColor]" class="person__title">
            Rodzaj włosów
          </p>
          <template
            v-if="human.hairstyles && human.hairstyles[tempObject.hairColor]"
          >
            <div
              v-for="(item, index) in human.hairstyles[tempObject.hairColor]"
              :key="index"
              class="person__wrapper"
            >
              <div
                v-for="(item1, index1) in item"
                :key="index1"
                class="person__box"
                :class="item1.hairstyleId === tempObject.hairstyleId ? 'person__box--active' : ''"
                @click="setHairStyle(item1.hairstyleId)"
              >
                <img
                  alt="product hairstyle icon"
                  :src="item1.hairstyleImageUrl"
                >
              </div>
            </div>
          </template>
        </div>
      </div>

      <div v-if="!isMobile" class="person__btns">
        <div class="person-btns-wrapper">
          <div class="btn btn--transparent" @click="cancelEdit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            ANULUJ
          </div>
          <div class="btn btn--green" @click="insertNewHuman">
            ZAPISZ
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 6L9 17L4 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div v-if="isMobile">
        <div class="d-flex" style="padding: 0 30px;">
          <input
            v-model="tempObject.name"
            type="text"
            placeholder="Wpisz imię"
            class="person-input"
          >
        </div>
        <div class="person person--mobile">
          <div v-if="showBody" class="person__container">
            <div v-if="human.bodies" class="person__wrapper">
              <div
                v-for="(item, index) in human.bodies"
                :key="index"
                class="person__bodybox"
                :class="[item.bodyId === tempObject.bodyId ? 'person__bodybox--active' : '']"
                @click="setFigure(item)"
              >
                <img
                  alt="product body icon"
                  :src="item.bodyImageUrl"
                  height="158px"
                >
              </div>
            </div>
          </div>
          <div v-if="showHairColor" class="person person__container">
            <div v-if="human.hairstyles" class="person__wrapper">
              <div
                v-for="(item, index) in human.hairstyles"
                :key="index"
                class="person__box"
                :class="index === tempObject.hairColor ? 'person__box--active' : ''"
                @click="setHairColor(index)"
              >
                <div class="colorItem" :class="index" />
              </div>
            </div>
          </div>
          <div
            v-if="showHairstyle && human.hairstyles && human.hairstyles[tempObject.hairColor]"
            class="person person__container"
          >
            <div
              v-for="(item, index) in human.hairstyles[tempObject.hairColor]"
              :key="index"
              class="person__wrapper"
            >
              <div
                v-for="(item1, index1) in item"
                :key="index1"
                class="person__box"
                :class="item1.hairstyleId === tempObject.hairstyleId ? 'person__box--active' : ''"
                @click="setHairStyle(item1.hairstyleId)"
              >
                <img
                  alt="product hairstyle icon"
                  :src="item1.hairstyleImageUrl"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="person__tabs">
          <button class="person__tab" :class="showBody ? 'person__tab--active' : ''" @click="switchToBody">
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_575_6895" fill="#3C3C3C">
                <path
                  d="M22.1013 22.7081C21.6765 18.3559 18.5901 14.7653 14.457 13.5175C16.7498 12.3694 18.3198 10.0318 18.3198 7.33472C18.3198 3.50272 15.1512 0.396484 11.2421 0.396484C7.33311 0.396484 4.16443 3.50272 4.16443 7.33472C4.16443 10.0318 5.73443 12.3698 8.02732 13.5175C3.89417 14.7653 0.808363 18.3559 0.383011 22.7081C0.372416 22.8171 0.385163 22.927 0.420434 23.0309C0.455706 23.1347 0.512722 23.2302 0.587829 23.3112C0.662937 23.3921 0.754478 23.4568 0.856582 23.5011C0.958686 23.5454 1.0691 23.5683 1.18075 23.5682C1.37994 23.5684 1.57204 23.4958 1.71952 23.3645C1.867 23.2332 1.95926 23.0528 1.97828 22.8584C2.06711 21.9392 2.2992 21.0388 2.66647 20.1886C3.37989 18.5374 4.57356 17.1288 6.09853 16.1385C7.6235 15.1482 9.41221 14.6201 11.2414 14.6201C13.0707 14.6201 14.8594 15.1482 16.3843 16.1385C17.9093 17.1288 19.103 18.5374 19.8164 20.1886C20.1837 21.0388 20.4157 21.9392 20.5044 22.8584C20.5247 23.0658 20.6283 23.2568 20.7922 23.3894C20.8734 23.455 20.967 23.5043 21.0676 23.5345C21.1683 23.5647 21.274 23.5752 21.3788 23.5653C21.4835 23.5554 21.5853 23.5254 21.6782 23.477C21.7711 23.4286 21.8534 23.3627 21.9204 23.2831C21.9874 23.2035 22.0377 23.1118 22.0685 23.0131C22.0993 22.9145 22.1099 22.8108 22.0999 22.7081H22.1013ZM11.2427 12.7014C9.89113 12.6993 8.5885 12.2052 7.58751 11.3149C6.58651 10.4245 5.95851 9.20151 5.82529 7.88299C5.69208 6.56447 6.06315 5.24444 6.86655 4.17894C7.66994 3.11343 8.84838 2.3784 10.1733 2.11641C11.4982 1.85442 12.8752 2.08415 14.0371 2.76104C15.199 3.43792 16.0631 4.51372 16.4617 5.77976C16.8603 7.0458 16.765 8.41185 16.1944 9.61294C15.6238 10.814 14.6184 11.7646 13.3733 12.2801C12.6993 12.5597 11.9746 12.703 11.2427 12.7014Z"
                />
              </mask>
              <path
                d="M22.1013 22.7081C21.6765 18.3559 18.5901 14.7653 14.457 13.5175C16.7498 12.3694 18.3198 10.0318 18.3198 7.33472C18.3198 3.50272 15.1512 0.396484 11.2421 0.396484C7.33311 0.396484 4.16443 3.50272 4.16443 7.33472C4.16443 10.0318 5.73443 12.3698 8.02732 13.5175C3.89417 14.7653 0.808363 18.3559 0.383011 22.7081C0.372416 22.8171 0.385163 22.927 0.420434 23.0309C0.455706 23.1347 0.512722 23.2302 0.587829 23.3112C0.662937 23.3921 0.754478 23.4568 0.856582 23.5011C0.958686 23.5454 1.0691 23.5683 1.18075 23.5682C1.37994 23.5684 1.57204 23.4958 1.71952 23.3645C1.867 23.2332 1.95926 23.0528 1.97828 22.8584C2.06711 21.9392 2.2992 21.0388 2.66647 20.1886C3.37989 18.5374 4.57356 17.1288 6.09853 16.1385C7.6235 15.1482 9.41221 14.6201 11.2414 14.6201C13.0707 14.6201 14.8594 15.1482 16.3843 16.1385C17.9093 17.1288 19.103 18.5374 19.8164 20.1886C20.1837 21.0388 20.4157 21.9392 20.5044 22.8584C20.5247 23.0658 20.6283 23.2568 20.7922 23.3894C20.8734 23.455 20.967 23.5043 21.0676 23.5345C21.1683 23.5647 21.274 23.5752 21.3788 23.5653C21.4835 23.5554 21.5853 23.5254 21.6782 23.477C21.7711 23.4286 21.8534 23.3627 21.9204 23.2831C21.9874 23.2035 22.0377 23.1118 22.0685 23.0131C22.0993 22.9145 22.1099 22.8108 22.0999 22.7081H22.1013ZM11.2427 12.7014C9.89113 12.6993 8.5885 12.2052 7.58751 11.3149C6.58651 10.4245 5.95851 9.20151 5.82529 7.88299C5.69208 6.56447 6.06315 5.24444 6.86655 4.17894C7.66994 3.11343 8.84838 2.3784 10.1733 2.11641C11.4982 1.85442 12.8752 2.08415 14.0371 2.76104C15.199 3.43792 16.0631 4.51372 16.4617 5.77976C16.8603 7.0458 16.765 8.41185 16.1944 9.61294C15.6238 10.814 14.6184 11.7646 13.3733 12.2801C12.6993 12.5597 11.9746 12.703 11.2427 12.7014Z"
                fill="#3C3C3C"
              />
              <path
                d="M22.1013 22.7081V38.6392H39.6628L37.957 21.1607L22.1013 22.7081ZM14.457 13.5175L7.32443 -0.727683L-28.476 17.1975L9.85274 28.7687L14.457 13.5175ZM8.02732 13.5175L12.6315 28.7687L50.9679 17.1952L15.1579 -0.728661L8.02732 13.5175ZM0.383011 22.7081L-15.4725 21.1586L-15.4732 21.1663L0.383011 22.7081ZM1.18075 23.5682L1.1934 7.63721H1.18066L1.18075 23.5682ZM1.97828 22.8584L17.8336 24.4099L17.8345 24.4003L17.8355 24.3908L1.97828 22.8584ZM2.66647 20.1886L-11.9579 13.8699L-11.9584 13.8711L2.66647 20.1886ZM19.8164 20.1886L34.441 13.8705L34.4408 13.8699L19.8164 20.1886ZM20.5044 22.8584L4.64694 24.3879L4.64812 24.4001L4.64932 24.4123L20.5044 22.8584ZM20.7922 23.3894L10.7766 35.7783H10.7766L20.7922 23.3894ZM22.0999 22.7081V6.77711H4.53113L6.24479 24.2621L22.0999 22.7081ZM11.2427 12.7014L11.2768 -3.22956L11.2678 -3.22957L11.2427 12.7014ZM13.3733 12.2801L7.27816 -2.43879L7.26978 -2.43531L13.3733 12.2801ZM37.957 21.1607C36.8781 10.1061 29.1048 1.29839 19.0612 -1.73371L9.85274 28.7687C8.0754 28.2321 6.47492 26.6057 6.24556 24.2556L37.957 21.1607ZM21.5895 27.7627C28.9514 24.0766 34.2509 16.4167 34.2509 7.33472H2.38881C2.38881 3.64702 4.5483 0.662319 7.32443 -0.727683L21.5895 27.7627ZM34.2509 7.33472C34.2509 -5.59317 23.6492 -15.5346 11.2421 -15.5346V16.3275C6.65309 16.3275 2.38881 12.5986 2.38881 7.33472H34.2509ZM11.2421 -15.5346C-1.16496 -15.5346 -11.7666 -5.59317 -11.7666 7.33472H20.0955C20.0955 12.5986 15.8312 16.3275 11.2421 16.3275V-15.5346ZM-11.7666 7.33472C-11.7666 16.4153 -6.46825 24.0773 0.89674 27.7636L15.1579 -0.728661C17.9371 0.662409 20.0955 3.6484 20.0955 7.33472H-11.7666ZM3.42309 -1.73371C-6.62217 1.29888 -14.3924 10.1072 -15.4725 21.1586L16.2385 24.2577C16.0091 26.6046 14.4105 28.2316 12.6315 28.7687L3.42309 -1.73371ZM-15.4732 21.1663C-15.7032 23.5309 -15.4256 25.9129 -14.6642 28.1546L15.505 17.9072C16.1959 19.9411 16.448 22.1033 16.2393 24.25L-15.4732 21.1663ZM-14.6642 28.1546C-13.9031 30.3954 -12.6802 32.433 -11.0926 34.1447L12.2683 12.4776C13.7056 14.0273 14.8145 15.874 15.505 17.9072L-14.6642 28.1546ZM-11.0926 34.1447C-9.50585 35.8555 -7.59082 37.2025 -5.48111 38.1172L7.19428 8.88497C9.09978 9.71121 10.8317 10.9288 12.2683 12.4776L-11.0926 34.1447ZM-5.48111 38.1172C-3.37225 39.0317 -1.10414 39.4993 1.18084 39.4993L1.18066 7.63721C3.24234 7.6372 5.28963 8.05909 7.19428 8.88497L-5.48111 38.1172ZM1.1681 39.4993C5.23838 39.5025 9.2146 38.0208 12.3111 35.2647L-8.87209 11.4643C-6.07051 8.97076 -2.47849 7.6343 1.1934 7.63722L1.1681 39.4993ZM12.3111 35.2647C15.4163 32.501 17.4195 28.6411 17.8336 24.4099L-13.877 21.3069C-13.501 17.4644 -11.6823 13.9654 -8.87209 11.4643L12.3111 35.2647ZM17.8355 24.3908C17.7644 25.1259 17.5793 25.8396 17.2913 26.5062L-11.9584 13.8711C-12.9809 16.2381 -13.6302 18.7526 -13.8789 21.3261L17.8355 24.3908ZM17.2908 26.5073C16.7446 27.7717 15.8528 28.7996 14.7751 29.4995L-2.57801 2.77753C-6.70568 5.45801 -9.98479 9.30324 -11.9579 13.8699L17.2908 26.5073ZM14.7751 29.4995C13.7006 30.1972 12.4723 30.5511 11.2414 30.5511V-1.31095C6.35208 -1.31095 1.54636 0.099185 -2.57801 2.77753L14.7751 29.4995ZM11.2414 30.5511C10.0105 30.5511 8.78224 30.1972 7.7078 29.4995L25.0609 2.77753C20.9365 0.0991822 16.1308 -1.31095 11.2414 -1.31095V30.5511ZM7.7078 29.4995C6.63006 28.7996 5.73831 27.7716 5.19203 26.5073L34.4408 13.8699C32.4677 9.30325 29.1886 5.45802 25.0609 2.77753L7.7078 29.4995ZM5.1918 26.5068C4.90337 25.8391 4.71796 25.1242 4.64694 24.3879L36.3618 21.3289C36.1135 18.7542 35.464 16.2385 34.441 13.8705L5.1918 26.5068ZM4.64932 24.4123C5.0915 28.9241 7.33741 32.9979 10.7766 35.7783L30.8079 11.0005C33.9191 13.5157 35.9579 17.2076 36.3595 21.3045L4.64932 24.4123ZM10.7766 35.7783C12.4773 37.1532 14.4207 38.1731 16.4909 38.794L25.6444 8.27507C27.5134 8.83562 29.2696 9.75684 30.8079 11.0005L10.7766 35.7783ZM16.4909 38.794C18.5606 39.4148 20.7278 39.6281 22.8726 39.4261L19.8849 7.70445C21.8202 7.52218 23.776 7.71465 25.6444 8.27507L16.4909 38.794ZM22.8726 39.4261C25.0172 39.2242 27.1123 38.6093 29.0388 37.6057L14.3176 9.34833C16.0582 8.44153 17.9498 7.88671 19.8849 7.70445L22.8726 39.4261ZM29.0388 37.6057C30.9656 36.6019 32.6929 35.2249 34.1113 33.5389L9.72955 13.0273C11.014 11.5005 12.5767 10.2553 14.3176 9.34833L29.0388 37.6057ZM34.1113 33.5389C35.5304 31.852 36.6111 29.89 37.276 27.7596L6.86093 18.2667C7.46428 16.3336 8.44432 14.5551 9.72955 13.0273L34.1113 33.5389ZM37.276 27.7596C37.9411 25.6285 38.1733 23.3826 37.9549 21.1542L6.24479 24.2621C6.04652 22.2391 6.25739 20.2004 6.86093 18.2667L37.276 27.7596ZM22.0999 38.6392H22.1013V6.77711H22.0999V38.6392ZM11.2678 -3.22957C13.7725 -3.22564 16.2373 -2.31245 18.1751 -0.588934L-3.0001 23.2187C0.939658 26.7228 6.00973 28.6243 11.2177 28.6325L11.2678 -3.22957ZM18.1751 -0.588934C20.1213 1.1421 21.4027 3.58019 21.6756 6.28159L-10.0251 9.4844C-9.48569 14.8228 -6.94832 19.707 -3.0001 23.2187L18.1751 -0.588934ZM21.6756 6.28159C21.9488 8.98567 21.1804 11.6567 19.5869 13.7701L-5.85381 -5.41223C-9.05407 -1.16786 -10.5647 4.14327 -10.0251 9.4844L21.6756 6.28159ZM19.5869 13.7701C18.0005 15.8741 15.7305 17.257 13.2637 17.7448L7.08296 -13.512C1.96626 -12.5002 -2.66058 -9.64727 -5.85381 -5.41223L19.5869 13.7701ZM13.2637 17.7448C10.8004 18.2319 8.22485 17.8123 6.01789 16.5266L22.0563 -11.0045C17.5255 -13.644 12.196 -14.5231 7.08296 -13.512L13.2637 17.7448ZM6.01789 16.5266C3.80293 15.2362 2.07553 13.1352 1.26603 10.5641L31.6574 0.995466C30.0507 -4.10772 26.5951 -8.36039 22.0563 -11.0045L6.01789 16.5266ZM1.26603 10.5641C0.454252 7.98573 0.652996 5.20078 1.80486 2.77635L30.5839 16.4495C32.8771 11.6229 33.2664 6.10588 31.6574 0.995466L1.26603 10.5641ZM1.80486 2.77635C2.95244 0.360934 4.93183 -1.46717 7.27816 -2.43879L19.4685 26.9991C24.3049 24.9963 28.2951 21.2671 30.5839 16.4495L1.80486 2.77635ZM7.26978 -2.43531C8.54711 -2.96511 9.90903 -3.23248 11.2768 -3.22956L11.2087 28.6324C14.0402 28.6385 16.8515 28.0845 19.4768 26.9956L7.26978 -2.43531Z"
                fill="#3C3C3C"
                mask="url(#path-1-inside-1_575_6895)"
              />
            </svg>
            <p>sylwetka</p>
          </button>
          <button class="person__tab" :class="showHairColor ? 'person__tab--active' : ''" @click="switchToHairColor">
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8" clip-path="url(#clip0_575_6896)">
                <path
                  d="M3.87842 13.983L15.6339 2.22754L24.8476 11.4413C25.3053 11.8995 25.5624 12.5207 25.5624 13.1684C25.5624 13.816 25.3053 14.4372 24.8476 14.8954L18.3304 21.4127C17.8722 21.8703 17.251 22.1274 16.6033 22.1274C15.9557 22.1274 15.3345 21.8703 14.8763 21.4127L5.66251 12.1989"
                  stroke="#3C3C3C"
                  stroke-width="1.30345"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1594 9.09508L21.4913 1.76318"
                  stroke="#3C3C3C"
                  stroke-width="1.30345"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.38362 17.2412C1.65453 21.3145 1.125 21.7055 1.125 23.0171C1.125 23.8814 1.46832 24.7102 2.07943 25.3213C2.69054 25.9324 3.51938 26.2757 4.38362 26.2757C5.24786 26.2757 6.07671 25.9324 6.68782 25.3213C7.29893 24.7102 7.64224 23.8814 7.64224 23.0171C7.64224 21.7381 7.21047 21.4285 4.38362 17.2412Z"
                  stroke="#3C3C3C"
                  stroke-width="1.30345"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_575_6896">
                  <rect
                    width="26.069"
                    height="26.069"
                    fill="white"
                    transform="translate(0.310303 0.948242)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>kolor włosów</p>
          </button>
          <button class="person__tab" :class="showHairstyle ? 'person__tab--active' : ''" @click="switchToHairstyle">
            <svg
              width="25"
              height="30"
              viewBox="0 0 25 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6" clip-path="url(#clip0_575_6900)">
                <path
                  d="M1.29163 29.4708H0.256592C0.256592 26.9505 2.632 25.8896 4.91426 24.8649C7.19652 23.8402 9.52017 22.7948 9.52017 20.3677H10.5552C10.5552 23.4728 7.78131 24.7148 5.33345 25.8068C3.17022 26.7797 1.29163 27.6181 1.29163 29.4708Z"
                  fill="black"
                />
                <path
                  d="M24.3729 29.4708H23.3379C23.3379 27.6181 21.4593 26.7797 19.2857 25.8068C16.8379 24.7148 14.064 23.478 14.064 20.3677H15.099C15.099 22.8052 17.3399 23.804 19.7049 24.8649C22.07 25.9258 24.3729 26.9505 24.3729 29.4708Z"
                  fill="black"
                />
                <path
                  d="M17.9349 28.746H6.6944C6.19114 28.7458 5.69887 28.5988 5.27789 28.323C4.8569 28.0472 4.52546 27.6547 4.32416 27.1935L3.80664 25.9411L4.7537 25.5322L5.27122 26.7846C5.39172 27.0607 5.58994 27.2958 5.84172 27.4612C6.09351 27.6266 6.38797 27.7152 6.68922 27.7162H17.9297C18.231 27.7152 18.5254 27.6266 18.7772 27.4612C19.029 27.2958 19.2272 27.0607 19.3477 26.7846L19.8652 25.5322L20.8123 25.9411L20.2948 27.1935C20.0942 27.6531 19.7644 28.0445 19.3454 28.3202C18.9264 28.5958 18.4364 28.7437 17.9349 28.746Z"
                  fill="black"
                />
                <path
                  d="M6.4203 22.2563C6.06994 22.2174 5.74324 22.0605 5.49394 21.8113C3.85858 20.4916 0.556811 15.8132 1.41589 10.5449C2.21805 5.60774 6.73598 0.417031 12.1803 0.505009C15.0836 0.561936 17.8212 2.10932 19.8913 4.86769C22.2926 8.06078 23.2552 12.3044 22.3495 15.6735C21.5215 18.7786 19.3013 20.7814 17.5883 21.9458L17.0035 21.0867C18.5561 20.0258 20.6262 18.1783 21.3507 15.394C22.1787 12.32 21.2783 8.42822 19.0633 5.47836C17.1899 2.97875 14.7368 1.57627 12.1648 1.5297C7.26903 1.44172 3.17028 6.18736 2.4354 10.7001C1.67465 15.3837 4.46925 19.4565 5.86655 20.7762L5.80445 20.564C5.35938 19.0115 4.52618 16.0771 5.80445 13.5413C6.72563 11.6834 8.10223 10.5604 9.3184 9.57711C10.7985 8.37647 11.9681 7.42941 12.1078 5.52494L13.1429 5.60257C12.9669 7.9521 11.5127 9.13204 9.97047 10.3793C8.78018 11.3418 7.55366 12.3407 6.73081 14.0019C5.65954 16.1755 6.38924 18.7424 6.82914 20.2794C7.11377 21.3144 7.30525 21.9613 6.69458 22.1994C6.60825 22.2377 6.51474 22.2571 6.4203 22.2563Z"
                  fill="black"
                />
                <path
                  d="M12.3146 21.3972C9.10084 21.3972 6.25967 18.6544 5.40576 14.7212L6.4408 14.5039C7.16533 17.9557 9.59249 20.3622 12.3146 20.3622C15.1351 20.3622 17.6503 17.7384 18.2868 14.1157L18.3748 13.5982L18.9751 13.7017C19.4357 13.7017 19.8445 13.0393 19.8445 12.2837C19.8445 11.5281 19.4357 10.8709 18.9647 10.8709L18.7836 10.9019H18.6801C17.6494 10.6759 16.6978 10.1787 15.9235 9.46179C15.1493 8.74486 14.5805 7.8342 14.276 6.82389L15.2645 6.51855C15.5108 7.33802 15.9678 8.07851 16.5899 8.66607C17.212 9.25363 17.9773 9.66769 18.8095 9.8669H18.9647C20.036 9.8669 20.8796 10.9433 20.8796 12.3148C20.8796 13.5775 20.1706 14.5918 19.2235 14.7471C18.3696 18.6751 15.575 21.3972 12.3146 21.3972Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_575_6900">
                  <rect
                    width="24.1112"
                    height="28.9655"
                    fill="white"
                    transform="translate(0.256592 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>włosy</p>
          </button>
        </div>
      </div>
    </div>

    <div class="generator__footer save">
      <div class="person-btns-wrapper">
        <div class="btn btn--transparent" @click="cancelEdit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 18L9 12L15 6"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          ANULUJ
        </div>
        <div class="btn btn--green" @click="insertNewHuman">
          ZAPISZ
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 6L9 17L4 12"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Prop, Vue } from 'nuxt-property-decorator'
import { Body, Hairstyle, HairstyleColors, Hairstyles, Human, Men, Women, WorkingItem } from '~/store/cup/state'
import { EventBus } from '~/services/eventBus'

@Component
export default class EditHuman extends Vue {
  @Prop() type!: string
  @Prop() editedItem!: WorkingItem

  @Getter('app/isMobile') isMobile!: boolean
  @Getter('cup/women') women!: Women
  @Getter('cup/men') men!: Men
  @Getter('cup/girls') girls!: Women
  @Getter('cup/boys') boys!: Men
  @Getter('cup/items') items!: WorkingItem[]

  @Action('cup/setItem') setItem!: Function

  showBody: boolean = true
  showHairColor: boolean = false
  showHairstyle: boolean = false

  // temporary object created in the popup when adding or editing
  tempObject: any = {
    type: '',
    edit: false,
    bodyId: '',
    bodyImageUrl: '',
    hairColor: 'black',
    hairstyleId: '',
    name: ''
  }

  get human (): Human {
    switch (this.type) {
      case 'woman':
        return this.women
      case 'man':
        return this.men
      case 'girl':
        return this.girls
      case 'boy':
        return this.boys
    }

    return this.men
  }

  get title (): string {
    switch (this.type) {
      case 'woman':
        return 'Kobieta'
      case 'man':
        return 'Mężczyzna'
      case 'girl':
        return 'Dziewczyna'
      case 'boy':
        return 'Chłopak'
    }

    return 'nieznany typ obiektu'
  }

  mounted () {
    this.tempObject = {
      type: this.type,
      editIndex: this.findOriginalIndex(this.editedItem),
      bodyId: this.editedItem.bodyId || '',
      bodyImageUrl: this.editedItem.bodyImageUrl || '',
      hairColor: this.editedItem.hairColor || '',
      hairstyleId: this.editedItem.hairstyleId || '',
      name: this.editedItem.name || ''
    }

    if (this.tempObject.editIndex === -1) {
      const hairstyle: any = Object.values(this.human.hairstyles?.black || {})
      if (hairstyle?.[0]?.[0] && this.human.bodies?.[0]) {
        this.setFigure(this.human.bodies[0])
        this.setHairStyle(hairstyle[0][0].hairstyleId)
      }

      switch (this.type) {
        case 'woman':
          this.tempObject.hairColor = this.getHairColor(this.women.hairstyles)
          break
        case 'man':
          this.tempObject.hairColor = this.getHairColor(this.men.hairstyles)
          break
        case 'girl':
          this.tempObject.hairColor = this.getHairColor(this.girls.hairstyles)
          break
        case 'boy':
          this.tempObject.hairColor = this.getHairColor(this.boys.hairstyles)
          break
      }
    }
  }

  /**
   * Get hair color from the temporary object being currently edited
   */
  getHairColor (hairstyles: Record<HairstyleColors, Hairstyles>): string {
    const itemFound = Object.entries(hairstyles).find(([, styles]: [string, Hairstyles]): boolean => {
      return undefined !== Object.values(styles).find((hairstyles: Hairstyle[]): boolean => {
        return undefined !== hairstyles.find((hairstyle: Hairstyle): boolean => {
          return hairstyle.hairstyleId === this.tempObject.hairstyleId
        })
      })
    })

    return itemFound?.[0] || 'blond'
  }

  findOriginalIndex (item: WorkingItem) {
    return this.items.findIndex((item1: WorkingItem) => item1 === item)
  }

  insertNewHuman () {
    if (this.tempObject.editIndex !== -1) {
      this.setItem({ index: this.tempObject.editIndex, item: this.tempObject })
    } else {
      this.setItem({ index: this.items.length, item: this.tempObject })
    }

    EventBus.$emit('blink-next')
    this.$emit('closeModal')
  }

  cancelEdit () {
    this.$emit('closeModal')
  }

  switchToBody () {
    this.showBody = true
    this.showHairColor = false
    this.showHairstyle = false
  }

  switchToHairColor () {
    this.showBody = false
    this.showHairColor = true
    this.showHairstyle = false
  }

  switchToHairstyle () {
    this.showBody = false
    this.showHairColor = false
    this.showHairstyle = true
  }

  setHairColor (color: string) {
    this.tempObject.hairColor = color

    const hairstyle: any = Object.values(this.human?.hairstyles?.[this.tempObject.hairColor] || {})
    if (hairstyle?.[0]?.[0] && this.human?.bodies?.[0]) {
      this.setHairStyle(hairstyle[0][0].hairstyleId)
    }
  }

  setFigure (item: Body) {
    this.tempObject.bodyId = item.bodyId
    this.tempObject.bodyImageUrl = item.bodyImageUrl
  }

  setHairStyle (hairstyleId: string) {
    this.tempObject.hairstyleId = hairstyleId
  }
}
</script>

<style scoped>
@keyframes glowing {
  0% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
  50% {
    background-color: #49e819;
    box-shadow: 0 0 20px #49e819;
  }
  100% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
}
</style>
