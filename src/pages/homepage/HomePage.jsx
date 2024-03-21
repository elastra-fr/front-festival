
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TuilesLiens from "../../components/tuilesliens/TuilesLiens";
import "./HomePage.css";
import Live from "../../components/live/Live";
import SynthProg from "../../components/synthprog/SynthProg";
import { useContext, useState } from "react"; 
import Actu from "../../components/actu/Actu";




const HomePage = ({concerts}) => {

//Titre de la page
  document.title = 'Accueil | NATION SOUND';

  return (
    <>
      <Header />

      <main>
        <section id="live" className="live">
          <Live concerts={concerts}/>
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



      <Footer />

    </>
  );
};

export default HomePage;
