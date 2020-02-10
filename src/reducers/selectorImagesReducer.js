import {ADD_SELECTOR_IMAGE} from '../constants/constants'

const selectorImagesReducer = (state = [], action) => {
  switch(action.type){
    case ADD_SELECTOR_IMAGE:
      return [...state, action.image]
    default:
      return state;
  }
}

export default selectorImagesReducer;
