import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducerBucket } from './Components/reducer/index';

const store = createStore(reducerBucket,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);