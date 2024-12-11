//const API_URL = 'https://127.0.0.1:8000/api/user';
const API_URL = 'https://backend.nationsound2024-festival.fr/api/user';

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

    // Si tout va bien et que le serveur renvoie 204
    if (response.status === 204) {
        return true; // Indique que l'authentification a réussi
    }

    // Sinon, si le serveur renvoie quelque chose, on peut gérer les données
    return await response.json();
};


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

    console.log('verifyAuth');
    const response = await fetch(`${API_URL}/check-auth`, {
        method: 'GET',
        credentials: 'include', // Inclut les cookies
    });

    if (!response.ok) {
        throw new Error('Not authenticated');
    }

    return await response.json(); // Renvoie les données d'utilisateur si authentifié
};

export const logoutUser = async () => {
    const response = await fetch(`${API_URL}/logout`, {
        method: 'POST',
        credentials: 'include', // Inclut les cookies
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Logout failed');
    }
};
