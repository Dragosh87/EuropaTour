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
          <li className="item"><a href='/' target="_blank">HOME</a></li>
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
    </div>
  );
}

export default Navbar;
