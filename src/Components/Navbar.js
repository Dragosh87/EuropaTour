
import './Navbar.css';
import React from 'react';

function Navbar() {



  return (
    <div className="Navbar" style={{ flex: '0 0 30%', backgroundColor: 'white' }}>
    <nav className="nav_bar">
  <ul>
    <li className="item">
      DESTINATIONS
      <ul className="dropdown">
        <li className="dropdown_item">Albania</li>
        <li className="dropdown_item">Andorra</li>
        <li className="dropdown_item">Austria</li>
        <li className="dropdown_item">Belarus</li>
        <li className="dropdown_item">Belgium</li>
        <li className="dropdown_item">Croatia</li>
        <li className="dropdown_item">Cyprus</li>
        <li className="dropdown_item">Czechia</li>
        <li className="dropdown_item">Denmark</li>
        <li className="dropdown_item">Estonia</li>
        <li className="dropdown_item">France</li>
        <li className="dropdown_item">Germany</li>
        <li className="dropdown_item">Gibraltar</li>
        <li className="dropdown_item">Greece</li>
        <li className="dropdown_item">Guernsay</li>
        <li className="dropdown_item">Hungary</li>
        <li className="dropdown_item">Iceland</li>
        <li className="dropdown_item">Irland</li>
        <li className="dropdown_item">Italy</li>
        <li className="dropdown_item">Jersey</li>
      </ul>
    </li>
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
      <img src="https://media.istockphoto.com/id/1199315910/vector/europe-union-vector-star-icon-european-union-flag-symbol-euro-icon-vector.jpg?s=612x612&w=0&k=20&c=z7wwiYq3XAwHedcqGJfcWZWk3mXJpKeacRjtCNhw13Q=" alt="logoEuropa" width="200" height="200"></img>
      <h1 className='header'>Europe Travel Guide</h1>
      </div>
      <hr />
    </div>
  );
}



export default Navbar;