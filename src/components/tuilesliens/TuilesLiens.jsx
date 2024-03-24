import React from "react";
import { Link } from "react-router-dom";
import "./TuilesLiens.css";
import PropTypes from "prop-types";

const TuilesLiens = ({ txt, img, to }) => {

  TuilesLiens.propTypes = {
    txt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }; 

  return (
    <>
      <Link to={to}>
        <div className="tuileLink">
          <div className="tuileLinkContent">
            <h2>{txt}</h2>
          </div>

          <div className="tuileLinkImg">
            <img src={img} alt="" loading="lazy" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default TuilesLiens;
