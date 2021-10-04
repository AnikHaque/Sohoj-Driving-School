import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Individual = (props) => {
    const {name,Instructor,img,price} = props.service
    return (
        <div>

  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card- text-center">Instructor:{Instructor}</p>
        <h3 className="text-center"> {price}</h3>
      </div>
      <div class="card-footer">
        <small class="text-muted">
            View Details
        </small>
      </div>
      
    </div>
  </div>
 
  
</div>
        
    );
};

export default Individual;