import React from "react";
import "./ModalYesNo.css";
import PropTypes from "prop-types";

const ModalYesNo = ({ handleModal }) => {
  ModalYesNo.propTypes = {
    handleModal: PropTypes.func.isRequired,
  };

  return (
    <>
      <div className="modal">
        <div className="modalContent">
          <h2 className="titreModal">Lien exterieur</h2>
          <p className="textModal">
            Vous allez être redirigé vers le site de notre partenaire. Un nouvel
            onglet va s'ouvrir. Souhaitez-vous continuer ?
          </p>
          <div className="modalBtns">
            <button
              className="btnModal"
              onClick={() => {
                window.open("https://www.fnacspectacles.com/", "_blank");
                handleModal();
              }}
            >
              Oui
            </button>
            <button className="btnModal" onClick={handleModal}>
              Non
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalYesNo;
