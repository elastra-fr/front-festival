
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TuilesLiens from "../../components/tuilesliens/TuilesLiens";
import "./HomePage.css";
import Live from "../../components/live/Live";
import SynthProg from "../../components/synthprog/SynthProg";

const HomePage = () => {
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

        <section className="map"></section>

        <div className="tuilesWrapper">
          <TuilesLiens
            txt="Informations pratiques"
            img="/images/info.jpg"
            to="/infos"
          />
          <TuilesLiens txt="FAQ" img="/images/faq.jpg" to="/faq" />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
