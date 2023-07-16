import "./Navbar.css";
import React, {useContext} from "react";
import UserMenu from './UserMenu'
import {Link} from "react-router-dom";

function Navbar() {
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
                <ul className="z-50 dropdown">
              <li className="dropdown_item"><a href='/albania'>Albania</a></li>
              <li className="dropdown_item">Austria</li>
              <li className="dropdown_item">Czech Republic</li>
              <li className="dropdown_item">France</li>
              <li className="dropdown_item">Greece</li>
              <li className="dropdown_item">Iceland</li>
              <li className="dropdown_item"><a href='/italy'>Italy</a></li>
              <li className="dropdown_item"><a href='/malta'>Malta</a></li>
              <li className="dropdown_item"><a href='/romania'>Romania</a></li>
              <li className="dropdown_item"><a href='/spain'>Spain</a></li>
              <li className="dropdown_item"><a href='/moldova'>Moldova</a></li>
              <li className="dropdown_item"><a href='/turkey'>Turkey</a></li>
            </ul>
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
            </ul>
            <UserMenu/>

        </nav>


    );
}

export default Navbar;
