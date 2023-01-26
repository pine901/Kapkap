export enum Side {
  Front = 'front',
  Middle = 'middle',
  Back = 'back'
}

export type PreviewResponse = {
  backImageUrl: string,
  frontImageUrl: string,
  previewId: string,
  success: boolean
}

export type PreviewState = {
  previewId: string
  frontImageUrl: string,
  middleImageUrl: string,
  backImageUrl: string,
  unactivePreviewImageUrl: string,
  activePreviewImageUrl: string,
  invisibleSide: Side,
  currentSide: Side,
  loaderVisible: boolean,
  loaderCounter: number,
  previewRequestNumber: number
}

export default () => (<PreviewState>{
  invisibleSide: Side.Back,
  currentSide: Side.Front,
  loaderVisible: false,
  loaderCounter: 0,
  previewRequestNumber: 0
})
