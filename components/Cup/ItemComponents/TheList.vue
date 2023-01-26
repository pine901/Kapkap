<template>
  <div class="generator__customization">
    <div v-for="(item, index) in filteredItems" :key="index" class="element">
      <img :src="getObjectImage(item)" alt="Podgląd obiektu" class="element__img">
      <img v-if="isHuman(item)" :src="getHairstyleImage(item)" alt="Podgląd fryzury" class="element__img">
      <span v-if="!isMobile">{{ item.name || '' }}</span>
      <div class="element__options">
        <button v-if="removeItemIndex !== index" class="element__arrow element__arrow--top" @click="onMoveItemUp(item)">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <path
                d="M6 15L12 9L18 15"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
        <button v-if="removeItemIndex !== index" class="element__arrow element__arrow--bottom" @click="onMoveItemDown(item)">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <path
                d="M6 9L12 15L18 9"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
        <button v-if="removeItemIndex !== index" class="element__edition" @click="editItem(item)">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button v-if="removeItemIndex !== index" class="element__delete" @click="setItemIdToRemove(index)">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H5H21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 11V17"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 11V17"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div v-if="removeItemIndex === index" class="removeBox">
        <button class="cancelRemove btn btn--transparent" @click="cancelRemove">
          Anuluj
        </button>
        <button class="acceptRemove btn btn--green" @click="removeItemFn(item)">
          Usuń
        </button>
      </div>
    </div>
    <button class="generator__customization-btn btn btn--green" @click="openAddModal">
      DODAJ
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 12H19"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import { Body, Cats, Dogs, Hairstyle, Hairstyles, Men, Pet, Women, WorkingItem } from '~/store/cup/state'

@Component
export default class TheList extends Vue {
  @Getter('cup/women') women!: Women
  @Getter('cup/men') men!: Men
  @Getter('cup/girls') girls!: Women
  @Getter('cup/boys') boys!: Men
  @Getter('cup/rabbits') rabbits!: Cats
  @Getter('cup/cats') cats!: Cats
  @Getter('cup/dogs') dogs!: Dogs
  @Getter('cup/items') items!: WorkingItem[]
  @Getter('app/isMobile') isMobile!: boolean

  @Action('cup/moveItemUp') moveItemUp!: Function
  @Action('cup/moveItemDown') moveItemDown!: Function
  @Action('cup/removeItem') removeItem!: Function

  removeItemIndex: number = -1

  get filteredItems () {
    return this.items
      ?.filter((item: WorkingItem) => item.type !== 'quote' && item.type !== 'background') || []
  }

  setItemIdToRemove (index: number) {
    this.removeItemIndex = index
  }

  cancelRemove () {
    this.removeItemIndex = -1
  }

  findOriginalIndex (item: WorkingItem) {
    return this.items.findIndex((item1: WorkingItem) => item1 === item)
  }

  removeItemFn (item: WorkingItem) {
    this.removeItem(this.findOriginalIndex(item), true)
    this.cancelRemove()
  }

  onMoveItemUp (item: WorkingItem) {
    this.moveItemUp(this.findOriginalIndex(item))
  }

  onMoveItemDown (item: WorkingItem) {
    this.moveItemDown(this.findOriginalIndex(item))
  }

  openAddModal () {
    this.$emit('openAddModal')
  }

  editItem (item: WorkingItem) {
    this.$emit('editItem', item)
  }

  isHuman (item: WorkingItem) {
    const humans: string[] = ['woman', 'man', 'boy', 'girl']
    return humans.includes(item.type)
  }

