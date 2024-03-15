import React from 'react';
import './ItemConcert.css';

const ItemConcert = ({src, groupe, horaire, genre, desc, scene}) => {
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
                      
                <h3>{groupe}</h3>
                <p>{genre}</p>
                <p>{horaire + "H"}</p>
                <p>{scene}</p>
                <p>{desc}</p>
            </div>
        

        
        </div>

    );
};

export default ItemConcert;