import React, {useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { fetchPartnerCategories, fetchPartnerByCategoryId } from '../../api';


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
      <div key={partner.id} className="partner">
        <img src={partner.url_logo || "https://picsum.photos/200/300"} onError={(e)=>{e.target.onerror=null ; e.target.source="https://picsum.photos/200"}} alt={partner.name} />
        <p>{partner.name}</p>
        <p>{partner.description}</p>
      </div>
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