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
import Map from './Map';
import styles from './app.m.scss';
import { domLoaded } from './actions';
import reducer from './reducer';
import Router, {
  reducer as routerReducer,
  saga as routerSaga,
} from './Router';
import networkSaga from './network.saga';

const sagaMiddleware = createSagaMiddleware({
  onError: (...args) => {
    // eslint-disable-next-line no-console
    console.error('Uncaught error from saga', ...args);
  },
});
const reducers = {
  app: reducer,
  router: routerReducer,
};
const middlewares = [
  sagaMiddleware,
];

const sagas = [
  networkSaga,
  routerSaga,
];

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

// Render test app
ReactDOM.render(
  <Provider store={store}>
    <div className={styles.app}>
      <Map />
      <Router />
    </div>
  </Provider>,
  document.getElementById('app'),
);

window.onload = () => {
  store.dispatch(domLoaded());
};

window.stuart = {
  store,
};
