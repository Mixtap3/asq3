import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';

console.log("inne i configure store");

export default function configureStore(initialState, history) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        apiMiddleware,
        thunk,
        routerMiddleware(history),
      ),
    ),
  );

  return store;
}
