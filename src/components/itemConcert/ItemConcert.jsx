import React from 'react';
import './ItemConcert.css';

const ItemConcert = ({src}) => {
    console.log(src);
let locsrc ;

     if (src === null || src === undefined || src === "")
        {
           locsrc = "https://picsum.photos/300/300?grayscale";
        }

        else{
             locsrc = src;

            
        }

    return (
        
       
        <div className='cardConcert'>
            <div className='imgConcert'>
                <img src={locsrc} alt='concert' />
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