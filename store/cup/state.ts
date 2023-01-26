/**
 * Records fetched via ajax
 */
export type Cup = {
  id: string,
  imageURL: string,
  name: string
}

export type Quote = {
  quoteId: string,
  quoteImageUrl: string,
  quoteTags: string[],
  quoteTitle: string
}

export type Background = {
  backgroundId: string,
  backgroundURL: string,
  backgroundTitle: string
  backgroundTags?: string[]
}

export type Pet = {
  id: string,
  imageUrl: string,
  name: Record<string, string>,
  variantId: string,
  tags?: string[]
}

export type Dogs = Record<string, Pet[]>
export type Cats = Record<string, Pet[]>
export type Rabbits = Record<string, Pet[]>

export type Body = {
  bodyId: string,
  bodyImageUrl: string
  tags?: string[]
}

export type Hairstyle = {
  hairstyleId: string,
  hairstyleImageUrl: string
}

export type HairstyleColors = 'black' | 'blond' | 'brown' | 'dark_brown' | 'red' | 'other'
export type HairstyleStyle = 'all' | 'bun' | 'mid_back' | 'neck' | 'shoulder' | 'tie' | 'upper_back'

export type Hairstyles = Record<HairstyleStyle, Hairstyle[]>

export type Human = {
  success: boolean,
  title: string,
  hairstyles: Record<HairstyleColors, Hairstyles>,
  bodies: Body[]
}
export type Men = Human
export type Women = Human
export type Girl = Human
export type Boy = Human

export type Product = {
  productId: string,
  success: boolean,
  title: string,
  items: {
    backgrounds: Background[],
    cups: Cup[],
    quotes: Quote[]
  },
  price: number,
  sampleImageURL: string,
  numberOfGrades: string,
  backgroundId: string,
  availableBackgrounds?: string[]
  description: string,
  footerText: string,
  tags?: string[],
  path: string
}

/**
 * Real state data
 */
export type HumanImageData = {
  bodyId?: string,
  hairstyleId?: string,
  name?: string,
  hairColor?: string,
  bodyImageUrl?: string
}

export type AnimalImageData = {
  id?: string,
  variantId?: string,
  name?: string
}

export type IdOnlyImageData = {
  id?: string
}

export type BackgroundImageData = {
  id?: string,
  fullWidth?: boolean
}

export type CupImageData = HumanImageData & AnimalImageData & IdOnlyImageData & BackgroundImageData

export type CupImageItem = {
  type: string,
  data: CupImageData
}

export type WorkingItem = {
  type: 'woman' | 'man' | 'cat' | 'dog' | string;
  bodyId?: string,
  bodyImageUrl?: string,
  hairColor?: string,
  hairstyleId?: string,
  id?: string,
  variantId?: string,
  name?: string,
}

export type WorkingObject = {
  backgroundId: string
  quoteId: string,
  cupId: string,
  items: WorkingItem[]
}

export type EditorState = {
  dogs: Dogs,
  cats: Cats,
  rabbits: Rabbits,
  men: Men,
  women: Women,
  boys: Boy,
  girls: Girl,
  product: Product,

  total: number,
  count: number,
  price: number,
  title: string,
  editMode: boolean,

  workingObject: WorkingObject,
}

export enum Tabs {
  cups = 1,
  bgs = 2,
  items = 3,
  quotes = 4,
}

export default () => (<EditorState>{})
