import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="learns">
      <div className='learns-navbar'>
        <div className="learns-navbar-links">
          <div className="learns-navbar-links-logo">
            <img src="dvb" alt="logo" />
          </div>
          <div className="learns-navbar-links-content">
              <p><a href="#/">Home</a></p>
              <p><a href="#/About">About</a></p>
              <p><a href="#/Features">Features</a></p>
              <p><a href="#/Menu">Menu</a></p>
          </div>
        </div>
          <div className="learns-navbar-sign">
            <p><a href="#Sign In">Sign In</a></p>
            <input type="button" formTarget='_blank' value="Sign Up" />
          </div>
      </div>
      
      </div>

  );
}

export default Navbar;
