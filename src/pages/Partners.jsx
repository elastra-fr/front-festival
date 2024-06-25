import React, {useEffect, useState} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { fetchPartnerCategories, fetchPartnerByCategoryId } from '../api';
import ItemPartner from '../components/itempartner/ItemPartner';


const Partners = () => {

const [partnerCategories, setPartnerCategories] = useState([]);
const [partners, setPartners] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('all');


useEffect(() => {
  async function fetchData() {
    try {
      
      //Catégorie de partenaires
      const categories = await fetchPartnerCategories();
      setPartnerCategories(categories);

    //Partenaires
    const partnerData = await fetchPartnerByCategoryId(selectedCategory);
    setPartners(partnerData);
console.log(partnerData);



    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, [selectedCategory]);

    //Récupération des partenaires par catégorie






    return (
        <>

        <Header />
            {/* Your component content goes here */}
<main id="mainPartner">


            <div className="partnerTools">
            <h2>Nos partenaires</h2>
            
            <select name="partnerType" id="partnerType" value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
                <option  value="all">Tous</option>
                  {partnerCategories.map(category => (
    <option key={category.id} value={category.id}>
      {category.category}
    </option>
  ))}
                

            </select>
            
            </div>
            <p>Nous remercions tous nos partenaires pour leur contribution à ce fabuleux évènement</p>

            <p>Voici la liste de nos partenaires. Vous pouvez trier cette liste grace au menu déroulant situé en haut à droite</p>

            <div className="partnerList">   
                      {partners.length > 0 ? (
                          partners.map(partner => (
                            <ItemPartner
                              key={partner.id}
                              partnerId={partner.id}
                              imgUrl={partner.url_logo ? partner.url_logo : "https://via.placeholder.com/150"}
                              name={partner.name}
                              description={partner.description}
                            />
                          ))
                        ) : (
                          <p>Aucun partenaire trouvé pour cette catégorie.</p>
                        )}


            </div>



</main>


            <Footer />
        </>
    );
};

export default Partners;