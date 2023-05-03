import React, { useState } from 'react';
import SearchBar from '../Searchbar/SearchBar';
import './Header.css';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className={`nav-list ${showNav ? 'mobile-show' : ''}`}>
          <li><a href="#">Me Weeb</a></li>
          <li><a href="#">Genre</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">NEWS</a></li>
          <li><a href="#">ONAs</a></li>
          <li><a href="#">Premium</a></li>
          <li className="nav-item-right"><a href="#">login</a></li>
        </ul>
        <button className="nav-toggle" onClick={toggleNav}>
          {showNav ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          Menu
        </button>
      </nav>
    </header>
  );
}

export default Header;
