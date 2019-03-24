import {
  forEach,
} from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware({
  onError: (...args) => {
    // eslint-disable-next-line no-console
    console.error('Uncaught error from saga', ...args);
  },
});
const reducers = {};
const middlewares = [
  sagaMiddleware,
];
const sagas = [];

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(...middlewares)),
);
forEach(
  sagas,
  (saga) => {
    sagaMiddleware.run(saga);
  },
);
const body = document.getElementsByTagName('body')[0];
const appContainer = document.createElement('div');
appContainer.id = 'app';
body.appendChild(appContainer);
ReactDOM.render(
  <Provider store={store}>
    <div>It works!</div>
  </Provider>,
  document.getElementById('app'),
);
