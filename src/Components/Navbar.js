import "./Navbar.css";
import React, {useContext} from "react";
import UserMenu from './UserMenu'
import {Link} from "react-router-dom";

function Navbar() {
<<<<<<< HEAD
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
=======
    return (
        <nav className="relative flex items-center justify-between px-4 py-4 bg-white Navbar">
            <div className="lg:hidden">
                <button className="flex items-center p-3 text-blue-600 navbar-burger">
                    <svg className="block w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <ul className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                <li className="item"><Link to="/">HOME</Link></li>
                <li className="item">
                    DESTINATIONS
                    <ul className="z-50 dropdown">
                        <li className="dropdown_item"><Link to="/albania">Albania</Link></li>
                        <li className="dropdown_item"><Link to="/austria">Austria</Link></li>
                        <li className="dropdown_item">Czech Republic</li>
                        <li className="dropdown_item">France</li>
                        <li className="dropdown_item">Greece</li>
                        <li className="dropdown_item">Iceland</li>
                        <li className="dropdown_item"><Link to='/italy'>Italy</Link></li>
                        <li className="dropdown_item"><Link to='/malta'>Malta</Link></li>
                        <li className="dropdown_item"><Link to='/romania'>Romania</Link></li>
                        <li className="dropdown_item"><Link to='/spain'>Spain</Link></li>
                        <li className="dropdown_item"><Link to='/moldova'>Moldova</Link></li>
                        <li className="dropdown_item"><Link to='/turkey'>Turkey</Link></li>
                    </ul>
                </li>
                <li className="item"><Link to="/tips">TRAVEL TIPS</Link></li>
                <li className="item1">
                    <a href='mailto: eurotravelguide2023@gmail.com'>
                        CONTACT</a>
                    <ul className="dropdown1">
                        <li className="dropdown_item1">Email: eurotravelguide2023@gmail.com</li>
                        <li className="dropdown_item1">Contact: 0232 080 332</li>
                    </ul>
                </li>
>>>>>>> e1c1452b69716d276f05e4632f349e61c5b35ac1
            </ul>
            <UserMenu/>
        </nav>


    );
}

export default Navbar;
