import "./Navbar.css";
import React from "react";

function Navbar() {
  return (

    <div className="Navbar" style={{ backgroundColor: "white" }}>
      <nav className="nav_bar">
        <ul>
          <li className="item">
            DESTINATIONS
            <ul className="z-50 dropdown">
              <li className="dropdown_item">
                <a href="/albania">Albania</a>
              </li>
              <li className="dropdown_item">Austria</li>
              <li className="overflow-ellipsis dropdown_item whitespace-nowrap">
                Czech Republic
              </li>
              <li className="dropdown_item">France</li>
              <li className="dropdown_item">Greece</li>
              <li className="dropdown_item">Iceland</li>
              <li className="dropdown_item">Italy</li>
              <li className="dropdown_item">Malta</li>
              <li className="dropdown_item">Romania</li>
              <li className="dropdown_item">Spain</li>
            </ul>
          </li>
          <li className="item">
            <a href="/tips" className="uppercase">
              Travel Tips
            </a>
          </li>
          <li className="item">
            <a href="#">ABOUT US</a>
          </li>
          <li className="item1">
            <a href="mailto: eurotravelguide2023@gmail.com">CONTACT</a>
            <ul className="dropdown1">
              <li className="dropdown_item1">
                Email: eurotravelguide2023@gmail.com
              </li>
              <li className="dropdown_item1">Contact: 0232 080 332</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
