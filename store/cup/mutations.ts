import { Vue } from 'nuxt-property-decorator'
import {
  Rabbits,
  Cats,
  Dogs,
  Men,
  Product,
  EditorState,
  Women,
  Pet,
  CupImageItem,
  WorkingObject,
  WorkingItem,
  HairstyleColors,
  HairstyleStyle
} from '~/store/cup/state'
import { Product as CartProduct } from '~/store/basket/state'
import sessionStorageService from '~/services/sessionStorage'

type productConfigType = {
  path: string
  maxNumberOfDogs: number
  maxNumberOfCats: number
  maxNumberOfPeople: number
  maxNumberOfMen: number
  maxNumberOfWomen: number
}

function randomIntFromInterval (min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function moveArrayItemToNewIndex (arr: any, oldIndex: number, newIndex: number) {
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])
  return arr
}

function findConfig (productPath: string): productConfigType|false {
  const productConfig: productConfigType[] = [
    {
      path: '/kubek/z-psami',
      maxNumberOfDogs: 1,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 1,
      maxNumberOfMen: 1,
      maxNumberOfWomen: 1
    },
    {
      path: '/kubek/z-kotami',
      maxNumberOfDogs: 0,
      maxNumberOfCats: 1,
      maxNumberOfPeople: 1,
      maxNumberOfMen: 1,
      maxNumberOfWomen: 1
    },
    {
      path: '/kubek/dla-par',
      maxNumberOfDogs: 0,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 2,
      maxNumberOfMen: 1,
      maxNumberOfWomen: 1
    },
    {
      path: '/kubek/ze-znajomymi',
      maxNumberOfDogs: 0,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 3,
      maxNumberOfMen: 2,
      maxNumberOfWomen: 2
    },
    {
      path: '/kubek/na-swieta',
      maxNumberOfDogs: 1,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 2,
      maxNumberOfMen: 1,
      maxNumberOfWomen: 1
    },
    {
      path: '/kubek/caly-obwod-kubka',
      maxNumberOfDogs: 2,
      maxNumberOfCats: 2,
      maxNumberOfPeople: 2,
      maxNumberOfMen: 2,
      maxNumberOfWomen: 2
    },
    {
      path: '/kubek/na-urodziny',
      maxNumberOfDogs: 0,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 1,
      maxNumberOfMen: 1,
      maxNumberOfWomen: 1
    },
    {
      path: '/kubek/na-dzien-kobiet',
      maxNumberOfDogs: 0,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 1,
      maxNumberOfMen: 0,
      maxNumberOfWomen: 1
    },
    {
      path: '/kubek/na-dzien-chlopaka',
      maxNumberOfDogs: 0,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 1,
      maxNumberOfMen: 1,
      maxNumberOfWomen: 0
    },
    {
      path: '/kubek/na-walentynki',
      maxNumberOfDogs: 0,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 2,
      maxNumberOfMen: 1,
      maxNumberOfWomen: 1
    },
    {
      path: '/kubek/dla-przyjaciolki',
      maxNumberOfDogs: 0,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 2,
      maxNumberOfMen: 0,
      maxNumberOfWomen: 2
    },
    {
      path: '/kubek/na-dzien-mamy-i-taty',
      maxNumberOfDogs: 0,
      maxNumberOfCats: 0,
      maxNumberOfPeople: 2,
      maxNumberOfMen: 1,
      maxNumberOfWomen: 1
    }
  ]

  const result = productConfig.find(config => productPath.startsWith(config.path))

  return result || false
}

function doTagsMatch (tags1: string[], tags2: string[]): boolean {
  const result = tags1.find((tag1: string) => {
    return tags2.find((tag2: string) => tag1 === tag2)
  })

  return !!result
}

