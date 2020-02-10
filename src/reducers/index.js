import { combineReducers } from 'redux'
import selectorImages from './selectorImagesReducer'
import carouselImages from './carouselImagesReducer'
import currentViewerImage from './imageViewerReducer'

const rootReducer = combineReducers({
  selectorImages,
  carouselImages,
  currentViewerImage
})

export default rootReducer;
