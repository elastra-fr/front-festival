import React, {useEffect, useState} from "react";
//import Header from "../components/header/Header";
//import Footer from "../components/footer/Footer";
import FaqItem from "../components/faqItem/FaqItem";
import TuilesLiens from "../components/tuilesliens/TuilesLiens";
import { fetchFaq } from "../api";

const Faq = () => {
  document.title = "Informations - FAQ | NATION SOUND";
  window.scrollTo(0, 0);

const [faq, setFaq] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFaq();
        setFaq(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);



  return (
    <>


      <main className="mainFaq">
        <h1>Informations - FAQ</h1>

              {faq.map((category, index) => (
          <FaqItem
            key={index}
            titre={category.category}
            contenu={category.contents.map((content) => (
              <div key={content.id}>
                <h4>{content.title}</h4>
                <p>{content.content}</p>
              </div>
            ))}
          />
        ))}


        <div className="moreInfos">
          <p>
            Vous pouvez également localiser les éléments du festival sur notre
            carte interactive :
          </p>

          <TuilesLiens
            txt="Voir la carte interactive"
            img="/images/mapneedle.avif"
            to="/map"
          />

          <p>
            Pour toute autre question ou préoccupation, veuillez nous contacter
            à l&apos;adresse e-mail fournie sur notre site web. Nous sommes
            impatients de vous accueillir au festival et de vous offrir une
            expérience inoubliable !
          </p>
        </div>
      </main>

  
    </>
  );
};

export default Faq;
