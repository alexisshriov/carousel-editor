import { createStore } from 'redux'

import rootReducer from '../reducers'

const initialState = {
    selectorImages: [],
    carouselImages: [],
    currentViewerImage: null
}

function configureStore() {
    return createStore(rootReducer, initialState);
}

export default configureStore;
