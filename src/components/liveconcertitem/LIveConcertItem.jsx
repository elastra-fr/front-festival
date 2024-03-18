import React from 'react';

const LiveConcertItem = ({scene, artiste, genre}) => {
    return (
       
       <>
       <div className="live-concert-item">
        <h3>{scene}</h3>
        <span>{artiste}</span><span>{genre}</span>

        </div>
       
       
       </>




    );
};

export default LiveConcertItem;