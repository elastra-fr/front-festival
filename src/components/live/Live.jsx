import React, { useEffect } from "react";
import "./Live.css";
import LiveConcertItem from "../liveconcertitem/LIveConcertItem";

const Live = () => {
  const [fullConcerts, setFullConcerts] = React.useState([]);
  const [liveConcerts, setLiveConcerts] = React.useState([]);
  const [refresh, setRefresh] = React.useState("");

  const getConcerts = () => {
    fetch(
      "https://www.api.nationsound2024-festival.fr/wp-json/wp/v2/concert?per_page=100"
    )
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => {
          return a - b;
        });
        setFullConcerts(data);
      });
  };

  useEffect(() => {
    getConcerts();
  }, []);

  useEffect(() => {
    isLive();
  }, [fullConcerts]);

  const equivalentJ = (date) => {
    switch (date) {
      case "2024-04-19":
        return "J1";
      case "2024-04-20":
        return "J2";
      case "2024-04-21":
        return "J3";
      default:
        return "KO";
    }
  };

  let nowH = new Date().getHours();

  const isLive = () => {
    let today = "2024-04-20";
    const filters = {
      jour: equivalentJ(today),
      horaire: nowH,
    };

    let arrayToFilter = fullConcerts;

    let filteredArray = arrayToFilter.filter(function (item) {
      return Object.keys(filters).every((key) => {
        return filters[key] == item.acf[key];
      });
    });

    setRefresh(new Date().toLocaleTimeString());
    setLiveConcerts(filteredArray);
  };

  useEffect(() => {
    setTimeout(() => {
      isLive();
    }, 120000);
  }, [liveConcerts]);

  return (
    <>
      <div className="mainLive">
        <div className="liveTitle">
          <img src="/images/live-12298.svg" alt="Live Title" />
          <span className="refreshInfos">
            {"(Mise à jour : " + refresh + ")"}
          </span>
        </div>
        <div className="liveWrapper">
          {liveConcerts.length < 1 ? (
            <p>Pas de Concert(s) en cours actuellement</p>
          ) : (
            liveConcerts.map((concerts, index) => {
              return (
                <LiveConcertItem
                  key={index}
                  scene={concerts.acf.scene}
                  artiste={concerts.acf.groupe}
                  genre={concerts.acf.genre}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Live;
