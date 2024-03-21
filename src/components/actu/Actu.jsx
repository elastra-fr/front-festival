import React from "react";
import { useState, useEffect } from "react";
import ItemActu from "../itemactu/ItemActu";
import "./Actu.css";
import { Link, useLocation } from "react-router-dom";

const Actu = () => {
  const location = useLocation().pathname;

  let nbperpage;
//Limitation du nombre d'articles affichés en fonction de la page
  switch (location) {
    case "/":
      nbperpage = 10;

      break;

    case "/home":
      nbperpage = 10;

      break;

    case "/fullactu":
      nbperpage = 100;

      break;

    default:
  }


  const [fullActu, setFullActu] = useState([]);
  const [importantActu, setImportantActu] = useState([]);
  const [actu, setActu] = useState([]);


//Récupération des articles du composant Actu

  const getActu = () => {
    fetch(
      "https://www.api.nationsound2024-festival.fr/wp-json/wp/v2/actus?per_page=" +
        nbperpage
    )
      .then((response) => response.json())
      .then((data) => {
     
        setFullActu(data);
      });
  };

  useEffect(() => {
    getActu();
  }, []);

  useEffect(() => {
    if (fullActu.length > 0) {
      setImportantActu(
        fullActu.filter((actu) => actu.acf.type === "Dernière minute")
      );
      setActu(fullActu.filter((actu) => actu.acf.type !== "Dernière minute"));
    }
  }, [fullActu]);

  useEffect(() => {}, [importantActu, actu]);

  return (
    <>
      <div className="mainActu">
        <h2>ACTUALITE NATION SOUND </h2>
        {location === "/home" ? (
          <Link to="/fullactu" className="lienFullActu">
            Voir l'actu complète du festival
          </Link>
        ) : (
          ""
        )}

        <section className="importantActu">
          <h2>Dernière Minute</h2>

          {importantActu.map((actu, index) => {
            return (
              <ItemActu
                key={index}
                date={actu.date}
                intitule={actu.acf.intitule}
                texteactu={actu.acf.texteactu}
              />
            );
          })}
        </section>

        <section className="regularActu">
          <h2>Autres Actualités</h2>

          {actu.map((actu, index) => {
            return (
              <ItemActu
                key={index}
                date={actu.date}
                intitule={actu.acf.intitule}
                texteactu={actu.acf.texteactu}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Actu;
