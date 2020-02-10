import {SET_CAROUSEL_IMAGES} from '../constants/constants'

const carouselImagesReducer = (state = [], action) => {
  switch(action.type){
    case SET_CAROUSEL_IMAGES:
      return action.images
    default:
      return state;
  }
}

export default carouselImagesReducer;
