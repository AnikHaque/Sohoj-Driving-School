import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import EachService from '../eachservice/EachService';
import './Unique.css'
const Unique = () => {
    const [uniques,setUniques] = useState([])
    useEffect(() => {
       fetch('./homedriving.JSON')
       .then(res=>res.json())
       .then(data=>setUniques(data))
        
    }, [])
    return (
        <div>
           <h1 className="unique-header">Services We Provide:</h1>
           <div>

           <div class="row row-cols-1 row-cols-md-3 g-4">
    {
    uniques.map(unique=><EachService 
        unique={unique}
        key={unique.key}
        >

    </EachService> )
    }
    </div>   
     
</div> 
</div>
    );
};

export default Unique;