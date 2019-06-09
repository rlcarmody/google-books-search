import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar is-info">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img src="/assets/book.png" alt="logo" />
        </div>
      </div>
      <div className="navbar-start">
        <a className="navbar-item" href="/">Home</a>
        <a className="navbar-item" href="/saved">Saved</a>
      </div>
    </div>
  );
};

export default Navbar;
