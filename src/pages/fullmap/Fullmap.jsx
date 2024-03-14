import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Map from '../../components/map/Map';
import Live from '../../components/live/Live';
import Map2 from '../../components/map/Map2';


const FullMap = () => {

document.title = 'Carte interactive | NATION SOUND';


    return (
<>
<Header />

<main className='mainFullMap'>
<Live/>


<Map2 />



</main>





<Footer />


</>



    );
};

export default FullMap;