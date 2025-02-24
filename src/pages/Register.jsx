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
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (type) => {
        if (type === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

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

    const renderPasswordField = (value, onChange, id, name, placeholder, showPass, type) => (
        <div className="form-group form-group-password">
            <label htmlFor={id}>{placeholder}</label>
            <input
                type={showPass ? 'text' : 'password'}
                id={id}
                name={name}
                required
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <button
                type="button"
                onClick={() => togglePasswordVisibility(type)}
                className="password-toggle"
            >
                {showPass ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                        <line x1="2" y1="2" x2="22" y2="22"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                )}
            </button>
        </div>
    );

    return (
        <main id="pageContent" className="mainRegister">
            <section className="register">
                <form id="registerForm" onSubmit={handleSubmit}>
                    <h2>Inscription</h2>
                    
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <div className="form-group">
                        <label htmlFor="firstName">Prénom</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            required 
                            placeholder="Nom" 
                            value={firstName} 
                            onChange={(e)=>setFirstName(e.target.value)}
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
                            onChange={(e)=>setLastName(e.target.value)}
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

                    {renderPasswordField(
                        password, 
                        (e) => setPassword(e.target.value), 
                        'password', 
                        'password', 
                        'Mot de passe', 
                        showPassword,
                        'password'
                    )}

                    {renderPasswordField(
                        confirmPassword, 
                        (e) => setConfirmPassword(e.target.value), 
                        'confirmPassword', 
                        'confirmPassword', 
                        'Confirmer le mot de passe', 
                        showConfirmPassword,
                        'confirmPassword'
                    )}

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
    );
};

export default Register;