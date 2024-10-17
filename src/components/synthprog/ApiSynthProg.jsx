import React, {useEffect, useState} from 'react';
import { fetchFilters, fetchConcerts } from '../../api';
import { txtDate } from '../../utils';
import ApiJourProg from '../jourprog/ApiJourProg';
import './SynthProg.css';

const ApiSynthProg = () => {
    // Your code here
const [filterJour, setFilterJour] = useState("Tout");

const [filterScene, setFilterScene] = useState("Tout");

const [filterHoraire, setFilterHoraire] = useState("Tout");

const [filterGenre, setFilterGenre] = useState("Tout");


const [days, setDays] = useState([]);
  const [stages, setStages] = useState([]);
  const [musicStyles, setMusicStyles] = useState([]);
  const [amplitudeHoraire, setAmplitudeHoraire] = useState({});

  const [filteredConcerts, setFilteredConcerts] = useState([]);


//Récupération des données de la programmation

useEffect(() => {
    async function fetchData() {
        try {

            //Filtres
            const filters = await fetchFilters();
            setDays(filters.days);
            setStages(filters.stages);
            setMusicStyles(filters.musicStyles);
            setAmplitudeHoraire(filters.amplitudeHoraire);

            //Concerts

            const InitialConcerts = await fetchConcerts(filterJour, filterScene, filterHoraire, filterGenre);
            setFilteredConcerts(InitialConcerts);
            


        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, []);

useEffect(() => {

    async function fetchData() {
        try {
            const concerts = await fetchConcerts(filterJour, filterScene, filterHoraire, filterGenre);
            setFilteredConcerts(concerts);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();




}, [filterJour, filterScene, filterHoraire, filterGenre]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "jour") setFilterJour(value);
    if (name === "scene") setFilterScene(value);
    if (name === "horaire") setFilterHoraire(value);
    if (name === "genre") setFilterGenre(value);
  };

  const deleteFilters = () => {
    setFilterJour("Tout");
    setFilterScene("Tout");
    setFilterHoraire("Tout");
    setFilterGenre("Tout");
  };

 const generateHourOptions = (min, max) => {
    const options = [];
    let currentHour = parseInt(min.split(':')[0], 10);
    const maxHour = parseInt(max.split(':')[0], 10);

    while (currentHour !== maxHour) {
      options.push(currentHour);
      currentHour = (currentHour + 1) % 24;
    }
    options.push(maxHour); // include the max hour
    return options;
  };

  const hourOptions = amplitudeHoraire.min && amplitudeHoraire.max ? generateHourOptions(amplitudeHoraire.min, amplitudeHoraire.max) : [];

 const jourProgComponents = Object.entries(filteredConcerts).map(([date, concerts]) => (
    <ApiJourProg key={date} jour={date} data={concerts} />
  ));


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
                <option value="Tout">Tout</option>
                    {days.map(day => (
                <option key={day.day} value={day.date}>{txtDate(day.date)}</option>
              ))}
     
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
                <option value="Tout">Tout</option>
                    {stages.map(stage => (
                <option key={stage.id} value={stage.id}>{stage.name}</option>
                ))}
   
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
                <option value="Tout">Tout</option>

                {hourOptions.map(hour => (
                <option key={hour} value={hour}>{hour}h</option>
                ))}

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
                <option value="Tout">Tout</option>
                    {musicStyles.map(musicStyle => (
                <option key={musicStyle.id} value={musicStyle.id}>{musicStyle.name}</option>
                ))}

            </select>
          </div>

          <button onClick={deleteFilters}>Reinitialiser</button>
        </div>
        <div className="joursWrapper">
            {jourProgComponents}
        </div>
      </div>
    </>
  
        

        
        
        
        
            
        
    );
};

export default ApiSynthProg;