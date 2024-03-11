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
<FaqItem titre="Horaires" contenu={["Heures d'ouverture du Festival : Les portes ouvrent à [insérer l'heure d'ouverture] chaque jour du festival.", "Horaires des Performances : Consultez l'horaire complet des performances sur notre site web et sur les panneaux d'affichage du festival."]} />
<FaqItem titre="Accès au festival" contenu={["Transport en Commun : [Insérer les informations sur les transports en commun disponibles, y compris les arrêts de bus ou de train les plus proches du site du festival.]", "Parking : Des options de stationnement seront disponibles à proximité du site du festival. Veuillez suivre les indications pour le stationnement.", "Navettes : Des navettes gratuites seront mises à disposition pour certains parkings éloignés. Veuillez consulter notre site web pour plus de détails."]} />




</main>

<Footer />
</>

    );
};

export default Faq;