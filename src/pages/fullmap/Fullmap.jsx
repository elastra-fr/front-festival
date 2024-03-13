import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Map from '../../components/map/Map';
import Live from '../../components/live/Live';


const FullMap = () => {
    return (
<>
<Header />

<main className='mainFullMap'>
<Live/>

<Map />



</main>





<Footer />


</>



    );
};

export default FullMap;