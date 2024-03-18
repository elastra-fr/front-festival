
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TuilesLiens from "../../components/tuilesliens/TuilesLiens";
import "./HomePage.css";
import Live from "../../components/live/Live";
import SynthProg from "../../components/synthprog/SynthProg";
import TuileOpen from "../../components/tuileopen/TuileOpen";
import { useContext, useState } from "react"; 
import Map from "../../components/map/Map";
import Actu from "../../components/actu/Actu";




const HomePage = () => {

//Titre de la page
  document.title = 'Accueil | NATION SOUND';

  



//const [mapShow, setMapShow] = useState(false);



/*const handleTuileOpen = () => {


  setMapShow(!mapShow);
  console.log(mapShow);
}*/






  return (
    <>
      <Header />

      <main>
        <section className="live">
          <Live />
        </section>

        <section id="prog" className="prog">
        <SynthProg />
        </section>

        <section id='actu' className="actu">
            <Actu />

            
        </section>

        <section className="homemap">

       
        </section>

        <div className="tuilesWrapper">
          
          <TuilesLiens txt="Ouvrir notre carte interactive" img="/images/mapneedle.avif" to="/map"/>
          <TuilesLiens txt="Informations - FAQ" img="/images/faq.avif" to="/faq" />
        </div>
      </main>

     {/*
mapShow ? <Map /> : null

     */} 


      <Footer />

    </>
  );
};

export default HomePage;
