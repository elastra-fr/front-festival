import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Live from "../../components/live/Live";
import Map2 from "../../components/map/Map2";
import "./Fullmap.css";

const FullMap = () => {
  document.title = "Carte interactive | NATION SOUND";
  window.scrollTo(0, 0);

  return (
    <>
      <Header />

      <main className="mainFullMap">
        <Live />

        <Map2 />
      </main>

      <Footer />
    </>
  );
};

export default FullMap;
