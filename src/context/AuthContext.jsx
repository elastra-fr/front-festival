import React, { createContext, useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, verifyAuth, logoutUser } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null); // Optionnel : stocker les infos utilisateur
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const userData = await verifyAuth();
                console.log('Auth verified:', userData);
                setIsAuthenticated(true);
                setUser(userData); // Mettre à jour les infos utilisateur si nécessaire
            } catch (error) {
                console.error('Erreur de vérification du token:', error);
                setIsAuthenticated(false);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    const login = async (email, password) => {
        console.log('Tentative de connexion...');
        try {
            const userData = await authenticateUser(email, password);
            console.log('Utilisateur connecté:', userData);

            const verifiedUserData = await verifyAuth();

            setIsAuthenticated(true);
            setUser(verifiedUserData); // Met à jour les infos utilisateur
            navigate('/'); // Redirige vers la page d'accueil ou une autre
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await logoutUser();
            console.log('Déconnexion effectuée');
            setIsAuthenticated(false);
            setUser(null); // Réinitialise les infos utilisateur
            navigate('/login'); // Redirige vers la page de connexion
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    };

    useEffect(() => {
        console.log('État de l\'authentification:', isAuthenticated, user);
    }, [isAuthenticated, user]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                isLoading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
