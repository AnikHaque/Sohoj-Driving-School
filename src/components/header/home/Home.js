import React from 'react';
import Banner from '../banner/Banner';
import Description from '../description/Description';
import Features from '../features/Features';
import Footer from '../footer/Footer';
import Gallary from '../gallary/Gallary';
import Package from '../otherpackages/Package';
import Success from '../success/Success';
import Unique from '../uniqueService/Unique';
import './Home.css';
const Home = () => {
    return (
    <div className="home">
    <Banner></Banner>
    <Features></Features>
    <Success></Success>
    <Unique></Unique>
    <Description></Description>
    <Gallary></Gallary>
    <Package></Package>
    <Footer></Footer>
        </div>
    );
};

export default Home;