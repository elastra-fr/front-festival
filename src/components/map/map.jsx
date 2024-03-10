import React, { useEffect } from 'react';
import './Map.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const Map = () => {

const [mapPoints, setMapPoints] = React.useState([]); 

const mapKey = import.meta.env.VITE_FESTIVAL_APP_API_MAP;

//Fonction pour récupérer les données de la carte


function getMapData() {
    fetch("http://festival.local/wp-json/wp/v2/mappoints")
    .then(response => response.json())
    .then(data => {
        console.log(data[0].acf.Lieu);
        setMapPoints(data);
        
        //length = nombre d'éléments dans le tableau
        console.log(data.length);
        
    });

}


useEffect(() => { 
getMapData();
initMap();
} , []);

useEffect(() => {
    initMap();
}, [mapPoints]);




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


console.log(mapPoints);

console.log(mapPoints[0].acf.Lieu.lat);

//Affiche les marqueurs sur la carte
for (let i = 0; i < mapPoints.length; i++) {
    const marker = new AdvancedMarkerView({
        map: map,
        position: { lat: mapPoints[i].acf.Lieu.lat, lng: mapPoints[i].acf.Lieu.lng }
    });

    marker.addListener("click", () => {
        const infowindow = new google.maps.InfoWindow({
            content: "<h3>" + mapPoints[i].acf.Lieu + "</h3><p>" + mapPoints[i].acf.Description + "</p>",
        });
        infowindow.open(map, marker);
    });
}

/*
const mark1= new AdvancedMarkerView({
    map: map,
    position: { lat: 48.76890, lng: 2.092 },
    title: "Festival Nation Sound",
});*/




  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Festival Nation Sound",
  });



map.setMapTypeId('satellite');

//Affiche infos quand on clique sur un marqueur
marker.addListener("click", () => {
    const infowindow = new google.maps.InfoWindow({
        content: "<h3>Festival Nation Sound</h3><p>Le festival de musique reggae de la région parisienne</p>",
    });
    infowindow.open(map, marker);
});


}













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