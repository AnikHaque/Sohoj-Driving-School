import React from 'react';
import './Banner.css'
import {Button} from 'react-bootstrap';
const Banner = () => {
    return (
        <div className="homepage">
           <h1 className="banner-heading">
               Helping you to make 
               <br></br>
               yourself an Expert Driver
               </h1> 
               <b>Driving is an art</b>
               <br></br>
               <Button variant="info" className="button-enroll">Enroll Now</Button>
               <Button variant="outline-light" className="button-learn">Learn More</Button>{' '}

               
        </div>
    );
};

export default Banner;