import React from "react";
import ItemConcert from "../itemConcert/ItemConcert";
import PropTypes from "prop-types";
import "./Jourprog.css";

const JourProg = ({ jour, data }) => {
  JourProg.propTypes = {
    jour: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  };

  return (
    <>
      <div className="jour">
        <div className="dateJourCont">
          <h3 className="dateJour">{jour}</h3>
        </div>
        <div className="listJour">
          {data.map((item, index) => {
            return (
              <ItemConcert
                key={index}
                item={item}
                src={item.acf.urlimg}
                groupe={item.acf.groupe}
                horaire={item.acf.horaire}
                scene={item.acf.scene}
                desc={item.acf.description}
                genre={item.acf.genre}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default JourProg;
