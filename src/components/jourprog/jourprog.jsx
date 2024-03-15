import React from 'react';
import ItemConcert from '../itemConcert/ItemConcert';
import './Jourprog.css';

const JourProg = ({jour, data}) => {
    console.log(data);
    return (
        <>
        <div className="jour">
     <div>
        <h3 className='dateJour'>{jour}</h3>
     </div>
<div className='listJour'>
{data.map((item, index) => {
    return <ItemConcert key={index} item={item} src={item.acf.urlimg} />
})} 


</div>


        </div>
        </>
    );
};

export default JourProg;