import { SET_SELECTOR_IMAGES} from '../constants/constants'

const selectorImagesReducer = (state = [], action) => {
  switch(action.type){
    case SET_SELECTOR_IMAGES:
      return action.images
    default:
      return state;
  }
}

export default selectorImagesReducer;
