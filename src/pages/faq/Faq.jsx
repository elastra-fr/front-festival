import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Faq.css';
import FaqItem from '../../components/faqItem/FaqItem';

const Faq = () => {
    return (
<>
<Header />

<main className='mainFaq'>

<FaqItem titre='Dates et Lieu' contenu={['Dates du Festival : [Insérer les dates du festival ici]' , 'Lieu : [Insérer le lieu du festival ici]', "Adresse : [Insérer l'adresse complète du lieu du festival ici]" ]} />





</main>

<Footer />
</>

    );
};

export default Faq;