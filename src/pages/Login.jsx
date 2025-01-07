import React, { useState } from 'react';
//import { authenticateUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    document.title = 'Login | NATION SOUND';

    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Veuillez remplir tous les champs.');
            return;
        }

        try {
            //await authenticateUser(email, password);
   
            await login(email,password);
            navigate('/home'); // Redirection après connexion réussie
        } catch (error) {
            setError('Adresse e-mail ou mot de passe incorrect.');
            console.error('Erreur lors de la connexion :', error.message);
        }
    };

    return (
        <main>
            <section className="login">
                <form id="loginForm" onSubmit={handleSubmit}>
                    <h2>Se connecter</h2>
                    <span>Tous les champs sont obligatoires.</span>

                    {error && <p className="error">{error}</p>}

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
                            autoComplete="username"
                            aria-label="Adresse e-mail"
                        />
                    </div>

                    <div className="form-group form-group-password">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            required
                            value={password}
                            placeholder="Mot de passe"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            aria-label="Mot de passe"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="password-toggle"
                            aria-label={showPassword ? "Cacher le mot de passe" : "Afficher le mot de passe"}
                        >
                            {showPassword ? (
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

                    <div className="form-group">
                        <button type="submit">Se connecter</button>
                    </div>
                </form>

                <p>Vous n'avez pas de compte ? <a href="/register">Inscrivez-vous ici</a></p>
            </section>
        </main>
    );
};

export default Login;
