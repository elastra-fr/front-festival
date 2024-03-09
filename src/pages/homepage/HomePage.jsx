
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TuilesLiens from "../../components/tuilesliens/TuilesLiens";
import "./HomePage.css";
import Live from "../../components/live/Live";
import SynthProg from "../../components/synthprog/SynthProg";
import TuileOpen from "../../components/tuileopen/TuileOpen";
import { useContext, useState } from "react"; 
import Map from "../../components/map/Map";



const HomePage = () => {

  



const [mapShow, setMapShow] = useState(false);



const handleTuileOpen = () => {


  setMapShow(!mapShow);
  console.log(mapShow);
}






  return (
    <>
      <Header />

      <main>
        <section className="live">
          <Live />
        </section>

        <section className="prog">
        <SynthProg />
        </section>

        <section className="actu">
            
        </section>

        <section className="homemap">
          <TuileOpen
            txt="Ouvrir la carte interactive"
            img="/images/mapneedle.jpg"
            click={handleTuileOpen}
          
          />
       
        </section>

        <div className="tuilesWrapper">
          <TuilesLiens
            txt="Informations pratiques"
            img="/images/info.jpg"
            to="/infos"
          />
          <TuilesLiens txt="FAQ" img="/images/faq.jpg" to="/faq" />
        </div>
      </main>

     {
mapShow ? <Map /> : null

     } 


      <Footer />

    </>
  );
};

export default HomePage;
