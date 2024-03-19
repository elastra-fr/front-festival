import React from "react";
import { useEffect } from "react";
import "./Map.css";
import { Link } from "react-router-dom";

const Map2 = () => {
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

  //Carte
  async function initMap() {
    const position = { lat: 48.7689, lng: 2.09454 };
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
      zoom: 15,
      center: position,
      mapId: "391e98b9f7969c2d",
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"],
    });


    //Geolocalisation
    const infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement("button");
    locationButton.textContent = "Ma position";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent("Vous êtes ici.");
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }

    });

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Erreur: Le service de géolocalisation a échoué."
          : "Erreur: Votre navigateur ne supporte pas la géolocalisation."
      );
      infoWindow.open(map);
    }



    //Fin geolocalisation

    for (let i = 0; i < mapPoints.length; i++) {
      let categorie = mapPoints[i].acf.categorie;
      let color = "white";
      let icon;

      switch (categorie) {
        case "Scènes":
          color = "red";
          icon = "/images/music-solid.svg";

          break;

        case "Buvettes":
          icon = "/images/drink.svg";

          break;

        case "Restauration":
          icon = "/images/food.svg";

          break;

        case "Sanitaires":
          icon = "/images/wc.svg";
          break;

        case "Accueil":
          color = "blue";
          icon = "/images/info-solid.svg";

          break;

        case "Camping":
          icon = "/images/camp.svg";

          break;

        case "Parking":
          icon = "/images/parking.svg";

          break;

        case "Accès PMR":
          icon = "/images/accessible.svg";

          break;

        case "Sécurité":
          icon = "/images/shield.svg";

          break;

        case "Secours":
          icon = "/images/medic.svg";

          break;

        case "Boutique":
          icon = "/images/shop.svg";

          break;

        case "Animations":
          icon = "/images/event.svg";

          break;

        case "Espace VIP":
          icon = "/images/vip.svg";

          break;

        default:
          color = "white";
          icon = "/images/location-pin-solid.svg";

          break;
      }

      const point = document.createElement("div");

      point.id = "customMarker" + i;
      point.className = "customMarker";
      point.textContent = mapPoints[i].acf.titre;
      point.style.backgroundColor = color;
      point.insertAdjacentHTML(
        "beforeend",
        '<img src="' + icon + '" alt="icon" />'
      );

      new AdvancedMarkerElement({
        map,
        position: {
          lat: mapPoints[i].acf.Lieu.lat,
          lng: mapPoints[i].acf.Lieu.lng,
        },
        content: point,
      });
    }
  }

  initMap();

  //Gestion select

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
    <>
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

         
        <button onClick={() => window.open("https://www.google.com/maps/dir/Current+Location/48.7689,2.09454")} className="navButton">Naviguer vers le festival</button>
          

        



        </div>

        <div id="map" className="map"></div>
      </div>
    </>
  );
};

export default Map2;
