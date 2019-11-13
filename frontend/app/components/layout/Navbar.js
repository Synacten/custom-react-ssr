import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link to="/">Root</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
