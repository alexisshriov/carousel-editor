import {SET_CURRENT_VIEWER_IMAGE} from '../constants/constants'

const imageViwerReducer = (state = [], action) => {
  switch(action.type){
    case SET_CURRENT_VIEWER_IMAGE:
      return action.image
    default:
      return state;
  }
}

export default imageViwerReducer;