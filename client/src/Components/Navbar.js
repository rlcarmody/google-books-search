import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar is-info">
    <div className="navbar-brand">
      <div className="navbar-item">
        <img src="/assets/book.png" alt="logo" />
      </div>
    </div>
    <div className="navbar-start">
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/saved">Saved</Link>
    </div>
  </div>
);


export default Navbar;
