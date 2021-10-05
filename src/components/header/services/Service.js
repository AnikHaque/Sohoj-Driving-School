import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Individual from '../individualService/Individual';
import './Service.css';
const Service = () => {
const [services, setServices] =useState([])
useEffect(()=>{
fetch('/driving.JSON')
.then(res=>res.json())
.then(data=>setServices(data))


},[])
    return (
        <div className="servicess">
<div class="container">
  <div class="row">
  <div class="row row-cols-1 row-cols-md-3 g-4">
    {
    services.map(service=><Individual service={service}></Individual>)
    }
    </div>
  </div>
</div>

<Footer></Footer>
        </div>
    );
};

export default Service;