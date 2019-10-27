import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducerBucket } from './Components/reducer/index';
import createSagaMiddleware from 'redux-saga';
import sagaRoot from './sagas/saga'
const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

 const store = createStore(reducerBucket, /* preloadedState, */ 
    applyMiddleware(sagaMiddleware)
  );

// const store = createStore(reducerBucket,
//   applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaRoot);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);