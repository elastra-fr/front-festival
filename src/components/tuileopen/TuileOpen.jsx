import React from 'react';

const TuileOpen = (txt, img) => {
    // Your component logic goes here

    return (
<>
        
            <div className="tuileLink">
        <div className="tuileLinkContent">

            <h2>{txt}</h2>
        
        </div>

        <div className="tuileLinkImg">
          <img src={img} alt={txt} />
        </div>
      </div>

        
        </>
    );
};

export default TuileOpen;