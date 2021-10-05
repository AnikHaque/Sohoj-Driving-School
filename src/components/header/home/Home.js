import React from 'react';
import Banner from '../banner/Banner';
import Description from '../description/Description';
import Features from '../features/Features';
import Footer from '../footer/Footer';
import Success from '../success/Success';
import Unique from '../uniqueService/Unique';
import './Home.css'
const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <Features></Features>
    <Success></Success>
    <Unique></Unique>
    <Description></Description>
    <Footer></Footer>
        </div>
    );
};

export default Home;