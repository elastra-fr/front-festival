import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Actu from '../../components/actu/Actu';
import { useLocation } from 'react-router-dom';



const FullActu = () => {

const location = useLocation();
document.title = 'Actu | NATION SOUND';
    window.scrollTo(0, 0);
console.log(location);
    return (
<>
<Header />

<main className='mainFullActu'>

<Actu />

</main>

<Footer />

</>
    );
};

export default FullActu;