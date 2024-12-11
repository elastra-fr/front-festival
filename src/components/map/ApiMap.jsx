import React, { useEffect, useState } from "react";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "./Map.css";
import { fetchMapCategories, fetchMapPoints } from "../../api";

const initialCoordinates = [48.7689, 2.09454];

const ApiMap = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [points, setPoints] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
  
    async function fetchData() {
      try {
        const data = await fetchMapCategories();
        setCategories(data);
    

        const pointsData = await fetchMapPoints(selectedCategory);
        setPoints(pointsData);
       
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

    // Check if the map is already initialized
    if (!window.map) {
      window.map = L.map("leafMap").setView(initialCoordinates, 14);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(window.map);

      //Bouton pour localiser l'utilisateur

      const locateUser = L.control({ position: "topright" });
      locateUser.onAdd = function (map) {
        const div = L.DomUtil.create(
          "div",
          "leaflet-bar leaflet-control leaflet-control-custom"
        );
        div.innerHTML =
          '<button id="locate-btn" class="map-button">📍Utilisateur</button>';
        div.onclick = locateAction;
        return div;
      };
      locateUser.addTo(window.map);

      //Bouton pour recentrer la carte sur les coordonnées initiales

      const centerMap = L.control({ position: "topright" });
      centerMap.onAdd = function (map) {
        const div = L.DomUtil.create(
          "div",
          "leaflet-bar leaflet-control leaflet-control-custom"
        );
        div.innerHTML =
          '<button id="center-btn" class="map-button">Revenir au festival</button>';
        div.onclick = () => window.map.setView(initialCoordinates, 14);
        return div;
      };

      centerMap.addTo(window.map);

      // Contrôle pour le select
      const selectControl = L.control({ position: "topright" });
      selectControl.onAdd = function (map) {
        const div = L.DomUtil.create(
          "div",
          "leaflet-bar leaflet-control leaflet-control-custom"
        );
        const select = document.createElement("select");
        select.id = "category-select";
        select.className = "map-select";
        select.innerHTML = '<option value="">Choisir une catégorie</option>';
        div.appendChild(select);
        select.onchange = handleSelectChange;
        return div;
      };
      selectControl.addTo(window.map);
      //Ajout d'un marqueur

      const marker = L.marker(initialCoordinates).addTo(window.map);
    }

    return () => {
      if (window.map) {
        window.map.remove();
        window.map = null;
      }
    };
  }, []);

  useEffect(() => {
    const select = document.getElementById("category-select");
    if (select && categories.length > 0) {
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.map_pooint_category_id;
        option.text = category.map_point_category;
        select.add(option);
      });
    }
  }, [categories]);

  useEffect(() => {
    async function fetchPoints() {
      try {
        const data = await fetchMapPoints(selectedCategory);
        setPoints(data);
     
      } catch (error) {
        console.error(error);
      }
    }

    fetchPoints();
  }, [selectedCategory]);

  useEffect(() => {
    if (window.map) {
      // Remove existing markers
      markers.forEach((marker) => marker.remove());
    }

    if (points.length > 0) {
      // Remove existing markers
      const newMarkers = points.map((point) => {
        const marker = L.marker([point.latitude, point.longitude], {
          icon: createSvgIcon(point.img),
        }).addTo(window.map);
        marker.bindPopup(`<b>${point.title}</b><br>${point.description}`);
        return marker;
      });
      setMarkers(newMarkers);
    }
  }, [points]);

  //Méthode pour localiser l'utilisateur
  const locateAction = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        window.map.setView([latitude, longitude], 14);
        L.marker([latitude, longitude])
          .addTo(window.map)
          .bindPopup("Vous êtes ici")
          .openPopup();
      });
    } else {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
    }
  };

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    setSelectedCategory(selectedId);
  };

  function createSvgIcon(iconUrl) {
    return L.divIcon({
      className: "custom-svg-icon",
      html: `<img src="${iconUrl}" width="32" height="32">`,
      iconSize: [30, 30],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  }

  return <div id="leafMap" style={{ height: "100vh", width: "100%" }}></div>;
};

export default ApiMap;
