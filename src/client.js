import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { history } from './history';

import Routes from './Routes';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>{renderRoutes(Routes)}</div>
    </Router>
  </Provider>,
  document.querySelector('.root'),
);
