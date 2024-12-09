import React from 'react';
//import Header from '../components/header/Header';
//import Footer from '../components/footer/Footer';
import Actu from '../components/actu/Actu';



const FullActu = () => {

document.title = 'Actu | NATION SOUND';
    window.scrollTo(0, 0);

    return (
<>


<main className='mainFullActu'>

<Actu />

</main>



</>
    );
};

export default FullActu;