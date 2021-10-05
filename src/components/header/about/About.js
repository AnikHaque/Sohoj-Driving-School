import React from 'react';
import Footer from '../footer/Footer';
import Header from '../Header';
import Intro from './Intro';
import './About.css'
const About = () => {
    return (
        <div className="about">
            <Intro></Intro>
            <Footer></Footer>
        </div>
    );
};

export default About;