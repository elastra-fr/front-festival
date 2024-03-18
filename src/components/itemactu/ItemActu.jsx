import React from 'react';
import './ItemActu.css';
import { txtDate } from '../../utils';

const ItemActu = ({date, intitule, texteactu }) => {


let textDate = txtDate(date);   

console.log(textDate);


    return (
<>
<article className="itemActu">

<h3>{intitule}</h3>
<span className='dateActu'>{"Publié le  " + textDate}</span>
<p>{texteactu}</p>



</article>


</>


    );
};

export default ItemActu;