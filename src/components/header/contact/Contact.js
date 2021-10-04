import React from 'react';
import Footer from '../footer/Footer';
import ContactBanner from './ContactBanner';
import ContactMain from './ContactMain';


const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <ContactMain></ContactMain>
            <Footer></Footer>
        </div>
    );
};

export default Contact;