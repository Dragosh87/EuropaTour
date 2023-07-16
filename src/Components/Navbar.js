import "./Navbar.css";
import React, {useContext} from "react";
import UserMenu from './UserMenu'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white Navbar">
            <div className="lg:hidden">
                <button className="navbar-burger flex items-center text-blue-600 p-3">
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                <li className="item"><Link to="/">HOME</Link></li>
                <li className="item">
                    DESTINATIONS
                    <ul className="z-50 dropdown">
                        <li className="dropdown_item"><Link to="/albania">Albania</Link></li>
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
