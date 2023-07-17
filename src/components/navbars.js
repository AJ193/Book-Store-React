import React from 'react';
import { Link } from 'react-router-dom';
import '../CSSmodules/navbar.css';

const Navbars = () => (
  <header>
    <nav>
      <ul className="menuList">
        <li><Link className="links logo" to="/">Bookstore</Link></li>
        <li><Link className="links-mainLink" to="/">Books</Link></li>
        <li><Link className="links" to="/category">Category</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbars;