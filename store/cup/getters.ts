import { EditorState, CupImageItem, CupImageData } from './state'

export type ProductObject = {
  productId: string,
  cupId: string,
  items: CupImageItem[],
  previewId?: string
}

export default {
  productObject: (state: EditorState): ProductObject => {
    const items: CupImageItem[] = []

    if (state.workingObject?.backgroundId && !state.editMode) {
      items.push({
        type: 'background',
        data: {
          id: state.workingObject?.backgroundId,
          fullWidth: (state.workingObject?.quoteId || '') === ''
        }
      })
    }

    if (state.workingObject?.quoteId && !state.editMode) {
      items.push({
        type: 'quote',
        data: {
          id: state.workingObject?.quoteId
        }
      })
    }

    state.workingObject?.items.forEach((item: any) => {
      if (item.data) {
        items.push({
          type: item.type,
          data: <CupImageData>{
            bodyId: item.data?.bodyId,
            hairstyleId: item.data?.hairstyleId,
            id: item.data.id,
            name: item.data.name,
            variantId: item.data?.variantId
          }
        })
      } else {
        items.push({
          type: item.type,
          data: <CupImageData>{
            bodyId: item.bodyId,
            hairstyleId: item.hairstyleId,
            id: item.id,
            name: item.name,
            variantId: item.variantId
          }
        })
      }
    })

    return {
      productId: state.product?.productId,
      cupId: state.workingObject?.cupId,
      items
    }
  },

  cups: (state: EditorState) => state.product?.items?.cups || [],
  backgrounds: (state: EditorState) => state.product.items?.backgrounds || [],
  quotes: (state: EditorState) => state.product?.items?.quotes || [],
  dogs: (state: EditorState) => state.dogs,
  cats: (state: EditorState) => state.cats,
  rabbits: (state: EditorState) => state.rabbits,
  men: (state: EditorState) => state.men,
  women: (state: EditorState) => state.women,
  girls: (state: EditorState) => state.girls,
  boys: (state: EditorState) => state.boys,
  product: (state: EditorState) => state.product,
  productId: (state: EditorState) => state.product?.productId,
  availableBackgrounds: (state: EditorState): string[] => state.product?.availableBackgrounds || [],
  onlyFullWidthProduct: (state: EditorState): boolean => {
    return (state.product?.tags || []).includes('full width')
  },
  count: (state: EditorState) => state.count,
  total: (state: EditorState) => state.total,
  price: (state: EditorState) => state.price,
  title: (state: EditorState) => state.title,
  editMode: (state: EditorState) => state.editMode,
  cupId: (state: EditorState) => state.workingObject?.cupId,
  backgroundId: (state: EditorState) => state.workingObject?.backgroundId,
  items: (state: EditorState) => state.workingObject?.items,
  quoteId: (state: EditorState) => state.workingObject?.quoteId
}
