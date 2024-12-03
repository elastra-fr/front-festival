//import Header from '../components/header/Header';
//import Footer from '../components/footer/Footer';
import React, { useState } from 'react';
import { registerUser } from '../services/authService';

const Register = () => {

    document.title = 'Register | NATION SOUND';

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas.');
            return;
        }

        try {
            await registerUser(firstName, lastName, email, password);
            setSuccessMessage('Inscription réussie. Vous allez être redirigé vers la page de connexion.');
            setTimeout(() => {
                    window.location = '/login';
            }, 3000);
            

        } catch (error) {
        
            setErrorMessage(error.message);
        }
    };

    return (
        <>
            
            <main id="mainRegister">
                <section className="register">
                    <form id="registerForm" onSubmit={handleSubmit}>
                        <h2>Inscription</h2>
                        
                        {errorMessage && <p className="error-message">{errorMessage}</p>}


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
                            <label htmlFor="password">Mot de passe</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={password}
                                placeholder="Mot de passe"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                value={confirmPassword}
                                placeholder="Confirmer le mot de passe"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>



                        <div className="form-group">
                            <button type="submit">S'inscrire</button>
                        </div>
                            <p>Vous avez déjà un compte ? <a href="/login">Connectez-vous</a></p>
                    </form>

                    <div className="registerInfos">


                        <p>Enregistrez vous pour accéder à des espaces exclusifs, gérer votre profil, vos notifications et vos préférences.</p>




                    </div>
                
                </section>
            </main>
            
        </>
    );
};

export default Register;
