import { SET_CURRENT_VIEWER_IMAGE } from '../constants/constants'

export const setCurrentViewerImage = (image) => {
  return { type: SET_CURRENT_VIEWER_IMAGE, image }
}