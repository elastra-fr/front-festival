import React from 'react';
import "./ItemPartner.css";

const ItemPartner = ({partnerId, imgUrl, name, description}) => {
    return (
        <>
        
        <div key={partnerId} className="itemPartner">

            <div className="itemPartnerImg">

                <img src={imgUrl} alt="logo partenaire"/>

            </div>

            <div className="itemPartnerText">
                    
                    <h3>{name}</h3>
    
                    <p>{description}</p>

                    </div>




        </div>
        
        
        </>
    );
};

export default ItemPartner;