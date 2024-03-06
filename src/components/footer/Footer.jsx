import React from "react";
import { Link } from "react-router-dom";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContent">
          <div className="footerContentLeft">
            <h3>NATION SOUND</h3>
            <p>Festival organisé par Live Events</p>
          </div>
          <div className="footerContentCenter">
            <ul>
              <li>
                <Link>Accueil</Link>
              </li>
              <li>
                <Link>Actualités</Link>
              </li>
              <li>
                <Link>Informations pratiques</Link>
              </li>
              <li>
                <Link>Billetterie</Link>
              </li>
              <li>
                <Link>Mentions légales</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Carte</Link>
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
