import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Socials from "../socials/Socials";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContent">
          <div className="footerContentLeft">
           <Link to="/home"> <h3>NATION SOUND</h3></Link>
            <p>Festival organisé par Live Events</p>
          </div>
          <div className="footerContentCenter">
            <ul>
              <li>
                <Link to="/home">Accueil</Link>
              </li>
              <li>
                <HashLink to="/home#actu">Actualités</HashLink>
              </li>
                      <li>
                <Link>Billetterie</Link>
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
    </>
  );
};

export default Footer;
