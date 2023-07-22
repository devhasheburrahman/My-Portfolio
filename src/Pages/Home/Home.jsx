import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import PricePlans from '../PricePlans/PricePlans';
import Recommendations from '../recommendations/Recommendations';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <PricePlans />
            <Recommendations />
            <Education />
            <Contact />
            <Footer/>



        </div>
    );
};

export default Home;