import React from "react";
import "./TuileOpen.css";
import PropTypes from "prop-types";

const TuileOpen = ({ txt, img, click }) => {


  TuileOpen.propTypes = {
    txt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired  
  };


  return (
    <>
      <div className="tuileOpen">
        <div className="tuileLinkContent" onClick={click}>
          <h2>{txt}</h2>
        </div>

        <div className="tuileLinkImg">
          <img src={img} alt={txt} />
        </div>
      </div>
    </>
  );
};

export default TuileOpen;
