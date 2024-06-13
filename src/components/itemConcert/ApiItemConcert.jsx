import React from "react";
import "./ItemConcert.css";
import PropTypes from "prop-types";

const ApiItemConcert = ({ src, srcSet, sizes, groupe, horaire, genre, desc, scene }) => {
  ApiItemConcert.propTypes = {
    src: PropTypes.string,
    groupe: PropTypes.string.isRequired,
    horaire: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    scene: PropTypes.string.isRequired,
  };

  let locsrc;
  if (horaire == "24") {
    horaire = "00";
  }

  if (src === null || src === undefined || src === "") {
    locsrc = "https://picsum.photos/300/300?grayscale";
  } else {
    locsrc = src;
  }

  return (
    <div className="cardConcert">
      <div className="imgConcert">
 <img src={locsrc} srcSet={srcSet} sizes={sizes} alt="concert" loading="lazy" />
      </div>
      <div className="textConcert">
        <div className="headerCardConcert">
          <h3>{groupe}</h3>
        </div>
        <div className="infosCardConcert">
          <p className="textConcertInfos">{horaire + "H - " + scene} </p>
        </div>
        <div className="footerCardConcert">
          <p>{genre + "  : " + desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ApiItemConcert;
