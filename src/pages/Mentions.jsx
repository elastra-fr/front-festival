import React from "react";
//import Header from "../components/header/Header";
//import Footer from "../components/footer/Footer";


const Mentions = () => {
  document.title = "Mentions Légales | NATION SOUND";
  window.scrollTo(0, 0);

  return (
    <>
      

      <main id="pageContent" className="mainMentions">
        <h1>Mentions légales</h1>

        <section className="disclaimer">
          <h2>Avis de non-responsabilité</h2>
          <p>
            Ce site web a été créé dans le cadre d'un projet de certification
            professionnelle et ne représente en aucun cas une entreprise,
            organisation ou événement réel(le). Toute ressemblance avec des
            personnes, des événements ou des lieux existants est purement
            fortuite.
          </p>

          <h2>Caractère fictif du contenu</h2>
          <p>
            Les informations, images, logos et autres contenus présents sur ce
            site sont purement fictifs et ont été créés dans le cadre d'un
            exercice pédagogique. Aucune entité réelle n'est associée à ce site,
            et aucun produit ou service réel n'est proposé à la vente.
          </p>

          <h2>But éducatif</h2>
          <p>
            Ce site a été conçu dans un but strictement éducatif et démontre les
            compétences acquises dans le cadre d'une formation ou d'une
            certification professionnelle. Il ne vise pas à tromper ou à induire
            en erreur les visiteurs, mais plutôt à illustrer les connaissances
            et les compétences acquises par le créateur dans le domaine du
            développement web ou tout autre domaine pertinent.
          </p>

          <h2>Non-affiliation</h2>
          <p>
            Ce site n'est affilié à aucune entreprise, organisation ou événement
            réel(le). Toute référence à des marques, des produits, des
            événements ou des services est purement fictive et ne doit pas être
            interprétée comme une véritable association ou endorsement.
          </p>

          <h2>Confidentialité des données</h2>
          <p>
            Aucune donnée personnelle n'est collectée ou stockée par ce site.
            Les formulaires ou autres moyens de collecte d'informations ne sont
            présents que dans un but démonstratif et n'envoient aucune
            information à des serveurs réels.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les créateurs de ce site déclinent toute responsabilité quant à
            l'utilisation qui pourrait en être faite. Ce site est fourni tel
            quel, sans garantie d'aucune sorte, expresse ou implicite. Les
            visiteurs utilisent ce site à leurs propres risques et périls.
          </p>
        </section>

        <section className="mentions">
          <h2>Éditeur du site</h2>
          <p>
            Nom de l'entreprise : [Nom de l'entreprise organisatrice du
            festival]
          </p>
          <p>Adresse : [Adresse de l'entreprise]</p>
          <p>Téléphone : [Numéro de téléphone de l'entreprise]</p>
          <p>Email : [Adresse email de l'entreprise]</p>
          <p>SIRET : [Numéro SIRET de l'entreprise]</p>
          <p>
            Directeur de la publication : [Nom du directeur de la publication]
          </p>
          <h2>Hébergeur du site</h2>
          <p>
            Nom de l'entreprise hébergeant le site : [Nom de l'entreprise
            d'hébergement]
          </p>
          <p>Adresse : [Adresse de l'entreprise d'hébergement]</p>
          <p>Téléphone : [Numéro de téléphone de l'entreprise d'hébergement]</p>
          <p>Email : [Adresse email de l'entreprise d'hébergement]</p>
          <p>Propriété intellectuelle</p>
          <p>
            Le site web et son contenu (textes, images, vidéos, etc.) sont la
            propriété exclusive de [Nom de l'entreprise organisatrice du
            festival] ou de ses partenaires et sont protégés par les lois
            françaises et internationales sur la propriété intellectuelle. Toute
            reproduction ou utilisation non autorisée du contenu est strictement
            interdite.
          </p>
          <h2>Collecte et traitement des données personnelles</h2>
          <h3>Confidentialité et RGPD</h3>[
          <p>
            Nom de l'entreprise organisatrice du festival] s'engage à respecter
            la confidentialité des utilisateurs du site. Les données
            personnelles collectées sont traitées conformément au Règlement
            Général sur la Protection des Données (RGPD).
          </p>
          <h3>Finalité de la collecte des données</h3>
          <p>
            Les données personnelles collectées sur ce site sont utilisées dans
            le cadre de l'organisation du festival de musique et pour
            communiquer des informations relatives à celui-ci. Elles ne sont en
            aucun cas transmises à des tiers sans consentement préalable.
          </p>
          <h3>Droits des utilisateurs</h3>
          <p>
            Conformément au RGPD, les utilisateurs disposent d'un droit d'accès,
            de rectification, de suppression et de portabilité de leurs données
            personnelles. Ils peuvent également s'opposer au traitement de leurs
            données ou en demander la limitation. Ces droits peuvent être
            exercés en contactant [Nom de l'entreprise organisatrice du
            festival] à l'adresse email suivante : [Adresse email de contact].
          </p>
          <h3>Cookies</h3>
          <p>
            Le site utilise des cookies pour améliorer l'expérience de
            navigation des utilisateurs. Les utilisateurs ont la possibilité de
            refuser l'utilisation de cookies en modifiant les paramètres de leur
            navigateur.
          </p>
          <h2>Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites web tiers. Nous
            déclinons toute responsabilité quant au contenu de ces sites tiers,
            ceux-ci étant soumis à leurs propres conditions d'utilisation et
            politiques de confidentialité.
          </p>
          <h2>Limitation de responsabilité</h2>
          <p>
            [Indiquez ici les limitations de responsabilité en cas de dommages
            causés par l'utilisation du site, y compris les erreurs ou omissions
            dans le contenu.]
          </p>
          <h2>Modification des mentions légales</h2>
          <p>
            [Nom de l'entreprise organisatrice du festival] se réserve le droit
            de modifier à tout moment les présentes mentions légales. Les
            utilisateurs du site sont invités à consulter régulièrement cette
            page pour se tenir informés des éventuelles modifications.
          </p>
        </section>
      </main>

      
    </>
  );
};

export default Mentions;
