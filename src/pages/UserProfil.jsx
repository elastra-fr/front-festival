import React, { useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const UserProfil = () => {
  const { logout } = React.useContext(AuthContext);
  const [userData, setUserData] = React.useState(null);
  const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");

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

        setUserData(data.data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Header />

      {userData ? (
        <div id="userProfil">
          <section>
            
            <div id="profilToolBar">
            <h2>Mon profil</h2>
            <a href="#" onClick={handleLogout}>Se déconnecter</a>
            </div>


            <p>Bonjour {userData.firstName}</p>

            <p>Bienvenue sur votre espace festivalier</p>

            <p>
              Dans cet espace vous pouvez consulter et modifier vos informations
              personnelles ainsi que vos préférences.
            </p>

            <p>
              Vous pouvez également consulter les contenus exclusifs réservés
              aux festivaliers.
            </p>
          </section>

          <section>
            <h2>Mes informations</h2>

       

            <form id="updateUserDataForm">

                <div className="form-group">
                    <label htmlFor="firstName">Prénom</label>
                    <input type="text" id="firstName" name="firstName" required placeholder="Nom" value={userData.firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>

                <div className="form-group">

                    <label htmlFor="lastName">Nom</label>
                    <input type="text" id="lastName" name="lastName" required placeholder="Prénom" value={userData.lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={userData.email}
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

    <form id="updateUserPreferencesForm">

<div className="profilFormGroup">
          <label htmlFor="artistes">Je souhaite recevoir des informations sur les artistes</label>
            <input
              type="checkbox"
              id="artistes"
              name="artistes"
              value="artistes"
              checked={userData.artistes}
            />
      
</div>

            

<div className="profilFormGroup">
             <label htmlFor="concerts">Je souhaite recevoir des informations sur les concerts</label>
            <input
              type="checkbox"
              id="concerts"
              name="concerts"
              value="concerts"
              checked={userData.concerts}
            />
   
    </div>

<div className="profilFormGroup">
           <label htmlFor="animations">Je souhaite recevoir des informations sur les animations</label>
            <input
              type="checkbox"
              id="animations"
              name="animations"
              value="animations"
              checked={userData.animations}
            />
     

</div>
            <button type="submit">Modifier mes préférences</button>
      
        </form>
          </section>
        </div>
      ) : (
        <p>Chargement...</p>
      )}



      <Footer />
    </div>
  );
};

export default UserProfil;
