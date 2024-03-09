import React from 'react';

const Map = () => {
    return (
        <div>
                <div className="mapWrapper">

                    <h2>Carte interactive</h2>
                    <div className='mapTools'>

                        h3>Filtrer par :</h3>
                        <select name="filtremap" id="filtremap">
                            <option value="Tout">Tout</option>
                            <option value="Scènes">Scènes</option>
                            <option value="Buvettes">Buvettes</option>
                            <option value="Restauration">Restauration</option>
                            <option value="WC">WC</option>
                            <option value="Accueil">Accueil</option>
                            <option value="Camping">Camping</option>
                            <option value="Parking">Parking</option>
                            <option value="Accès PMR">Accès PMR</option>
                            <option value="Sécurité">Sécurité</option>
                            <option value="Secours">Secours</option>
                            <option value="Boutique">Boutique</option>
                            <option value="Animations">Animations</option>
                            <option value="Espace VIP">Espace VIP</option>
                            



                            </select>

<div className="map">
        
    
    
    
    </div>


                        </div>

                    </div>
        </div>
    );
};

export default Map;