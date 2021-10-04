import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>

        <nav className="navigation">
        <Link to="/home" className="link">
        <i class="fas fa-home"></i> Home
        </Link>
        <Link to="/about" className="link">
        <i class="fas fa-address-card"></i> About
        </Link>
        <Link to="/services" className="link">
        <i class="fas fa-car"></i> Services
        </Link>
        <Link to="/tutors" className="link">
        <i class="fas fa-male"></i> Our Tutors
        </Link>
        <Link to="/contact" className="link">
        <i class="fas fa-envelope-square"></i> Contact
        </Link>
        
            </nav>
        </div>
    );
};

export default Header;