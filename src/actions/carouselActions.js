import { SET_CAROUSEL_IMAGES } from '../constants/constants';

export const setCarouselImages = (images) => {
  return { type: SET_CAROUSEL_IMAGES, images }
}
