import React from 'react';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const UserProfil = () => {

    const { logout } = React.useContext(AuthContext);

const handleLogout = () => {
    logout();
}


    return (
        <div>
            <Header />

            <h1>Profil de l'utilisateur</h1>
            <button onClick={handleLogout}>Se déconnecter</button>




            <Footer />
        </div>
    );
};

export default UserProfil;