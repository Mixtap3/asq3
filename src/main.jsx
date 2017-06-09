import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './modules/configureStore';

import RootPage from './routes/index';

console.log("inne i main.js")

export const store = configureStore({});

render(
  <Provider store={store}>
    <RootPage />
  </Provider>,
  document.getElementById('app'),
);

