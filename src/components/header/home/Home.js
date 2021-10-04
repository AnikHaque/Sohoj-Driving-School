import React from 'react';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import Unique from '../uniqueService/Unique';
import './Home.css'
const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <Unique></Unique>
    <Footer></Footer>
        </div>
    );
};

export default Home;