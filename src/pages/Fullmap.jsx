//import React from "react";
//import Header from "../components/header/Header";
//import Footer from "../components/footer/Footer";
import Live from "../components/live/Live";
import ApiMap from "../components/map/ApiMap";


const FullMap = () => {
  document.title = "Carte interactive | NATION SOUND";
  window.scrollTo(0, 0);

  return (
    <>

      <main className="mainFullMap">
        <Live />

        <ApiMap />
      </main>

    </>
  );
};

export default FullMap;
