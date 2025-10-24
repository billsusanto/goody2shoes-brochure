import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Goody2Shoes Matcha</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#brand">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#cta">Visit Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
