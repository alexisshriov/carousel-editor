import { createStore } from 'redux'
import rootReducer from '../reducers'

const initialState = { selectorImages: [] }

function configureStore() {
    return createStore(rootReducer, initialState);
}

export default configureStore;
