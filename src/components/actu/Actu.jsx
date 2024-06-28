import "./Actu.css";
import { fetchNews } from "../../api";
import { Link, useLocation } from "react-router-dom";
import ItemActu from "../itemactu/ItemActu";
import React, { useState, useEffect } from "react";

const Actu = () => {
  const [News, setNews] = useState([]);

  const location = useLocation().pathname;

  let limit;
  //Limitation du nombre d'articles affichés en fonction de la page
  if (location === "/home" || location === "/") {
    limit = "all";
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchNews(limit);
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="mainActu">
        <h2>ACTUALITE NATION SOUND </h2>
        {location === "/home" ? (
          <>
            <Link to="/fullactu" className="lienFullActu">
              Voir l'actu complète du festival
            </Link>
          </>
        ) : (
          ""
        )}

        <section className="importantActu">
          <h2>Dernières Actualités</h2>

          {News.map((actu, index) => {
            return (
              <ItemActu
                key={index}
                date={actu.newsDate.date}
                intitule={actu.title}
                texteactu={actu.content}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Actu;
