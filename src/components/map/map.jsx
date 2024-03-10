import React, { useEffect } from 'react';
import './Map.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
//import { google } from "@googlemaps/react-wrapper";

const Map = () => {

const [mapPoints, setMapPoints] = React.useState([]); 
const[fullMapPoints, setFullMapPoints] = React.useState([]);



const mapKey = import.meta.env.VITE_FESTIVAL_APP_API_MAP;

//Fonction pour récupérer les données de la carte


function getMapData() {
    fetch("http://festival.local/wp-json/wp/v2/mappoints")
    .then(response => response.json())
    .then(data => {
        console.log(data[0].acf.Lieu);
        
        setFullMapPoints(data);
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
  //const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker") 





  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "391e98b9f7969c2d", 
    mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"],

   

  });


//console.log(mapPoints);

//console.log(mapPoints[0].acf.Lieu.lat);

//Affiche les marqueurs sur la carte
for (let i = 0; i < mapPoints.length; i++) {



    const marker = new AdvancedMarkerElement({
        map: map,
        position: { lat: mapPoints[i].acf.Lieu.lat, lng: mapPoints[i].acf.Lieu.lng }, 
        title: mapPoints[i].acf.titre,
   
    



       
    });

    console.log(marker);

    marker.addListener("click", () => {
        const infowindow = new google.maps.InfoWindow({
            content: "<h3>" + mapPoints[i].acf.titre + "</h3><p>" + mapPoints[i].acf.infos + "</p>",
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



const pinScaled = new PinElement({
  scale: 1.5,
});
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Festival Nation Sound",
    content: pinScaled.element,
  });



map.setMapTypeId('satellite');

//Affiche infos quand on clique sur un marqueur



marker.addListener("click", () => {
    const infowindow = new google.maps.InfoWindow({
          content: "<h3>SIte du festival</h3><p>Viendez !</p>",
    });
    infowindow.open(map, marker);
});


}


const handleChange = (e) => {


const type = e.target.value;
console.log(type);

if (type === "Tout") {

setMapPoints(fullMapPoints);

}

else {
 
 let arrayToFilter = fullMapPoints; 

//sert à filtrer les éléments du tableau en fonction de la valeur du select
let filteredArray = arrayToFilter.filter(function (el) {
    return el.acf.categorie==type;
 
});

   setMapPoints(filteredArray);
    }

console.log(fullMapPoints);

}










    return (
        <div>
                <div className="mapWrapper">

                    <h2>Carte interactive</h2>
                    <div className='mapTools'>

                        <h3>Filtrer par :</h3>
                        <select name="filtremap" id="filtremap" onChange={handleChange}>
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