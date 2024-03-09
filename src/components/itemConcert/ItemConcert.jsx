import React from 'react';
import './ItemConcert.css';

const ItemConcert = () => {
    return (
        
        <div className='cardConcert'>
            <div className='imgConcert'>
                <img src='https://picsum.photos/200' alt='concert' />
            </div>
            <div className='textConcert'>
                      
                <h3>Artiste</h3>
                <p>Jour</p>
                <p>Genre</p>
                <p>Heure</p>
                <p>Scène</p>
            </div>
        

        
        </div>

    );
};

export default ItemConcert;