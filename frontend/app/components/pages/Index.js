import React from 'react';
import { renderRoutes } from 'react-router-config';
import Navbar from '../layout/Navbar';

const Index = ({ route }) => (
  <div className="index">
    <Navbar />
    <div>{renderRoutes(route.routes)}</div>
  </div>
);


export default { component: Index };
