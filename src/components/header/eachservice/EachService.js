import React from 'react';
import './EachService.css'
const EachService = (props) => {
    const {name,Instructor,price,img}=props.unique
    return (
        <div className="bg-eachservice">
            
  <div class="col">
    <div class="card service-card  h-100">
      <img src={img} class="card-img-top p-2" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text text-center">Instructor:{Instructor}</p>
        <h1 class="text-center">{price}</h1>
      </div>
      <div class="card-footer">
        <small class="text-muted">View More</small>
      </div>
    </div>
  </div>
</div>
    
    );
};

export default EachService;