export default {
  setRabbits (state: EditorState, rabbits: Rabbits) {
    Vue.set(state, 'rabbits', rabbits)
  },

  setDogs (state: EditorState, dogs: Dogs) {
    Vue.set(state, 'dogs', dogs)
  },

  setCats (state: EditorState, cats: Cats) {
    Vue.set(state, 'cats', cats)
  },

  setMen (state: EditorState, men: Men) {
    Vue.set(state, 'men', men)
  },

  setWomen (state: EditorState, women: Women) {
    Vue.set(state, 'women', women)
  },

  setBoys (state: EditorState, boys: Men) {
    Vue.set(state, 'boys', boys)
  },

  setGirls (state: EditorState, girls: Women) {
    Vue.set(state, 'girls', girls)
  },

  setProduct (state: EditorState, product: Product) {
    Vue.set(state, 'product', product)
    Vue.set(state, 'total', product.price)
    Vue.set(state, 'title', product.title)
    Vue.set(state, 'price', product.price)
  },

  setCup (state: EditorState, cupId: string) {
    Vue.set(state.workingObject, 'cupId', cupId)
  },

  setBackground (state: EditorState, backgroundId: string) {
    Vue.set(state.workingObject, 'backgroundId', backgroundId)
    if (state.editMode) {
      Vue.set(state.workingObject.items[0], 'id', backgroundId)
    }
  },

  setItem (state: EditorState, payload: any) {
    Vue.set(state.workingObject.items, payload.index, { ...payload.item })
  },

  setQuote (state: EditorState, quoteId: string) {
    if (state.workingObject.quoteId === quoteId && !state.editMode) {
      quoteId = ''
    }

    const index = state.workingObject.items.map(function (quote) { return quote.type }).indexOf('quote')
    if (state.editMode) {
      if (index !== -1) {
        if (state.workingObject.items[index].id === quoteId) {
          quoteId = ''
          state.workingObject.items.splice(index, 2)
        } else {
          Vue.set(state.workingObject.items[index], 'id', quoteId)
        }
      } else {
        state.workingObject.items.push({
          id: quoteId,
          type: 'quote'
        })
      }
    }

    Vue.set(state.workingObject, 'quoteId', quoteId)
  },

  setTotal (state: EditorState, total: number) {
    Vue.set(state, 'total', total)
  },

  setEditMode (state: EditorState, editMode: boolean) {
    Vue.set(state, 'editMode', editMode)
  },

  recalculateTotal (state: EditorState) {
    Vue.set(state, 'total', state.price * state.count)
  },

  setQuantity (state: EditorState, quantity: number) {
    if (quantity < 1) {
      quantity = 1
    } else if (quantity > 99) {
      quantity = 99
    }

    Vue.set(state, 'count', quantity)
  },

  resetWorkingObject (state: EditorState) {
    Vue.set(state, 'workingObject', {
      cupId: '',
      backgroundId: '',
      quoteId: '',
      items: []
    })
  },

  setWorkingObjectFromCart (state: EditorState, product: CartProduct) {
    const background: CupImageItem = product.items.find((item: CupImageItem) => item.type === 'background')!
    const quote: CupImageItem = product.items.find((item: CupImageItem) => item.type === 'quote')!
    const items: WorkingItem[] = product.items.map((item: CupImageItem) => (<WorkingItem>{
      type: item.type,
      bodyId: item.data.bodyId,
      hairstyleId: item.data.hairstyleId,
      id: item.data.id,
      variantId: item.data.variantId,
      name: item.data.name
      // @todo
      // bodyImageUrl
      // hairColor
    }))

    Vue.set(state, 'workingObject', <WorkingObject>{
      backgroundId: background?.data.id,
      quoteId: quote?.data.id,
      cupId: product.cupId,
      items
    })
  },

  prepareProductForCup (state: EditorState) {
    const data = sessionStorageService.getData(`workingProduct-${state.product?.productId}`)
    if (data) {
      state.workingObject = data.workingObject
      return
    }

    let config: productConfigType|false = false
    if (state.product) {
      config = findConfig(state.product.path)
      console.log('Preparing random items for the preview')
    } else {
      console.log('Product not yet available')
      return
    }
    if (!config) {
      console.log('Product configuration rules not available')
      return
    }

    let randBody: number
    let randHair: number
    let typeRand: number
    let randPet: number
    let randVariant: number
    let pet: Pet[]
    let petsArray: any[]
    const maleHair: HairstyleColors[] = ['black', 'blond', 'brown', 'dark_brown', 'other']
    const femaleHair: HairstyleColors[] = ['black', 'blond', 'brown', 'dark_brown', 'red', 'other']
    const hairstyles: HairstyleStyle[] = ['bun', 'mid_back', 'neck', 'shoulder', 'tie', 'upper_back']
    let randHairColor: number
    let randHairstyle: number
    let i = 0

    const count = config.maxNumberOfCats + config.maxNumberOfDogs + config.maxNumberOfPeople

    // safeCounter is used to avoid an infinite loop and a page crash
    let safeCounter = 200

    state.workingObject.backgroundId = state.product.backgroundId
    state.workingObject.cupId = state.product.items.cups[0].id

    const background = state.product.items.backgrounds.find(bg => bg.backgroundId === state.product.backgroundId)
    if (!background) {
      return
    }

    while (i < count && safeCounter > 0) {
      typeRand = randomIntFromInterval(1, 4)
      switch (typeRand) {
        case 1:
          try {
            if (state.men && config.maxNumberOfPeople > 0 && config.maxNumberOfMen > 0) {
              randBody = randomIntFromInterval(0, state.men.bodies.length - 1)
              if (state.men.bodies[randBody].bodyId === '60aba578b3bab7e7fbb248f9' ||
                state.men.bodies[randBody].bodyId === '60aba623b3bab7e7fbb248fc' ||
                state.men.bodies[randBody].bodyId === '60abaa41b3bab7e7fbb248ff') {
                continue
              }
              if (!doTagsMatch(background.backgroundTags || [], state.men.bodies[randBody].tags || [])) {
                continue
              }
              randHairColor = randomIntFromInterval(0, maleHair.length - 1)
              randHair = randomIntFromInterval(0, state.men.hairstyles[maleHair[randHairColor]].all.length - 1)
              state.workingObject.items.push({
                type: 'man',
                bodyId: state.men.bodies[randBody].bodyId,
                hairColor: maleHair[randHairColor],
                hairstyleId: state.men.hairstyles[maleHair[randHairColor]].all[randHair].hairstyleId
              })
              i++
              config.maxNumberOfMen--
              config.maxNumberOfPeople--
            }
          } catch (e) {}
          break

        case 2:
          try {
            if (state.women && config.maxNumberOfPeople > 0 && config.maxNumberOfWomen > 0) {
              randBody = randomIntFromInterval(0, state.women.bodies.length - 1)
              if (state.women.bodies[randBody].bodyId === '60b14c07a299c58d6fe15747' ||
                state.women.bodies[randBody].bodyId === '60b14c26a299c58d6fe15748' ||
                state.women.bodies[randBody].bodyId === '60b14c4aa299c58d6fe15749') {
                continue
              }
              if (!doTagsMatch(background.backgroundTags || [], state.women.bodies[randBody].tags || [])) {
                continue
              }
              randHairColor = randomIntFromInterval(0, femaleHair.length - 1)
              randHairstyle = randomIntFromInterval(0, hairstyles.length - 1)
              randHair = randomIntFromInterval(
                0,
                state.women.hairstyles[femaleHair[randHairColor]][hairstyles[randHairstyle]].length - 1
              )
              state.workingObject.items.push({
                type: 'woman',
                bodyId: state.women.bodies[randBody].bodyId,
                hairColor: femaleHair[randHairColor],
                hairstyleId: state.women.hairstyles[femaleHair[randHairColor]][hairstyles[randHairstyle]][randHair].hairstyleId
              })
              i++
              config.maxNumberOfWomen--
              config.maxNumberOfPeople--
            }
          } catch (e) {}
          break

        case 3:
          if (state.dogs && config.maxNumberOfDogs > 0) {
            petsArray = Object.entries(state.dogs)
            randPet = randomIntFromInterval(0, petsArray.length - 1)
            pet = petsArray[randPet][1]
            randVariant = randomIntFromInterval(0, pet.length - 1)

            state.workingObject.items.push({
              type: 'dog',
              id: pet[0].id,
              variantId: pet[randVariant].variantId
            })
            i++
            config.maxNumberOfDogs--
          }
          break

        case 4:
          if (state.cats && config.maxNumberOfCats > 0) {
            petsArray = Object.entries(state.cats || [])
            randPet = randomIntFromInterval(0, petsArray.length - 1)
            pet = petsArray[randPet][1]
            randVariant = randomIntFromInterval(0, pet.length - 1)
            state.workingObject.items.push({
              type: 'cat',
              id: pet[0].id,
              variantId: pet[randVariant].variantId
            })
            i++
            config.maxNumberOfCats--
          }
          break
      }
      safeCounter--
    }
    console.log('Safe counter: ', safeCounter)
  },

  moveItemUp: (state: EditorState, index: number) => {
    moveArrayItemToNewIndex(state.workingObject.items, index, index - 1)
  },

  moveItemDown: (state: EditorState, index: number) => {
    moveArrayItemToNewIndex(state.workingObject.items, index, index + 1)
  },

  removeItem: (state: EditorState, index: number) => {
    const items = state.workingObject.items
    items.splice(index, 1)
    Vue.set(state.workingObject, 'items', items)
  }
}
