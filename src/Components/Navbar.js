import "./Navbar.css";
import React from "react";
import UserMenu from './userMenu'

function Navbar() {
  return (
    
    <div className="Navbar">
      <div className="grid items-center float-right">
        <UserMenu />
      </div>
      <nav className="nav_bar">
        <ul>
          <li className="item"><a href='/'>HOME</a></li>
          <li className="item">
            DESTINATIONS
            <ul className="z-50 dropdown">
              <li className="dropdown_item"><a href='/albania' target='_blank'>Albania</a></li>
              <li className="dropdown_item"><a href='/austria' target="_blank">Austria</a></li>
              <li className="dropdown_item"><a href="/czech" target="_blank">Czech Republic</a></li>
              <li className="dropdown_item"><a href="/france" target="_blank">France</a></li>
              <li className="dropdown_item"><a href="/greece" target="_blank">Greece</a></li>
              <li className="dropdown_item"><a href="/iceland" target="_blank">Iceland</a></li>
              <li className="dropdown_item"><a href='/italy' target='_blank'>Italy</a></li>
              <li className="dropdown_item"><a href='/malta' target='_blank'>Malta</a></li>
              <li className="dropdown_item"><a href='/romania' target='_blank'>Romania</a></li>
              <li className="dropdown_item"><a href='/spain' target='_blank'>Spain</a></li>
              <li className="dropdown_item"><a href='/moldova' target='_blank'>Moldova</a></li>
              <li className="dropdown_item"><a href='/turkey' target='_blank'>Turkey</a></li>
            </ul>
          </li>
          <li className="item"><a href="/tips" target="_blank">TRAVEL TIPS</a></li>
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

      
    </div>
  );
}

export default Navbar;
