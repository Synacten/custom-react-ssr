import '@babel/polyfill';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import express from 'express';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import Routes from './Routes';
import { store } from './store/store';

const app = express();
app.use(express.static('dist/public'));

const renderer = (req, _store) => {
  const content = renderToString(
    <Provider store={_store}>
      <StaticRouter location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>,
  );

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <base href='/'>
      <title>Document</title>
  <link href="./css/main.css" rel="stylesheet"></head>
  <body>
      <div class="root">${content}</div>
      <script>
        window.__PRELOADED_STATE__ = ${serialize(_store.getState()).replace(/</g, '\\u003c')}
      </script>
      <script type="text/javascript" src="./js/main.js"></script>
  </body>
</html>
  `;
};

app.get('*', (req, res) => {
  const params = req.params[0].split('/');
  const id = params[2];

  const routes = matchRoutes(Routes, req.path);

  const promises = routes.map(({ route }) => (route.loadData
    ? route.loadData(store, id)
    : null)).map((promise) => {
    if (promise) {
      return new Promise((resolve) => {
        promise.then(resolve).catch(resolve);
      });
    }
    return null;
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (content.Notfound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3400);
