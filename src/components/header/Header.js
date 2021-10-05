import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
<div className="bg-dark p-4">
<div class="container">
  <div class="row">
  

    <div class="col-3 text-white">
      <h5><i class="fas fa-map-marker-alt"></i> Mirpur 2 no,Dhaka</h5>
    </div>
    <div class="col-3 text-white">
     <h5><i class="fas fa-phone"></i> +880 1814803281</h5>
    </div>
    <div class="col-3 text-white">
    <i class="far fa-envelope"></i> ekramul15-811@diu.edu.bd
    </div>
    <div class="col-3 text-white">
    <i class="fas fa-clock"></i> 9AM to 7PM/7days
    </div>
  </div>
</div>
</div>
        <nav>
          <div className="navigation">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvWDkuYNZ2vESiidQFD3PMGUnHRctUGZ-1w&usqp=CAU" className="img-fluid logo"></img>
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
</div>
            </nav>
        </div>
    );
};

export default Header;