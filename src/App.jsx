import { useState, createContext } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Header from './components/header/header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Infos from './pages/infos/Infos'
import Faq from './pages/faq/Faq'



function App() {
  
//Create context map
const MapStatus = createContext();


const Map = () => {

const [mapStatus, setMapStatus] = useState(false);

return(

<MapStatus.Provider value={mapStatus}>


  </MapStatus.Provider>  


);




}





//Récupérer les données de l'API pour les news  


//Récupérer les données de l'API pour les concerts




//Récupérer les données de l'API pour les points de localisation pour les intégrer dans la map  




  return (
    <>

 <BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/infos" element={<Infos />} />
<Route path="/faq" element={<Faq />} />

</Routes>
</BrowserRouter>

</>
  )
}

export default App
