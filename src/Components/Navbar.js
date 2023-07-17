import "./Navbar.css";
import React, {useContext} from "react";
import UserMenu from './UserMenu'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
     
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
        <UserMenu/>
        </nav>
        
</div>

    );
}

export default Navbar;
