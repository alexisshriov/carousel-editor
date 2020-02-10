import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../src/store/configureStore'

import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
