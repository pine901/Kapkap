import { PreviewState } from '~/store/preview/state'

export default {
  previewId: (state: PreviewState) => state.previewId,
  frontImage: (state: PreviewState) => state.frontImageUrl || '',
  middleImage: (state: PreviewState) => state.middleImageUrl || '',
  backImage: (state: PreviewState) => state.backImageUrl || '',
  invisibleSide: (state: PreviewState) => state.invisibleSide,
  currentSide: (state: PreviewState) => state.currentSide,
  unactivePreview: (state: PreviewState) => state.unactivePreviewImageUrl,
  activePreview: (state: PreviewState) => state.activePreviewImageUrl,
  loaderVisible: (state: PreviewState) => state.loaderCounter > 0 || state.loaderVisible,
  previewRequestNumber: (state: PreviewState) => state.previewRequestNumber
}
