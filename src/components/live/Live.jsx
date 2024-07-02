import React, { useEffect } from "react";
import "./Live.css";
import LiveConcertItem from "../liveconcertitem/LIveConcertItem";
import { fetchLiveConcerts } from "../../api";

const Live = () => {
  const [liveConcerts, setLiveConcerts] = React.useState([]);
  const [refresh, setRefresh] = React.useState("");


  useEffect(() => {
async function fetchData() {
try {
const liveConcertsData = await fetchLiveConcerts();
setLiveConcerts(liveConcertsData);
setRefresh(new Date().toLocaleTimeString());
} catch (error) {
console.error(error);
}
}
fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 180000); 


    return () => clearInterval(interval);


  }, []);





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
            liveConcerts.map((concert, index) => {
              return (
                <LiveConcertItem
                  key={index}
                  scene={concert.location}
                  artiste={concert.artist}
                  genre={concert.musicStyle}
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
