import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
        <nav className="navigation">
        <Link to="/home" className="link">
        Home
        </Link>
        <Link to="/about" className="link">
        About
        </Link>
        <Link to="/services" className="link">
            Services
        </Link>
        <Link to="/tutors" className="link">
        Our Tutors
        </Link>
        <Link to="/contact" className="link">
            Contact
        </Link>
        
            </nav>
        </div>
    );
};

export default Header;