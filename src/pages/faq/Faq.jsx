import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Faq.css";
import FaqItem from "../../components/faqItem/FaqItem";
import TuilesLiens from "../../components/tuilesliens/TuilesLiens";

const Faq = () => {
  document.title = "Informations - FAQ | NATION SOUND";
   window.scrollTo(0, 0);

  return (
    <>
      <Header />

      <main className="mainFaq">
        <h1>Informations - FAQ</h1>

        <FaqItem
          titre="Dates et Lieu"
          contenu={[
            "Dates du Festival : [Insérer les dates du festival ici]",
            "Lieu : [Insérer le lieu du festival ici]",
            "Adresse : [Insérer l&apos;adresse complète du lieu du festival ici]",
          ]}
        />
        <FaqItem
          titre="Horaires"
          contenu={[
            "Heures d&apos;ouverture du Festival : Les portes ouvrent à [insérer l&apos;heure d&apos;ouverture] chaque jour du festival.",
            "Horaires des Performances : Consultez l&apos;horaire complet des performances sur notre site web et sur les panneaux d&apos;affichage du festival.",
          ]}
        />
        <FaqItem
          titre="Accès au festival"
          contenu={[
            "Transport en Commun : [Insérer les informations sur les transports en commun disponibles, y compris les arrêts de bus ou de train les plus proches du site du festival.]",
            "Parking : Des options de stationnement seront disponibles à proximité du site du festival. Veuillez suivre les indications pour le stationnement.",
            "Navettes : Des navettes gratuites seront mises à disposition pour certains parkings éloignés. Veuillez consulter notre site web pour plus de détails.",
          ]}
        />
        <FaqItem
          titre="Hebergement"
          contenu={[
            "Hôtels : Nous avons des partenariats avec plusieurs hôtels à proximité du festival. Consultez notre site web pour plus d&apos;informations sur les hébergements recommandés.",
            "Camping : Le camping sur place est disponible pour les détenteurs de billets appropriés. Des emplacements pour tentes et camping-cars seront disponibles. Veuillez consulter nos règles et règlements concernant le camping avant votre arrivée.",
          ]}
        />
        <FaqItem
          titre="Services et commodités"
          contenu={[
            "Nourriture et Boissons : Des stands de restauration seront présents sur le site du festival, proposant une variété de plats et de boissons. Des options végétariennes et véganes seront disponibles.",
            "Toilettes : Des toilettes seront disponibles sur le site du festival, y compris des toilettes accessibles aux personnes à mobilité réduite.",
            "Points de Premiers Secours : Des postes de secours et du personnel médical seront présents sur place pour toute assistance médicale nécessaire.",
          ]}
        />
        <FaqItem
          titre="Règles et Réglementation"
          contenu={[
            "Sécurité : La sécurité de nos festivaliers est notre priorité absolue. Des contrôles de sécurité seront effectués à l&apos;entrée du festival. Veuillez coopérer avec le personnel de sécurité et suivre toutes les instructions.",
            "Objets Interdits : Les objets suivants sont interdits sur le site du festival : armes, drogues illicites, bouteilles en verre, feux d&apos;artifice, drones, etc. Veuillez consulter notre liste complète d&apos;objets interdits sur notre site web.",
            "Politique de Zéro Tolérance : Le festival adopte une politique de tolérance zéro envers tout comportement violent, discriminatoire ou perturbateur. Les contrevenants seront expulsés du site du festival.",
          ]}
        />

        <div className="moreInfos">
          <p>
            Vous pouvez également localiser les éléments du festival sur notre
            carte interactive :
          </p>

          <TuilesLiens
            txt="Voir la carte interactive"
            img="/images/mapneedle.avif"
            to="/map"
          />

          <p>
            Pour toute autre question ou préoccupation, veuillez nous contacter
            à l&apos;adresse e-mail fournie sur notre site web. Nous sommes
            impatients de vous accueillir au festival et de vous offrir une
            expérience inoubliable !
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Faq;
