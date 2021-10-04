import React from 'react';
import Banner from '../banner/Banner';
import Description from '../description/Description';
import Footer from '../footer/Footer';
import Unique from '../uniqueService/Unique';
import './Home.css'
const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <Unique></Unique>
    <Description></Description>
    <Footer></Footer>
        </div>
    );
};

export default Home;