<template>
  <div class="add-popup">
    <div class="add-popup__container">
      <div>
        <div class="add-popup__head">
          <p class="add-popup__title">
            Kogo lub co chcesz dodać?
          </p>
          <button class="add-popup__close" @click="closeModal">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 16L16 28"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 16L28 28"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="add-popup__wrapper">
          <div class="add-popup__btn" @click="newCupObject('woman')">
            <img :src="`https://images.kapkap.eu/cup_page/sample_woman.png`" alt="kobieta">
            <p>Kobietę</p>
          </div>
          <div class="add-popup__btn" @click="newCupObject('man')">
            <img :src="`https://images.kapkap.eu/cup_page/sample_man.png`" alt="mężczyzna">
            <p>Mężczyznę</p>
          </div>
          <div class="add-popup__btn" @click="newCupObject('girl')">
            <img :src="`https://images.kapkap.eu/cup_page/sample_girl.png`" alt="dziewczynka">
            <p>Dziewczynkę</p>
          </div>
          <div class="add-popup__btn" @click="newCupObject('boy')">
            <img :src="`https://images.kapkap.eu/cup_page/sample_boy.png`" alt="chłopiec">
            <p>Chłopca</p>
          </div>
          <div class="add-popup__btn" @click="newCupObject('dog')">
            <img :src="`https://images.kapkap.eu/cup_page/sample_dog.png`" alt="pies">
            <p>Psa</p>
          </div>
          <div class="add-popup__btn" @click="newCupObject('cat')">
            <img :src="`https://images.kapkap.eu/cup_page/sample_cat.png`" alt="kot">
            <p>Kota</p>
          </div>
          <div class="add-popup__btn" @click="newCupObject('rabbit')">
            <img :src="`https://images.kapkap.eu/cup_page/sample_rabbit.png`" alt="królik">
            <p>Królika</p>
          </div>
        </div>
      </div>
      <button class="add-popup__go-back btn btn--transparent" @click="closeModal">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        COFNIJ
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AddModal extends Vue {
  newCupObject (type: string) {
    this.$emit('newCupObject', type)
  }

  closeModal () {
    this.$emit('closeModal')
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

.add-popup__btn {
  cursor: pointer;
}
</style>
