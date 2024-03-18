import React, { useEffect } from 'react';
import './Live.css';


const Live = ({concerts}) => {
    
    const [fullConcerts, setFullConcerts] = React.useState([]);
    const [liveConcerts, setLiveConcerts] = React.useState([]);
    const [liveSP, setLiveSP] = React.useState([]);
    const [liveS2, setLiveS2] = React.useState([])
    const [liveS3, setLiveS3] = React.useState([]);
    const [liveS4, setLiveS4] = React.useState([]);
    const [liveS5, setLiveS5] = React.useState([]);

    const getConcerts = () => {
        fetch("http://festival.local/wp-json/wp/v2/concert?per_page=100")
            .then((response) => response.json())
            .then((data) => {
              //  console.log(data);
                data.sort((a, b) => {
                    return a - b;
                });
                setFullConcerts(data);
            });
    };

    useEffect(() => {
        getConcerts();
    }, []);

    useEffect(() => {
        //console.log(fullConcerts);
        isLive();
    }, [fullConcerts]);

    useEffect(() => {
    
    if(liveConcerts.length > 0) {
        setLiveSP(liveConcerts.filter((concert) => concert.acf.scene === "Scene Principale"));
        setLiveS2(liveConcerts.filter((concert) => concert.acf.scene === "Scene 2"));
        setLiveS3(liveConcerts.filter((concert) => concert.acf.scene === "Scene 3"));
        setLiveS4(liveConcerts.filter((concert) => concert.acf.scene === "Scene 4"));
        setLiveS5(liveConcerts.filter((concert) => concert.acf.scene === "Scene 5"));
    }

    }, [liveConcerts]);

    const equivalentJ = (date) => {
        switch (date) {
            case "2024-04-19":
                return "J1";
            case "2024-04-20":
                return "J2";
            case "2024-04-21":
                return "J3";
            default:
                return "KO";
        }
    };

    let nowH = new Date().getHours();

 

    const isLive = () => {

         let today = "2024-04-20";
        const filters = {

              
            jour: equivalentJ(today),
            horaire: nowH
        };

//console.log(filters);

let arrayToFilter = fullConcerts;

      let filteredArray = arrayToFilter.filter(function (item) {
        return Object.keys(filters).every((key) => {
        
            
         return  filters[key] == item.acf[key];
          
        });
      });


        setLiveConcerts(filteredArray);


    };

    return (
        <>
            <div className='mainLive'>
                <div className='liveTitle'><img src="/images/live-12298.svg" alt="Live Title" /></div>




                <p>Pas de concert(s) en cours actuellement</p>
            
            
            </div>
        </>
    );
};

export default Live;