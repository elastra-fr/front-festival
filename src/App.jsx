import { useState, createContext, useEffect } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Header from './components/header/header'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Infos from "./pages/infos/Infos";
import Faq from "./pages/faq/Faq";
import FullMap from "./pages/fullmap/Fullmap";
import Mentions from "./pages/mentions/Mentions";

function App() {
  const [modal, setModal] = useState(false);
  const [fullConcerts, setFullConcerts] = useState([]);

  const handleModal = () => {
    setModal(!modal);
  };

  const getConcerts = () => {
    fetch("http://festival.local/wp-json/wp/v2/concert?per_page=100")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        data.sort((a, b) => {
          return a.acf.horaire - b.acf.horaire;
        });
        setFullConcerts(data);
        //setFilteredConcerts(data);
      });
  };

  useEffect(() => {
    getConcerts;
  }, []);

  useEffect(() => {
   // console.log(fullConcerts);
  }, [fullConcerts]);

  //Create context map
  {
    /*const MapStatus = createContext();


const Map = () => {

const [mapStatus, setMapStatus] = useState(false);

return(

<MapStatus.Provider value={mapStatus}>


  </MapStatus.Provider>  


);




}*/
  }

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage concerts={fullConcerts} />} />
          <Route path="/home" element={<HomePage concerts={fullConcerts} />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/map" element={<FullMap />} />
          <Route path="/mentions" element={<Mentions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
