import "./SynthProg.css";
import JourProg from "../jourprog/Jourprog";
//import { useActionData } from "react-router-dom";
import { useState, useEffect } from "react";
import { addDaysTxt } from "../../utils";

const SynthProg = () => {
  //Récupérer les données de l'API pour les concerts

  const startdate = new Date("2024-04-19");
  const startdateTxt = addDaysTxt(startdate, 0);
  const j2 = addDaysTxt(startdate, 1);
  const j3 = addDaysTxt(startdate, 2);

  const [fullConcerts, setFullConcerts] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState([]);

  const [filteredConcertsJ1, setFilteredConcertsJ1] = useState([]);
  const [filteredConcertsJ2, setFilteredConcertsJ2] = useState([]);
  const [filteredConcertsJ3, setFilteredConcertsJ3] = useState([]);
  const [filterJour, setFilterJour] = useState("Tout");
  const [filterScene, setFilterScene] = useState("Tout");
  const [filterHoraire, setFilterHoraire] = useState("Tout");
  const [filterGenre, setFilterGenre] = useState("Tout");

  const getConcerts = () => {
    fetch("https://www.api.nationsound2024-festival.fr/wp-json/wp/v2/concert?per_page=100")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        data.sort((a, b) => {
          return a.acf.horaire - b.acf.horaire;
        });
        setFullConcerts(data);
        setFilteredConcerts(data);
      });
  };

  useEffect(() => {
    getConcerts();
  }, []);

  useEffect(() => {
    let filteredArrayJ1 = filteredConcerts.filter(function (el) {
      return el.acf.jour == "J1";
    });

    setFilteredConcertsJ1(filteredArrayJ1);

    let filteredArrayJ2 = filteredConcerts.filter(function (el) {
      return el.acf.jour == "J2";
    });

    setFilteredConcertsJ2(filteredArrayJ2);

    let filteredArrayJ3 = filteredConcerts.filter(function (el) {
      return el.acf.jour == "J3";
    });

    setFilteredConcertsJ3(filteredArrayJ3);
  }, [filteredConcerts]);

  useEffect(() => {}, [
    filteredConcertsJ1,
    filteredConcertsJ2,
    filteredConcertsJ3,
  ]);

  useEffect(() => {
    if (
      filterJour == "Tout" &&
      filterScene == "Tout" &&
      filterHoraire == "Tout" &&
      filterGenre == "Tout"
    ) {
      setFilteredConcerts(fullConcerts);
    } else {
      //console.log("Filtrage nécessaire");

      let filters = {
        jour: filterJour,
        scene: filterScene,
        horaire: filterHoraire,
        genre: filterGenre,
      };

      //iterate over the filters object to filter fullConcerts

      let arrayToFilter = fullConcerts;

      let filteredArray = arrayToFilter.filter(function (item) {
        return Object.keys(filters).every((key) => {
          //console.log(key);

          if (key === "horaire") {
            return (
              filters[key] === "Tout" ||
              Number(filters[key]) <= Number(item.acf[key])
            );
          } else {
            return filters[key] === "Tout" || filters[key] === item.acf[key];
          }
        });
      });

      //order filteredArray by horaire

      //filteredArray.sort((a, b) => { return a.acf.horaire - b.acf.horaire; });

      //console.log(filteredArray);
      setFilteredConcerts(filteredArray);
    }
  }, [filterJour, filterScene, filterHoraire, filterGenre]);

  const handleChange = (e) => {
    let id = e.target.id;
    // console.log(id);

    let value = e.target.value;

    //console.log(value);

    switch (id) {
      case "jour":
        setFilterJour(value);
        break;

      case "scene":
        setFilterScene(value);
        break;

      case "horaire":
        setFilterHoraire(value);
        break;

      case "genre":
        setFilterGenre(value);
        break;

      default:
    }
  };

  const deleteFilters = () => {
    setFilterJour("Tout");
    setFilterScene("Tout");
    setFilterHoraire("Tout");
    setFilterGenre("Tout");
  };

  return (
    <>
      <div className="progWrapper">
        <h2>Programmation complète</h2>
        <div className="progTools">
          <h3>Filtrer par :</h3>

          <div className="filterWrapper">
            <label htmlFor="jour">Jour :</label>
            <select
              name="jour"
              id="jour"
              onChange={handleChange}
              value={filterJour}
            >
              <option value="Tout">Festival complet</option>
              <option value="J1">Vendredi 30 juillet</option>
              <option value="J2">Samedi 31 juillet</option>
              <option value="J3">Dimanche 1er août</option>
            </select>
          </div>

          <div className="filterWrapper">
            <label htmlFor="scene">Scène :</label>
            <select
              name="scene"
              id="scene"
              onChange={handleChange}
              value={filterScene}
            >
              <option value="Tout">Toutes les scènes</option>
              <option value="Scène principale">Grande scène</option>
              <option value="Scène 2">Scène 2</option>
              <option value="Scène 3">Scène 3</option>
              <option value="Scène 4">Scène 4</option>
              <option value="Scène 5">Scène 5</option>
            </select>
          </div>

          <div className="filterWrapper">
            <label htmlFor="horaire">A partir de :</label>
            <select
              name="horaire"
              id="horaire"
              onChange={handleChange}
              value={filterHoraire}
            >
              <option value="Tout">Tous les horaires</option>
              <option value="15">15h</option>
              <option value="16">16h</option>
              <option value="17">17h</option>
              <option value="18">18h</option>
              <option value="19">19h</option>
              <option value="20">20h</option>
              <option value="21">21h</option>
              <option value="22">22h</option>
              <option value="23">23h</option>
            </select>
          </div>

          <div className="filterWrapper">
            <label htmlFor="genre">Genre :</label>
            <select
              name="genre"
              id="genre"
              onChange={handleChange}
              value={filterGenre}
            >
              <option value="Tout">Tous les genres</option>
              <option value="Rock">Rock</option>
              <option value="Pop">Pop</option>
              <option value="Electro">Electro</option>
              <option value="Rap">Rap</option>
              <option value="Reggae">Reggae</option>
              <option value="Jazz">Jazz</option>
              <option value="Metal">Metal</option>
            </select>
          </div>

          <button onClick={deleteFilters}>Reinitialiser</button>
        </div>
        <div className="joursWrapper">
          {filteredConcertsJ1.length > 0 && (
            <JourProg jour={startdateTxt} data={filteredConcertsJ1} />
          )}
          {filteredConcertsJ2.length > 0 && (
            <JourProg jour={j2} data={filteredConcertsJ2} />
          )}
          {filteredConcertsJ3.length > 0 && (
            <JourProg jour={j3} data={filteredConcertsJ3} />
          )}
          {/*<JourProg jour="Vendredi 30 juillet" />
          <JourProg jour="Samedi 31 juillet" />
          <JourProg jour="Dimanche 1er août" />*/}
        </div>

        {/*<section className="newWrapper">
          {filteredConcerts.map((concert, index) => (
            <div className="newConcert" key={index}>
              <h3>{concert.title.rendered}</h3>
              <p>{concert.acf.artiste}</p>
              <p>{concert.acf.horaire}</p>
              <p>{concert.acf.scene}</p>
              <p>{concert.acf.genre}</p>
            </div>
          ))}
        </section>*/}
      </div>
    </>
  );
};

export default SynthProg;