  getHairstyleImage (item: WorkingItem): string {
    let foundUrl: string = ''

    switch (item.type) {
      case 'man':
        Object.values(this.men?.hairstyles || []).find((rootHairstyles: Hairstyles) => {
          Object.values(rootHairstyles).find((hairstyles: Hairstyle[]) => {
            hairstyles.find((hairstyle: Hairstyle) => {
              if (hairstyle.hairstyleId === item.hairstyleId) {
                foundUrl = hairstyle.hairstyleImageUrl
                return true
              }
              return false
            })
            return foundUrl !== ''
          })
          return foundUrl !== ''
        })
        if (foundUrl) {
          return foundUrl
        }
        break

      case 'woman':
        Object.values(this.women?.hairstyles || []).find((rootHairstyles: Hairstyles) => {
          Object.values(rootHairstyles).find((hairstyles: Hairstyle[]) => {
            hairstyles.find((hairstyle: Hairstyle) => {
              if (hairstyle.hairstyleId === item.hairstyleId) {
                foundUrl = hairstyle.hairstyleImageUrl
                return true
              }
              return false
            })
            return foundUrl !== ''
          })
          return foundUrl !== ''
        })
        if (foundUrl) {
          return foundUrl
        }
        break

      case 'boy':
        Object.values(this.boys?.hairstyles || []).find((rootHairstyles: Hairstyles) => {
          Object.values(rootHairstyles).find((hairstyles: Hairstyle[]) => {
            hairstyles.find((hairstyle: Hairstyle) => {
              if (hairstyle.hairstyleId === item.hairstyleId) {
                foundUrl = hairstyle.hairstyleImageUrl
                return true
              }
              return false
            })
            return foundUrl !== ''
          })
          return foundUrl !== ''
        })
        if (foundUrl) {
          return foundUrl
        }
        break

      case 'girl':
        Object.values(this.girls?.hairstyles || []).find((rootHairstyles: Hairstyles) => {
          Object.values(rootHairstyles).find((hairstyles: Hairstyle[]) => {
            hairstyles.find((hairstyle: Hairstyle) => {
              if (hairstyle.hairstyleId === item.hairstyleId) {
                foundUrl = hairstyle.hairstyleImageUrl
                return true
              }
              return false
            })
            return foundUrl !== ''
          })
          return foundUrl !== ''
        })
        if (foundUrl) {
          return foundUrl
        }
        break
    }

    return ''
  }

  getObjectImage (item: WorkingItem): string {
    let foundUrl: Body
    let url: string = ''

    switch (item.type) {
      case 'man':
        foundUrl = (this.men?.bodies || []).find((man: Body) => man.bodyId === item.bodyId)!
        if (foundUrl) {
          return foundUrl.bodyImageUrl
        }
        break

      case 'woman':
        foundUrl = (this.women?.bodies || []).find((woman: Body) => woman.bodyId === item.bodyId)!
        if (foundUrl) {
          return foundUrl.bodyImageUrl
        }
        break

      case 'boy':
        foundUrl = (this.boys?.bodies || []).find((boy: Body) => boy.bodyId === item.bodyId)!
        if (foundUrl) {
          return foundUrl.bodyImageUrl
        }
        break

      case 'girl':
        foundUrl = (this.girls?.bodies || []).find((girl: Body) => girl.bodyId === item.bodyId)!
        if (foundUrl) {
          return foundUrl.bodyImageUrl
        }
        break

      case 'cat':
        Object.values(this.cats || []).find((value: Pet[]) => {
          value.find((catItem: Pet) => {
            if (item.id === catItem.id && item.variantId === catItem.variantId) {
              url = catItem.imageUrl
              return true
            }
            return false
          })
          return url !== ''
        })
        if (url) {
          return url
        }
        break

      case 'dog':
        Object.values(this.dogs || []).find((value: Pet[]) => {
          value.find((dogItem: Pet) => {
            if (item.id === dogItem.id && item.variantId === dogItem.variantId) {
              url = dogItem.imageUrl
              return true
            }
            return false
          })
          return url !== ''
        })
        if (url) {
          return url
        }
        break

      case 'rabbit':
        Object.values(this.rabbits || []).find((value: Pet[]) => {
          value.find((rabbitItem: Pet) => {
            if (item.id === rabbitItem.id && item.variantId === rabbitItem.variantId) {
              url = rabbitItem.imageUrl
              return true
            }
            return false
          })
          return url !== ''
        })
        if (url) {
          return url
        }
        break
    }

    return ''
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

.element__arrow {
  cursor: pointer;
}

.element__edition {
  cursor: pointer;
}
</style>
