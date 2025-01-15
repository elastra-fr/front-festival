import React, { useEffect, useState, useContext } from "react";
import { useAuth } from "../context/AuthContext";

const UserProfil = () => {

  const { logout } = useAuth();
  
  const [userData, setUserData] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [originalFirstName, setOriginalFirstName] = useState("");
  const [originalLastName, setOriginalLastName] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");
  const [eventNotification, setEventNotification] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  


  // Récupérer les données utilisateur avec le cookie automatiquement envoyé
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          //"https://backend.nationsound2024-festival.fr/api/user/profil",
          "https://127.0.0.1:8000/api/user/profil",
          {
            method: "GET",
            credentials: "include",
             // Important pour inclure les cookies automatiquement
            

          }
        );

        const data = await response.json();
        if (data.data) {
          setEmail(data.data.email);
          setFirstName(data.data.firstName);
          setLastName(data.data.lastName);
          setOriginalFirstName(data.data.firstName);
          setOriginalLastName(data.data.lastName);
          setOriginalEmail(data.data.email);
          setEventNotification(data.data.eventNotification);
          setNewsletter(data.data.newsletter);
          setUserData(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  // Gérer la modification des préférences
  const handleUpdateUserPreferences = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend.nationsound2024-festival.fr/api/user/profil/edit",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",



          },
          body: JSON.stringify({
            eventNotification,
            newsletter,
          }),
          credentials: "include", // Pour inclure les cookies dans la requête
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

  // Gérer la modification des informations
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
          },
          body: JSON.stringify(updatedFields),
          credentials: "include", // Pour inclure les cookies dans la requête
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

  // Gérer la déconnexion
  const handleLogout = () => {
    logout();
  };

  // Gérer la suppression du compte
  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend.nationsound2024-festival.fr/api/user/profil/delete",
        {
          method: "DELETE",
          credentials: "include", // Pour inclure les cookies dans la requête
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
      {userData ? (
        <main id="userProfil">
          <section>
            <div id="profilToolBar">
              <h2>Mon profil</h2>
              <a href="#" onClick={handleLogout} title="Se déconnecter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" title="Se déconnecter" fill="white" width="20px"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
              </a>
            </div>

            <div id="welcomeUser">
              <p>Bonjour {userData.firstName}</p>
              <p>Bienvenue sur votre espace festivalier.</p>
              <p>
                Dans cet espace vous pouvez consulter et modifier vos
                informations personnelles ainsi que vos préférences.
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
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Nom"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Nom</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Prénom"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
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

            <form
              id="updateUserPreferencesForm"
              onSubmit={handleUpdateUserPreferences}
            >
              <div className="profilFormGroup">
                <label htmlFor="newsletter">
                  Je souhaite recevoir la newsletter
                </label>
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  value="newsletter"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                />
              </div>

              <div className="profilFormGroup">
                <label htmlFor="eventNotification">
                  Je souhaite recevoir des informations exclusives sur les
                  concerts et animations
                </label>
                <input
                  type="checkbox"
                  id="eventNotification"
                  name="eventNotification"
                  value="eventNotification"
                  checked={eventNotification}
                  onChange={(e) => setEventNotification(e.target.checked)}
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
    </div>
  );
};

export default UserProfil;
