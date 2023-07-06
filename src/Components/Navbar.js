import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
const [open, setOpen] = useState(false);

const handleOpen = () => {
  setOpen(!open);
};

  return (
    <div className="Navbar" style={{ flex: '0 0 30%', backgroundColor: 'white' }}>
    <nav className="nav_bar">
  <ul>
    <li className="item">
      DESTINATIONS
      <ul className="dropdown">
        <li className="dropdown_item">Option 1</li>
        <li className="dropdown_item">Option 2</li>
        <li className="dropdown_item">Option 3</li>
      </ul>
    </li>
    <li className="item"><a href="#">ABOUT US</a></li>
    <li className="item"><a href="#">CONTACT</a></li>
  </ul>
</nav>

      <h1 className='header'>Europe Travel Guide</h1>
      <hr />

    </div>
  );
}

export default Navbar;