import React, { useEffect, useState, useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const UserProfil = () => {
  const { logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
        const [email, setEmail] =useState("");
     const [originalFirstName, setOriginalFirstName] = useState("");
  const [originalLastName, setOriginalLastName] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");
    const [eventNotification, setEventNotification] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://backend.nationsound2024-festival.fr/api/user/profil",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
            },
          }
        );

        const data = await response.json();
        setEmail(data.data.email);
        setFirstName(data.data.firstName);
        setLastName(data.data.lastName);
        setOriginalFirstName(data.data.firstName);
        setOriginalLastName(data.data.lastName);
        setOriginalEmail(data.data.email);

        setEventNotification(data.data.eventNotification);
        setNewsletter(data.data.newsletter);

        setUserData(data.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

//Gérer la modification des préférences

  const handleUpdateUserPreferences = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend.nationsound2024-festival.fr/api/user/profil/edit",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
          body: JSON.stringify({
            eventNotification,
            newsletter,
          }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        alert("Vos préférences ont été mises à jour");
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.error(error);
    }
  };

//Gérer la modification des informations

 const handleUpdateUserData = async (e) => {
    e.preventDefault();

    const updatedFields = {};

    if (firstName !== originalFirstName) updatedFields.firstName = firstName;
    if (lastName !== originalLastName) updatedFields.lastName = lastName;
    if (email !== originalEmail) updatedFields.email = email;

    if (Object.keys(updatedFields).length === 0) {
      alert("Aucune modification détectée.");
      return;
    }

    try {
      const response = await fetch(
        "https://backend.nationsound2024-festival.fr/api/user/profil/edit",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
          body: JSON.stringify(updatedFields),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        alert("Vos informations ont été mises à jour");
        // Mettre à jour les valeurs d'origine après la mise à jour réussie
        setOriginalFirstName(firstName);
        setOriginalLastName(lastName);
        setOriginalEmail(email);
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.error(error);
    }
  };


//Gérer la deconnexion
  const handleLogout = () => {
    logout();
  };

  //Gérer la suppression du compte

  const handleDeleteAccount = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend.nationsound2024-festival.fr/api/user/profil/delete",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        alert("Votre compte a été supprimé");
        logout();
      } else {
        alert("Une erreur est survenue");
      }

    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div>
      <Header />

      {userData ? (
        <main id="userProfil">
          <section>
            
            <div id="profilToolBar">
            <h2>Mon profil</h2>
            <a href="#" onClick={handleLogout}>Se déconnecter</a>
            </div>

            <div id="welcomeUser">
            <p>Bonjour {userData.firstName}</p>

            <p>Bienvenue sur votre espace festivalier.</p>

            <p>
              Dans cet espace vous pouvez consulter et modifier vos informations
              personnelles ainsi que vos préférences.
            </p>

            <p>
              Vous pouvez également consulter les contenus exclusifs réservés
              aux festivaliers.
            </p>
            </div>
          </section>

          <section>
            <h2>Mes informations</h2>

       

            <form id="updateUserDataForm" onSubmit={handleUpdateUserData}>

                <div className="form-group">
                    <label htmlFor="firstName">Prénom</label>
                    <input type="text" id="firstName" name="firstName" required placeholder="Nom" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>

                <div className="form-group">

                    <label htmlFor="lastName">Nom</label>
                    <input type="text" id="lastName" name="lastName" required placeholder="Prénom" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className="form-group">

                    <button type="submit">Modifier mes informations</button>

                </div>

            </form>

          </section>

          <section>
            <h2>Mes préférences</h2>

    <form id="updateUserPreferencesForm" onSubmit={handleUpdateUserPreferences}>

<div className="profilFormGroup">
          <label htmlFor="artistes">Je souhaite recevoir la newsletter</label>
            <input
              type="checkbox"
              id="artistes"
              name="artistes"
              value="artistes"
              checked={newsletter}
              onChange={(e) => {setNewsletter(e.target.checked)}} 
            />
      
</div>

            

<div className="profilFormGroup">
             <label htmlFor="concerts">Je souhaite recevoir des informations exclusives sur les concerts et animations</label>
            <input
              type="checkbox"
              id="concerts"
              name="concerts"
              value="concerts"
              checked={eventNotification}
              onChange={(e) => {setEventNotification(e.target.checked)}}
            />
   
    </div>


<div className="form-group">
            <button type="submit">Modifier mes préférences</button>
      </div>
        </form>
          </section>

<section>

  <form id="deleteAccountForm" onSubmit={handleDeleteAccount}>

<h2>Supprimer mon compte</h2>

<p>Vous souhaitez supprimer votre compte ?</p>

<p>Attention, cette action est irréversible.</p>

<div className="form-group">
<button>Supprimer mon compte</button>

</div>

</form>

</section>


        </main>
      ) : (
        <p>Chargement...</p>
      )}



      <Footer />
    </div>
  );
};

export default UserProfil;
