import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Socials from '../socials/Socials';



const Header = () => {
    return (
        <header>
<div className='videoWrapper'>
            <nav id="mainNav"><ul>
                <li><Link>Accueil</Link></li>
                <li>Actualité</li>
                <li>Informations</li>
                <li>Programmation</li>
            </ul>
        </nav>


    <video id="headerVideo" loop src="/video/video2.mp4" autoPlay muted></video>
    <div id='headerTitle'><h1>NATION SOUND</h1>
    <Socials />
    
    <input id= "ctaBilleterie" type='button' value="Billetterie"/>
    
    </div>
    <div id="headerMusic">

    </div>
</div>


            


        </header>
    );
};

export default Header;