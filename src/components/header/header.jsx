import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Socials from "../socials/Socials";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const Header = () => {

  const [showNav, setShowNav] = useState(false);

  const getWindowWidth = () => {

    return window.innerWidth;

  }

const [windowWidth, setWindowWidth] = useState(getWindowWidth());


  const handleShowNav = () => {
    setShowNav(!showNav);
  };



  window.addEventListener('resize', () => {
    setWindowWidth(getWindowWidth());
  });





  return (
    <header>
      <div className="videoWrapper">
        <nav id="mainNav" className={`${showNav ? "showNav" : "hideNav"}`}>
          <ul>
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li><HashLink to="/home#actu">Actualités</HashLink></li>
            <li>
              <Link to="/infos">Informations</Link>
            </li>
            <li><HashLink to="/home#prog">Programmation</HashLink></li>
            <li>
              <Link to="/map">Carte interactive</Link></li>
          </ul>
        </nav>

  {windowWidth > 768 ? 
  <video
          id="headerVideo"
          loop
          src="/video/video2-cpr.mp4"
          autoPlay
          muted
        />
  : 

   <img id="headerImg"
        src="/images/header-mobile.avif"
        alt="Une personne qui danse sur un fond de couleur bleu nuit."
        
        
        ></img>}
 
  
         

       
        <div id="headerTitle">
          <h1>NATION SOUND</h1>
          <Socials />

          <input id="ctaBilleterie" type="button" value="Billetterie" />
        </div>
      </div>

       <div className="burgerMenu" onClick={handleShowNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            width="48px"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>


    </header>
  );
};

export default Header;
