import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { history } from './history';
import { store } from './store/store';


ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <div>{renderRoutes(Routes)}</div>
    </Router>
  </Provider>,
  document.querySelector('.root'),
);
