import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file exists

const Navbar = () => {
    return (
        <nav className="navbar">
            <nav class="navbar">
            <h1 class="navbar-title text-5xl font-bold tracking-wider text-gray-800 transform transition-all ease-in-out duration-500 hover:text-indigo-600 hover:scale-105">
  RK JEWELS
</h1>

       </nav>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
