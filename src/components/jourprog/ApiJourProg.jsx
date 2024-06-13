import React from 'react';
import ApiItemConcert from '../itemConcert/ApiItemConcert';
import PropTypes from 'prop-types';
import { txtDate } from '../../utils';

const ApiJourProg = ({ jour, data }) => {
  return (
    <>
      <div className="jour">
        <div className="dateJourCont">
          <h3 className="dateJour">{txtDate(jour)}</h3>
        </div>
        <div className="listJour">
          {data.map(concert => (
            <ApiItemConcert
              key={concert.id}
              src={concert.images.original} // Utilisez la bonne clé pour l'image
               srcSet={`${concert.images['200']} 200w, ${concert.images['400']} 400w, ${concert.images['600']} 600w, ${concert.images.original} 800w`} 
              sizes="(max-width: 600px) 200px, (max-width: 900px) 400px, 600px"
              groupe={concert.artist}
              horaire={concert.date.split(' ')[1]} // Extraction de l'heure à partir de la date
              scene={concert.location}
              desc={concert.description}
              genre={concert.genre}
            />
          ))}
        </div>
      </div>
    </>
  );
};

ApiJourProg.propTypes = {
  jour: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default ApiJourProg;