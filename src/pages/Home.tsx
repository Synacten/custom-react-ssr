import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => (
  <div>
    <Helmet>
      <meta name="description" content="Helmet application Home" />
      <title>Home</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Home</h1>
    <Link to="/about">About</Link>
    <br />
    <Link to="/todo">Todo</Link>
  </div>
);

export default { component: Home };
