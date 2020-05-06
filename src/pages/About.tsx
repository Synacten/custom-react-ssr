import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';


// eslint-disable-next-line no-shadow
const About = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>About</h1>
    <Link to="/">Home</Link>
  </div>
);

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = { };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps,
  )(About),
};
