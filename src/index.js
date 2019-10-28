import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducerBucket } from './Components/reducer/index';
import createSagaMiddleware from 'redux-saga';
import sagaRoot from './sagas/saga'
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

 const store = createStore(reducerBucket, /* preloadedState, */ 
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(sagaRoot);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);