import React from 'react';
import { Link } from 'react-router-dom';

const myNavbar = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Bookstore</Link></li>
        <li><Link to="/">Booklist</Link></li>
        <li><Link to="/category">Category</Link></li>
      </ul>
    </nav>
  </header>
);

export default myNavbar;
