
const API_URL = import.meta.env.VITE_API_USER_URL;
//const API_URL = 'https://backend.nationsound2024-festival.fr/api/user';

export const authenticateUser = async (email, password) => {
    const response = await fetch(`${API_URL}/login_check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Important pour les cookies
    });

    // Vérifie si la réponse est OK
    if (!response.ok) {
        // Si le serveur renvoie un corps d'erreur, tente de l'analyser
        let errorMessage = 'Invalid credentials';
        try {
            const error = await response.json();
            errorMessage = error.message || errorMessage;
        } catch (e) {
            // Ignore les erreurs d'analyse JSON si le corps est vide
        }
        throw new Error(errorMessage);
    }

    const data = await response.json();
    return {userData: data.userData, csrfToken: data.csrf_token}; // Renvoie les données utilisateur et le token CSRF
    };

    // Si tout va bien et que le serveur renvoie 204 et le corp de la réponse avec le token crsf
    /*if (response.status === 204) {


        return true; // Indique que l'authentification a réussi
    }

    // Sinon, si le serveur renvoie quelque chose, on peut gérer les données
    return await response.json();*/



export const registerUser = async (firstName, lastName, email, password) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
    }

    return await response.json(); // Renvoie les données utilisateur ou un message de confirmation
};

export const verifyAuth = async () => {
    console.log('Vérification de l\'authentification...');
    const response = await fetch(`${API_URL}/check-auth`, {
        method: 'GET',
        credentials: 'include', // Inclut les cookies
    });

    if (!response.ok) {
        console.error('Erreur d\'authentification :', response.status);
        throw new Error('Not authenticated');
    }

    const userData = await response.json();
    console.log('Utilisateur vérifié:', userData); // Affiche les données utilisateur
    return {userData:userData,
        csrfToken:userData.csrf_token
    }; // Renvoie les données utilisateur
};

export const logoutUser = async () => {
    const response = await fetch(`${API_URL}/logout`, {
        method: 'GET',
        credentials: 'include', // Inclut les cookies
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Logout failed');
    }
};
