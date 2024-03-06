//import React from 'react';
//import Socials from '../../components/socials/Socials';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import TuilesLiens from '../../components/tuilesliens/TuilesLiens';
import './HomePage.css';

const HomePage = () => {
    return (
        <>
        <Header/>
       
       <div className='tuilesWrapper'>
        <TuilesLiens txt="Informations pratiques" img="/images/info.jpg" to="/infos"/>
        <TuilesLiens txt="FAQ" img="/images/faq.jpg" to="/faq"/>
</div>

    <Footer/>
        </>
    );
};

export default HomePage;