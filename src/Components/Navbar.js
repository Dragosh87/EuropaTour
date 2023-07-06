import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar" style={{ flex: '0 0 30%', backgroundColor: 'white' }}>
      <nav className="nav_bar">
        <ul>
          <li>DESTINATIONS</li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
      
      <h1 className='header'>Europe Travel Guide</h1>
      <hr />

    </div>
  );
}

export default Navbar;