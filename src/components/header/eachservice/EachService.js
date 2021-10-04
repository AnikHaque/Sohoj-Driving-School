import React from 'react';

const EachService = (props) => {
    const {name,Instructor,price,img}=props.unique
    return (
        <div>
            
  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."></img>
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