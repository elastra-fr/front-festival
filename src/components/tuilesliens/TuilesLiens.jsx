import React from "react";
import { Link } from "react-router-dom";
import "./TuilesLiens.css";

const TuilesLiens = ({ txt, img, to }) => {
  return (
    <>
      <Link to={to}>
        <div className="tuileLink">
          <div className="tuileLinkContent">
            <h2>{txt}</h2>
          </div>

          <div className="tuileLinkImg">
            <img src={img} alt={txt} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default TuilesLiens;
