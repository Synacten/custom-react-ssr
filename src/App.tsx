import React from 'react';
import { renderRoutes } from 'react-router-config';

import './App.scss';

const App = ({ route }) => (
  <>
    <nav>nav</nav>
    <div>{renderRoutes(route.routes)}</div>
  </>
);


export default { component: App };
