import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../src/store/configureStore'

import Main from './components/main/Main';
import './App.css';

function App() {
  const store = configureStore()
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
