import React, {useEffect, useState} from 'react';
import { fetchFilters } from '../../api';

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


//Récupération des données de la programmation

useEffect(() => {
    async function fetchData() {
        try {
            const filters = await fetchFilters();
            setDays(filters.days);
            setStages(filters.stages);
            setMusicStyles(filters.musicStyles);
            setAmplitudeHoraire(filters.amplitudeHoraire);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, []);



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
                <option key={day.day} value={day.day}>Jour {day.day} ({day.date})</option>
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

            </select>
          </div>

          <button onClick={deleteFilters}>Reinitialiser</button>
        </div>
        <div className="joursWrapper">
          {/*filteredConcertsJ1.length > 0 && (
            <JourProg jour={startdateTxt} data={filteredConcertsJ1} />
          )*/}
          {/*filteredConcertsJ2.length > 0 && (
            <JourProg jour={j2} data={filteredConcertsJ2} />
          )*/}
          {/*filteredConcertsJ3.length > 0 && (
            <JourProg jour={j3} data={filteredConcertsJ3} />
          )*/}
        </div>
      </div>
    </>
  
        

        
        
        
        
            
        
    );
};

export default ApiSynthProg;