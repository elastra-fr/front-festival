import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';




const Header = () => {
    return (
        <header>

<div className='videoWrapper'>
    <video id="headerVideo" loop src="/video/video1.mp4" autoPlay muted></video>
    <div id='headerTitle'><h1>Nation Sound</h1></div>
</div>


            

            <ul>
                <li><Link>Accueil</Link></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </header>
    );
};

export default Header;