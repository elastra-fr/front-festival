import React, { useEffect } from "react";
import "./Map.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
//import { google } from "@googlemaps/react-wrapper";

const Map = () => {
  const [mapPoints, setMapPoints] = React.useState([]);
  const [fullMapPoints, setFullMapPoints] = React.useState([]);

  const mapKey = import.meta.env.VITE_FESTIVAL_APP_API_MAP;

  //Fonction pour récupérer les données de la carte

  function getMapData() {
    fetch("http://festival.local/wp-json/wp/v2/mappoints")
      .then((response) => response.json())
      .then((data) => {
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
  }, []);

  useEffect(() => {
    initMap();
  }, [mapPoints]);

  let map;

  async function initMap() {
    const position = { lat: 48.7689, lng: 2.09454 };

    const { Map } = await google.maps.importLibrary("maps");
    //const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    const { AdvancedMarkerElement, PinElement } =
      await google.maps.importLibrary("marker");

    //Création de la carte
    map = new Map(document.getElementById("map"), {
      zoom: 15,
      center: position,
      mapId: "391e98b9f7969c2d",
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"],
    });

    map.setMapTypeId("satellite");


const parser = new DOMParser();

const pinSvgString =
  '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="28" fill="#7837FF"></rect><path d="M46.0675 22.1319L44.0601 22.7843" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9402 33.2201L9.93262 33.8723" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9999 47.0046V44.8933" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9999 9V11.1113" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.1583 43.3597L37.9186 41.6532" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8419 12.6442L18.0816 14.3506" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.93262 22.1319L11.9402 22.7843" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.0676 33.8724L44.0601 33.2201" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.1583 12.6442L37.9186 14.3506" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8419 43.3597L18.0816 41.6532" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 39L26.8725 37.9904C24.9292 36.226 23.325 34.7026 22.06 33.4202C20.795 32.1378 19.7867 30.9918 19.035 29.9823C18.2833 28.9727 17.7562 28.0587 17.4537 27.2401C17.1512 26.4216 17 25.5939 17 24.7572C17 23.1201 17.5546 21.7513 18.6638 20.6508C19.7729 19.5502 21.1433 19 22.775 19C23.82 19 24.7871 19.2456 25.6762 19.7367C26.5654 20.2278 27.34 20.9372 28 21.8649C28.77 20.8827 29.5858 20.1596 30.4475 19.6958C31.3092 19.2319 32.235 19 33.225 19C34.8567 19 36.2271 19.5502 37.3362 20.6508C38.4454 21.7513 39 23.1201 39 24.7572C39 25.5939 38.8488 26.4216 38.5463 27.2401C38.2438 28.0587 37.7167 28.9727 36.965 29.9823C36.2133 30.9918 35.205 32.1378 33.94 33.4202C32.675 34.7026 31.0708 36.226 29.1275 37.9904L28 39Z" fill="#FF7878"></path></svg>';
const pinSvg = parser.parseFromString(
  pinSvgString,
  "image/svg+xml",
).documentElement;





    //Affiche les marqueurs sur la carte
    for (let i = 0; i < mapPoints.length; i++) {
       
      let marker = new AdvancedMarkerElement({
        map: map,
        position: {
          lat: mapPoints[i].acf.Lieu.lat,
          lng: mapPoints[i].acf.Lieu.lng,
        },
        title: mapPoints[i].acf.titre,
    
      });


      marker.addListener("click", () => {
        const infowindow = new google.maps.InfoWindow({
          content:
            "<h3>" +
            mapPoints[i].acf.titre +
            "</h3><p>" +
            mapPoints[i].acf.infos +
            "</p>",
        });
        infowindow.open(map, marker);
      });
    }

    //Affiche un marqueur pour le site du festival

    const pinScaled = new PinElement({
      scale: 1.5,
      background: " #74207d",
    });

    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Festival Nation Sound",
      content: pinScaled.element,
    });

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
    } else {
      let arrayToFilter = fullMapPoints;

      //sert à filtrer les éléments du tableau en fonction de la valeur du select
      let filteredArray = arrayToFilter.filter(function (el) {
        return el.acf.categorie == type;
      });

      setMapPoints(filteredArray);
    }

    console.log(fullMapPoints);
  };




  return (
    <div>
      <div className="mapWrapper">
        <h2>Carte interactive</h2>
        <div className="mapTools">
          <h3>Filtrer par :</h3>
          <select name="filtremap" id="filtremap" onChange={handleChange}>
            <option value="Tout">Tout</option>
            <option value="Scènes">Scènes</option>
            <option value="Buvettes">Buvettes</option>
            <option value="Restauration">Restauration</option>
            <option value="Sanitaires">WC</option>
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

        <div id="map" className="map"></div>
      </div>
    </div>
  );
};

export default Map;
