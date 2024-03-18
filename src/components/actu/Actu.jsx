
import React from 'react';
import { useState, useEffect } from "react";
import ItemActu from '../itemactu/ItemActu';
import './Actu.css';




const Actu = () => {

const [fullActu, setFullActu] = useState([]);
const [importantActu, setImportantActu] = useState([]);
const [actu, setActu] = useState([]);



const getActu = () => {
    fetch("http://festival.local/wp-json/wp/v2/actus?per_page=100")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFullActu(data);
      
      });
};


useEffect(() => {

getActu();

}, []);

useEffect(() => { 

 if(fullActu.length > 0) {
  setImportantActu(fullActu.filter((actu) => actu.acf.type==="Dernière minute"));
  setActu(fullActu.filter((actu) => actu.acf.type !=="Dernière minute"));
 }



}, [fullActu]); 

useEffect(() => {
console.log(importantActu);
console.log(actu);


}, [importantActu, actu]);


    return (
      <>
      
<div className='mainActu'>

    
      <section className='importantActu'> 
      <h2>Dernière minute</h2>

      {importantActu.map((actu, index) =>{

        return <ItemActu key={index} date={actu.date} intitule={actu.acf.intitule} texteactu={actu.acf.texteactu} />


      })}



      </section>
      
        <section className='regularActu'>
            <h2>Actualités</h2>

        {actu.map((actu, index) =>{

        return <ItemActu key={index} date={actu.date} intitule={actu.acf.intitule} texteactu={actu.acf.texteactu} />


         })}


            </section>  
      
      </div>

  

      </>
    );
};

export default Actu;