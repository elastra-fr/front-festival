import React from 'react';
import './Map.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
const Map = () => {



const mapKey = import.meta.env.VITE_FESTIVAL_APP_API_MAP;

let map;

async function initMap() {
//Centre du site du festival
  const position = { lat: 48.76890, lng: 2.09454 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
    mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"],
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Festival Nation Sound",
  });

map.setMapTypeId('satellite');

}

initMap();










    return (
        <div>
                <div className="mapWrapper">

                    <h2>Carte interactive</h2>
                    <div className='mapTools'>

                        <h3>Filtrer par :</h3>
                        <select name="filtremap" id="filtremap">
                            <option value="Tout">Tout</option>
                            <option value="Scènes">Scènes</option>
                            <option value="Buvettes">Buvettes</option>
                            <option value="Restauration">Restauration</option>
                            <option value="WC">WC</option>
                            <option value="Accueil">Accueil</option>
                            <option value="Camping">Camping</option>
                            <option value="Parking">Parking</option>
                            <option value="Accès PMR">Accès PMR</option>
                            <option value="Sécurité">Sécurité</option>
                            <option value="Secours">Secours</option>
                            <option value="Boutique">Boutique</option>
                            <option value="Animations">Animations</option>
                            <option value="Espace VIP">Espace VIP</option>
                            



                            </select>

        
    
    
    
    </div>

    
<div id="map" className="map">


                        </div>

                    </div>
        </div>
    );
};

export default Map;