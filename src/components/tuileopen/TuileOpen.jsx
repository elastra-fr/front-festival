import React from "react";
import "./TuileOpen.css";
const TuileOpen = ({ txt, img, click }) => {
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
