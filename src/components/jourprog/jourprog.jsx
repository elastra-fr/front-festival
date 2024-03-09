import React from 'react';
import ItemConcert from '../itemConcert/ItemConcert';
import './Jourprog.css';

const JourProg = ({jour}) => {
    return (
        <>
        <div className="jour">
     <div>
        <h3>{jour}</h3>
     </div>
<div className='listJour'>
    <ItemConcert />
    <ItemConcert />
    <ItemConcert />
    <ItemConcert />
    <ItemConcert />


</div>


        </div>
        </>
    );
};

export default JourProg;