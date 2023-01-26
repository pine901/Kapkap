<template>
  <div
    :class="isMobile ? 'pet-desktop' : 'pet-mobile'"
  >
    <div class="pet-desktop__wrapper">
      <div class="pet-inputs--desktop">
        <h3 v-if="!isMobile" class="pet-desktop__title">
          <span>{{ title }}</span>
        </h3>
        <input
          v-if="!isMobile"
          ref="name"
          v-model="tempObject.name"
          type="text"
          placeholder="DODAJ IMIĘ"
          class="pet-input pet-input--name"
          :class="{'w100': type !== 'dog' && type !== 'cat'}"
        >
        <input
          v-if="!isMobile && (type === 'dog' || type === 'cat')"
          ref="name"
          v-model="search"
          type="search"
          placeholder="SZUKAJ WG RASY"
          class="pet-input pet-input--breed"
          style="padding: 12px 22px;"
          @input="changeSearch"
        >
        <button v-if="!isMobile && showSearchMark" class="pet-breed-search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9999 21.0004L16.6499 16.6504"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="d-flex justify-content-center generator__pet-options">
          <button v-if="isMobile" class="pet-btn pet-name" @click="openNameInput">
            <span v-if="!tempObject.name">WPISZ IMIĘ</span>
            <span v-else>ZMIEŃ IMIĘ</span>
          </button>
          <button v-if="isMobile" class="pet-btn pet-name" @click="openBreedInput">
            WYSZUKAJ WG RASY
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <input
            v-if="isMobile"
            v-model="tempObject.name"
            type="text"
            placeholder="Wpisz imię"
            class="input-search"
            :class="{'input-show': showNameInput === true}"
          >
          <input
            v-if="isMobile && (type === 'dog' || type === 'cat')"
            ref="name"
            v-model="search"
            type="search"
            placeholder="Szukaj wg rasy"
            class="pet-input pet-input--breed input-search"
            :class="{'input-show': showBreedInput === true}"
            style="padding: 12px 22px;"
            @input="changeSearch"
          >
        </div>
      </div>
      <div :key="refreshKey" class="pet">
        <div class="pet__container">
          <div v-for="(dogs, breed) in animals" :key="breed" class="pet__breed">
            <div v-if="breed !== 'type' && toDisplay(breed)">
              <p class="pet__title">
                {{ breed }}
              </p>
              <div class="pet__wrapper">
                <div
                  v-for="(item, index) in dogs"
                  :key="index"
                  class="pet__box"
                  :class="item.variantId === tempObject.variantId ? 'pet__box--active' : ''"
                  @click="setPet(item)"
                >
                  <img
                    v-lazy-load
                    alt="product body icon"
                    :src="item.imageUrl"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!isMobile" class="pet__btns">
        <div class="pet-btns-wrapper">
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
          <div class="btn btn--green" @click="insertNewAnimal">
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
      <div class="generator__footer generator__footer--pet">
        <div class="pet-btns-wrapper">
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
          <div class="btn btn--green" @click="insertNewAnimal">
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
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { Cats, Dogs, Pet, WorkingItem } from '~/store/cup/state'
import { EventBus } from '~/services/eventBus'

@Component
export default class EditAnimal extends Vue {
  @Prop() type!: string
  @Prop() editedItem!: WorkingItem

  @Getter('app/isMobile') isMobile!: boolean
  @Getter('cup/rabbits') rabbits!: Cats
  @Getter('cup/cats') cats!: Cats
  @Getter('cup/dogs') dogs!: Dogs
  @Getter('cup/items') items!: WorkingItem[]

  @Action('cup/setItem') setItem!: Function

  get animals (): Record<string, Pet[]> {
    switch (this.type) {
      case 'dog':
        return this.dogs
      case 'cat':
        return this.cats
      case 'rabbit':
        return this.rabbits
    }

    return this.dogs
  }

  get title (): string {
    switch (this.type) {
      case 'dog':
        return 'Pies'
      case 'cat':
        return 'Kot'
      case 'rabbit':
        return 'Królik'
    }

    return 'nieznany typ obiektu'
  }

  search: string = ''
  refreshKey: number = 0
  showSearchMark: boolean = true

  showNameInput: boolean = false
  showBreedInput: boolean = false

  // temporary object created in the popup when adding or editing
  tempObject: any = {
    type: '',
    edit: false,
    id: '',
    variantId: '',
    name: '',
    bodyImageUrl: ''
  }

  @Watch('search')
  onChangeSearch () {
    this.refreshKey++
  }

  mounted () {
    this.tempObject = {
      type: this.type,
      editIndex: this.findOriginalIndex(this.editedItem),
      id: this.editedItem.id || '',
      variantId: this.editedItem.variantId || '',
      name: this.editedItem.name || '',
      bodyImageUrl: this.editedItem.bodyImageUrl || ''
    }

    if (this.tempObject.editIndex === -1) {
      const pet: any = Object.values(this.animals)
      if (pet?.[0]?.[0]) {
        this.setPet(pet[0][0])
      }
    }
  }

  findOriginalIndex (item: WorkingItem) {
    return this.items.findIndex((item1: WorkingItem) => item1 === item)
  }

  toDisplay (breed: string): boolean {
    const r = new RegExp(this.search, 'i')
    return this.search === '' || breed.search(r) !== -1
  }

  changeSearch () {
    this.showSearchMark = !this.search.length
  }

  openNameInput () {
    this.showBreedInput = false
    this.showNameInput = !this.showNameInput
  }

  openBreedInput () {
    this.showNameInput = false
    this.showBreedInput = !this.showBreedInput
  }

  setPet (item: Pet) {
    this.tempObject.id = item.id
    this.tempObject.variantId = item.variantId
    this.tempObject.bodyImageUrl = item.imageUrl
  }

  insertNewAnimal () {
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
