import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Socials from "../socials/Socials";
import "./Footer.css";
import ModalYesNo from "../modalyesno/ModalYesNo";

const Footer = () => {
  //Fenêtre modale pour la billetterie externe
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <footer>
        <div className="footerContent">
          <div className="footerContentLeft">
            <Link to="/home">
              {" "}
              <h3>NATION SOUND</h3>
            </Link>
            <p>Festival organisé par Live Events</p>
          </div>
          <div className="footerContentCenter">
            <ul>
              <li>
                <Link to="/home"
                onClick={() => {
                Element.scrollTo(0, 0);
                }}
                >Accueil</Link>
              </li>
              <li>
                <HashLink to="/home#actu">Actualités</HashLink>
              </li>
              <li>
                <Link onClick={handleModal}>Billetterie</Link>
              </li>
              <li>
                <Link to="/mentions">Mentions légales</Link>
              </li>
              <li>
                <Link to="/faq">Informations - FAQ</Link>
              </li>
              <li>
                <Link to="/map">Carte</Link>
              </li>

              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="footerContentRight">
            <Socials />
          </div>
        </div>
      </footer>

      {showModal && <ModalYesNo handleModal={handleModal} />}
    </>
  );
};

export default Footer;
