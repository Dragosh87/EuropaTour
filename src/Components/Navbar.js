
import './Navbar.css';
import React from 'react';

function Navbar() {



  return (
    <div className="Navbar" style={{ flex: '0 0 30%', backgroundColor: 'white' }}>
    <nav className="nav_bar">
  <ul>
    <li className="item">
      DESTINATIONS
      <ul className="z-50 dropdown">
        <li className="dropdown_item"><a href='/albania' target='_blank'>Albania</a></li>
        <li className="dropdown_item">Austria</li>
        <li className="dropdown_item">Czech Republic</li>
        <li className="dropdown_item">France</li>
        <li className="dropdown_item">Greece</li>
        <li className="dropdown_item">Iceland</li>
        <li className="dropdown_item">Italy</li>
        <li className="dropdown_item">Malta</li>
        <li className="dropdown_item">Romania</li>
        <li className="dropdown_item">Spain</li>
      </ul>
    </li>
    <li className="item">TRAVEL TIPS</li>
    <li className="item"><a href="#">ABOUT US</a></li>
    <li className="item1">
      <a href='mailto: eurotravelguide2023@gmail.com'>
         CONTACT</a>
      <ul className="dropdown1">
          <li className="dropdown_item1">Email: eurotravelguide2023@gmail.com</li>
          <li className="dropdown_item1">Contact: 0232 080 332</li>
      </ul>
      </li>
  </ul>
</nav>
    <div className="title_of_page">
      <img className="w-24 h-24" src="https://media.istockphoto.com/id/1199315910/vector/europe-union-vector-star-icon-european-union-flag-symbol-euro-icon-vector.jpg?s=612x612&w=0&k=20&c=z7wwiYq3XAwHedcqGJfcWZWk3mXJpKeacRjtCNhw13Q=" alt="logoEuropa" width="200" height="200"></img>
      <h1 className='header'>Europe Travel Guide</h1>
      </div>
      <hr />
    </div>
  );
}



export default Navbar;