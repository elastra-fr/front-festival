import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Socials from "../socials/Socials";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import ModalYesNo from "../modalyesno/ModalYesNo";


const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  



  const getWindowWidth = () => {
    return window.innerWidth;
  };

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  window.addEventListener("resize", () => {
    setWindowWidth(getWindowWidth());
  });

  const closeMainNav = () => {
    setShowNav(false);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  //Rend fixe l'element mainNav lors du scroll avec un effet de transition
  window.addEventListener("scroll", () => {
    let mainNav = document.getElementById("mainNav");
    if (window.scrollY > 480) {
      mainNav.style.position = "fixed";
      mainNav.style.background ="radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(16, 55, 207, 1) 47%, rgba(218, 0, 255, 1) 100%)";
      mainNav.style.transition = "all 0.5s";
      mainNav.style.maxWidth = "1440px";
      mainNav.style.margin = "0 auto";




    } else {
      mainNav.style.position = "absolute";
      mainNav.style.backgroundColor = "transparent";
      mainNav.style.background = "none";



      

    }
  });

  return (
    <header>
      <div className="videoWrapper">
        <nav id="mainNav" className={`${showNav ? "showNav" : "hideNav"}`}>
          <ul>
            <li>
              <Link to="/home" onClick={() => setShowNav(false)}>
                Accueil
              </Link>
            </li>
            <li>
              <HashLink to="/home#actu" onClick={() => setShowNav(false)}>
                Actualités
              </HashLink>
            </li>
            <li>
              <Link to="/faq" onClick={() => setShowNav(false)}>
                Informations - FAQ
              </Link>
            </li>
            <li>
              <HashLink to="/home#prog" onClick={() => setShowNav(false)}>
                Programmation
              </HashLink>
            </li>
            <li>
              <Link to="/map" onClick={() => setShowNav(false)}>
                Carte interactive
              </Link>
            </li>
            <li>
              <div id="closeMainNav" onClick={closeMainNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  fill="white"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </div>
            </li>
          </ul>
        </nav>

        {windowWidth > 768 ? (
          <video
            id="headerVideo"
            loop
            src="/video/video2-cpr.mp4"
            autoPlay
            muted
          />
        ) : (
          <img
            id="headerImg"
            src="/images/header-mobile.avif"
            alt="Une personne qui danse sur un fond de couleur bleu nuit."
          ></img>
        )}



        <div id="headerTitle">
          <Link to="/home">
            <h1>NATION SOUND</h1>
          </Link>
          <Socials />

          <input
            id="ctaBilleterie"
            type="button"
            value="Billetterie"
            onClick={handleModal}
          />
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

      {showModal && <ModalYesNo handleModal={handleModal} />}
    </header>
  );
};

export default Header;
