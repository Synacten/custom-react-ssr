/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let initialState = {};

const middleware = [thunk];

const composeEnhancers = typeof window !== 'undefined'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

if (typeof window !== 'undefined') {
  initialState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
}

const store = createStore(rootReducer, initialState,
  composeEnhancers(applyMiddleware(...middleware)));

export { store };
